// Banco de dados simulado com as informações de sustentabilidade
const infoTecnologias = {
    drones: {
        titulo: "Drones e Imagens de Satélite",
        descricao: "Os drones permitem identificar focos de pragas e estresse hídrico com precisão milimétrica. **Impacto Sustentável:** Reduz o uso de defensivos químicos em até 40%, aplicando-os apenas onde é realmente necessário, protegendo o solo e os lençóis freáticos."
    },
    iot: {
        titulo: "Sensores IoT (Internet das Coisas)",
        descricao: "Sensores espalhados pelo campo medem a umidade do solo, temperatura e necessidade de nutrientes em tempo real. **Impacto Sustentável:** Evita o desperdício de água em sistemas de irrigação automatizados, economizando energia e preservando recursos hídricos vitais."
    },
    autonomos: {
        titulo: "Maquinário Autônomo e Telemetria",
        descricao: "Tratores e colheitadeiras controlados por IA otimizam as rotas no campo. **Impacto Sustentável:** Reduz drasticamente a compactação do solo e diminui o consumo de combustível fóssil (diesel), reduzindo a pegada de carbono da produção agrícola."
    }
};

// Seleção dos elementos do DOM
const cards = document.querySelectorAll('.tech-card');
const painelDetalhes = document.getElementById('details-panel');
const tituloDetalhes = document.getElementById('details-title');
const textoDetalhes = document.getElementById('details-text');

// Adiciona o evento de clique para cada card
cards.forEach(card => {
    card.addEventListener('click', () => {
        const tecnologia = card.getAttribute('data-tech');
        
        // Atualiza o conteúdo do painel com base na tecnologia clicada
        tituloDetalhes.textContent = infoTecnologias[tecnologia].titulo;
        textoDetalhes.innerHTML = infoTecnologias[tecnologia].descricao;
        
        // Remove a classe 'hidden' para mostrar o painel com efeito simples
        painelDetalhes.classList.remove('hidden');
        
        // Rola a tela suavemente até o painel de detalhes
        painelDetalhes.scrollIntoView({ behavior: 'smooth' });
    });
});