// ==========================================
// CONFIGURAÇÃO DO SITE MB WAY - FP LASH STUDIO
// Repositório: https://polylab3d.github.io/fpstudio/
// ==========================================
// Esta página utiliza a index base da PolyLAB 3D.

const CONFIG = {
  // Informações do negócio
  business: {
    name: 'Fabiana Lash Studio',
    logoFile: 'logo.svg',
  },

  // Número MB WAY
  mbway: {
    phoneDisplay: '+351 925 882 318',
    phoneValue: '925882318',
  },

  // Tema visual inspirado na logo preta e salmão
  theme: {
    // Fundo geral da página
    'background-color':
      'linear-gradient(180deg, #FAF4F1 0%, #F2E4DE 100%)',

    // Fundo do card principal
    'card-background': '#FFFFFF',

    // Sombra do card
    'card-shadow': '0 12px 36px rgba(104, 67, 54, 0.14)',

    // Cor principal do número MB WAY
    'text-color': '#171313',

    // Cor do texto "Número MB WAY"
    'text-secondary': '#B87357',

    // Cor das instruções e do rodapé
    'text-muted': 'rgba(93, 68, 59, 0.70)',

    // Cor da linha divisória
    'divider-color': 'rgba(184, 115, 87, 0.18)',

    // Cor principal dos botões
    'link-bg': '#C47F65',

    // Cor dos botões ao clicar ou passar o rato
    'link-hover-bg': '#A8644D',

    // Cor do texto e dos ícones dos botões
    'link-text': '#FFFFFF',
  },

  // Textos da página
  text: {
    pageTitle: 'Pagamento MB WAY',

    label: 'Número MB WAY',

    buttonText: 'Copiar número',

    openButtonText: 'Abrir MB WAY agora',

    successMessage:
      '✓ Número copiado! Agora toque em "Abrir MB WAY agora".',

    errorMessage:
      'Erro ao copiar. Seleciona o número manualmente.',

    step1: 'Clica no botão para copiar o número',

    step2: 'No MB WAY, cola o número para fazer o pagamento',
  },

  // Rodapé
  footer: {
    text: '© 2026 PolyLAB 3D - Todos os direitos reservados',
  },
};
