Descripción Técnica del Enfoque
Tecnologías Utilizadas
Next.js 14: Para el enrutamiento, SSR y estructura del proyecto.

TypeScript: Tipado estático y mejor mantenibilidad del código.

Tailwind CSS: Estilizado responsive y consistente con el diseño proporcionado.

@dnd-kit/core: Biblioteca eficiente para implementar drag & drop con soporte para touch.

localStorage: Persistencia del estado de los paneles tras recargas.

Para ejectar 

npm i

seguido de 

npm run dev

Flujo:

1. Inicialización y Carga de Datos
Componente Principal (Home):

Renderiza la estructura base: Navbar, Filters, TokenTable y Footer.

Utiliza Tailwind CSS para el layout responsivo (container mx-auto, px-4).

TokenTable:

Al montarse, carga el orden de los tokens desde localStorage usando useEffect.

Si no hay datos guardados, usa los initialTokens definidos.

Muestra una tabla con las columnas: Pair Info, Market Cap, Liquidity, Volume, TXNS, Audit Log, Action.

2. Interacción del Usuario
Filtros (Filters):

Permite seleccionar intervalos de tiempo (5m, 1h, 6h, 24h).

Botones para "Filter", "Quick Buy" y "Settings" (lógica no implementada, pero estructura lista para extenderse).

Drag & Drop:

El usuario arrastra filas (TokenRow) para reordenarlas.

@dnd-kit detecta el evento onDragEnd y actualiza el estado de tokens con arrayMove.

Feedback visual:

Opacidad al arrastrar (opacity-50).

Transiciones CSS suaves (transition: transform 0.2s ease-in-out).

3. Persistencia de Estado
localStorage:

Cada cambio en tokens dispara un useEffect que guarda el nuevo orden en localStorage.

Clave única: tokenTableOrder.

Manejo de errores:

Si falla la carga, se restablecen los initialTokens.

Errores de guardado se registran en consola.

4. Componentes Clave
TokenRow:

Implementa useSortable de @dnd-kit para manejar arrastre.

Muestra datos dinámicos:

Icono del token (placeholder), nombre, capitalización de mercado, volumen, transacciones.

Colores condicionales: porcentajes en verde/rojo según su valor.

Botón "Buy" con estilos de hover (hover:bg-blue-600).

Diseño Responsivo:

Tabla adaptable: overflow-x-auto para móviles.

Tailwind CSS: Breakpoints implícitos (md:, lg:) para grids complejos.
