import matplotlib.pyplot as plt
import networkx as nx
import os

# Criar o grafo
G = nx.DiGraph()

# Adicionar nós principais
G.add_node("App Elosaúde", pos=(0, 0))

# Adicionar fases
G.add_node("Fase 1: Funcionalidades Essenciais", pos=(-10, -3))
G.add_node("Fase 2: Dados de Saúde", pos=(0, -3))
G.add_node("Fase 3: Gamificação", pos=(10, -3))
G.add_node("Módulo Prestadores", pos=(18, -3))

# Conectar nós principais às fases
G.add_edge("App Elosaúde", "Fase 1: Funcionalidades Essenciais")
G.add_edge("App Elosaúde", "Fase 2: Dados de Saúde")
G.add_edge("App Elosaúde", "Fase 3: Gamificação")
G.add_edge("App Elosaúde", "Módulo Prestadores")

# Adicionar funcionalidades da Fase 1
fase1_nodes = [
    "Boletos", "Coparticipação", "Carteirinha", "Reembolso", 
    "Negociação de Dívidas", "Inclusão de Beneficiários", 
    "Vencimento de Receitas", "Notificações", "Atualização Cadastral"
]

pos_y = -6
for i, node in enumerate(fase1_nodes):
    pos_x = -15 + (i % 3) * 4
    if i % 3 == 0 and i > 0:
        pos_y -= 3
    G.add_node(node, pos=(pos_x, pos_y))
    G.add_edge("Fase 1: Funcionalidades Essenciais", node)

# Adicionar funcionalidades da Fase 2
fase2_nodes = [
    "Perfil de Saúde", "Acompanhamento de Peso", 
    "Doenças Pré-existentes", "QR Code Médico", 
    "Medicamentos", "Alergias"
]

pos_y = -6
for i, node in enumerate(fase2_nodes):
    pos_x = -2 + (i % 3) * 4
    if i % 3 == 0 and i > 0:
        pos_y -= 3
    G.add_node(node, pos=(pos_x, pos_y))
    G.add_edge("Fase 2: Dados de Saúde", node)

# Adicionar funcionalidades da Fase 3
fase3_nodes = [
    "Sistema de Pontos", "Pagamento em Dia", 
    "Uso da Rede Própria", "Mapa de Cuidados", 
    "Recompensas", "Troca de Pontos"
]

pos_y = -6
for i, node in enumerate(fase3_nodes):
    pos_x = 8 + (i % 3) * 4
    if i % 3 == 0 and i > 0:
        pos_y -= 3
    G.add_node(node, pos=(pos_x, pos_y))
    G.add_edge("Fase 3: Gamificação", node)

# Adicionar funcionalidades do Módulo Prestadores
prestador_nodes = [
    "Autorizador Automático", "Agendamento com Parceiros", 
    "Integração com Sistemas"
]

pos_y = -6
for i, node in enumerate(prestador_nodes):
    pos_x = 18 + (i % 2) * 4
    if i % 2 == 0 and i > 0:
        pos_y -= 3
    G.add_node(node, pos=(pos_x, pos_y))
    G.add_edge("Módulo Prestadores", node)

# Obter posições dos nós
pos = nx.get_node_attributes(G, 'pos')

# Configurar o tamanho da figura
plt.figure(figsize=(24, 16))

# Desenhar o grafo com mais espaço entre os nós
nx.draw(G, pos, with_labels=True, node_size=4000, node_color='skyblue', 
        font_size=12, font_weight='bold', arrows=True, 
        edge_color='gray', width=2, alpha=0.7)

# Adicionar título
plt.title("Mapa Mental - Aplicativo Elosaúde", fontsize=24)

# Salvar a figura
output_path = '/home/ubuntu/elosaude/mapa_mental_atualizado.png'
plt.savefig(output_path, dpi=300, bbox_inches='tight')
print(f"Mapa mental atualizado salvo em: {output_path}")

# Criar versão em formato DOT para Graphviz
dot_path = '/home/ubuntu/elosaude/mapa_mental_atualizado.dot'
nx.drawing.nx_pydot.write_dot(G, dot_path)

# Gerar versão SVG usando Graphviz
svg_path = '/home/ubuntu/elosaude/mapa_mental_atualizado.svg'
os.system(f'dot -Tsvg {dot_path} -o {svg_path}')
print(f"Versão SVG atualizada salva em: {svg_path}")
