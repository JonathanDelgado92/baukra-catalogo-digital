export const WHATSAPP_NUMBER = "593959776611";

export type Plan = {
  label: string;
  tier: string;
  name: string;
  ideal: string;
  price: number;
  featured?: boolean;
  features: string[];
  note: string;
  slug: string;
};

export const catalogPlans: Plan[] = [
  {
    label: "Esencial",
    tier: "Para comenzar",
    name: "Catálogo PDF",
    ideal:
      "Para negocios que necesitan presentar sus productos o servicios mediante un archivo visual, organizado y fácil de compartir.",
    price: 160,
    slug: "catalogo-pdf-160",
    features: [
      "Hasta 15 productos o servicios",
      "Diseño editorial personalizado",
      "Portada",
      "Organización por categorías",
      "Botones y enlaces clicables",
      "Optimización para compartir por WhatsApp",
      "Textos asistidos por IA",
      "Dos rondas de ajustes",
    ],
    note: "Archivo optimizado para pantalla y envío digital.",
  },
  {
    label: "Interactivo",
    tier: "Mejor equilibrio",
    name: "Catálogo Web",
    ideal:
      "Para negocios que necesitan compartir un solo enlace, organizar su oferta y facilitar consultas desde WhatsApp.",
    price: 290,
    featured: true,
    slug: "catalogo-web-290",
    features: [
      "Hasta 30 productos o servicios",
      "Categorías",
      "Buscador",
      "Fichas resumidas",
      "Botones de consulta o pedido por WhatsApp",
      "Diseño responsive",
      "Optimización para celular",
      "Navegación clara",
      "Estructura preparada para actualizaciones",
    ],
    note: "Especial para imprentas, distribuidores y negocios con variedad de productos.",
  },
  {
    label: "Premium",
    tier: "Mayor personalización",
    name: "Catálogo Premium IA",
    ideal:
      "Para marcas que necesitan una presentación más personalizada, visualmente diferenciada y preparada para crecer.",
    price: 430,
    slug: "catalogo-premium-ia-430",
    features: [
      "Hasta 60 productos o servicios",
      "Dirección visual premium",
      "Generación o mejora de imágenes con IA",
      "Filtros o navegación avanzada",
      "Formulario de cotización",
      "Analítica básica",
      "Capacitación",
      "Soporte inicial",
    ],
    note: "Carga adicional según calidad del material entregado.",
  },
];

export const landingPlans: Plan[] = [
  {
    label: "Esencial",
    tier: "Para comenzar",
    name: "Landing Start",
    ideal: "Para empezar con una presencia digital clara, profesional y funcional.",
    price: 250,
    slug: "landing-start-250",
    features: [
      "Hasta 5 secciones",
      "Diseño responsive",
      "Botón de WhatsApp",
      "Formulario básico",
      "Enlaces a redes sociales",
      "Copy asistido por IA",
      "SEO técnico inicial",
      "Una ronda de ajustes",
    ],
    note: "Dominio y hosting se cotizan aparte.",
  },
  {
    label: "Crecimiento",
    tier: "Mejor equilibrio",
    name: "Landing Conversion",
    ideal: "Para negocios que necesitan presentar una oferta específica y generar contactos.",
    price: 380,
    featured: true,
    slug: "landing-conversion-380",
    features: [
      "Hasta 8 secciones",
      "Arquitectura enfocada en conversión",
      "Diseño UI personalizado",
      "Copy comercial asistido por IA",
      "Formulario",
      "WhatsApp",
      "Analítica inicial",
      "Pixel básico",
      "Optimización de velocidad",
      "Dos rondas de ajustes",
    ],
    note: "La opción con mejor equilibrio entre inversión y resultado.",
  },
  {
    label: "Premium",
    tier: "Mayor personalización",
    name: "Landing Signature",
    ideal: "Para lanzamientos y marcas que necesitan mayor impacto visual y diferenciación.",
    price: 520,
    slug: "landing-signature-520",
    features: [
      "Dirección visual avanzada",
      "Prototipo",
      "Microinteracciones",
      "Recursos visuales creados o mejorados con IA",
      "Analítica inicial",
      "Integraciones personalizadas",
      "Pruebas responsive",
      "Tres rondas de ajustes",
    ],
    note: "Ideal para propuestas visuales de alto impacto.",
  },
];

export const webPlans: Plan[] = [
  {
    label: "Esencial",
    tier: "Para comenzar",
    name: "Web Start",
    ideal: "Para empresas que necesitan organizar su información y construir una presencia digital profesional.",
    price: 500,
    slug: "web-start-500",
    features: [
      "Hasta 5 páginas (inicio, servicios, nosotros, contacto + 1 adicional)",
      "Diseño responsive",
      "Formulario y WhatsApp",
      "SEO inicial",
      "Analítica básica",
      "Capacitación",
    ],
    note: "Dominio, hosting y licencias se cotizan aparte.",
  },
  {
    label: "Corporativa",
    tier: "Mejor equilibrio",
    name: "Web Growth",
    ideal: "Para negocios que necesitan una plataforma más completa para mostrar servicios, proyectos y contenido.",
    price: 780,
    featured: true,
    slug: "web-growth-780",
    features: [
      "Hasta 8 páginas",
      "Arquitectura UX",
      "Diseño UI personalizado",
      "Blog, portafolio o proyectos",
      "Copy asistido por IA",
      "Google Analytics",
      "Search Console",
      "Optimización de velocidad",
      "Treinta días de soporte",
    ],
    note: "Recomendada para pequeñas y medianas empresas.",
  },
  {
    label: "Premium",
    tier: "Mayor personalización",
    name: "Web Signature",
    ideal: "Para marcas que necesitan una experiencia digital personalizada, diferenciada y escalable.",
    price: 990,
    slug: "web-signature-990",
    features: [
      "Hasta 12 páginas",
      "Dirección visual avanzada",
      "Prototipo",
      "Sistema UI",
      "Microinteracciones",
      "Recursos visuales creados o mejorados con IA",
      "Integraciones especiales",
      "SEO inicial ampliado",
      "Sesenta días de soporte",
    ],
    note: "Proyectos más amplios se cotizan a medida.",
  },
];

export const addonGroups = [
  {
    title: "Infraestructura",
    body: "Lo necesario para que tu proyecto quede publicado, seguro y funcionando.",
    items: [
      { name: "Dominio y configuración", price: "Desde $25/año" },
      { name: "Hosting administrado", price: "Desde $90/año" },
      { name: "Mantenimiento web", price: "$45/mes" },
      { name: "Soporte prioritario", price: "$80/mes" },
    ],
  },
  {
    title: "Contenido",
    body: "Apoyo para que tus textos, productos e imágenes queden listos y bien presentados.",
    items: [
      { name: "Copywriting comercial", price: "Desde $90" },
      { name: "Banco visual creado con IA", price: "Desde $120" },
      { name: "Carga de productos organizada", price: "Desde $3/producto" },
      { name: "Redacción, retoque o adaptación", price: "Entre $5 y $8" },
    ],
  },
  {
    title: "Crecimiento",
    body: "Para cuando el proyecto necesita escalar más allá del paquete inicial.",
    items: [
      { name: "Automatización de prospectos", price: "Desde $150" },
      { name: "Integraciones adicionales", price: "Se cotiza" },
      { name: "Página adicional", price: "Entre $45 y $75" },
      { name: "Configuración avanzada de analítica", price: "Se cotiza" },
    ],
  },
];

export const compareRows = [
  {
    solution: "Catálogo PDF",
    idealFor: "WhatsApp, correo y fuerza comercial",
    content: "Productos o servicios organizados",
    goal: "Presentar y compartir rápidamente",
    price: "Desde $160",
  },
  {
    solution: "Catálogo web",
    idealFor: "Negocios con varios productos",
    content: "Categorías, buscador y fichas",
    goal: "Facilitar consultas y pedidos",
    price: "Desde $290",
  },
  {
    solution: "Landing page",
    idealFor: "Campañas, servicios y lanzamientos",
    content: "Una ruta de navegación",
    goal: "Captar contactos o vender una oferta concreta",
    price: "Desde $250",
  },
  {
    solution: "Página web",
    idealFor: "Empresas y marcas consolidadas",
    content: "Varias páginas y secciones",
    goal: "Construir presencia completa y escalable",
    price: "Desde $500",
  },
];

export const catalogExamples = [
  {
    who: "Imprenta o papelería",
    categories: ["Tarjetas", "Flyers", "Lonas", "Adhesivos", "Empaques", "Acabados", "Material publicitario"],
  },
  {
    who: "Ropa",
    categories: ["Camisetas", "Hoodies", "Pantalones", "Tallas", "Colores", "Colecciones"],
  },
  {
    who: "Servicios",
    categories: ["Servicio", "Descripción", "Precio inicial", "Tiempo estimado", "Botón de cotización"],
  },
];

export const catalogBenefits = [
  "Organizar productos y servicios",
  "Separar la oferta por categorías",
  "Mostrar precios y características",
  "Compartir un solo enlace",
  "Facilitar pedidos por WhatsApp",
  "Evitar enviar decenas de fotografías individualmente",
  "Actualizar información con mayor facilidad",
  "Mejorar la presentación profesional",
  "Revisar productos desde el celular",
];

export const process = [
  { step: "01", title: "Entendemos", body: "Objetivos, público, oferta, productos, servicios y materiales disponibles." },
  { step: "02", title: "Estructuramos", body: "Organización del contenido, propuesta de valor, jerarquías y experiencia." },
  { step: "03", title: "Diseñamos y desarrollamos", body: "Dirección visual, prototipo, producción, programación y optimización." },
  { step: "04", title: "Revisamos y publicamos", body: "Ajustes, pruebas responsive, lanzamiento, capacitación y soporte contratado." },
];

export const faqs = [
  {
    q: "¿Qué servicio necesita mi negocio?",
    a: "Depende de cuántos productos o servicios tengas y qué acción esperas del cliente. Si tienes varios productos, un catálogo digital suele ser lo más práctico; si necesitas presentar una oferta puntual, una landing page funciona mejor. Escríbenos y te orientamos sin compromiso.",
  },
  {
    q: "¿Cuál es la diferencia entre un catálogo PDF y un catálogo web?",
    a: "El catálogo PDF es un archivo visual pensado para compartir por WhatsApp o correo. El catálogo web es un enlace interactivo con categorías, buscador y botones de pedido, ideal si actualizas tu oferta seguido.",
  },
  {
    q: "¿Puedo actualizar los productos después?",
    a: "Sí. Te explicamos cómo hacer cambios simples tú mismo; para actualizaciones más grandes, el complemento de carga de productos organizada está pensado justamente para eso.",
  },
  {
    q: "¿El dominio y el hosting están incluidos?",
    a: "No. Se cotizan aparte según la plataforma que elijas; en la sección de servicios complementarios encuentras valores de referencia.",
  },
  {
    q: "¿Debo entregar los textos y las fotografías?",
    a: "Idealmente sí, pero no es obligatorio. Si no los tienes listos, nos apoyamos en redacción asistida por IA y recursos visuales de referencia que luego puedes reemplazar.",
  },
  {
    q: "¿La página funcionará correctamente en celular?",
    a: "Sí. Todos los paquetes son responsive y se prueban específicamente en pantallas de celular, que es donde la mayoría de tus clientes te va a encontrar.",
  },
  {
    q: "¿Cuántos cambios están incluidos?",
    a: "Depende del paquete: cada uno indica el número de rondas de ajustes incluidas en su lista de características, arriba en la sección de servicios.",
  },
  {
    q: "¿Cómo se realizan los pagos?",
    // TODO: confirmar la política de pagos definitiva de BAUKRA y ajustar este texto
    a: "Se coordina un anticipo para iniciar el proyecto y el saldo restante antes de la entrega final. Los detalles se confirman en la propuesta.",
  },
  {
    q: "¿Puedo agregar más productos posteriormente?",
    a: "Sí, siempre que no superes el límite de tu paquete. Si necesitas más, el complemento de carga de productos organizada cubre justamente ese caso.",
  },
  {
    q: "¿La inteligencia artificial reemplaza el trabajo de diseño?",
    a: "No. La inteligencia artificial se utiliza como una herramienta para agilizar investigación, producción, contenido y optimización. Las decisiones estratégicas, visuales y de experiencia permanecen bajo dirección humana.",
  },
];
