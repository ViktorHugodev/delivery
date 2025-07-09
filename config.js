
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
  // Fontes principais (mais compatíveis)
  fontePrincipal: 'Open Sans',      // Muito estável e legível
  fonteTitulos: 'Montserrat',       // Geométrica, carrega rápido
  fontePrecos: 'Roboto Mono',       // Monospace do Google, muito estável
  
  // Pesos das fontes (reduzidos para carregamento mais rápido)
  pesoPadrao: '400',                
  pesoTitulos: '600',               // Reduzido de 700 para 600
  pesoPrecos: '500',                // Reduzido de 600 para 500
  
  // Tamanhos base
  tamanhoTexto: '1rem',             
  tamanhoTitulo: '1.25rem',         // Reduzido para evitar problemas
  tamanhoPreco: '1.1rem',           
  
  // Espaçamento (reduzido)
  espacamentoTitulos: '0.01em',     // Reduzido de 0.025em
  espacamentoPrecos: '0',           // Zero para evitar problemas
  
  // Configurações simplificadas
  alturaLinha: '1.5',               
  alturaLinhaTitulos: '1.3',        
  
  // Responsividade
  fatorMobile: 0.95,                
  fatorTituloMobile: 1.05,          // Reduzido de 1.1
  
  // Pesos simplificados (menos requisições)
  pesosCarregados: [400, 500, 600, 700], // Reduzido significativamente
  
  // Configuração otimizada
  displaySwap: true,                
  preconnect: true                  
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
  