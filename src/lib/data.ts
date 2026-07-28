export const WHATSAPP_NUMBER = "593959776611";

export type Plan = {
  label: string;
  name: string;
  ideal: string;
  price: number;
  featured?: boolean;
  features: string[];
  note: string;
};

export const landingPlans: Plan[] = [
  {
    label: "Esencial",
    name: "Landing Start",
    ideal:
      "Para profesionales, marcas personales y emprendimientos que necesitan una presencia rápida y profesional.",
    price: 250,
    features: [
      "Hasta 5 secciones",
      "Diseño responsive",
      "Botón de WhatsApp",
      "Formulario básico",
      "Enlaces a redes sociales",
      "Copy optimizado con asistencia de IA",
      "SEO técnico inicial",
      "Una ronda de ajustes",
    ],
    note: "Dominio y hosting se cotizan aparte.",
  },
  {
    label: "Crecimiento",
    name: "Landing Conversion",
    ideal:
      "La opción recomendada para captar contactos, cotizaciones o ventas desde campañas y redes.",
    price: 380,
    featured: true,
    features: [
      "Hasta 8 secciones",
      "Arquitectura enfocada en conversión",
      "Diseño UI personalizado",
      "Copy comercial asistido por IA",
      "Formulario y conexión con WhatsApp",
      "Analítica inicial y pixel básico",
      "Optimización de velocidad",
      "Dos rondas de ajustes",
    ],
    note: "La opción con mejor equilibrio entre inversión y resultado.",
  },
  {
    label: "Premium",
    name: "Landing Signature",
    ideal:
      "Para lanzamientos, productos destacados y marcas que necesitan mayor impacto visual.",
    price: 520,
    features: [
      "Dirección visual avanzada",
      "Prototipo previo",
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

export const catalogPlans: Plan[] = [
  {
    label: "Esencial",
    name: "Catálogo PDF",
    ideal: "Para compartir productos o servicios por WhatsApp, correo y redes.",
    price: 160,
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
    name: "Catálogo Web",
    ideal:
      "La opción recomendada para organizar productos y recibir pedidos desde un solo enlace.",
    price: 290,
    featured: true,
    features: [
      "Hasta 30 productos o servicios",
      "Categorías y buscador",
      "Fichas resumidas",
      "Botones de consulta o pedido por WhatsApp",
      "Diseño responsive",
      "Optimización para celular",
      "Navegación clara y rápida",
    ],
    note: "Especial para imprentas, distribuidores y negocios con variedad de productos.",
  },
  {
    label: "Premium",
    name: "Catálogo Premium IA",
    ideal: "Para marcas que necesitan mayor volumen, imagen y automatización.",
    price: 430,
    features: [
      "Hasta 60 productos o servicios",
      "Dirección visual premium",
      "Generación, mejora o adaptación de imágenes con IA",
      "Filtros o navegación avanzada",
      "Formulario de cotización",
      "Analítica básica",
      "Capacitación y soporte inicial",
    ],
    note: "Carga adicional según calidad del material entregado.",
  },
];

export const webPlans: Plan[] = [
  {
    label: "Esencial",
    name: "Web Start",
    ideal: "Una estructura profesional para presentar empresa y servicios.",
    price: 500,
    features: [
      "Hasta 5 páginas (inicio, servicios, nosotros, contacto + 1 adicional)",
      "Diseño responsive",
      "Formulario y botón de WhatsApp",
      "SEO inicial y analítica básica",
      "Capacitación incluida",
    ],
    note: "Dominio, hosting y licencias se cotizan aparte.",
  },
  {
    label: "Corporativa",
    name: "Web Growth",
    ideal:
      "La opción recomendada para empresas que necesitan una presencia completa y escalable.",
    price: 780,
    featured: true,
    features: [
      "Hasta 8 páginas",
      "Arquitectura UX",
      "Diseño UI personalizado",
      "Blog, portafolio o sección de proyectos",
      "Copy asistido por IA",
      "Google Analytics + Search Console",
      "Optimización de velocidad",
      "Treinta días de soporte",
    ],
    note: "Recomendada para pequeñas y medianas empresas.",
  },
  {
    label: "Premium",
    name: "Web Signature",
    ideal: "Para marcas que requieren una experiencia digital diferenciada.",
    price: 990,
    features: [
      "Hasta 12 páginas",
      "Dirección visual avanzada y prototipo",
      "Sistema visual UI y microinteracciones",
      "Recursos visuales generados o mejorados con IA",
      "Integraciones especiales",
      "SEO inicial ampliado",
      "Sesenta días de soporte",
    ],
    note: "Proyectos más amplios se cotizan a medida.",
  },
];

export const addons = [
  { name: "Dominio y configuración", price: "Desde $25/año", detail: "Registro y configuración inicial." },
  { name: "Hosting administrado", price: "Desde $90/año", detail: "Alojamiento, SSL y respaldo básico." },
  { name: "Mantenimiento web", price: "$45/mes", detail: "Actualizaciones, seguridad y pequeños cambios." },
  { name: "Copywriting comercial", price: "Desde $90", detail: "Investigación y redacción enfocada en conversión." },
  { name: "Banco visual con IA", price: "Desde $120", detail: "Imágenes o composiciones alineadas a la marca." },
  { name: "Automatización de prospectos", price: "Desde $150", detail: "Formulario, correo, hoja de cálculo o CRM." },
  { name: "Página adicional", price: "Entre $45 y $75", detail: "Según complejidad de la página." },
  { name: "Carga de producto organizado", price: "Desde $3 c/u", detail: "Según calidad y organización de la información." },
  { name: "Redacción, retoque o adaptación", price: "Entre $5 y $8", detail: "Por producto, según el trabajo requerido." },
  { name: "Soporte prioritario", price: "$80/mes", detail: "Atención y ajustes con prioridad." },
];

export const compareRows = [
  {
    solution: "Landing page",
    idealFor: "Campañas, servicios, eventos y lanzamientos",
    content: "Una ruta de navegación",
    goal: "Captar contactos o vender una oferta concreta",
    price: "Desde $250",
  },
  {
    solution: "Catálogo PDF",
    idealFor: "WhatsApp, correo y fuerza comercial",
    content: "Productos o servicios organizados",
    goal: "Presentar y compartir rápidamente",
    price: "Desde $160",
  },
  {
    solution: "Catálogo web",
    idealFor: "Imprentas, distribuidores y negocios con variedad",
    content: "Categorías, fichas y consultas",
    goal: "Facilitar exploración y pedidos",
    price: "Desde $290",
  },
  {
    solution: "Página web",
    idealFor: "Empresas y marcas consolidadas",
    content: "Varias páginas y secciones",
    goal: "Construir presencia completa y escalable",
    price: "Desde $500",
  },
];

export const useCases = [
  {
    who: "Imprenta o papelería",
    title: "Muchos productos, acabados y variantes",
    body: "Necesita organizar decenas de referencias por categoría y recibir pedidos sin perder tiempo respondiendo lo mismo por WhatsApp.",
    rec: "Recomendado: Catálogo Web",
  },
  {
    who: "Marca de ropa o accesorios",
    title: "Colecciones que cambian seguido",
    body: "Comparte novedades por Instagram y WhatsApp; necesita imágenes cuidadas y una navegación rápida por categoría.",
    rec: "Recomendado: Catálogo Premium IA",
  },
  {
    who: "Profesional independiente",
    title: "Presencia clara para captar clientes",
    body: "Quiere mostrar sus servicios, generar confianza y recibir contactos desde una sola página.",
    rec: "Recomendado: Landing Start o Landing Conversion",
  },
  {
    who: "Distribuidor con varios proveedores",
    title: "Volumen alto de productos y pedidos",
    body: "Necesita un catálogo amplio, filtros de navegación y un flujo constante de consultas por WhatsApp.",
    rec: "Recomendado: Catálogo Premium IA + automatización de prospectos",
  },
];

export const process = [
  { step: "01", title: "Diagnóstico", body: "Revisamos objetivos, público, oferta, referencias y materiales disponibles." },
  { step: "02", title: "Estrategia", body: "Definimos estructura, mensajes, jerarquías y recorrido del usuario." },
  { step: "03", title: "Dirección visual", body: "Construimos el concepto gráfico, sistema UI o prototipo según el paquete." },
  { step: "04", title: "Producción", body: "Diseñamos y desarrollamos usando IA como apoyo para contenido, imágenes y código." },
  { step: "05", title: "Revisión", body: "Presentamos el proyecto, consolidamos observaciones y aplicamos los ajustes incluidos." },
  { step: "06", title: "Lanzamiento", body: "Publicamos, comprobamos responsividad y entregamos capacitación básica." },
];

export const faqs = [
  {
    q: "¿Cuánto tiempo toma un proyecto?",
    a: "Depende del paquete elegido y de qué tan lista esté tu información (textos, precios, imágenes). Te confirmamos un rango de tiempo concreto en la propuesta.",
  },
  {
    q: "¿Qué pasa si no tengo fotos o textos listos?",
    a: "No hay problema. Nos apoyamos en redacción asistida por IA y recursos visuales de referencia que después puedes reemplazar por tus propios materiales.",
  },
  {
    q: "¿Puedo editar el contenido después de la entrega?",
    a: "Sí. Te explicamos cómo actualizar textos, precios y el número de WhatsApp sin depender de un desarrollador para cambios simples.",
  },
  {
    q: "¿El dominio y el hosting están incluidos?",
    a: "No. Se cotizan aparte según la plataforma que elijas; en la sección de complementos encuentras valores de referencia.",
  },
  {
    q: "¿Cómo funciona el pago?",
    // TODO: confirmar la política de pagos definitiva de BAUKRA y ajustar este texto
    a: "Se coordina un anticipo para iniciar el proyecto y el saldo restante antes de la entrega final. Los detalles se confirman en la propuesta.",
  },
  {
    q: "¿Qué pasa si no sé qué paquete necesito?",
    a: "Escríbenos por WhatsApp contándonos qué vendes y cuántos productos o servicios tienes. Te recomendamos la opción más adecuada sin compromiso.",
  },
];
