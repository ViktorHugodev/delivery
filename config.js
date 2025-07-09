
/**********************************************************************
*                                                                     *
*    Cardápio Digital Whatsapp Google Sheets    V1.7                  *
*                                                                     *
*    Desenvolvido com ❤️ por Dante Testa                              *
*    www.dantetesta.com.br | WhatsApp: (19) 99802-9156                *
*                                                                     *
*    🚫 AVISO IMPORTANTE 🚫                                           *
*    Este código é propriedade intelectual de Dante Testa.            *
*    Não utilize de forma pirata. Valorize o trabalho do              *
*    desenvolvedor adquirindo uma licença legítima.                   *
*                                                                     *
*    💸 APOIE O DESENVOLVEDOR                                         *
*    Ao comprar o original você apoia um profissional que             *
*    também tem família e luta todo dia para pagar as contas.         *
*    Não pegue atalhos - um dia a vida manda a conta das              *
*    pequenas coisas erradas que fazemos.                             *
*                                                                     *
*    💰 Se este script te ajudou a ficar rico e quiser me             *
*    enviar um presente financeiro: PIX dante.testa@gmail.com         *
*                                                                     *
*    🛠️ SUPORTE TÉCNICO [não gratuito]                                *
*    Disponível via WhatsApp. Entre em contato para consultar         *
*    valores e planos de suporte personalizados.                      *
*                                                                     *
*    "Código é poesia. Respeite o poeta."                             *
*                                                                     *
**********************************************************************
*/

/**
 * Configurações do Cardápio Digital
 * Edite apenas este arquivo para personalizar seu cardápio
 * Desenvolvido por Dante Testa (https://dantetesta.com.br)
 */

// Configurações de compartilhamento (meta tags)
const CONFIG_COMPARTILHAMENTO = {
  // Imagem para compartilhamento (og:image e twitter:image)
  // Coloque aqui a URL completa da sua imagem de compartilhamento
  imagemCompartilhamento: 'https://avatars.githubusercontent.com/u/85125378?v=4'

  // Outras configurações de compartilhamento podem ser adicionadas aqui no futuro
}

// URLs das planilhas Google Sheets
const CONFIG_PLANILHAS = {
  itens:
    'https://docs.google.com/spreadsheets/d/e/2PACX-1vSZz2e1nWfKtYdV5bBElMApu1vNJrJdP7qv356J5k-uLeUeoEJFGTuUJH8CjnyO3QI-8XT98D7RO4oO/pub?gid=0&single=true&output=csv',

  categorias:
    'https://docs.google.com/spreadsheets/d/e/2PACX-1vSZz2e1nWfKtYdV5bBElMApu1vNJrJdP7qv356J5k-uLeUeoEJFGTuUJH8CjnyO3QI-8XT98D7RO4oO/pub?gid=1295535088&single=true&output=csv',

  config:
    'https://docs.google.com/spreadsheets/d/e/2PACX-1vSZz2e1nWfKtYdV5bBElMApu1vNJrJdP7qv356J5k-uLeUeoEJFGTuUJH8CjnyO3QI-8XT98D7RO4oO/pub?gid=1253815997&single=true&output=csv'
}

// Configuração de Fontes - Estilo Elegante
const CONFIG_FONTES = {
  // Fontes principais
  fontePrincipal: 'Lato',           // Fonte para textos gerais - humanista e muito legível
  fonteTitulos: 'Playfair Display', // Fonte para títulos - elegante e sofisticada
  fontePrecos: 'Source Code Pro',   // Fonte para preços - monospace profissional
  
  // Pesos das fontes
  pesoPadrao: '400',                // Peso normal para textos
  pesoTitulos: '700',               // Peso bold para títulos (elegante)
  pesoPrecos: '600',                // Peso semi-bold para preços
  
  // Tamanhos base (em rem)
  tamanhoTexto: '1rem',             // Texto normal
  tamanhoTitulo: '1.3rem',          // Títulos (maior para destaque)
  tamanhoPreco: '1.15rem',          // Preços (levemente maior)
  
  // Espaçamento entre letras (elegância)
  espacamentoTitulos: '0.025em',    // Letter-spacing sutil nos títulos
  espacamentoPrecos: '0.01em',      // Letter-spacing leve nos preços
  
  // Configurações avançadas para elegância
  alturaLinha: '1.6',               // Line-height para melhor legibilidade
  alturaLinhaTitulos: '1.3',        // Line-height compacta para títulos
  
  // Configurações responsivas
  fatorMobile: 0.95,                // Fator de redução para mobile
  fatorTituloMobile: 1.1,           // Fator de aumento dos títulos no mobile
  
  // Pesos adicionais carregados do Google Fonts
  pesosCarregados: [300, 400, 500, 600, 700, 800, 900],
  
  // Configuração de carregamento
  displaySwap: true,                // Font-display: swap para melhor performance
  preconnect: true                  // Usar preconnect para Google Fonts
}

// Configurações avançadas de tipografia (opcional)
const CONFIG_TIPOGRAFIA = {
  // Melhorar renderização de fontes
  fontSmoothing: true,              // -webkit-font-smoothing
  textRendering: 'optimizeLegibility', // text-rendering
  
  // Configurações específicas por seção
  secoes: {
    header: {
      fonte: 'fonteTitulos',
      peso: '800',
      tamanho: '2rem'
    },
    menuItems: {
      titulo: {
        fonte: 'fonteTitulos',
        peso: '700',
        tamanho: '1.25rem'
      },
      descricao: {
        fonte: 'fontePrincipal',
        peso: '400',
        tamanho: '0.95rem'
      },
      preco: {
        fonte: 'fontePrecos',
        peso: '600',
        tamanho: '1.1rem'
      }
    },
    footer: {
      fonte: 'fontePrincipal',
      peso: '400',
      tamanho: '0.9rem'
    }
  }
}
  