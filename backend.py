import json
import re
from flask import Flask, request, jsonify
from flask_cors import CORS
import requests
from bs4 import BeautifulSoup

app = Flask(__name__)
CORS(app)

# Carregar vocabulário controlado
with open('controlled_vocab.json', 'r', encoding='utf-8') as f:
    vocabulario = json.load(f)['categorias']

def extrair_tags_do_texto(texto):
    """Extrai tags do texto com base no vocabulário controlado"""
    texto = texto.lower()
    tags_encontradas = set()

    for categoria in vocabulario:
        for tag_obj in categoria['tags']:
            rotulo = tag_obj['rotulo']
            
            # Verificar se o rótulo aparece no texto
            if re.search(r'\b' + re.escape(rotulo.lower()) + r'\b', texto):
                tags_encontradas.add(rotulo)
                continue
            
            # Verificar sinônimos
            for sinonimo in tag_obj.get('sinonimos', []):
                # Usar regex para palavra inteira
                if re.search(r'\b' + re.escape(sinonimo.lower()) + r'\b', texto):
                    tags_encontradas.add(rotulo)
                    break  # evita adicionar a mesma tag várias vezes
    
    return list(tags_encontradas)

@app.route('/api/scrape-tags', methods=['POST'])
def scrape_tags():
    data = request.json
    url = data.get('url')
    
    if not url:
        return jsonify({'error': 'URL não fornecida'}), 400
    
    try:
        headers = {'User-Agent': 'Mozilla/5.0 (compatible; SGE-Bot/1.0)'}
        response = requests.get(url, headers=headers, timeout=10)
        soup = BeautifulSoup(response.text, 'html.parser')
        
        # Extrair textos relevantes
        textos = []
        
        # Títulos
        for tag in soup.find_all(['h1', 'h2', 'h3']):
            textos.append(tag.get_text())
        
        # Parágrafos
        for tag in soup.find_all(['p', 'article', 'main']):
            textos.append(tag.get_text())
        
        # Meta tags
        meta_desc = soup.find('meta', attrs={'name': 'description'})
        if meta_desc and meta_desc.get('content'):
            textos.append(meta_desc['content'])
        
        meta_keywords = soup.find('meta', attrs={'name': 'keywords'})
        if meta_keywords and meta_keywords.get('content'):
            textos.append(meta_keywords['content'])
        
        texto_completo = ' '.join(textos)
        
        tags_geradas = extrair_tags_do_texto(texto_completo)
        
        return jsonify({
            'url': url,
            'tags': tags_geradas,
            'status': 'success'
        })
    
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(port=5000)