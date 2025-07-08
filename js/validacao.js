/**
 * Sistema de validação de formulários
 * Implementa validação em tempo real e verificação completa antes do envio
 */

// Função para validar campo individual
function validarCampo(elemento, nomeCampo, obrigatorio = true) {
    if (!elemento) {
        console.error(`Elemento ${nomeCampo} não encontrado`);
        return false;
    }

    const valor = elemento.value.trim();
    
    // Se o campo não é obrigatório e está vazio, é válido
    if (!obrigatorio && !valor) {
        removerErroVisual(elemento);
        return true;
    }
    
    // Se o campo é obrigatório e está vazio, é inválido
    if (obrigatorio && !valor) {
        adicionarErroVisual(elemento, `O campo "${nomeCampo}" é obrigatório`);
        return false;
    }
    
    // Validações específicas por tipo de campo
    if (elemento.type === 'email' && valor) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(valor)) {
            adicionarErroVisual(elemento, 'Email inválido');
            return false;
        }
    }
    
    if (elemento.name === 'mesa' || elemento.id === 'mesa-comanda') {
        // Validar se mesa/comanda contém apenas números
        if (!/^\d+$/.test(valor)) {
            adicionarErroVisual(elemento, 'Mesa/Comanda deve conter apenas números');
            return false;
        }
    }
    
    // Se chegou até aqui, o campo é válido
    removerErroVisual(elemento);
    return true;
}

// Função para adicionar erro visual ao campo
function adicionarErroVisual(elemento, mensagem) {
    // Remover erro anterior se existir
    removerErroVisual(elemento);
    
    // Adicionar classe de erro
    elemento.classList.add('border-red-500', 'bg-red-50');
    elemento.classList.remove('border-gray-300');
    
    // Criar elemento de mensagem de erro
    const mensagemErro = document.createElement('div');
    mensagemErro.className = 'error-message text-red-600 text-sm mt-1 flex items-center';
    mensagemErro.innerHTML = `
        <svg class="w-4 h-4 mr-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
        </svg>
        ${mensagem}
    `;
    
    // Inserir mensagem após o elemento
    elemento.parentNode.insertBefore(mensagemErro, elemento.nextSibling);
    
    // Adicionar evento para remover erro quando o usuário começar a digitar
    const removerErroAoDigitar = () => {
        removerErroVisual(elemento);
        elemento.removeEventListener('input', removerErroAoDigitar);
        elemento.removeEventListener('change', removerErroAoDigitar);
    };
    
    elemento.addEventListener('input', removerErroAoDigitar);
    elemento.addEventListener('change', removerErroAoDigitar);
}

// Função para remover erro visual do campo
function removerErroVisual(elemento) {
    if (!elemento) return;
    
    // Remover classes de erro
    elemento.classList.remove('border-red-500', 'bg-red-50');
    elemento.classList.add('border-gray-300');
    
    // Remover mensagem de erro
    const mensagemErro = elemento.parentNode.querySelector('.error-message');
    if (mensagemErro) {
        mensagemErro.remove();
    }
}

// Função principal para validar todos os campos do formulário
function validarFormularioCompleto() {
    console.log('Iniciando validação completa do formulário');
    
    let todosValidos = true;
    let primeiroErro = null;
    
    // Verificar qual opção de entrega está selecionada
    // Detectar o método de entrega atual (caso tenha mudado desde a última validação)
    let metodoEntrega = '';
    const exibirStep2 = window.dadosGlobais && window.dadosGlobais.config && window.dadosGlobais.config['Step-2-checkout'] === 'Sim';
    if (exibirStep2) {
        const metodoSelecionado = document.querySelector('input[name="metodo-envio"]:checked');
        if (metodoSelecionado) {
            metodoEntrega = metodoSelecionado.value;
            // Atualizar variável global para garantir sincronização
            window.opcaoEntregaSelecionada = metodoEntrega;
            console.log('Método de entrega detectado na validação:', metodoEntrega);
        }
    }
    
    // Usar o valor detectado ou manter o valor global se não for possível detectar
    // Se ainda for undefined, assumir 'delivery' como padrão para garantir validação
    const opcaoEntrega = metodoEntrega || window.opcaoEntregaSelecionada || 'delivery';
    console.log('Opção de entrega para validação:', opcaoEntrega);

    // Validar nome do cliente (sempre obrigatório)
    const nomeCliente = document.getElementById('nome-cliente');
    if (!validarCampo(nomeCliente, 'Nome', true)) {
        todosValidos = false;
        if (!primeiroErro) primeiroErro = nomeCliente;
    }

    // Validar campos específicos com base na opção de entrega selecionada
    if (opcaoEntrega === 'local') {
        // Validar mesa/comanda se estiver configurado
        const mesaComanda = document.getElementById('mesa-comanda');
        if (mesaComanda && mesaComanda.closest('.form-group').style.display !== 'none') {
            if (!validarCampo(mesaComanda, 'Mesa/Comanda', true)) {
                todosValidos = false;
                if (!primeiroErro) primeiroErro = mesaComanda;
            }
        }
    } else if (opcaoEntrega === 'delivery') {
        console.log('Validando campos de endereço para delivery');
        // Validar campos de endereço para entrega
        const camposEndereco = [
            {id: 'cep', nome: 'CEP'},
            {id: 'endereco', nome: 'Endereço'},
            {id: 'numero', nome: 'Número'},
            {id: 'bairro', nome: 'Bairro'},
            {id: 'cidade', nome: 'Cidade'},
            {id: 'estado', nome: 'UF'}
        ];
        
        camposEndereco.forEach(campo => {
            const elemento = document.getElementById(campo.id);
            if (elemento) {
                console.log(`Validando campo ${campo.nome}: ${elemento.value}`);
                // Forçar que todos os campos de endereço sejam obrigatórios para delivery
                if (!validarCampo(elemento, campo.nome, true)) {
                    console.log(`Campo ${campo.nome} inválido`);
                    todosValidos = false;
                    if (!primeiroErro) primeiroErro = elemento;
                }
            } else {
                console.log(`Elemento com ID ${campo.id} não encontrado`);
                // Se um campo obrigatório não for encontrado, a validação falha
                todosValidos = false;
            }
        });

        // Validação específica do CEP
        const cep = document.getElementById('cep');
        if (cep && cep.value.trim()) {
            const cepLimpo = cep.value.replace(/\D/g, '');
            if (cepLimpo.length !== 8) {
                adicionarErroVisual(cep, 'CEP deve ter 8 dígitos');
                todosValidos = false;
                if (!primeiroErro) primeiroErro = cep;
            }
        }

        // Validação específica do estado (UF)
        const estado = document.getElementById('estado');
        if (estado && estado.value.trim()) {
            const uf = estado.value.trim().toUpperCase();
            if (uf.length !== 2) {
                adicionarErroVisual(estado, 'Estado deve ter 2 letras (UF)');
                todosValidos = false;
                if (!primeiroErro) primeiroErro = estado;
            }
        }
    }

    // Validar forma de pagamento se o campo estiver visível
    const containerFormaPagamento = document.getElementById('container-forma-pagamento');
    if (containerFormaPagamento && containerFormaPagamento.style.display !== 'none') {
        const formaPagamento = document.getElementById('forma-pagamento');
        if (formaPagamento && formaPagamento.hasAttribute('required')) {
            if (!validarCampo(formaPagamento, 'Forma de Pagamento', true)) {
                todosValidos = false;
                if (!primeiroErro) primeiroErro = formaPagamento;
            }

            // Validar campos de troco se forma de pagamento for dinheiro
            if (formaPagamento.value.toLowerCase() === 'dinheiro') {
                const containerTroco = document.getElementById('container-troco');
                if (containerTroco && !containerTroco.classList.contains('hidden')) {
                    const radioSelecionado = document.querySelector('input[name="precisa-troco"]:checked');
                    if (!radioSelecionado) {
                        // Criar erro visual para os radio buttons de troco
                        const primeiroRadio = document.querySelector('input[name="precisa-troco"]');
                        if (primeiroRadio) {
                            adicionarErroVisual(primeiroRadio.closest('div'), 'Selecione se precisa de troco');
                            todosValidos = false;
                            if (!primeiroErro) primeiroErro = primeiroRadio;
                        }
                    } else if (radioSelecionado.value === 'sim') {
                        // Se precisa de troco, validar o valor do troco
                        const valorTroco = document.getElementById('valor-troco');
                        const campoValorTroco = document.getElementById('campo-valor-troco');
                        if (campoValorTroco && !campoValorTroco.classList.contains('hidden')) {
                            if (!validarCampo(valorTroco, 'Valor do Troco', true)) {
                                todosValidos = false;
                                if (!primeiroErro) primeiroErro = valorTroco;
                            }
                        }
                    }
                }
            }
        }
    }

    // Validar se há itens no carrinho
    const carrinho = JSON.parse(localStorage.getItem('carrinho') || '[]');
    if (carrinho.length === 0) {
        alert('Seu carrinho está vazio. Adicione itens para fazer um pedido.');
        todosValidos = false;
        // Fechar modal e voltar para o cardápio
        fecharModal();
        return false;
    }

    // Se há erros, focar no primeiro campo com erro
    if (!todosValidos && primeiroErro) {
        primeiroErro.focus();
        primeiroErro.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    console.log('Resultado da validação:', todosValidos ? 'Sucesso' : 'Falhou');
    return todosValidos;
}

// Função para validação em tempo real (opcional - para melhor UX)
function configurarValidacaoTempoReal() {
    console.log('Configurando validação em tempo real');
    
    // Validar campos quando perdem o foco
    document.addEventListener('blur', function(event) {
        const elemento = event.target;
        
        // Verificar se é um campo do formulário que deve ser validado
        if (elemento.closest('#form-cliente')) {
            const nomeCampo = elemento.getAttribute('name') || elemento.id;
            const obrigatorio = elemento.hasAttribute('required');
            
            // Campos que devem ser ignorados na validação em tempo real
            const camposIgnorados = ['observacao-geral', 'complemento'];
            if (camposIgnorados.includes(elemento.id) || camposIgnorados.includes(elemento.name)) {
                return;
            }
            
            validarCampo(elemento, nomeCampo, obrigatorio);
        }
    }, true);

    // Validar select de forma de pagamento quando mudar
    const formaPagamento = document.getElementById('forma-pagamento');
    if (formaPagamento) {
        formaPagamento.addEventListener('change', function() {
            if (this.hasAttribute('required')) {
                validarCampo(this, 'Forma de Pagamento', true);
            }
        });
    }
}

// Função para limpar todas as validações visuais
function limparValidacoesVisuais() {
    console.log('Limpando validações visuais');
    
    // Remover todas as classes de erro
    document.querySelectorAll('.border-red-500, .bg-red-50').forEach(elemento => {
        elemento.classList.remove('border-red-500', 'bg-red-50');
        elemento.classList.add('border-gray-300');
    });
    
    // Remover todas as mensagens de erro
    document.querySelectorAll('.error-message').forEach(mensagem => {
        mensagem.remove();
    });
}
