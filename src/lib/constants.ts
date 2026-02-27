// Product variants with pricing
export const VARIANTS = [
  {
    id: '1-frasco',
    label: '1 Frasco (30 scoops)',
    price: 29900,
    shipping: 9900,
    total: 39800,
    popular: false,
    best: false,
  },
  {
    id: '2-frascos',
    label: '2 Frascos (60 scoops)',
    price: 69900,
    shipping: 0,
    total: 69900,
    popular: true,
    best: false,
  },
  {
    id: '3-frascos',
    label: '3 Frascos (90 scoops)',
    price: 99900,
    shipping: 0,
    total: 99900,
    popular: false,
    best: true,
  },
] as const

export type VariantId = (typeof VARIANTS)[number]['id']

// Price map for API validation
export const PRICES: Record<string, number> = {
  '1-frasco': 39800,
  '2-frascos': 69900,
  '3-frascos': 99900,
}

// Top 25 Colombian cities for autocomplete
export const COLOMBIAN_CITIES = [
  'Bogotá',
  'Medellín',
  'Cali',
  'Barranquilla',
  'Cartagena',
  'Bucaramanga',
  'Cúcuta',
  'Pereira',
  'Manizales',
  'Santa Marta',
  'Ibagué',
  'Villavicencio',
  'Pasto',
  'Neiva',
  'Armenia',
  'Montería',
  'Sincelejo',
  'Valledupar',
  'Popayán',
  'Tunja',
  'Florencia',
  'Riohacha',
  'Soacha',
  'Soledad',
  'Envigado',
]

// WhatsApp config
export const WHATSAPP_NUMBER = '573053476462' // Replaced with their actual number from the previous code

// FAQ data
export const FAQ_ITEMS = [
  {
    question: '¿Qué es exactamente Cocon?',
    answer:
      'Es una bebida relajante 100% natural. Está hecha en polvo a base de magnesio y extractos de plantas milenarias que te ayudan a dormir profundamente y sin interrupciones, pero sin usar ningún químico.',
  },
  {
    question: 'Si no tiene químicos, ¿sí funciona para dormir?',
    answer:
      '¡Sí! Y es mucho mejor para ti. En lugar de "noquearte" artificialmente como las pastillas comunes, Cocon relaja tus músculos y sistema nervioso de forma natural. Te ayuda a quedarte dormido rápido y lo mejor de todo: sin despertar cansado.',
  },
  {
    question: '¿Cocon me va a crear dependencia?',
    answer:
      'Absolutamente no. Al no tener fármacos, melatonina artificial ni sedantes fuertes, tu cuerpo nunca se vuelve adicto. Puedes tomarlo solo las noches que sientas estrés, o tomarlo todas las noches con total seguridad.',
  },
  {
    question: '¿Por qué viene en bebida y no en pastillas?',
    answer:
      'Porque es mucho mejor para tu estómago y hace efecto increíblemente rápido. Mezclas 1 scoop en un poco de agua, sabe delicioso, y tu cuerpo lo absorbe en minutos, preparándote para la cama al instante.',
  },
  {
    question: '¿Cómo funciona el pago contra entrega?',
    answer:
      'Es súper seguro: haces tu pedido aquí, nosotros te escribimos por WhatsApp para confirmarlo, y se lo pagas en efectivo al mensajero (Inter Rapidísimo o Envia) justo cuando te entregue el producto en tu casa.',
  },
  {
    question: '¿Cuánto tiempo tarda en llegar mi pedido?',
    answer:
      'Lo enviamos en máximo 48 horas tras confirmar. Si estás en una ciudad principal, suele llegar en 2 o 4 días hábiles dependiendo de la transportadora.',
  },
]

// Testimonials data
export const TESTIMONIALS = [
  {
    name: 'Carolina M.',
    city: 'Bogotá',
    text: 'Llevaba meses sintiéndome pesada por culpa de unas pastillas para dormir. Con esta bebida me relajo en 20 minutos de forma súper suave y al día siguiente tengo muchísima energía. El sabor es riquísimo.',
    rating: 5,
  },
  {
    name: 'Andrés R.',
    city: 'Medellín',
    text: 'Yo no quería meterle químicos a mi cuerpo. Encontrar algo que fuera puro magnesio y plantas me salvó la vida. Duermo de corrido hasta la alarma.',
    rating: 5,
  },
  {
    name: 'María José L.',
    city: 'Cali',
    text: 'Me daba pánico volverme adicta a los somníferos. Mi doctor me recomendó buscar algo natural y Cocon es una maravilla. Descanso mi mente y no tengo resaca.',
    rating: 5,
  },
  {
    name: 'Santiago P.',
    city: 'Barranquilla',
    text: 'Por mi trabajo tengo turnos horribles y no lograba acomodar el sueño. Un vaso de esto frío antes de acostarme me relaja perfecto. Además llega rápido a la casa.',
    rating: 4,
  },
]
