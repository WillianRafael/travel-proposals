export interface ItineraryDay {
  day: string;
  description: string;
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
  travelerName: string;
  destinations: Destination[];
  combinedRoutes: CombinedRoute[];
  comparisonTable: ComparisonRow[];
}

export const proposals: Proposal[] = [
  {
    slug: 'parana-trip',
    title: 'Experiências no Paraná',
    travelerName: 'Monica!',
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
          'Infraestrutura simples; não há vias pavimentadas nem iluminação pública【258520958787201†L161-L167】',
          'Verão é chuvoso e úmido【258520958787201†L420-L433】',
          'Serviços e acomodações podem ser mais caros pela limitação de oferta',
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
        ],        stayOptions: [
          {
            name: 'Hospedaria da Praia',
            type: 'Hospedaria',
            highlight: 'Simples, próxima à praia',
            rating: 3,
            pricePerNight: 150,
            priceNote: 'casal',
            images: ['/images/ilha-do-mel/hero.jpg'],
            tier: 'economica',
          },
          {
            name: 'Pousada do Farol',
            type: 'Pousada',
            highlight: 'Charmosa e próxima à trilha',
            rating: 4,
            pricePerNight: 280,
            priceNote: 'casal',
            images: ['/images/ilha-do-mel/hero.jpg'],
            tier: 'conforto',
          },
          {
            name: 'Chalé Recanto',
            type: 'Chalé',
            highlight: 'Natureza, privacidade e sossego',
            rating: 5,
            pricePerNight: 390,
            priceNote: 'casal',
            images: ['/images/ilha-do-mel/hero.jpg'],
            tier: 'premium',
          },
        ],
        tripSummary: {
          days: 3,
          nights: 2,
          peopleLabel: 'Casal',
          destinationLabel: 'Ilha do Mel',
          estimateMin: 2100,
          estimateMax: 2400,
          disclaimer: 'Valores estimados; variam conforme datas e disponibilidade.',
        },
        costBreakdown: {
          transport: ['Barco ida e volta (2 pessoas): ~R$ 160'],
          lodging: ['2 noites (casal): ~R$ 560 a R$ 780'],
          food: ['Média por dia (casal): ~R$ 220 a R$ 320'],
          paidTours: ['Passeios pagos (opcional): ~R$ 0 a R$ 200'],
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
          'Durante a alta temporada, a cidade pode ficar mais movimentada',
          'Menos opções de trilhas e natureza preservada em comparação à Ilha do Mel',
          'Experiência mais urbana do que rústica ou isolada',
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
            name: 'Pousada Beira Mar',
            type: 'Pousada',
            highlight: 'Acessível e bem localizada',
            rating: 3,
            pricePerNight: 120,
            priceNote: 'casal',
            images: ['/images/matinhos/hero.jpg'],
            tier: 'economica',
          },
          {
            name: 'Pousada Marina',
            type: 'Pousada',
            highlight: 'Próxima à praia, ambiente aconchegante',
            rating: 4,
            pricePerNight: 200,
            priceNote: 'casal',
            images: ['/images/matinhos/hero.jpg'],
            tier: 'conforto',
          },
          {
            name: 'Resort Litoral',
            type: 'Resort',
            highlight: 'Completo com piscina e spa',
            rating: 5,
            pricePerNight: 350,
            priceNote: 'casal',
            images: ['/images/matinhos/hero.jpg'],
            tier: 'premium',
          },
        ],
        tripSummary: {
          days: 3,
          nights: 2,
          peopleLabel: 'Casal',
          destinationLabel: 'Matinhos',
          estimateMin: 800,
          estimateMax: 1000,
          disclaimer: 'Valores estimados; variam conforme datas e disponibilidade.',
        },
        costBreakdown: {
          transport: ['Transporte rodoviário (casal): ~R$ 120'],
          lodging: ['2 noites (casal): ~R$ 400 a R$ 700'],
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
          'Finais de semana e feriados costumam ser mais movimentados',
          'Clima instável, com possibilidade de chuvas frequentes',
          'Vida noturna discreta, com opções concentradas durante o dia',
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
        ],        stayOptions: [
          {
            name: 'Hospedaria Centro',
            type: 'Hospedaria',
            highlight: 'Simples e central',
            rating: 3,
            pricePerNight: 100,
            priceNote: 'casal',
            images: ['/images/morretes/hero.jpg'],
            tier: 'economica',
          },
          {
            name: 'Pousada Histórica',
            type: 'Pousada',
            highlight: 'Centro histórico, estilo colonial',
            rating: 4,
            pricePerNight: 220,
            priceNote: 'casal',
            images: ['/images/morretes/hero.jpg'],
            tier: 'conforto',
          },
          {
            name: 'Chalé Montanha',
            type: 'Chalé',
            highlight: 'Vista para os morros, privacidade total',
            rating: 5,
            pricePerNight: 320,
            priceNote: 'casal',
            images: ['/images/morretes/hero.jpg'],
            tier: 'premium',
          },
        ],
        tripSummary: {
          days: 3,
          nights: 2,
          peopleLabel: 'Casal',
          destinationLabel: 'Morretes',
          estimateMin: 1200,
          estimateMax: 1600,
          disclaimer: 'Valores estimados; variam conforme datas e disponibilidade.',
        },
        costBreakdown: {
          transport: ['Trem Serra Verde Express (ida e volta): ~R$ 160'],
          lodging: ['2 noites (casal): ~R$ 440 a R$ 640'],
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
          'Acesso inclui cerca de 6 km de estrada de chão até a fazenda',
          'Região mais isolada, com pouca sinalização e poucos serviços no entorno',
          'Mudanças rápidas de clima são comuns na serra\n\nEsse é um destino que funciona melhor para quem gosta de lugares menos movimentados e está confortável com logística simples.',
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
            name: 'Camping Represa',
            type: 'Camping',
            highlight: 'Natureza, infraestrutura básica',
            rating: 3,
            pricePerNight: 80,
            priceNote: 'casal',
            images: ['/images/capivari/hero.jpg'],
            tier: 'economica',
          },
          {
            name: 'Fazenda Rio das Pedras',
            type: 'Chalé',
            highlight: 'Contato direto com natureza, rio e cachoeira',
            rating: 4,
            pricePerNight: 250,
            priceNote: 'casal',
            images: ['/images/capivari/hero.jpg'],
            tier: 'conforto',
          },
          {
            name: 'Pousada Serra Premium',
            type: 'Pousada',
            highlight: 'Vista panorâmica, comodidades premium',
            rating: 5,
            pricePerNight: 380,
            priceNote: 'casal',
            images: ['/images/capivari/hero.jpg'],
            tier: 'premium',
          },
        ],
        tripSummary: {
          days: 3,
          nights: 2,
          peopleLabel: 'Casal',
          destinationLabel: 'Capivari',
          estimateMin: 1600,
          estimateMax: 1900,
          disclaimer: 'Valores estimados; variam conforme datas e disponibilidade.',
        },
        costBreakdown: {
          transport: ['Combustível e estrada: ~R$ 150'],
          lodging: ['2 noites (casal): ~R$ 500 a R$ 760'],
          food: ['Refeições (casal): ~R$ 300 a R$ 400'],
          paidTours: ['Caiaque ou stand-up paddle: ~R$ 100 a R$ 200'],
        },
        costs: [
          'Combustível e estrada: ~R$ 150',
          'Hospedagem: ~R$ 500 a R$ 760 (2 noites)',
          'Alimentação: ~R$ 300 a R$ 400',
          'Atividades (caiaque/paddle): ~R$ 100 a R$ 200',
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