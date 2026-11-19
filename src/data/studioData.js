// ==============================================================================
// CONFIGURAÇÃO CENTRAL DA CLIENTE: STUDIO DONNA EVA (JOÃO PESSOA)
// Toda a personalização do site fica neste arquivo.
//
// O Studio tem 3 profissionais, cada uma com seus serviços e valores:
//   Unhas: @donnaevanailsaecademy (nome da profissional a confirmar)
//   Cílios: Lucélia Santos (@lucelialashdesigner)
//   Sobrancelhas: Kalyni Alves (@kalyni_alves)
//
// Fontes: pasta do Studio no Drive (fotos, endereço e lista de serviços),
// bio.site do Studio (WhatsApp) e posts do Instagram (Combo Black Beauty R$ 190).
// ATENÇÃO: com exceção do Combo Black Beauty, os valores e o horário abaixo são
// ESTIMATIVA para a demo. Trocar pelos reais antes da entrega.
// ==============================================================================

const WHATSAPP = "5583988283343";

export const studioConfig = {
  name: "Donna Eva",
  nameSuffix: "Studio de Beleza",
  fullName: "Studio Donna Eva",
  tagline: "Unhas, cílios e sobrancelhas em Mumbaba, João Pessoa",
  subtitle:
    "Três profissionais, cada uma no que faz de melhor. Escolha com quem quer ser atendida, veja os valores e reserve seu horário em poucos toques.",
  city: "João Pessoa, PB",
  neighborhood: "Mumbaba",
  addressShort: "R. Cidade de Campo de Santana, 311",
  address: "R. Cidade de Campo de Santana, 311, Mumbaba, João Pessoa - PB, 58083-545",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=R.+Cidade+de+Campo+de+Santana,+311+Mumbaba,+João+Pessoa+-+PB",
  whatsappNumber: WHATSAPP, // Apenas dígitos com DDI e DDD
  whatsappDisplay: "(83) 98828-3343",
  instagramHandle: "@donnaevanailsaecademy",
  instagramUrl: "https://www.instagram.com/donnaevanailsaecademy",
  // Link do Calendly. Na demo usamos a agenda de teste; na entrega vai o do Studio.
  calendlyUrl: "https://calendly.com/carbosalarissa/30min",
  workingHours: [
    { days: "Segunda a Sexta", hours: "08h às 18h" },
    { days: "Sábado", hours: "08h às 14h" },
  ],
  workingHoursShort: "Atendimento com hora marcada",
  closedWeekdays: [0],
  periods: [
    { id: "Manhã (08h às 12h)", label: "Manhã", sub: "08h às 12h" },
    { id: "Tarde (13h às 18h)", label: "Tarde", sub: "13h às 18h" },
  ],
  paymentNote: "O horário fica reservado quando o Studio confirmar pelo WhatsApp.",
  bookingNotes: [
    "Atendimento só com hora marcada. Chegue 5 minutinhos antes.",
    "Se precisar desmarcar, avise com um dia de antecedência.",
    "Atrasos acima de 15 minutos podem precisar ser remarcados.",
  ],

  // ---------------------------------------------------------------------------
  // PROFISSIONAIS
  // Cada uma tem foto, apresentação, serviços (categories) e adicionais próprios.
  // ---------------------------------------------------------------------------
  professionals: [
    {
      id: "unhas",
      area: "Unhas",
      name: "Donna Eva Nails",
      firstName: "Donna Eva",
      role: "Nail designer e educadora",
      bio: "Unhas com padrão master: alongamento fino, cutilagem caprichada e acabamento que dura. Também forma novas profissionais no curso de unhas do Studio.",
      instagramHandle: "@donnaevanailsaecademy",
      instagramUrl: "https://www.instagram.com/donnaevanailsaecademy",
      image: "/images/unhas-francesinha-quadrada.webp",
      extra: {
        title: "Curso de unhas",
        text: "Quer trabalhar com unhas? A Donna Eva ensina do zero, com prática em modelo.",
        message: "Olá! Vim pelo site e quero saber sobre o curso de unhas.",
      },
      decoratedNote: "Decorações e nail art têm valor sob consulta. É só escrever nas observações.",
      addons: [
        { id: "nail-art", name: "Decoração simples (por unha)", price: 5 },
        { id: "quebrada", name: "Unha quebrada no alongamento (por unha)", price: 10 },
        { id: "remocao-unha", name: "Remoção de alongamento ou gel", price: 25 },
      ],
      categories: [
        {
          id: "alongamento",
          title: "Alongamento",
          image: "/images/unhas-francesinha-quadrada.webp",
          duration: "2h a 2h30",
          note: "Manutenção indicada a cada 20 a 25 dias",
          items: [
            { id: "along-gel", title: "Alongamento em gel", price: 120, popular: true },
            { id: "along-frances", title: "Alongamento com francesinha", price: 135 },
            { id: "along-manut", title: "Manutenção do alongamento", price: 80, duration: "1h30" },
          ],
        },
        {
          id: "unha-natural",
          title: "Unha natural",
          image: "/images/unhas-perolado.webp",
          duration: "1h a 1h30",
          note: "Inclui cutilagem",
          items: [
            { id: "banho-gel", title: "Banho de gel", price: 70 },
            { id: "esmalt-gel", title: "Esmaltação em gel", price: 45 },
            { id: "pe-mao", title: "Pé e mão (esmaltação comum)", price: 45 },
          ],
        },
      ],
    },
    {
      id: "cilios",
      area: "Cílios",
      name: "Lucélia Santos",
      firstName: "Lucélia",
      role: "Lash designer",
      bio: "Extensão de cílios fio a fio e volume, do efeito natural ao mais marcante. Cada olhar é desenhado para o formato do seu rosto.",
      instagramHandle: "@lucelialashdesigner",
      instagramUrl: "https://www.instagram.com/lucelialashdesigner",
      image: "/images/cilios-glamour.webp",
      decoratedNote: "Na dúvida sobre o efeito, a Lucélia te ajuda a escolher no dia.",
      addons: [
        { id: "remocao-cilios", name: "Remoção de extensão antiga", price: 25 },
      ],
      categories: [
        {
          id: "extensao",
          title: "Extensão de cílios",
          image: "/images/cilios-glamour.webp",
          duration: "1h30 a 2h30",
          note: "Manutenção indicada a cada 15 a 20 dias",
          items: [
            { id: "volume-brasileiro", title: "Volume brasileiro", price: 100, popular: true },
            { id: "egipcio", title: "Efeito egípcio", price: 120 },
            { id: "glamour", title: "Volume glamour", price: 130 },
            { id: "fox", title: "Efeito fox", price: 140 },
          ],
        },
        {
          id: "manutencao-cilios",
          title: "Manutenção",
          image: "/images/cilios-fox.webp",
          duration: "1h a 1h30",
          note: "Até 20 dias depois da aplicação",
          items: [
            { id: "manut-cilios", title: "Manutenção de cílios", price: 70 },
          ],
        },
      ],
    },
    {
      id: "sobrancelhas",
      area: "Sobrancelhas",
      name: "Kalyni Alves",
      firstName: "Kalyni",
      role: "Designer de sobrancelhas",
      bio: "Design personalizado que respeita o formato do seu rosto. Com ou sem henna, a sobrancelha fica alinhada, natural e com mais definição.",
      instagramHandle: "@kalyni_alves",
      instagramUrl: "https://www.instagram.com/kalyni_alves",
      image: "/images/sobrancelha-henna.webp",
      decoratedNote: "Depois da henna, evite molhar a região nas primeiras 24 horas.",
      addons: [
        { id: "buco-add", name: "Buço", price: 10 },
      ],
      categories: [
        {
          id: "design",
          title: "Design de sobrancelhas",
          image: "/images/sobrancelha-henna.webp",
          duration: "30 a 50 min",
          note: "Refazer a cada 15 a 20 dias",
          items: [
            { id: "design-henna", title: "Design personalizado com henna", price: 40, popular: true },
            { id: "design", title: "Design personalizado", price: 30 },
            { id: "design-masc", title: "Design masculino", price: 30 },
            { id: "buco", title: "Buço", price: 10, duration: "10 min" },
          ],
        },
      ],
    },
  ],

  // Combo do Studio (valor real, post "Black Beauty" de novembro/2026)
  combo: {
    id: "combo-black-beauty",
    title: "Combo Black Beauty",
    price: 190,
    items: ["Unhas em gel", "Design de sobrancelhas com henna", "Extensão de cílios"],
    note: "Promoção do mês. Reserva com sinal de 50%. Consulte os modelos disponíveis.",
  },

  policies: [
    {
      title: "Onde fica",
      description: "R. Cidade de Campo de Santana, 311, em Mumbaba. O Studio atende só com hora marcada.",
    },
    {
      title: "Pontualidade",
      description: "Chegue 5 minutinhos antes. Atrasos acima de 15 minutos podem precisar ser remarcados.",
    },
    {
      title: "Desistência",
      description: "Imprevistos acontecem. Só pedimos que avise com um dia de antecedência para liberar o horário.",
    },
    {
      title: "Cílios e henna",
      description: "Venha sem maquiagem nos olhos e nas sobrancelhas. Assim o resultado fica mais bonito e dura mais.",
    },
  ],

  // Galeria (fotos reais da pasta do Studio). pro = id da profissional
  gallery: [
    { url: "/images/unhas-francesinha-quadrada.webp", tag: "Francesinha quadrada", pro: "unhas" },
    { url: "/images/cilios-glamour.webp", tag: "Volume glamour", pro: "cilios" },
    { url: "/images/sobrancelha-henna.webp", tag: "Design com henna", pro: "sobrancelhas" },
    { url: "/images/unhas-vermelho.webp", tag: "Vermelho clássico", pro: "unhas" },
    { url: "/images/cilios-fox.webp", tag: "Efeito fox", pro: "cilios" },
    { url: "/images/sobrancelha-design.webp", tag: "Design personalizado", pro: "sobrancelhas" },
    { url: "/images/unhas-francesinha-preta.webp", tag: "Francesinha preta", pro: "unhas" },
    { url: "/images/cilios-volume.webp", tag: "Volume brasileiro", pro: "cilios" },
    { url: "/images/unhas-perolado.webp", tag: "Perolado natural", pro: "unhas" },
  ],
};

export const professionals = studioConfig.professionals;
export const getPro = (id) => professionals.find((p) => p.id === id);

// Lista "achatada" de todos os serviços, já com a profissional de cada um
export const allServices = professionals.flatMap((pro) =>
  pro.categories.flatMap((cat) =>
    cat.items.map((item) => ({
      ...item,
      category: cat.title,
      categoryId: cat.id,
      proId: pro.id,
      proName: pro.name,
      proArea: pro.area,
      duration: item.duration || cat.duration,
    }))
  )
);

// Combo como "serviço" para o agendamento (atendido pela equipe toda)
export const comboService = {
  id: studioConfig.combo.id,
  title: studioConfig.combo.title,
  price: studioConfig.combo.price,
  category: "Combo do Studio",
  proId: "equipe",
  proName: "Equipe Donna Eva",
  proArea: "Unhas, cílios e sobrancelhas",
  duration: "cerca de 4h",
  detail: studioConfig.combo.items.join(" + "),
};

export const formatPrice = (value) =>
  `R$ ${Number(value).toFixed(2).replace(".", ",")}`;
