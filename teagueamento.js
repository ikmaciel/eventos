// tagueamento.js
// Vocabulário controlado para geração automática de tags a partir do site oficial
const regrasTagueamento = [
  // Domínios governamentais
  { padrao: /gov\.br/i, tag: "Governo Federal" },
  { padrao: /serpro\.gov\.br/i, tag: "SERPRO" },
  { padrao: /dataprev\.gov\.br/i, tag: "Dataprev" },
  { padrao: /caixa\.gov\.br/i, tag: "Caixa" },
  { padrao: /bb\.com\.br/i, tag: "Banco do Brasil" },
  { padrao: /bndes\.gov\.br/i, tag: "BNDES" },
  { padrao: /inpi\.gov\.br/i, tag: "INPI" },
  { padrao: /ana\.gov\.br/i, tag: "ANA" },
  { padrao: /anvisa\.gov\.br/i, tag: "Anvisa" },
  { padrao: /gov\.br\/pt-br/i, tag: "Portal Gov" },

  // Grandes empresas e plataformas
  { padrao: /google\.com/i, tag: "Google" },
  { padrao: /youtube\.com/i, tag: "YouTube" },
  { padrao: /microsoft\.com/i, tag: "Microsoft" },
  { padrao: /apple\.com/i, tag: "Apple" },
  { padrao: /amazon\.com/i, tag: "Amazon" },
  { padrao: /facebook\.com/i, tag: "Facebook" },
  { padrao: /instagram\.com/i, tag: "Instagram" },
  { padrao: /linkedin\.com/i, tag: "LinkedIn" },
  { padrao: /twitter\.com/i, tag: "Twitter" },
  { padrao: /whatsapp\.com/i, tag: "WhatsApp" },
  { padrao: /telegram\.org/i, tag: "Telegram" },

  // Educação e universidades
  { padrao: /ufmg\.br/i, tag: "UFMG" },
  { padrao: /ufrj\.br/i, tag: "UFRJ" },
  { padrao: /usp\.br/i, tag: "USP" },
  { padrao: /unicamp\.br/i, tag: "Unicamp" },
  { padrao: /unesp\.br/i, tag: "Unesp" },
  { padrao: /puc-?rio\.br/i, tag: "PUC-Rio" },
  { padrao: /fgv\.br/i, tag: "FGV" },
  { padrao: /mec\.gov\.br/i, tag: "MEC" },
  { padrao: /capes\.gov\.br/i, tag: "Capes" },
  { padrao: /cnpq\.br/i, tag: "CNPq" },

  // Tecnologia e inovação
  { padrao: /github\.com/i, tag: "GitHub" },
  { padrao: /gitlab\.com/i, tag: "GitLab" },
  { padrao: /stackoverflow\.com/i, tag: "Stack Overflow" },
  { padrao: /medium\.com/i, tag: "Medium" },
  { padrao: /dev\.to/i, tag: "DEV Community" },
  { padrao: /oracle\.com/i, tag: "Oracle" },
  { padrao: /ibm\.com/i, tag: "IBM" },
  { padrao: /redhat\.com/i, tag: "Red Hat" },
  { padrao: /docker\.com/i, tag: "Docker" },
  { padrao: /kubernetes\.io/i, tag: "Kubernetes" },

  // Mídia e notícias
  { padrao: /globo\.com/i, tag: "Globo" },
  { padrao: /uol\.com\.br/i, tag: "UOL" },
  { padrao: /folha\.uol\.com\.br/i, tag: "Folha de S.Paulo" },
  { padrao: /estadao\.com\.br/i, tag: "Estadão" },
  { padrao: /cnn\.com/i, tag: "CNN" },
  { padrao: /bbc\.com/i, tag: "BBC" },
  { padrao: /nytimes\.com/i, tag: "The New York Times" },

  // Outros domínios comuns
  { padrao: /wikipedia\.org/i, tag: "Wikipedia" },
  { padrao: /youtube\.com/i, tag: "YouTube" },
  { padrao: /vimeo\.com/i, tag: "Vimeo" },
  { padrao: /twitch\.tv/i, tag: "Twitch" },
  { padrao: /spotify\.com/i, tag: "Spotify" },
];