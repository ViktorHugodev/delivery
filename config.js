
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
  