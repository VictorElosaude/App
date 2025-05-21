// Script para navegação entre telas e interatividade
document.addEventListener('DOMContentLoaded', function() {
    // Botões de navegação da tela inicial
    const btnCarteirinha = document.getElementById('btn-carteirinha');
    const btnExtrato = document.getElementById('btn-extrato');
    const btnBoletos = document.getElementById('btn-boletos');
    const btnCoparticipacao = document.getElementById('btn-coparticipacao');
    const btnNegociacao = document.getElementById('btn-negociacao');
    const btnBeneficiarios = document.getElementById('btn-beneficiarios');
    const btnReceitas = document.getElementById('btn-receitas');
    const btnPontos = document.getElementById('btn-pontos');
    const btnAgendamento = document.getElementById('btn-agendamento');

    // Botões de voltar
    const backFromCarteirinha = document.getElementById('back-from-carteirinha');
    const backFromExtrato = document.getElementById('back-from-extrato');
    const backFromBoletos = document.getElementById('back-from-boletos');
    const backFromCoparticipacao = document.getElementById('back-from-coparticipacao');
    const backFromNegociacao = document.getElementById('back-from-negociacao');
    const backFromBeneficiarios = document.getElementById('back-from-beneficiarios');
    const backFromReceitas = document.getElementById('back-from-receitas');
    const backFromPontos = document.getElementById('back-from-pontos');
    const backFromAgendamento = document.getElementById('back-from-agendamento');

    // Telas
    const homeScreen = document.getElementById('home-screen');
    const carteirinhaScreen = document.getElementById('carteirinha-screen');
    const extratoScreen = document.getElementById('extrato-screen');
    const boletosScreen = document.getElementById('boletos-screen');
    const coparticipacaoScreen = document.getElementById('coparticipacao-screen');
    const negociacaoScreen = document.getElementById('negociacao-screen');
    const beneficiariosScreen = document.getElementById('beneficiarios-screen');
    const receitasScreen = document.getElementById('receitas-screen');
    const pontosScreen = document.getElementById('pontos-screen');
    const agendamentoScreen = document.getElementById('agendamento-screen');

    // Função para mostrar uma tela e esconder as outras
    function showScreen(screen) {
        // Esconde todas as telas
        homeScreen.classList.remove('active');
        carteirinhaScreen.classList.remove('active');
        extratoScreen.classList.remove('active');
        boletosScreen.classList.remove('active');
        coparticipacaoScreen.classList.remove('active');
        negociacaoScreen.classList.remove('active');
        beneficiariosScreen.classList.remove('active');
        receitasScreen.classList.remove('active');
        pontosScreen.classList.remove('active');
        agendamentoScreen.classList.remove('active');
        
        // Mostra a tela selecionada
        screen.classList.add('active');
    }

    // Navegação para as telas a partir da tela inicial
    if (btnCarteirinha) {
        btnCarteirinha.addEventListener('click', function() {
            showScreen(carteirinhaScreen);
        });
    }

    if (btnExtrato) {
        btnExtrato.addEventListener('click', function() {
            showScreen(extratoScreen);
        });
    }

    if (btnBoletos) {
        btnBoletos.addEventListener('click', function() {
            showScreen(boletosScreen);
            // Esconde o detalhe do boleto ao entrar na tela
            document.querySelectorAll('.boleto-container').forEach(container => {
                container.style.display = 'none';
            });
        });
    }

    if (btnCoparticipacao) {
        btnCoparticipacao.addEventListener('click', function() {
            showScreen(coparticipacaoScreen);
        });
    }

    if (btnNegociacao) {
        btnNegociacao.addEventListener('click', function() {
            showScreen(negociacaoScreen);
        });
    }

    if (btnBeneficiarios) {
        btnBeneficiarios.addEventListener('click', function() {
            showScreen(beneficiariosScreen);
        });
    }

    if (btnReceitas) {
        btnReceitas.addEventListener('click', function() {
            showScreen(receitasScreen);
        });
    }

    if (btnPontos) {
        btnPontos.addEventListener('click', function() {
            showScreen(pontosScreen);
        });
    }

    if (btnAgendamento) {
        btnAgendamento.addEventListener('click', function() {
            showScreen(agendamentoScreen);
        });
    }

    // Botões de voltar para a tela inicial
    if (backFromCarteirinha) {
        backFromCarteirinha.addEventListener('click', function() {
            showScreen(homeScreen);
        });
    }

    if (backFromExtrato) {
        backFromExtrato.addEventListener('click', function() {
            showScreen(homeScreen);
        });
    }

    if (backFromBoletos) {
        backFromBoletos.addEventListener('click', function() {
            showScreen(homeScreen);
        });
    }

    if (backFromCoparticipacao) {
        backFromCoparticipacao.addEventListener('click', function() {
            showScreen(homeScreen);
        });
    }

    if (backFromNegociacao) {
        backFromNegociacao.addEventListener('click', function() {
            showScreen(homeScreen);
        });
    }

    if (backFromBeneficiarios) {
        backFromBeneficiarios.addEventListener('click', function() {
            showScreen(homeScreen);
        });
    }

    if (backFromReceitas) {
        backFromReceitas.addEventListener('click', function() {
            showScreen(homeScreen);
        });
    }

    if (backFromPontos) {
        backFromPontos.addEventListener('click', function() {
            showScreen(homeScreen);
        });
    }

    if (backFromAgendamento) {
        backFromAgendamento.addEventListener('click', function() {
            showScreen(homeScreen);
        });
    }

    // Funcionalidade de pesquisa no histórico
    const searchInput = document.querySelector('.search-bar input');
    const historicoItems = document.querySelectorAll('.historico-item');

    if (searchInput && historicoItems.length > 0) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            
            historicoItems.forEach(item => {
                const title = item.querySelector('.item-title').textContent.toLowerCase();
                const category = item.querySelector('.item-category').textContent.toLowerCase();
                
                if (title.includes(searchTerm) || category.includes(searchTerm)) {
                    item.style.display = 'flex';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    }

    // Funcionalidade de filtro
    const filterButton = document.querySelector('.filter-button');
    const filterValue = document.querySelector('.filter-value');
    
    if (filterButton && filterValue) {
        filterButton.addEventListener('click', function() {
            // Simula a troca de filtro (em um app real, isso abriria um modal de seleção)
            const currentFilter = filterValue.textContent;
            
            if (currentFilter === 'Este mês') {
                filterValue.textContent = 'Últimos 3 meses';
            } else if (currentFilter === 'Últimos 3 meses') {
                filterValue.textContent = 'Este ano';
            } else {
                filterValue.textContent = 'Este mês';
            }
        });
    }

    // Funcionalidade de notificação
    const notificationBell = document.getElementById('notification-bell');
    
    if (notificationBell) {
        notificationBell.addEventListener('click', function() {
            const tooltip = this.querySelector('.notification-tooltip');
            if (tooltip.style.display === 'block') {
                tooltip.style.display = 'none';
            } else {
                tooltip.style.display = 'block';
            }
        });
        
        // Fechar tooltip ao clicar fora
        document.addEventListener('click', function(event) {
            if (!notificationBell.contains(event.target)) {
                const tooltip = notificationBell.querySelector('.notification-tooltip');
                tooltip.style.display = 'none';
            }
        });
    }

    // Interações com formulários
    const formInputs = document.querySelectorAll('input, select');
    
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.classList.remove('focused');
        });
    });

    // Interações com calendário
    const diasCalendario = document.querySelectorAll('.dia:not(.disabled)');
    
    diasCalendario.forEach(dia => {
        dia.addEventListener('click', function() {
            // Remove a classe active de todos os dias
            diasCalendario.forEach(d => d.classList.remove('active'));
            // Adiciona a classe active ao dia clicado
            this.classList.add('active');
        });
    });

    // Interações com horários
    const horariosAgendamento = document.querySelectorAll('.horario-item');
    
    horariosAgendamento.forEach(horario => {
        horario.addEventListener('click', function() {
            // Remove a classe active de todos os horários
            horariosAgendamento.forEach(h => h.classList.remove('active'));
            // Adiciona a classe active ao horário clicado
            this.classList.add('active');
        });
    });

    // Interações com opções de parcelamento
    const opcoesParcelas = document.querySelectorAll('.option-btn');
    
    opcoesParcelas.forEach(opcao => {
        opcao.addEventListener('click', function() {
            // Remove a classe active de todas as opções
            opcoesParcelas.forEach(o => o.classList.remove('active'));
            // Adiciona a classe active à opção clicada
            this.classList.add('active');
            
            // Atualiza o valor da parcela com base na opção selecionada
            const valorTotal = 5567.00;
            const parcelas = parseInt(this.textContent);
            const valorParcela = (valorTotal / parcelas).toFixed(2);
            
            const valorParcelaElement = document.querySelector('.detail-value');
            if (valorParcelaElement) {
                valorParcelaElement.textContent = `R$ ${valorParcela}`;
            }
        });
    });

    // Interações com tabs
    const tabs = document.querySelectorAll('.tab');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Encontra o container de tabs pai
            const tabContainer = this.parentElement;
            // Remove a classe active de todas as tabs no mesmo container
            tabContainer.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
            // Adiciona a classe active à tab clicada
            this.classList.add('active');
        });
    });
    
    // Funcionalidade de resgate de pontos
    const btnResgatarPontos = document.getElementById('btn-resgatar-pontos');
    const opcoesResgate = document.querySelector('.pontos-opcoes-resgate');
    
    if (btnResgatarPontos && opcoesResgate) {
        btnResgatarPontos.addEventListener('click', function() {
            if (opcoesResgate.style.display === 'none') {
                opcoesResgate.style.display = 'block';
                this.textContent = 'Esconder opções de resgate';
            } else {
                opcoesResgate.style.display = 'none';
                this.innerHTML = '<i class="fas fa-gift"></i> Ver opções de resgate';
            }
        });
    }
    
    // Carrossel de carteirinhas
    const carteirinhaCarousel = document.querySelector('.carteirinha-carousel');
    const indicators = document.querySelectorAll('.indicator');
    
    if (carteirinhaCarousel && indicators.length > 0) {
        // Inicializa o carrossel
        let currentIndex = 0;
        
        // Função para atualizar indicadores
        function updateIndicators(index) {
            indicators.forEach(indicator => {
                indicator.classList.remove('active');
            });
            indicators[index].classList.add('active');
        }
        
        // Adiciona evento de scroll para atualizar indicadores
        carteirinhaCarousel.addEventListener('scroll', function() {
            const scrollPosition = carteirinhaCarousel.scrollLeft;
            const itemWidth = carteirinhaCarousel.offsetWidth;
            currentIndex = Math.round(scrollPosition / itemWidth);
            updateIndicators(currentIndex);
        });
        
        // Adiciona evento de clique nos indicadores
        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', function() {
                const itemWidth = carteirinhaCarousel.offsetWidth;
                carteirinhaCarousel.scrollTo({
                    left: itemWidth * index,
                    behavior: 'smooth'
                });
                updateIndicators(index);
            });
        });
    }
    
    // Interação com boletos
    const boletoRows = document.querySelectorAll('.boletos-table .table-row');
    const boletoDetail = document.getElementById('boleto-detail-1');
    
    if (boletoRows.length > 0 && boletoDetail) {
        boletoRows.forEach(row => {
            row.addEventListener('click', function() {
                // Mostra o detalhe do boleto
                boletoDetail.style.display = 'block';
                
                // Atualiza as informações do boleto baseado no boleto clicado
                const tipo = this.querySelector('.table-cell:nth-child(2)').textContent;
                const valor = this.querySelector('.table-cell:nth-child(3)').textContent;
                const vencimento = this.querySelector('.table-cell:nth-child(1)').textContent;
                const situacao = this.querySelector('.table-cell:nth-child(4) span').textContent;
                
                // Atualiza o título do boleto
                const boletoTitle = boletoDetail.querySelector('.boleto-title');
                if (boletoTitle) {
                    boletoTitle.textContent = `${tipo} - ${vencimento.split('/')[1]}/${vencimento.split('/')[2]}`;
                }
                
                // Atualiza o status do boleto
                const boletoStatus = boletoDetail.querySelector('.boleto-status');
                if (boletoStatus) {
                    boletoStatus.textContent = situacao;
                }
                
                // Atualiza o vencimento do boleto
                const boletoVencimento = boletoDetail.querySelector('.boleto-row:nth-child(1) .boleto-value');
                if (boletoVencimento) {
                    boletoVencimento.textContent = vencimento;
                }
                
                // Atualiza o valor do boleto
                const boletoValor = boletoDetail.querySelector('.boleto-row:nth-child(2) .boleto-value');
                if (boletoValor) {
                    boletoValor.textContent = valor;
                }
                
                // Rola para o detalhe do boleto
                boletoDetail.scrollIntoView({ behavior: 'smooth' });
            });
        });
    }
});
