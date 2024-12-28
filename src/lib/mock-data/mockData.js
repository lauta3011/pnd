export const mockData = [
  {
    "id": 1,
    "title": "Optimización de rendimiento en React",
    "preview": "React es una biblioteca para construir interfaces de usuario, pero a medida que las aplicaciones crecen, la optimización del rendimiento se vuelve importante. Existen muchas técnicas como el memoization y la carga diferida para mejorar la experiencia del usuario.",
    "author": "Sofía Rodríguez",
    "content": "La optimización del rendimiento es crucial en aplicaciones React de gran escala, especialmente cuando se manejan componentes complejos o grandes volúmenes de datos. Algunas de las estrategias más efectivas incluyen:\n\n1. **Memoization (React.memo y useMemo)**: React.memo es una técnica para evitar renderizados innecesarios de componentes funcionales que reciben las mismas props. Esto puede ser útil si tienes componentes que no dependen de las actualizaciones del estado o props, pero se siguen renderizando debido a cambios de contexto.\n\n2. **Lazy Loading**: React ofrece la posibilidad de cargar componentes de forma perezosa (lazy loading), utilizando `React.lazy` y `Suspense`. Esto significa que los componentes no se cargarán hasta que sean realmente necesarios, lo que puede reducir el tamaño inicial de la aplicación y mejorar los tiempos de carga.\n\n3. **Virtualización de listas**: En aplicaciones donde se manejan grandes cantidades de elementos en una lista o tabla, técnicas de virtualización como `react-window` o `react-virtualized` ayudan a renderizar solo los elementos visibles en la pantalla. Esto mejora considerablemente el rendimiento y reduce el consumo de memoria.\n\n4. **Optimización de la reconciliación (Reconciliation Optimization)**: Entender cómo React decide qué componentes actualizar puede ayudarte a mejorar el rendimiento. Usar claves únicas en las listas y evitar actualizaciones de estado innecesarias son buenas prácticas.\n\n5. **Uso de Web Workers**: Los Web Workers permiten realizar tareas en segundo plano, descargando el hilo principal de ejecución y mejorando la capacidad de respuesta de la aplicación. Esto es útil cuando necesitas hacer procesamiento pesado sin bloquear la interfaz de usuario.\n\n6. **Evitar renderizados innecesarios**: Utilizar herramientas como el hook `useCallback` para evitar la creación de nuevas funciones en cada renderizado y `PureComponent` para evitar la actualización de componentes que no han cambiado.\n\nA medida que las aplicaciones de React se hacen más complejas, aplicar estas técnicas de optimización puede marcar una gran diferencia en la experiencia del usuario, haciéndola más rápida y fluida.",
    "image": "https://via.placeholder.com/800x400.png?text=Optimización+de+Rendimiento+en+React"
  },
  {
    "id": 2,
    "title": "Introducción a Redux en React",
    "preview": "Redux es una librería que ayuda a manejar el estado de las aplicaciones de manera predecible. Este artículo introduce los conceptos fundamentales de Redux, como el store, actions y reducers.",
    "author": "Carlos Pérez",
    "content": "Redux es una herramienta muy poderosa cuando se trabaja con aplicaciones React, especialmente cuando se necesita gestionar un estado global que pueda ser accesible desde cualquier componente. Aquí se abordan los conceptos clave:\n\n1. **Store**: El store es el objeto que contiene todo el estado de la aplicación. Es único y debe ser accesible desde cualquier componente que lo necesite.\n\n2. **Actions**: Las acciones son objetos que describen un evento que ha ocurrido en la aplicación. Se utilizan para enviar información al store y disparar cambios en el estado.\n\n3. **Reducers**: Los reducers son funciones puras que reciben el estado actual y una acción, y devuelven un nuevo estado actualizado. Son fundamentales para actualizar el estado de manera predecible.\n\n4. **Middlewares**: Los middlewares en Redux permiten modificar las acciones antes de que lleguen a los reducers. Algunos ejemplos populares son `redux-thunk` para manejar acciones asíncronas.\n\n5. **React-Redux**: Esta es la librería que conecta Redux con React. A través de `useSelector` y `useDispatch`, se pueden leer y despachar acciones al store, respectivamente.",
    "image": "https://via.placeholder.com/800x400.png?text=Introducción+a+Redux+en+React"
  },
  {
    "id": 3,
    "title": "Patrones de diseño en React",
    "preview": "Los patrones de diseño son soluciones probadas para problemas comunes en el desarrollo de software. En este artículo, exploramos algunos patrones de diseño comunes en aplicaciones React.",
    "author": "Ana González",
    "content": "En el desarrollo de aplicaciones React, algunos patrones de diseño ayudan a mantener el código más limpio, escalable y fácil de mantener. Entre ellos destacan:\n\n1. **Presentational and Container Components**: Este patrón divide los componentes en dos tipos: los presentacionales (que se encargan solo de la vista) y los de contenedor (que manejan la lógica y el estado).\n\n2. **Higher Order Components (HOC)**: Un HOC es una función que toma un componente y devuelve un nuevo componente con funcionalidad adicional. Este patrón es útil para compartir lógica entre componentes.\n\n3. **Render Props**: Con el patrón de render props, un componente acepta una función como prop y la utiliza para renderizar el contenido. Este patrón es útil para la reutilización de lógica entre componentes.\n\n4. **Hooks**: Los hooks permiten gestionar el estado y los efectos secundarios en componentes funcionales, lo que hace que el código sea más limpio y fácil de testear.",
    "image": "https://via.placeholder.com/800x400.png?text=Patrones+de+Diseño+en+React"
  },
  {
    "id": 4,
    "title": "Optimización de la carga de imágenes en React",
    "preview": "Las imágenes son un componente fundamental en la mayoría de las aplicaciones, pero pueden afectar el rendimiento si no se gestionan correctamente. En este artículo, discutimos técnicas para optimizar la carga de imágenes en React.",
    "author": "Pedro López",
    "content": "Las imágenes pueden representar una gran parte del tamaño de una aplicación web. Por lo tanto, es esencial optimizarlas para garantizar una carga rápida y una buena experiencia de usuario. Algunas técnicas incluyen:\n\n1. **Carga perezosa (Lazy Loading)**: Implementar la carga diferida de imágenes usando la propiedad `loading='lazy'` o librerías como `react-lazyload` puede mejorar significativamente los tiempos de carga iniciales.\n\n2. **Compresión de imágenes**: Herramientas como `ImageOptim` o servicios como `Cloudinary` pueden comprimir imágenes sin perder calidad perceptible, reduciendo el tamaño de los archivos.\n\n3. **Uso de formatos modernos**: Formatos como WebP ofrecen una mejor compresión sin sacrificar calidad. React soporta estos formatos, por lo que es recomendable utilizarlos cuando sea posible.\n\n4. **Responsive Images**: Utilizar el atributo `srcset` para cargar imágenes diferentes según el tamaño de la pantalla es otra forma de optimizar la carga de imágenes.",
    "image": "https://via.placeholder.com/800x400.png?text=Optimización+de+la+Carga+de+Imágenes+en+React"
  }
]

export const comments = [
    { id: 3, author: 'Juan Pérez', text: '¡Gran artículo! Me encantó.' },
    { id: 3, author: 'María López', text: 'Muy informativo, gracias por compartir.' },
    { id: 3, author: 'Carlos Ruiz', text: 'Interesante perspectiva, me hizo reflexionar.' },
    { id: 3, author: 'Ana Torres', text: 'Espero ver más contenido como este.' },
    { id: 3, author: 'Luis Sánchez', text: '¿Podrías profundizar más en este tema?' },
];