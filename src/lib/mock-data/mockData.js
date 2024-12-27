export const mockData = [
    {
      id: 1,
      title: 'Aprendiendo SvelteKit',
      preview: 'SvelteKit es un framework para crear aplicaciones web modernas con Svelte. Te permite construir aplicaciones de una manera más rápida y eficiente gracias a su arquitectura y herramientas de compilación.',
      author: 'Juan Pérez',
    },
    {
      id: 2,
      title: 'Guía de Tailwind CSS',
      preview: 'Tailwind CSS es un framework de CSS utilitario que permite diseñar interfaces rápidamente. Con clases como `flex`, `grid`, `p-4`, puedes construir UI sin tener que escribir CSS personalizado.',
      author: 'Ana Gómez',
    },
    {
      id: 3,
      title: 'Introducción a TypeScript',
      preview: 'TypeScript es un superconjunto de JavaScript que añade tipado estático. Esto permite detectar errores en tiempo de compilación, haciendo el código más robusto y fácil de mantener.',
      author: 'Carlos López',
    },
    {
      id: 4,
      title: 'Desarrollo con Node.js',
      preview: 'Node.js es un entorno de ejecución para JavaScript en el servidor. Permite construir aplicaciones rápidas y escalables, y es utilizado para crear API RESTful, aplicaciones en tiempo real y mucho más.',
      author: 'Laura Martínez',
    },
    {
      id: 5,
      title: 'Cómo usar Git',
      preview: 'Git es un sistema de control de versiones distribuido. Es crucial para colaborar en proyectos de software, permitiendo realizar cambios en el código y mantener un historial de versiones.',
      author: 'Pedro Fernández',
    },
    {
      id: 6,
      title: "Optimización de rendimiento en React",
      preview: "React es una biblioteca para construir interfaces de usuario, pero a medida que las aplicaciones crecen, la optimización del rendimiento se vuelve importante. Existen muchas técnicas como el memoization y la carga diferida para mejorar la experiencia del usuario.",
      author: "Sofía Rodríguez",
      content: "La optimización del rendimiento es crucial en aplicaciones React de gran escala, especialmente cuando se manejan componentes complejos o grandes volúmenes de datos. Algunas de las estrategias más efectivas incluyen:\n\n1. **Memoization (React.memo y useMemo)**: React.memo es una técnica para evitar renderizados innecesarios de componentes funcionales que reciben las mismas props. Esto puede ser útil si tienes componentes que no dependen de las actualizaciones del estado o props, pero se siguen renderizando debido a cambios de contexto.\n\n2. **Lazy Loading**: React ofrece la posibilidad de cargar componentes de forma perezosa (lazy loading), utilizando `React.lazy` y `Suspense`. Esto significa que los componentes no se cargarán hasta que sean realmente necesarios, lo que puede reducir el tamaño inicial de la aplicación y mejorar los tiempos de carga.\n\n3. **Virtualización de listas**: En aplicaciones donde se manejan grandes cantidades de elementos en una lista o tabla, técnicas de virtualización como `react-window` o `react-virtualized` ayudan a renderizar solo los elementos visibles en la pantalla. Esto mejora considerablemente el rendimiento y reduce el consumo de memoria.\n\n4. **Optimización de la reconciliación (Reconciliation Optimization)**: Entender cómo React decide qué componentes actualizar puede ayudarte a mejorar el rendimiento. Usar claves únicas en las listas y evitar actualizaciones de estado innecesarias son buenas prácticas.\n\n5. **Uso de Web Workers**: Los Web Workers permiten realizar tareas en segundo plano, descargando el hilo principal de ejecución y mejorando la capacidad de respuesta de la aplicación. Esto es útil cuando necesitas hacer procesamiento pesado sin bloquear la interfaz de usuario.\n\n6. **Evitar renderizados innecesarios**: Utilizar herramientas como el hook `useCallback` para evitar la creación de nuevas funciones en cada renderizado y `PureComponent` para evitar la actualización de componentes que no han cambiado.\n\nA medida que las aplicaciones de React se hacen más complejas, aplicar estas técnicas de optimización puede marcar una gran diferencia en la experiencia del usuario, haciéndola más rápida y fluida.",
      image: "https://via.placeholder.com/800x400.png?text=Optimización+de+Rendimiento+en+React"
    }
  ];
  
export const comments = [
    { id: 3, author: 'Juan Pérez', text: '¡Gran artículo! Me encantó.' },
    { id: 3, author: 'María López', text: 'Muy informativo, gracias por compartir.' },
    { id: 3, author: 'Carlos Ruiz', text: 'Interesante perspectiva, me hizo reflexionar.' },
    { id: 3, author: 'Ana Torres', text: 'Espero ver más contenido como este.' },
    { id: 3, author: 'Luis Sánchez', text: '¿Podrías profundizar más en este tema?' },
];