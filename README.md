# Calculadora de Propinas con React, TypeScript y Tailwind CSS

[Link del Proyecto](propinapp.netlify.app)

![Proyecto PropinApp](PropinApp.png)

Este proyecto es una calculadora de propinas interactiva desarrollada con **React** y **TypeScript**, estilizada con **Tailwind CSS**. Permite a los usuarios:

- Ingresar el consumo de su pedido.
- Seleccionar el porcentaje de propina que desean dejar.
- Ver cálculos automáticos de:
  - **Propina**
  - **Subtotal**
  - **Total a pagar**

Además, los usuarios pueden:
- Agregar o eliminar productos del pedido.
- Ajustar la propina y ver actualizaciones en tiempo real.
## Tecnologías y Herramientas Utilizadas

- **React**: Para la construcción de la interfaz de usuario y la gestión de componentes.
- **TypeScript**: Para agregar tipado estático y mejorar la calidad del código.
- **Tailwind CSS**: Para el diseño responsivo y estilizado de la interfaz.
- **Hooks de React**:
  - `useState`: 
    - Para gestionar el estado de las **órdenes** (productos agregados al pedido).
    - Para almacenar y actualizar el **porcentaje de la propina** seleccionado por el usuario.
  - `useMemo`: Para optimizar el cálculo de la propina, subtotal y total, evitando recálculos innecesarios cuando los valores no cambian.

## Características Principales

1. **Interfaz Intuitiva**: Diseño limpio y fácil de usar gracias a Tailwind CSS.
2. **Cálculos en Tiempo Real**: Los montos se actualizan automáticamente al modificar el pedido o la propina.
3. **Gestión Dinámica de Pedidos**:
   - Los productos agregados al pedido se gestionan con `useState`.
   - El porcentaje de la propina también se controla con `useState`, permitiendo ajustes dinámicos.
4. **Tipado Seguro**: TypeScript asegura que el código sea más mantenible y libre de errores comunes.
5. **Optimización**: `useMemo` garantiza que los cálculos sean eficientes y no afecten el rendimiento.

La interfaz es **responsiva** y fácil de usar, brindando una experiencia intuitiva para calcular propinas de manera rápida y precisa.
