# Análise de Fluxos e Telas - Aplicativo Elosaúde

## Visão Geral
Com base na análise do vídeo de referência, identificamos os principais fluxos e telas que devem ser implementados no protótipo do aplicativo Elosaúde. O aplicativo segue um design limpo com predominância da cor azul, interface minimalista e organização clara das informações.

## Telas Principais

### 1. Tela Inicial (Home)
- **Cabeçalho**: 
  - Saudação personalizada ("Olá, [Nome do Usuário]")
  - Ícones de notificação e perfil no canto superior direito
  - Fundo azul

- **Carteirinha Digital**:
  - Card branco com logo da Elosaúde
  - Botão "Ver carteirinha" centralizado
  - Acesso rápido à identificação do beneficiário

- **Seção de Serviços**:
  - Título "Serviços"
  - Lista de serviços disponíveis
  - Primeiro item: "Extrato de Utilização" com ícone e seta para navegação

- **Menu de Navegação**:
  - Barra inferior com ícones para Home e Financeiro

### 2. Extrato de Utilização
- **Cabeçalho**:
  - Botão "Voltar" no canto superior esquerdo
  - Título "Extrato de Utilização" centralizado
  - Fundo azul

- **Resumo Financeiro**:
  - Ícone de cifrão
  - "Total" com valor em destaque (R$ 0,00)
  - Detalhamento por categorias:
    - Total em consultas
    - Total em exames/terapias
    - Total em odontologia
    - Total em internação
    - Total em outros
  - Cada categoria com seu ícone específico

- **Histórico de Utilização**:
  - Título "Histórico"
  - Campo de pesquisa
  - Lista de procedimentos organizados por data
  - Cada item mostra:
    - Ícone representativo do tipo de procedimento
    - Nome do procedimento
    - Categoria (Consultas, Outros)
    - Valor (R$ 0,00)

- **Filtros**:
  - Barra inferior com opção "Filtrado por: Este mês"
  - Ícone para download/exportar

## Fluxos de Navegação

### Fluxo 1: Acesso à Carteirinha
1. Usuário acessa a tela inicial
2. Toca no botão "Ver carteirinha" no card branco
3. Visualiza a carteirinha digital

### Fluxo 2: Consulta de Extrato de Utilização
1. Usuário acessa a tela inicial
2. Toca em "Extrato de Utilização" na seção de Serviços
3. Visualiza o resumo financeiro total
4. Pode rolar a tela para ver o detalhamento por categorias
5. Continua rolando para ver o histórico de procedimentos

### Fluxo 3: Filtragem do Histórico
1. Na tela de Extrato de Utilização
2. Usuário pode usar o campo de pesquisa para buscar procedimentos específicos
3. Pode tocar na opção "Filtrado por" para alterar o período de visualização
4. Pode exportar/baixar o extrato usando o ícone na barra inferior

## Elementos de Design

### Paleta de Cores
- **Azul principal**: Usado no fundo do cabeçalho e área de resumo financeiro
- **Branco**: Usado em cards e áreas de conteúdo
- **Verde claro**: Usado em ícones de exames e procedimentos
- **Rosa claro**: Usado em ícones de consultas
- **Preto/Cinza escuro**: Usado em textos

### Tipografia
- Fonte sans-serif limpa e moderna
- Hierarquia clara com diferentes tamanhos para títulos, subtítulos e conteúdo

### Iconografia
- Ícones minimalistas e representativos
- Uso consistente de ícones para categorias específicas:
  - Coração: consultas
  - Gráfico de ondas: exames/terapias
  - Dente: odontologia
  - Prancheta: internação
  - Pílula/medicamento: outros procedimentos

## Prioridades para o Protótipo

Para a primeira fase do protótipo, devemos focar em:

1. Tela inicial com saudação e acesso à carteirinha
2. Navegação para o Extrato de Utilização
3. Visualização do resumo financeiro
4. Listagem do histórico de procedimentos
5. Funcionalidade básica de filtro por período

Estes elementos representam o fluxo principal observado no vídeo de referência e são essenciais para a experiência básica do usuário no aplicativo Elosaúde.
