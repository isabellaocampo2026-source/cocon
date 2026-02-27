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
export const WHATSAPP_MESSAGE = encodeURIComponent(
  'Hola, me interesa saber más sobre el Sleep Cocktail Cocon 🌙'
)

// FAQ data
export const FAQ_ITEMS = [
  {
    question: '¿Qué es exactamente el "Sleep Cocktail" de Cocon?',
    answer:
      'Es la evolución científica del descanso. Desarrollamos una bebida nocturna en polvo basada en los protocolos de neurociencia modernos: combina Magnesio, L-Teanina (extracto de té verde) y Apigenina (extracto de manzanilla). Son los nutrientes exactos que tu cerebro necesita para relajarse profundamente de forma natural.',
  },
  {
    question: 'Si no tiene melatonina, ¿sí funciona para dormir?',
    answer:
      '¡Funciona mejor y más sano a largo plazo! La melatonina es una hormona que tu cerebro ya produce; si la tomas en pastillas seguido, le dices a tu cuerpo que deje de producirla. Nuestro cóctel le da a tu cuerpo los nutrientes esenciales (Magnesio y Teanina) para que PUEDA producir su propia melatonina potente y te despiertes con energía, no atontado.',
  },
  {
    question: '¿Por qué viene en polvo y no en pastillas?',
    answer:
      'Pura ciencia de asimilación. Para llegar a las dosis clínicas efectivas que realmente relajan tus músculos y cerebro, las pastillas tendrían que ser gigantescas (o tendrías que tomarte unas 6 a la vez). Nuestro formato en polvo "tipo pre-workout nocturno" de 1 scoop se disuelve riquísimo, el cuerpo lo asimila 3 veces más rápido y no maltrata el estómago con cápsulas plásticas.',
  },
  {
    question: '¿Puedo tomarlo todos los días aunque no tenga insomnio?',
    answer:
      '¡Absolutamente SÍ! De hecho, es lo más recomendado en el biohacking. El magnesio es clave para la recuperación muscular en deportistas, salud ósea y claridad mental. Es alimento puro, así que puedes tomarlo a diario por años para optimizar tu salud, sin miedo a generar tolerancia.',
  },
  {
    question: '¿Cómo funciona el pago contra entrega?',
    answer:
      'Es muy sencillo: haces tu pedido aquí, nosotros te contactamos por WhatsApp para confirmar, y cuando la transportadora (Inter Rapidísimo/Envia) llega a tu puerta, ahí pagas en efectivo o transferencia. Cero riesgos.',
  },
  {
    question: '¿Cuánto tarda en llegar mi pedido?',
    answer:
      'Enviamos en 24-48 horas después de confirmar tu pedido. Ciudades principales suelen recibir en 2-4 días hábiles dependiendo de la transportadora.',
  },
]

// Testimonials data
export const TESTIMONIALS = [
  {
    name: 'Carolina M.',
    city: 'Bogotá',
    text: 'Llevaba meses tomando "gomitas" y amanecía como anestesiada. Con este cóctel me duermo en 20 minutos de forma súper natural y despierto lista para entrenar. El sabor es increíble.',
    rating: 5,
  },
  {
    name: 'Andrés R.',
    city: 'Medellín',
    text: 'Escuché a Andrew Huberman hablar de este stack y armarlo por mi cuenta con 3 pastillas distintas era carísimo. Cocon lo tiene todo en un solo scoop. Funciona desde la primera noche.',
    rating: 5,
  },
  {
    name: 'María José L.',
    city: 'Cali',
    text: 'Me daba miedo depender de pastillas hormonales para dormir. Una bebida relajante de magnesio y teanina fue la mejor alternativa neuro-saludable. Descanso profundo y cero resaca.',
    rating: 5,
  },
  {
    name: 'Santiago P.',
    city: 'Barranquilla',
    text: 'Trabajo turnos nocturnos y la melatonina me arruinaba el ciclo natural al despertar. Con Cocon me relajo y me adapto mucho más rápido sin químicos duros. Súper recomendado.',
    rating: 4,
  },
]
