export interface ItineraryDay {
  day: string;
  description: string;
}

export interface PracticalPlanningSection {
  title: string;
  content: string;
}

export type StayTier = "economica" | "conforto" | "premium";

export interface StayOption {
  name: string;
  type: string;
  highlight: string;
  rating: number;
  pricePerNight: number;
  priceNote?: string;
  images: string[];
  tier: StayTier;
}

export interface TripSummary {
  days: number;
  nights: number;
  peopleLabel: string;
  destinationLabel: string;
  estimateMin: number;
  estimateMax: number;
  disclaimer: string;
}

export interface CostBreakdown {
  transport: string[];
  lodging: string[];
  food: string[];
  paidTours?: string[];
  additionalCosts?: string[];
}

export interface Destination {
  /** Nome do destino exibido na interface */
  name: string;
  /** Slug do destino usado para identificá-lo internamente */
  slug: string;
  /** Caminho da imagem usada como destaque do destino */
  heroImage: string;
  /** Texto explicando por que visitar o destino */
  whyGo: string;
  /** Descrição resumida do clima */
  weather: string;
  /** Pontos positivos do destino */
  pros: string[];
  /** Pontos negativos ou aspectos a considerar */
  cons: string[];
  /** Custos aproximados, como transporte ou refeições */
  costs: string[];
  /** Cronograma sugerido em dias */
  itineraryDays: ItineraryDay[];
  /** Opções de hospedagem */
  stayOptions: StayOption[];
  /** Resumo da viagem */
  tripSummary: TripSummary;
  /** Detalhamento dos custos */
  costBreakdown: CostBreakdown;
  /** Planejamento prático com subsections */
  practicalPlanning?: PracticalPlanningSection[];
}

export interface CombinedRoute {
  description: string;
}

export interface ComparisonRow {
  attribute: string;
  ilhaDoMel: string;
  morretes: string;
  capivari: string;
}

export interface Proposal {
  slug: string;
  title: string;
  destinations: Destination[];
  combinedRoutes: CombinedRoute[];
  comparisonTable: ComparisonRow[];
}

export const proposals: Proposal[] = [
  {
    slug: 'parana-trip',
    title: 'Experiências no Paraná',
    destinations: [
      {
        name: 'Ilha do Mel',
        slug: 'ilha-do-mel',
        heroImage: '/images/ilha-do-mel/hero.jpg',
        whyGo:
          'Ilha do Mel é um destino ideal para quem quer desacelerar, ficar perto da natureza e viver alguns dias com menos estímulos e mais presença. A ilha protegida fica próxima a Paranaguá, com 95% do território dedicado à conservação da natureza【258520958787201†L161-L167】. O acesso limitado a 5.000 visitantes por dia e a proibição de veículos motorizados garantem praias preservadas, trilhas acessíveis a pé até o Farol das Conchas, a Fortaleza de Nossa Senhora dos Prazeres e a Gruta das Encantadas. A atmosfera simples e sem iluminação pública oferece noites estreladas e um contato genuíno com a Mata Atlântica.',
        weather:
          'Clima subtropical úmido: no verão (janeiro) as máximas médias chegam a cerca de 28 °C e as mínimas a 19 °C, mas é também a estação mais chuvosa, com fevereiro registrando quase 300 mm de chuva【258520958787201†L420-L433】. O inverno é mais seco: julho tem apenas 67 mm de chuva e as temperaturas mínimas caem para cerca de 12 °C【258520958787201†L430-L435】. A proximidade do mar ameniza o calor e o frio e provoca neblina nas madrugadas de inverno【258520958787201†L420-L435】.',
        pros: [
          'Ambiente sem carros deixa o ritmo da ilha muito mais tranquilo e silencioso',
          'Praias e trilhas fáceis e acessíveis a pé até farol, fortaleza e caverna',
          'Número limitado de visitantes mantém as praias e trilhas menos lotadas e mais autênticas',
          'Contato direto com a Mata Atlântica com noites estreladas, ideal para quem busca desconexão',
        ],
        cons: [
          'A ilha exige planejamento prévio: não há circulação de veículos e o deslocamento entre vilas depende de trilhas ou barco-táxi',
          'A escolha da vila (Brasília ou Encantadas) impacta bastante a experiência e a logística da viagem',
          'Infraestrutura simples, sem iluminação pública e com sinal de internet instável',
          'Em períodos de chuva, trilhas podem ficar escorregadias e mais cansativas',
          'Trajeto: ~120 km até o terminal de embarque em Pontal do Sul; ~2h de carro (não inclui travessia de barco, que leva ~30 min).',
        ],
        costs: [
          'Barco ida e volta a partir de Pontal do Paraná ou Paranaguá (~R$40 por pessoa)',
          'Diárias em pousadas variam de R$150 a R$400 dependendo da temporada',
          'Passeios a pé e trilhas são gratuitos',
        ],
        itineraryDays: [
          {
            day: 'Dia 1 — Chegada e adaptação ao ritmo da ilha',
            description:
              'Chegada pela manhã de barco, check-in na pousada em Nova Brasília, caminhada até o Farol das Conchas para vista panorâmica e pôr do sol.',
          },
          {
            day: 'Dia 2 — Explorar com calma e aproveitar as trilhas',
            description:
              'Visita à Fortaleza de Nossa Senhora dos Prazeres pela manhã e trilha até a Gruta das Encantadas à tarde.',
          },
          {
            day: 'Dia 3 — Últimos momentos e retorno',
            description:
              'Dia livre nas praias (Brasília, Fora ou Encantadas) e retorno à tarde de barco.',
          },
        ],
        practicalPlanning: [
          {
            title: '📍 Escolha do trapiche e da vila',
            content: 'A Ilha do Mel possui duas vilas principais, e a escolha influencia diretamente o deslocamento e a experiência.\n\nBrasília: mais tranquila, próxima ao Farol e à Fortaleza, com maior oferta de pousadas confortáveis\n\nEncantadas: mais movimentada, com bares, público jovem e a Gruta das Encantadas\n\n⚠️ Importante: confirme em qual vila fica sua hospedagem antes de embarcar. Não há transporte terrestre entre elas; a travessia é feita por trilha ou barco-táxi.',
          },
          {
            title: '🎒 Bagagem e deslocamento',
            content: 'Evite malas de rodinha: não há pavimentação e o trajeto é feito por areia ou trilhas\n\nPrefira mochilas ou malas fáceis de carregar\n\nHá carregadores de malas nos trapiches (serviço pago; combine o valor antes)',
          },
          {
            title: '🧭 O que levar',
            content: 'Lanterna (essencial, pois não há iluminação pública à noite)\n\nRepelente forte, especialmente contra borrachudos\n\nDinheiro em espécie, já que o sinal de internet pode oscilar e não há caixas eletrônicos\n\nCapa de chuva e calçado adequado para trilhas',
          },
          {
            title: '🚗 Carro e travessia',
            content: 'Pontal do Sul: travessia mais curta (cerca de 30 min) e saídas frequentes\n\nParanaguá: travessia mais longa (cerca de 1h30) e menos horários\n\nEm Pontal do Sul, prefira estacionamentos fechados e com seguro.',
          },
          {
            title: '🩺 Clima e saúde',
            content: 'O verão é chuvoso; capa de chuva faz diferença no conforto\n\nLeve uma farmácia básica com medicamentos pessoais\n\nA ilha possui apenas atendimento de saúde simples para emergências',
          },
        ],        stayOptions: [
          {
            name: 'Pousada do Clodo',
            type: 'Pousada',
            highlight: 'Uma excelente escolha para casais que querem economizar sem abrir mão de uma boa avaliação.',
            rating: 4.6,
            pricePerNight: 281,
            priceNote: 'casal',
            images: ['/images/ilha-do-mel/pousada-do-clodo.jpg'],
            tier: 'economica',
          },
          {
            name: 'Pousada Villa Encantada Ilha Do Mel',
            type: 'Pousada',
            highlight: 'Subindo um pouco o nível, esta pousada tem um clima super romântico e nota quase máxima.',
            rating: 4.9,
            pricePerNight: 600,
            priceNote: 'casal',
            images: ['/images/ilha-do-mel/pousada-villa-encantada.jpg'],
            tier: 'conforto',
          },
          {
            name: 'Pousada Praia do Farol',
            type: 'Pousada',
            highlight: 'Para uma experiência mais completa à beira-mar e com infraestrutura superior.',
            rating: 5,
            pricePerNight: 704,
            priceNote: 'casal',
            images: ['/images/ilha-do-mel/pousada-praia-do-farol.jpg'],
            tier: 'premium',
          },
        ],
        tripSummary: {
          days: 3,
          nights: 3,
          peopleLabel: 'Casal',
          destinationLabel: 'Ilha do Mel',
          estimateMin: 3115,
          estimateMax: 3420,
          disclaimer: 'Valores estimados; variam conforme datas e disponibilidade.',
        },
        costBreakdown: {
          transport: ['Barco ida e volta (2 pessoas): ~R$ 160'],
          lodging: ['3 noites (casal): ~R$ 843 a R$ 2.113'],
          food: ['Média por dia (casal): ~R$ 220 a R$ 320'],
          paidTours: ['Passeios pagos (opcional): ~R$ 0 a R$ 200'],
          additionalCosts: [
            'Estacionamento em Pontal do Sul: R$ 30 a R$ 50 / diária',
            'Barco (ida e volta): R$ 45 a R$ 60 / pessoa',
            'Carregador de malas (opcional): R$ 30 a R$ 60 / carrinho',
            'Barco-táxi entre vilas (opcional): R$ 20 a R$ 40',
          ],
        },      },
      {
        name: 'Matinhos',
        slug: 'matinhos',
        heroImage: '/images/matinhos/hero.jpg',
        whyGo:
          'Matinhos é ideal para quem busca uma pausa simples e prática do cotidiano, com praia, boa estrutura urbana e fácil acesso. É um destino para relaxar sem grandes deslocamentos, aproveitar o mar, caminhar pela orla e curtir dias leves, com bom custo-benefício e flexibilidade de roteiro. Funciona muito bem tanto para uma escapada rápida de fim de semana quanto como complemento de uma viagem pelo litoral do Paraná.',
        weather:
          'Clima litorâneo subtropical, com verões quentes e úmidos e presença constante de brisa marítima. O inverno é mais ameno, com noites frescas e dias agradáveis para caminhar pela orla e aproveitar a cidade com menos movimento.',
        pros: [
          'Praias largas e bem estruturadas, ambiente familiar e seguro',
          'Boa infraestrutura para turistas com acesso fácil a restaurantes e comércios locais',
          'Perto de outras atrações do litoral paranaense, permitindo extensões de viagem',
        ],
        cons: [
          'Trânsito: Fevereiro ainda é época de movimento. A Avenida Beira-Mar costuma ficar lenta, então estar bem localizado ajuda a fazer coisas a pé.',
          'Orla Nova: Matinhos passou por uma grande revitalização da orla. A praia está com uma faixa de areia muito maior e novos calçadões, ótimos para caminhar à noite.',
          'Caiobá: É a zona "nobre". Se procuram os melhores restaurantes e a praia mais badalada (Praia Brava), foquem na Villa Caiobá.',
          'Abastecimento: Ao contrário da ilha, aqui você encontra supermercados grandes, farmácias 24h e vários postos de gasolina.',
          'Trajeto: Com a conclusão da nova orla e a duplicação da Alexandra–Matinhos, o acesso está muito rápido; em finais de semana de sol o tempo de viagem pode dobrar devido ao movimento.',
        ],
        costs: [
          'Transporte rodoviário a partir de Curitiba (~R$30–60 dependendo do modal)',
          'Diárias em pousadas simples a médias a partir de R$120',
        ],
        itineraryDays: [
          {
            day: 'Dia 1 — Chegada e desaceleração à beira-mar',
            description:
              'Chegada a Matinhos e acomodação. Caminhada tranquila pela orla para reconhecer a cidade e sentir o ritmo local. Fim de tarde na praia, aproveitando o pôr do sol, seguido de jantar em restaurante próximo à avenida beira-mar.',
          },
          {
            day: 'Dia 2 — Praia, atividades e vida local',
            description:
              'Dia dedicado à praia. Pela manhã, tempo livre para banho de mar ou descanso. Para quem gosta de atividades, há opção de aula de surf ou stand-up paddle. À tarde, passeio pelo comércio local e mercados de produtos do mar, encerrando o dia com um jantar descontraído.',
          },
          {
            day: 'Dia 3 — Manhã leve e retorno',
            description:
              'Última manhã livre para uma caminhada pela orla, café da manhã sem pressa e, se o tempo permitir, mais um mergulho no mar antes do retorno.',
          },
        ],
        stayOptions: [
          {
            name: 'Pousada Encantadas',
            type: 'Pousada',
            highlight: 'Embora tenha o mesmo nome da vila na ilha, fica em Matinhos e é uma excelente escolha para poupar; muito bem avaliada por limpeza e custo-benefício.',
            rating: 4.6,
            pricePerNight: 230,
            priceNote: 'casal',
            images: ['/images/matinhos/pousada-encantadas-matinhos.jpg'],
            tier: 'economica',
          },
          {
            name: 'Villa Caiobá Pousada',
            type: 'Pousada',
            highlight: 'Localizada em Caiobá, ambiente charmoso e acolhedor para casais, próxima à Praia de Caiobá.',
            rating: 4.8,
            pricePerNight: 568,
            priceNote: 'casal',
            images: ['/images/matinhos/villa-caioba-pousada.jpg'],
            tier: 'conforto',
          },
          {
            name: 'Hotel Praia e Sol',
            type: 'Hotel',
            highlight: 'Hotel tradicional com buffet de café da manhã completo, recepção 24h e Wi-Fi gratuito.',
            rating: 4.7,
            pricePerNight: 567,
            priceNote: 'casal',
            images: ['/images/matinhos/hotel-praia-e-sol.jpg'],
            tier: 'premium',
          },
        ],
        tripSummary: {
          days: 3,
          nights: 3,
          peopleLabel: 'Casal',
          destinationLabel: 'Matinhos',
          estimateMin: 1260,
          estimateMax: 2475,
          disclaimer: 'Valores estimados; variam conforme datas e disponibilidade.',
        },
        costBreakdown: {
          transport: ['Transporte rodoviário (casal): ~R$ 120'],
          lodging: [
            '3 noites (casal): ~R$ 690 (Pousada Encantadas) a R$ 1.705 (Villa Caiobá); Hotel Praia e Sol: R$ 1.701',
          ],
          food: ['Refeições (casal): ~R$ 450 a R$ 650'],
          paidTours: ['Aula de surf (opcional): ~R$ 100'],
        },      },
      {
        name: 'Morretes',
        slug: 'morretes',
        heroImage: '/images/morretes/hero.jpg',
        whyGo:
          'Morretes é um destino para quem gosta de história, boa comida e paisagens de serra. A cidade combina centro histórico preservado, ritmo tranquilo e uma gastronomia muito marcada pela tradição local, tudo isso cercado pela Mata Atlântica e pelas montanhas da Serra do Mar.\n\nÉ uma viagem que funciona tanto como experiência principal quanto como complemento perfeito para quem quer equilibrar cultura, natureza e conforto.',
        weather:
          'Clima subtropical semelhante ao de Curitiba, com verões quentes e úmidos e invernos amenos. Por estar em região de serra, é comum a presença de neblina e chuvas, especialmente no verão.',
        pros: [
          'Viagem de trem pela Serra do Mar transforma o deslocamento em parte da experiência',
          'Centro histórico compacto, fácil de explorar a pé e cheio de construções tradicionais',
          'Gastronomia típica com destaque para o barreado, prato símbolo da região',
          'Proximidade de trilhas, rios e montanhas, ideal para quem quer intercalar cultura e natureza',
        ],
        cons: [
          'Calor e Humidade: fevereiro é muito quente e húmido; ar condicionado no quarto é quase um item de sobrevivência.',
          'Gastronomia: o barreado é obrigatório. Muitos restaurantes no centro histórico fecham cedo (por volta das 16h/17h); planeje os jantares com antecedência.',
          'Acesso: se vier de Curitiba, pode ir pela Estrada da Graciosa (linda, mas sinuosa) ou de comboio (Serra Verde Express), que é uma experiência romântica clássica.',
          'Insetos: por estar no pé da serra, há muitos mosquitos, leve repelente forte.',
          'Trajeto: pela Estrada da Graciosa a distância é similar, mas o tempo pode aumentar para ~1h45 devido às curvas e redução de velocidade.',
        ],
        costs: [
          'Passagem do trem (classe econômica, turística ou executiva) varia de R$80 a R$200',
          'Almoço com barreado em restaurantes tradicionais ~R$50-70 por pessoa',
          'Ingressos para parques e museus são geralmente gratuitos ou simbólicos',
        ],
        itineraryDays: [
          {
            day: 'Dia 1 — Chegada e imersão histórica',
            description:
              'Viagem de trem pela manhã saindo de Curitiba, aproveitando o trajeto panorâmico pela Serra do Mar. Chegada a Morretes, passeio pelo centro histórico, visita à Igreja de São Benedito e à Ponte Velha. Almoço tradicional com barreado e fim de tarde tranquilo pela cidade.',
          },
          {
            day: 'Dia 2 — Cultura local e contato com a natureza',
            description:
              'Manhã dedicada à Rua das Flores e ao comércio local. À tarde, opção de passeio de caiaque no rio Nhundiaquara ou caminhada leve nas áreas naturais ao redor da cidade.',
          },
          {
            day: 'Dia 3 — Serra, arredores e retorno',
            description:
              'Dia reservado para uma atividade mais ativa, como trilhas na região do Pico do Marumbi, ou visita à cidade vizinha de Antonina. Retorno a Curitiba no fim da tarde.',
          },
        ],
        stayOptions: [
          {
            name: 'Sítio Pousada Ancestral',
            type: 'Pousada',
            highlight: 'Ideal para quem quer total contacto com a natureza e tranquilidade, lugar rústico integrado na Serra do Mar.',
            rating: 4.9,
            pricePerNight: 236,
            priceNote: 'casal',
            images: ['/images/morretes/sitio-pousada-ancestral.jpg'],
            tier: 'economica',
          },
          {
            name: 'Pousada das Laranjeiras',
            type: 'Pousada',
            highlight: 'Charmosa e colorida, com piscina externa, jardim agradável e buffet de pequeno-almoço elogiado.',
            rating: 4.6,
            pricePerNight: 355,
            priceNote: 'casal',
            images: ['/images/morretes/pousada-das-laranjeiras.jpg'],
            tier: 'conforto',
          },
          {
            name: 'Pousada do Oasis',
            type: 'Pousada',
            highlight: 'Cabanas rústicas com privacidade, lazer completo, piscina e restaurante próprio.',
            rating: 4.5,
            pricePerNight: 450,
            priceNote: 'casal',
            images: ['/images/morretes/pousada-do-oasis.jpg'],
            tier: 'premium',
          },
        ],
        tripSummary: {
          days: 3,
          nights: 3,
          peopleLabel: 'Casal',
          destinationLabel: 'Morretes',
          estimateMin: 1268,
          estimateMax: 2210,
          disclaimer: 'Valores estimados; variam conforme datas e disponibilidade.',
        },
        costBreakdown: {
          transport: ['Trem Serra Verde Express (ida e volta): ~R$ 160'],
          lodging: ['3 noites (casal): ~R$ 708 (Sítio Pousada Ancestral) a R$ 1.350 (Pousada do Oasis); Pousada das Laranjeiras: R$ 1.065'],
          food: ['Refeições com barreado: ~R$ 400 a R$ 600'],
          paidTours: ['Museus e passeios locais: ~R$ 0 a R$ 100'],
        },      },
      {
        name: 'Capivari',
        slug: 'capivari',
        heroImage: '/images/capivari/hero.jpg',
        whyGo:
          'Capivari é um destino voltado para quem quer natureza, atividades ao ar livre e um pouco mais de isolamento, sem abrir mão de estrutura básica. A região da represa do Capivari, em Campina Grande do Sul, combina água, trilhas e paisagem de serra, com vista para o Pico Paraná e clima mais fresco durante o ano todo.\n\nÉ uma viagem ideal para desacelerar, se desconectar do ritmo urbano e aproveitar o tempo ao ar livre, com atividades simples e contato direto com a Mata Atlântica.',
        weather:
          'Por estar entre 800 e 900 metros de altitude, o clima é mais ameno do que no litoral. Os verões são menos quentes e úmidos, enquanto o inverno pode ter manhãs com neblina e noites frias, especialmente em dias de céu aberto.',
        pros: [
          'Paisagem montanhosa com vista para o Pico Paraná, criando cenários abertos e tranquilos',
          'Represa do Capivari permite atividades como caiaque, stand-up paddle e passeios de barco',
          'Trilhas e estradas de terra ideais para caminhadas e ciclismo',
          'Estrutura de apoio na Fazenda Rio das Pedras facilita aproveitar a natureza com conforto básico',
        ],
        cons: [
          'Clima de Montanha: mesmo no verão, as noites podem ser frescas, leve um casaco leve.',
          'Atividades: a região é famosa pela subida do Pico do Paraná, passeios de barco na represa e pesca.',
          'Acesso: principalmente pela BR-116; embora seja o destino mais próximo em linha reta, o tempo pode variar bastante dependendo do fluxo de caminhões na rodovia. A maioria das pousadas exige alguns quilômetros de estrada de terra.',
          'Alimentação: muitas pousadas/resorts oferecem jantar; caso contrário será necessário deslocar-se até o centro de Campina Grande do Sul.',
        ],
        itineraryDays: [
          {
            day: 'Dia 1 — Chegada e contato com a água',
            description:
              'Chegada à região da represa do Capivari e acomodação. Passeio leve pela margem da represa, com opção de caiaque, stand-up paddle ou passeio de barco. Fim de tarde tranquilo, ideal para piquenique ou descanso à beira da água.',
          },
          {
            day: 'Dia 2 — Trilhas, natureza e relaxamento',
            description:
              'Dia dedicado a atividades ao redor da represa. Caminhada ou pedal pelas trilhas que contornam a água, com paradas para contemplação da paisagem. Visita à Fazenda Rio das Pedras para aproveitar a piscina natural, cachoeira e áreas de descanso.',
          },
          {
            day: 'Dia 3 — Mirantes e retorno',
            description:
              'Manhã reservada para uma caminhada até um mirante com vista para o Pico Paraná ou subida leve ao Capivari Mirim, conforme preparo físico. Retorno no período da tarde.',
          },
        ],        stayOptions: [
          {
            name: 'Mata Atlântica Aventura Hotel Fazenda',
            type: 'Hotel Fazenda',
            highlight: 'Opção rústica voltada para eco-turismo, ideal para trilhas e contato com a natureza.',
            rating: 4,
            pricePerNight: 254,
            priceNote: 'casal',
            images: ['/images/capivari/mata-atlantica-aventura-hotel-fazenda.jpg'],
            tier: 'economica',
          },
          {
            name: 'Villa Estoril - Chalés',
            type: 'Chalé',
            highlight: 'Chalés focados em casais, modernos e privativos, com vista para a represa.',
            rating: 5,
            pricePerNight: 599,
            priceNote: 'casal',
            images: ['/images/capivari/villa-estoril-chales.jpg'],
            tier: 'conforto',
          },
          {
            name: 'Capivari Ecoresort',
            type: 'Resort',
            highlight: 'Resort à beira da represa com piscinas, spa e estrutura completa de lazer.',
            rating: 5,
            pricePerNight: 984,
            priceNote: 'casal',
            images: ['/images/capivari/capivari-ecoresort.jpg'],
            tier: 'premium',
          },
        ],
        tripSummary: {
          days: 3,
          nights: 3,
          peopleLabel: 'Casal',
          destinationLabel: 'Capivari',
          estimateMin: 1331,
          estimateMax: 3523,
          disclaimer: 'Valores estimados; variam conforme datas e disponibilidade.',
        },
        costBreakdown: {
          transport: ['Combustível e estrada: ~R$ 150'],
          lodging: ['3 noites (casal): ~R$ 761 (Mata Atlântica Aventura) a R$ 2.953 (Capivari Ecoresort); Villa Estoril: R$ 1.797'],
          food: ['Refeições (casal): ~R$ 300 a R$ 400'],
          paidTours: ['Passeios: subida ao Pico do Paraná, passeios de barco e pesca: ~R$ 100 a R$ 400'],
        },
        costs: [
          'Combustível e estrada: ~R$ 150',
          'Hospedagem: ~R$ 761 a R$ 2.953 (3 noites)',
          'Alimentação: ~R$ 300 a R$ 400',
          'Atividades (pico, barco, pesca): ~R$ 100 a R$ 400',
        ],
      },
    ],
    combinedRoutes: [
      { description: 'Ilha do Mel + Morretes: combine praia e história com um passeio de trem panorâmico.' },
      { description: 'Morretes + Capivari: saboreie o barreado e depois explore as montanhas e represa.' },
      { description: 'Ilha do Mel + Capivari: vivencie o contraste entre litoral e serra em uma mesma viagem.' },
    ],
    comparisonTable: [
      {
        attribute: 'Tipo de ambiente',
        ilhaDoMel: 'Ilha preservada com praias',
        morretes: 'Cidade histórica no vale',
        capivari: 'Represa na serra',
      },
      {
        attribute: 'Principais atrações',
        ilhaDoMel: 'Farol, Fortaleza, Gruta',
        morretes: 'Igreja, Ponte Velha, Rua das Flores, Marumbi',
        capivari: 'Represa, trilhas, vista do Pico Paraná',
      },
      {
        attribute: 'Acesso',
        ilhaDoMel: 'Barco a partir de Pontal ou Paranaguá',
        morretes: 'Trem Serra Verde Express ou carro',
        capivari: 'Estrada + 6 km de estrada de chão',
      },
      {
        attribute: 'Ideal para',
        ilhaDoMel: 'Praia, ecoturismo',
        morretes: 'Cultura, gastronomia',
        capivari: 'Aventura, esportes aquáticos',
      },
      {
        attribute: 'Duração recomendada',
        ilhaDoMel: '2–3 dias',
        morretes: '1–2 dias',
        capivari: '2–3 dias',
      },
    ],
  },
];