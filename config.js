// ==========================================
// CONFIGURAÇÃO DO SITE MBWAY - WHITE LABEL
// ==========================================
// Edite apenas este arquivo para personalizar o site para cada cliente

const CONFIG = {
  // Informações do Negócio
  business: {
    name: 'Fabiana LASH STUDIO',           // Ex: "Nails Designer"
    logoFile: 'lash studio.svg',               // Nome do arquivo do logo (deve estar na mesma pasta)
  },

  // Número MBWay
  mbway: {
    phoneDisplay: '+351 925 882 318',        // Formato visual (com espaços)
    phoneValue: '925882318',            // Número real (sem espaços, será copiado)
  },

// Cores e Estilo
theme: {
  // Cor principal
  primaryColor: '#B87357',
  primaryColorHover: '#9F6249',

  // Fundo da página
  backgroundColor: '#FAF4F1',

  // Card
  cardBackground: '#FFFFFF',
  cardShadow: '0 8px 28px rgba(120, 78, 60, 0.12)',
},

  // Textos Customizáveis
  text: {
    pageTitle: 'Pagamento MBWay',       // Título da aba do navegador
    label: 'Número MBWay',              // Texto acima do número
    buttonText: 'Copiar e Abrir MB WAY', // Texto do botão
    successMessage: '✓ Número copiado: 910 367 394. Se a app MB WAY não abrir automaticamente, toque em "Abrir" na Play Store.',
    errorMessage: 'Erro ao copiar. Seleciona o número manualmente.', // Mensagem de erro

    // Instruções
    step1: 'Clica no botão para copiar o número',
    step2: 'No MB WAY, cola o número para fazer o pagamento',
  },
};
