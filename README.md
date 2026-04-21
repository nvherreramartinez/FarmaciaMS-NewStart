⚕️Farmacia del Ministerio - E-commerce de Vademécum

Este proyecto es una plataforma de e-commerce diseñada para la visualización y gestión de productos farmacéuticos. Permite a los usuarios navegar por un catálogo dinámico, gestionar un carrito de compras en tiempo real y finalizar pedidos a través de una integración con base de datos en la nube.

![Index.jpg](https://i.postimg.cc/2j4C6dNY/Index.jpg)]

⚙️ Instalación 

Se utilizo la app VSC para la realización del proyecto. 
A través de la herramienta GitHub se disponibilizo la plataforma al equipo de docentes y publico interesado. 
Con Vercel se hizo un primer deploy de la app en versión gratuita. 
Se usaron servicdores online para la carga de imagenes del proyecto: Imgbb y Postimages. 
Se instalaron las dependencias necesarias para poder crear y ajustar cada parte de la app: 
- npm install (node_modules)
- npm run dev (servidor local)

💻 Version HOST 

Puedes explorar la versión funcional del proyecto aquí:

👉[Farmacia MS](https://farmacia-ms-new-start.vercel.app/)

🛠️ Stack Tecnológico y Librerías 📖
Para el desarrollo de esta plataforma se seleccionaron herramientas que garantizan escalabilidad, una experiencia de usuario fluida (UX) y una gestión de datos eficiente en tiempo real.

Core del Proyecto
React.js: Arquitectura basada en componentes funcionales para una interfaz dinámica y eficiente.
Context API: Implementación de un estado global para la persistencia del carrito de compras en toda la navegación.
[React Router Dom](https://reactrouter.com/): Motor de navegación para gestionar rutas amigables, permitiendo la segmentación por categorías y el acceso a detalles de producto.
[Firebase-FireStore](https://firebase.google.com/?hl=es-419): Solución BaaS (Backend as a Service) utilizada para el almacenamiento del catálogo de productos (Vademécum) y la persistencia de las órdenes de compra generadas.

Librerías de Apoyo y UI
[Bootstrap](https://getbootstrap.com/): Utilizado para la estructura base del NavBar y componentes de acción rápida, garantizando un layout consistente.
[SweetAlert](https://sweetalert2.github.io/#configuration): Implementado para mejorar el feedback visual al usuario en el flujo de checkout y validaciones de errores.
[React Spinners](https://www.davidhu.io/react-spinners/): Uso de indicadores de carga personalizados para gestionar visualmente los tiempos de respuesta asíncronos de Firebase.
CSS3 (Custom): Aplicación de Flexbox avanzado para lograr una grilla de productos simétrica, con tarjetas de tamaño unificado y alineación de elementos informativos.

Gestión de Assets y Almacenamiento
[Postimage](https://postimages.org/): Repositorio externo seleccionado para el hosteo de imágenes, reemplazando a [Imgbb](https://imgbb.com/) tras detectar problemas de persistencia. Esto permitió limpiar la carpeta /public del proyecto, optimizando el rendimiento de la aplicación.

🗒️ Nota técnica: La integración de estas herramientas permite que la Farmacia del Ministerio funcione como una Single Page Application (SPA) robusta, manteniendo la integridad de los datos desde la selección del medicamento hasta la confirmación de la orden.

🛠️ Desafíos Técnicos y Soluciones

Optimización de Assets
Se realizó una limpieza estructural eliminando recursos locales innecesarios en la carpeta public, migrando hacia el uso de URLs externas dinámicas almacenadas en Firestore para reducir el bundle size del proyecto.

Alineación Simétrica (UI/UX)
Uno de los principales retos fue garantizar una experiencia visual uniforme. Se implementaron contenedores con alturas fijas y técnicas de flex-direction: column con justify-content: space-between para asegurar que los botones de acción y títulos se mantengan alineados horizontalmente, independientemente del largo del texto o proporción de la imagen.

Gestión de Datos Críticos
Se configuró una validación robusta en el formulario de Checkout para asegurar la integridad de la información del cliente antes de persistir la orden en Firebase.

📦 Instalación y Ejecución

Clonar el repositorio:
git clone [URL-de-tu-repo]

Instalar dependencias:
npm install

Ejecutar en modo desarrollo:
npm start
