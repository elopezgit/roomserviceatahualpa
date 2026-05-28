// ─── CONFIGURACIÓN DE LA HOSTERÍA MUNICIPAL ATAHUALPA YUPANQUI ────────────────────────
const WA_NUMBER = '5493816250447'; // Teléfono oficial de Room Service
const INSTAGRAM_USER = 'hosteria_atahualpa_yupanqui';
const ADDRESS_TEXT = 'Paysandú 2400 - Tafí Viejo - Tucumán';
const PHONE_CONTACT = '3815000774';

const MENU = [
  // ── CATEGORÍA: DESAYUNOS (desayunos) ──────────────────────────
  {
    id: 1,
    cat: 'desayunos',
    name: 'Desayuno Atahualpa Premium',
    desc: 'Café de especialidad o té en hebras premium, jugo de naranja recién exprimido, tostadas de pan de campo casero, mermelada regional de cayote, manteca, queso crema y una selección de frutos secos.',
    ingredients: 'Café/Té, Jugo Exprimido, Pan de Campo, Dulce de Cayote, Manteca, Queso Crema, Frutos Secos',
    price: 3800,
    img: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=600&auto=format&fit=crop&q=80',
    emoji: '🥐',
    tags: ['exclusivo', 'completo'],
    rating: 5.0
  },
  {
    id: 2,
    cat: 'desayunos',
    name: 'Desayuno de la Yunga (Saludable)',
    desc: 'Infusión a elección servida con leche descremada o vegetal, yogur natural descremado artesanal, granola crocante de la casa, ensalada de frutas de estación y tostadas de pan integral con queso port salut y palta.',
    ingredients: 'Infusión, Yogur Natural, Granola Casera, Frutas de Estación, Pan Integral, Palta, Queso Port Salut',
    price: 4200,
    img: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&auto=format&fit=crop&q=80',
    emoji: '🥑',
    tags: ['saludable', 'fit'],
    rating: 4.9
  },

  // ── CATEGORÍA: CAFETERÍA (cafeteria) ──────────────────────────
  {
    id: 3,
    cat: 'cafeteria',
    name: 'Capuccino Atahualpa con Cacao',
    desc: 'Espresso doble de granos seleccionados combinado con leche vaporizada emulsionada, decorado con hilos de chocolate y espolvoreado con cacao fino de aroma.',
    ingredients: 'Espresso Doble, Leche Emulsionada, Canela, Cacao de Aroma',
    price: 1800,
    img: 'https://images.unsplash.com/photo-1570968915860-54d5c301fc9f?w=600&auto=format&fit=crop&q=80',
    emoji: '☕',
    tags: ['recomendado'],
    rating: 4.8
  },
  {
    id: 4,
    cat: 'cafeteria',
    name: 'Café Espresso de Altura',
    desc: 'Café espresso corto, intenso y con una crema avellanada persistente, elaborado con granos seleccionados cosechados a gran altura.',
    ingredients: 'Granos Selección de Altura, Agua Purificada',
    price: 1200,
    img: 'https://images.unsplash.com/photo-1510972527409-cef6e4a4d64e?w=600&auto=format&fit=crop&q=80',
    emoji: '☕',
    tags: ['clasico'],
    rating: 4.7
  },
  {
    id: 5,
    cat: 'cafeteria',
    name: 'Té de Hebras Orgánicas de la Sierra',
    desc: 'Infusión artesanal de té negro o verde en hebras orgánicas enteras, perfumado con cáscaras de cítricos tucumanos y flores silvestres.',
    ingredients: 'Hebras Orgánicas, Limón, Naranja, Pétalos Silvestres',
    price: 1500,
    img: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=600&auto=format&fit=crop&q=80',
    emoji: '🫖',
    tags: ['relajante'],
    rating: 4.9
  },

  // ── CATEGORÍA: OPCIONES REGIONALES TUCUMANAS (regionales) ────────────────────
  {
    id: 6,
    cat: 'regionales',
    name: 'Empanadas Tucumanas de Ternera (Trío)',
    desc: 'Tres empanadas tradicionales tucumanas de ternera cortada a cuchillo, cocidas al horno de barro con abundante cebolla verde, huevo, comino y pimentón premium de los valles. Servidas con limón tucumano fresco.',
    ingredients: 'Ternera a Cuchillo, Cebolla de Verdeo, Huevo, Comino, Limón',
    price: 3600,
    img: 'https://images.unsplash.com/photo-1541532713592-79a0317b6b77?w=600&auto=format&fit=crop&q=80',
    emoji: '🥟',
    tags: ['tucumano', 'imperdible'],
    rating: 5.0
  },
  {
    id: 7,
    cat: 'regionales',
    name: 'Humita en Olla "Atahualpa"',
    desc: 'Clásica humita dulce y cremosa elaborada con choclo fresco rallado, cebolla caramelizada, morrón y zapallo plomo, fusionada con abundante queso de cabra derretido y sazonada con pimentón dulce.',
    ingredients: 'Choclo Fresco, Zapallo, Cebolla, Queso de Cabra, Pimentón',
    price: 3900,
    img: 'https://images.unsplash.com/photo-1546964124-0cce460f38ef?w=600&auto=format&fit=crop&q=80',
    emoji: '🌽',
    tags: ['tradicional', 'vegetariano'],
    rating: 4.9
  },
  {
    id: 8,
    cat: 'regionales',
    name: 'Tamal de Campo en Chala',
    desc: 'Masa fina y suave a base de maíz criollo relleno con carne de ternera deshilachada sumamente tierna, pasas de uva y huevo duro, envuelto y cocido al vapor en chala natural.',
    ingredients: 'Maíz Criollo, Ternera Tierna, Pasas, Huevo, Chala',
    price: 2200,
    img: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&auto=format&fit=crop&q=80',
    emoji: '🌽',
    tags: ['tucumano'],
    rating: 4.8
  },

  // ── CATEGORÍA: CARNES (carnes) ───────────────────────────────────────────────
  {
    id: 9,
    cat: 'carnes',
    name: 'Ojo de Bife Grillado en Costra de Hierbas',
    desc: 'Exclusivo corte premium de ojo de bife (400g) cocido al punto deseado en parrilla, cubierto de una costra fina de manteca de chimichurri y hierbas frescas de la yunga. Acompañado de papas rústicas al romero.',
    ingredients: 'Ojo de Bife Premium, Manteca de Hierbas, Papas Rústicas, Romero',
    price: 9800,
    img: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop&q=80',
    emoji: '🥩',
    tags: ['gourmet', 'destacado'],
    rating: 5.0
  },
  {
    id: 10,
    cat: 'carnes',
    name: 'Suprema Gourmet Atahualpa',
    desc: 'Suprema de pechuga de pollo de campo rellena con mozzarella hilada, panceta ahumada crujiente y tomates secos confitados, rebozada en pan artesanal y frutos secos. Acompañada con puré cremoso de calabaza y miel de caña.',
    ingredients: 'Pollo de Campo, Mozzarella, Panceta, Tomates Confitados, Calabaza',
    price: 7800,
    img: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=600&auto=format&fit=crop&q=80',
    emoji: '🍗',
    tags: ['exclusivo'],
    rating: 4.8
  },
  {
    id: 11,
    cat: 'carnes',
    name: 'Bondiola de Cerdo laqueada al Torrontés',
    desc: 'Bondiola de cerdo braseada lentamente durante 6 horas en reducción de vino blanco Torrontés tucumano y miel. Acompañada con batatas caramelizadas al horno y cebollas moradas asadas.',
    ingredients: 'Bondiola, Torrontés de los Valles, Miel, Batatas, Cebolla Asada',
    price: 8900,
    img: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop&q=80',
    emoji: '🥩',
    tags: ['braseado'],
    rating: 4.9
  },

  // ── CATEGORÍA: PASTAS (pastas) ───────────────────────────────────────────────
  {
    id: 12,
    cat: 'pastas',
    name: 'Sorrentinos Premium en Salsa de Champiñones',
    desc: 'Sorrentinos caseros gigantes rellenos con jamón cocido natural y mozzarella hilada, bañados en una suntuosa crema de champiñones parís y portobellos frescos con finas hebras de queso parmesano.',
    ingredients: 'Sorrentinos Caseros, Crema, Champiñones, Portobello, Parmesano',
    price: 6800,
    img: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=600&auto=format&fit=crop&q=80',
    emoji: '🍝',
    tags: ['casero', 'pasta-fresca'],
    rating: 4.9
  },
  {
    id: 13,
    cat: 'pastas',
    name: 'Tallarines al Huevo con Ragú de Ternera',
    desc: 'Tallarines caseros amasados al huevo frescos al dente, acompañados con un ragú de ternera estofado lentamente al malbec con tomates italianos y albahaca fresca de nuestra huerta.',
    ingredients: 'Tallarines al Huevo, Estofado de Ternera, Malbec, Albahaca',
    price: 6200,
    img: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=600&auto=format&fit=crop&q=80',
    emoji: '🍝',
    tags: ['clasico'],
    rating: 4.8
  },

  // ── CATEGORÍA: MINUTAS (minutas) ──────────────────────────────────────────────
  {
    id: 14,
    cat: 'minutas',
    name: 'Sándwich de Lomo Gourmet Completo',
    desc: 'Finos filetes de lomo de ternera premium en pan baguette francés tostado, con queso cheddar fundido, jamón cocido, huevo frito a la plancha, lechuga capuchina, rodajas de tomate y aderezo alioli casero. Acompañado de papas fritas crocantes.',
    ingredients: 'Lomo Premium, Pan Baguette, Huevo, Cheddar, Lechuga, Tomate, Papas',
    price: 7500,
    img: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?w=600&auto=format&fit=crop&q=80',
    emoji: '🥪',
    tags: ['sabor-unico', 'abundante'],
    rating: 5.0
  },
  {
    id: 15,
    cat: 'minutas',
    name: 'Hamburguesa Atahualpa Deluxe',
    desc: 'Medallón de carne de ternera seleccionada blends (200g) a la parrilla, en suave pan brioche tostado con manteca, doble queso cheddar fundido, panceta laqueada crujiente, cebolla caramelizada al vino y aderezo ahumado de la casa. Con papas bastón fritas.',
    ingredients: 'Carne Premium Blends, Pan Brioche, Cheddar, Panceta, Cebolla Caramelizada',
    price: 6500,
    img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&auto=format&fit=crop&q=80',
    emoji: '🍔',
    tags: ['clasico-americano'],
    rating: 4.9
  },

  // ── CATEGORÍA: SNACKS (snacks) ───────────────────────────────────────────────
  {
    id: 16,
    cat: 'snacks',
    name: 'Tabla Atahualpa de Fiambres y Quesos',
    desc: 'Una fina selección gourmet de jamón crudo serrano estacionado, salame de Mercedes, bondiola artesanal, quesos seleccionados (Pategrás, Cabra regional y Azul), aceitunas marinadas en hierbas y panes de campo horneados.',
    ingredients: 'Jamón Crudo, Salame, Bondiola, Queso de Cabra, Queso Azul, Panes',
    price: 8500,
    img: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&auto=format&fit=crop&q=80',
    emoji: '🧀',
    tags: ['para-compartir', 'premium'],
    rating: 5.0
  },
  {
    id: 17,
    cat: 'snacks',
    name: 'Papas Rústicas con Cheddar y Panceta',
    desc: 'Abundante porción de papas rústicas con piel crujientes, bañadas con salsa suave de queso cheddar fundido y espolvoreadas con panceta ahumada crocante y cebollín verde fresco picado.',
    ingredients: 'Papas Rústicas con Piel, Queso Cheddar, Panceta Crujiente, Cebollín',
    price: 4500,
    img: 'https://images.unsplash.com/photo-1576107232684-1279f390859f?w=600&auto=format&fit=crop&q=80',
    emoji: '🍟',
    tags: ['favorito'],
    rating: 4.7
  },

  // ── CATEGORÍA: POSTRES (postres) ─────────────────────────────────────────────
  {
    id: 18,
    cat: 'postres',
    name: 'Flan Casero con Dulce de Leche y Crema',
    desc: 'Clásico flan casero horneado lentamente a baño maría con huevos de campo y esencia de vainilla natural, servido con copete abundante de dulce de leche colonial y crema chantilly batida a mano.',
    ingredients: 'Huevos de Campo, Vainilla, Dulce de Leche, Crema',
    price: 2800,
    img: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&auto=format&fit=crop&q=80',
    emoji: '🍮',
    tags: ['tradicional'],
    rating: 4.9
  },
  {
    id: 19,
    cat: 'postres',
    name: 'Volcán de Chocolate Belga',
    desc: 'Espectacular pastel tibio de chocolate amargo belga con un corazón líquido suntuoso de chocolate fundido, acompañado con una bocha gourmet de helado de crema americana y reducción de frutos rojos.',
    ingredients: 'Chocolate Belga, Huevo, Azúcar, Helado, Frutos Rojos',
    price: 3900,
    img: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&auto=format&fit=crop&q=80',
    emoji: '🍫',
    tags: ['gourmet', 'chocolate'],
    rating: 5.0
  },
  {
    id: 20,
    cat: 'postres',
    name: 'Quesillo de Cabra con Cayote y Nueces',
    desc: 'Un postre autóctono incomparable: quesillo artesanal de cabra tucumano servido con dulce casero de cayote norteño en hebras y nueces crujientes seleccionadas de la zona.',
    ingredients: 'Quesillo de Cabra, Dulce de Cayote Regional, Nueces Valles',
    price: 3200,
    img: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600&auto=format&fit=crop&q=80',
    emoji: '🧀',
    tags: ['regional-tucumano'],
    rating: 5.0
  },

  // ── CATEGORÍA: BEBIDAS (bebidas) ─────────────────────────────────────────────
  {
    id: 21,
    cat: 'bebidas',
    name: 'Limonada de Menta y Jengibre',
    desc: 'Bebida natural refrescante elaborada en el momento con limones tucumanos recién exprimidos, hojas de menta de nuestra huerta orgánica, jengibre fresco rallado y endulzado a gusto.',
    ingredients: 'Limon tucumano, Menta Organica, Jengibre Fresco, Hielo',
    price: 1800,
    img: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=600&auto=format&fit=crop&q=80',
    emoji: '🍋',
    tags: ['refrescante', 'natural'],
    rating: 4.8
  },
  {
    id: 22,
    cat: 'bebidas',
    name: 'Agua Mineral Premium de Manantial',
    desc: 'Agua mineral natural sin gas embotellada de manantiales andinos purificada en origen, servida helada.',
    ingredients: 'Agua Mineral',
    price: 1100,
    img: 'https://images.unsplash.com/photo-1550507992-eb63ffee0847?w=600&auto=format&fit=crop&q=80',
    emoji: '💧',
    tags: ['hidratante'],
    rating: 4.6
  },
  {
    id: 23,
    cat: 'bebidas',
    name: 'Refrescos Tradicionales (Línea Coca-Cola)',
    desc: 'Gaseosas tradicionales en lata (354ml) servidas bien frías con rodaja de limón tucumano.',
    ingredients: 'Refresco Seleccionado, Limón, Hielo',
    price: 1300,
    img: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=600&auto=format&fit=crop&q=80',
    emoji: '🥤',
    tags: ['clasico'],
    rating: 4.5
  },

  // ── CATEGORÍA: TRAGOS (tragos) ───────────────────────────────────────────────
  {
    id: 24,
    cat: 'tragos',
    name: 'Gin Tonic Premium de los Cerros',
    desc: 'Gin artesanal premium argentino infusionado con bayas de enebro locales y tónica premium, aromatizado con rodaja de pomelo rosado y una ramita de romero fresco quemada.',
    ingredients: 'Gin Artesanal, Tónica Premium, Pomelo Rosado, Romero',
    price: 3600,
    img: 'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=600&auto=format&fit=crop&q=80',
    emoji: '🍸',
    tags: ['de-autor'],
    rating: 4.9
  },
  {
    id: 25,
    cat: 'tragos',
    name: 'Copa de Vino Malbec de Altura',
    desc: 'Exclusiva copa de vino Malbec de bodegas de altura de los valles calchaquíes, con cuerpo robusto y aromas a frutos rojos, ideal para acompañar carnes rojas y pastas.',
    ingredients: 'Uvas Malbec de Altura, Valles Calchaquíes',
    price: 2500,
    img: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=600&auto=format&fit=crop&q=80',
    emoji: '🍷',
    tags: ['seleccion-valles'],
    rating: 4.9
  },
  {
    id: 26,
    cat: 'tragos',
    name: 'Fernet Branca Tradicional Argentino',
    desc: 'El trago nacional por excelencia servido con la proporción ideal de Fernet Branca de 75/25, abundante hielo cristalino y Coca-Cola clásica.',
    ingredients: 'Fernet Branca, Hielo, Coca-Cola',
    price: 3200,
    img: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=600&auto=format&fit=crop&q=80',
    emoji: '🥃',
    tags: ['argentino', 'clasico'],
    rating: 4.8
  }
];