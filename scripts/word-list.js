const wordList = [
    {
        word: "guitarra",
        hint: "Un instrumento musical de cuerdas."
    },
    {
        word: "oxigeno",
        hint: "Un gas incoloro e inodoro esencial para la vida."
    },
    {
        word: "montaña",
        hint: "Una gran elevación natural de la superficie terrestre."
    },
    {
        word: "pintura",
        hint: "Una forma de arte que usa colores en una superficie para crear imágenes o expresiones."
    },
    {
        word: "astronomia",
        hint: "El estudio científico de los objetos celestes y los fenómenos del universo."
    },
    {
        word: "futbol",
        hint: "Un deporte popular jugado con un balón esférico."
    },
    {
        word: "chocolate",
        hint: "Un dulce hecho a partir de granos de cacao."
    },
    {
        word: "mariposa",
        hint: "Un insecto con alas coloridas y un cuerpo delgado."
    },
    {
        word: "historia",
        hint: "El estudio de los acontecimientos pasados y la civilización humana."
    },
    {
        word: "pizza",
        hint: "Un platillo sabroso con una base redonda y plana con diferentes ingredientes encima."
    },
    {
        word: "jazz",
        hint: "Un género musical caracterizado por la improvisación y la sincopación."
    },
    {
        word: "camara",
        hint: "Un dispositivo utilizado para capturar y grabar imágenes o videos."
    },
    {
        word: "diamante",
        hint: "Una piedra preciosa conocida por su brillo y dureza."
    },
    {
        word: "aventura",
        hint: "Una experiencia emocionante o atrevida."
    },
    {
        word: "ciencia",
        hint: "El estudio sistemático de la estructura y el comportamiento del mundo físico y natural."
    },
    {
        word: "bicicleta",
        hint: "Un vehículo impulsado por humanos con dos ruedas."
    },
    {
        word: "atardecer",
        hint: "La desaparición diaria del sol bajo el horizonte."
    },
    {
        word: "cafe",
        hint: "Una bebida popular con cafeína hecha de granos de café tostados."
    },
    {
        word: "danza",
        hint: "Un movimiento rítmico del cuerpo a menudo realizado con música."
    },
    {
        word: "galaxia",
        hint: "Un vasto sistema de estrellas, gas y polvo mantenidos juntos por la gravedad."
    },
    {
        word: "orquesta",
        hint: "Un gran conjunto de músicos que tocan varios instrumentos."
    },
    {
        word: "volcan",
        hint: "Una montaña o colina con una abertura por donde se expulsan lava, fragmentos de roca, vapor caliente y gases."
    },
    {
        word: "novela",
        hint: "Una obra de ficción extensa, típicamente con una trama y personajes complejos."
    },
    {
        word: "escultura",
        hint: "Una forma de arte tridimensional creada mediante el modelado o combinación de materiales."
    },
    {
        word: "sinfonia",
        hint: "Una composición musical extensa para una orquesta completa, generalmente en varios movimientos."
    },
    {
        word: "arquitectura",
        hint: "El arte y la ciencia de diseñar y construir edificios."
    },
    {
        word: "ballet",
        hint: "Una forma de danza clásica caracterizada por movimientos precisos y gráciles."
    },
    {
        word: "astronauta",
        hint: "Una persona entrenada para viajar y trabajar en el espacio."
    },
    {
        word: "cascada",
        hint: "Una caída de agua desde una altura."
    },
    {
        word: "tecnologia",
        hint: "La aplicación del conocimiento científico para fines prácticos."
    },
    {
        word: "arcoiris",
        hint: "Un fenómeno meteorológico causado por la reflexión, refracción y dispersión de la luz."
    },
    {
        word: "universo",
        hint: "Toda la materia, espacio y tiempo que existen en su totalidad."
    },
    {
        word: "piano",
        hint: "Un instrumento musical tocado presionando teclas que hacen que los martillos golpeen las cuerdas."
    },
    {
        word: "vacaciones",
        hint: "Un período de tiempo dedicado al placer, descanso o relajación."
    },
    {
        word: "selva",
        hint: "Un bosque denso caracterizado por alta precipitación y biodiversidad."
    },
    {
        word: "teatro",
        hint: "Un edificio o área al aire libre donde se representan obras, películas u otras actuaciones."
    },
    {
        word: "telefono",
        hint: "Un dispositivo utilizado para transmitir sonido a largas distancias."
    },
    {
        word: "idioma",
        hint: "Un sistema de comunicación que consiste en palabras, gestos y sintaxis."
    },
    {
        word: "desierto",
        hint: "Una tierra árida o estéril con poca o ninguna precipitación."
    },
    {
        word: "girasol",
        hint: "Una planta alta con una gran flor amarilla."
    },
    {
        word: "fantasia",
        hint: "Un género de ficción imaginativa que involucra magia y elementos sobrenaturales."
    },
    {
        word: "telescopio",
        hint: "Un instrumento óptico utilizado para ver objetos distantes en el espacio."
    },
    {
        word: "brisa",
        hint: "Un viento suave."
    },
    {
        word: "oasis",
        hint: "Un área fértil en un desierto donde se encuentra agua."
    },
    {
        word: "fotografia",
        hint: "El arte, proceso o práctica de crear imágenes mediante la grabación de luz u otra radiación electromagnética."
    },
    {
        word: "safari",
        hint: "Una expedición o viaje, generalmente para observar la vida silvestre en su hábitat natural."
    },
    {
        word: "planeta",
        hint: "Un cuerpo celeste que orbita una estrella y no produce luz propia."
    },
    {
        word: "rio",
        hint: "Un gran flujo natural de agua que corre por un canal hasta el mar, un lago u otro cuerpo de agua."
    },
    {
        word: "tropical",
        hint: "Relacionado con o situado en la región entre el Trópico de Cáncer y el Trópico de Capricornio."
    },
    {
        word: "misterioso",
        hint: "Difícil o imposible de entender, explicar o identificar."
    },
    {
        word: "enigma",
        hint: "Algo que es misterioso, desconcertante o difícil de entender."
    },
    {
        word: "paradoja",
        hint: "Una afirmación o situación que se contradice a sí misma o desafía la intuición."
    },
    {
        word: "rompecabezas",
        hint: "Un juego, juguete o problema diseñado para poner a prueba el ingenio o el conocimiento."
    },
    {
        word: "susurro",
        hint: "Hablar muy suavemente o en voz baja, a menudo de manera secreta."
    },
    {
        word: "sombra",
        hint: "Un área oscura o una silueta producida por un objeto que bloquea la luz."
    },
    {
        word: "secreto",
        hint: "Algo que se mantiene oculto o desconocido para los demás."
    },
    {
        word: "curiosidad",
        hint: "Un fuerte deseo de saber o aprender algo."
    },
    {
        word: "impredecible",
        hint: "Algo que no se puede prever o conocer de antemano; incierto."
    },
    {
        word: "ilusion",
        hint: "Una percepción o creencia falsa; una apariencia o impresión engañosa."
    },
];

