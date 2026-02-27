// Product variants with pricing
export const VARIANTS = [
  {
    id: '1-frasco',
    label: '1 Paquete (30 gomitas)',
    price: 29900,
    shipping: 9900,
    total: 39800,
    popular: false,
    best: false,
  },
  {
    id: '2-frascos',
    label: '2 Paquetes (60 gomitas)',
    price: 69900,
    shipping: 0,
    total: 69900,
    popular: true,
    best: false,
  },
  {
    id: '3-frascos',
    label: '3 Paquetes (90 gomitas)',
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
export const WHATSAPP_NUMBER = '573000000000' // Replace with real number
export const WHATSAPP_MESSAGE = encodeURIComponent(
  'Hola, me interesa saber más sobre las gomitas Cocon para dormir 🌙'
)

// FAQ data
export const FAQ_ITEMS = [
  {
    question: '¿Qué es la melatonina y es segura?',
    answer:
      'La melatonina es una hormona que tu cuerpo produce de forma natural para regular el sueño. Nuestras gomitas contienen melatonina en dosis seguras (3mg por gomita) junto con extractos naturales relajantes. Es un suplemento, no un medicamento.',
  },
  {
    question: '¿Las gomitas Cocon crean dependencia?',
    answer:
      'No. A diferencia de algunos medicamentos para dormir, la melatonina no genera dependencia ni tolerancia. Puedes dejar de tomarla cuando quieras sin efectos secundarios.',
  },
  {
    question: '¿Cómo funciona el pago contra entrega?',
    answer:
      'Es muy sencillo: haces tu pedido aquí, nosotros te contactamos por WhatsApp para confirmar, y cuando la transportadora llega a tu puerta, ahí pagas. No necesitas tarjeta de crédito ni hacer transferencias.',
  },
  {
    question: '¿Cuánto tarda en llegar mi pedido?',
    answer:
      'Enviamos en 24-48 horas después de confirmar tu pedido. El tiempo de entrega es de 2-5 días hábiles dependiendo de tu ciudad. Ciudades principales suelen recibir en 2-3 días.',
  },
  {
    question: '¿Puedo tomar melatonina con otros suplementos?',
    answer:
      'La melatonina generalmente es compatible con la mayoría de suplementos naturales. Sin embargo, si estás tomando medicamentos recetados, te recomendamos consultar con tu médico antes.',
  },
  {
    question: '¿Y si no me funciona?',
    answer:
      'La melatonina funciona para la gran mayoría de personas. Los efectos se notan desde la primera noche. Si después de una semana de uso constante no notas mejora, contáctanos por WhatsApp y buscamos una solución.',
  },
]

// Testimonials data
export const TESTIMONIALS = [
  {
    name: 'Carolina M.',
    city: 'Bogotá',
    text: 'Llevaba meses sin dormir bien. Con las gomitas me duermo en 20 minutos y despierto sin esa sensación pesada. Las amo.',
    rating: 5,
  },
  {
    name: 'Andrés R.',
    city: 'Medellín',
    text: 'Probé tés, pastillas y de todo. Esto es diferente: sabe rico, es natural, y funciona desde la primera noche. Ya voy por mi segundo paquete.',
    rating: 5,
  },
  {
    name: 'María José L.',
    city: 'Cali',
    text: 'Me daba miedo depender de pastillas para dormir. La melatonina en gomita fue la mejor alternativa. Duermo profundo y despierto descansada.',
    rating: 5,
  },
  {
    name: 'Santiago P.',
    city: 'Barranquilla',
    text: 'Trabajo turnos nocturnos y mi sueño era un desastre. Con Cocon me adapto mucho más rápido. Lo recomiendo mucho.',
    rating: 4,
  },
]
