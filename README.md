# Superhero React App

Superhero React App es una aplicación construida en React, como su nombre lo indica. Consiste en una aplicación web que consume la [API SuperHero](https://superheroapi.com/index.html) para cumplir los requerimientos de la prueba técnica para aplicar en Acreditta como Frontend Developer.

## Requerimientos

- Dashboard general de los superhéroes organizada alfabéticamente.
- Búsqueda por nombre del superhéroe.
- Organizar a los super héroes de acuerdo a:

  - Intelligence
  - Strength
  - Speed
  - Durability
  - Power
  - Combat

    En este punto es necesario que se haga un filtro y que el usuario decida el orden en el que aparecerán las habilidades.

- Organizar la apariencia del superhéroe de acuerdo a:

  - Gender
  - Race
  - Height
  - Weight
  - Eye Color
  - Hair Color

    En este punto es necesario que se haga un filtro y que el usuario decida el orden en el que aparecerán la apariencia.

## Mi solución

### [Inicio (dashboard)](https://github.com/dany-eduard/superhero-react-app/tree/main/src/pages/Dashboard)

![image](https://user-images.githubusercontent.com/54107524/141873618-da757c88-6a78-4214-a61a-a2321362e61e.png)

Al ingresar al [inicio](https://dany-eduard.github.io/superhero-react-app) se [dispara una acción con Redux](https://github.com/dany-eduard/superhero-react-app/blob/1dd03da8cb8671e25677ddde9555774fb4e2881a/src/services/index.ts#L15), la cual realiza una petición a la API para obtener 10 héroes con los ID’s del `1` al `10`. Dado que los héroes vienen ordenados alfabéticamente, no hace falta realizar ninguna otra acción para ordenarlos. Se implementó un _infinity scroll_ que permite solicitar los siguientes `10` ID’s a la API, inicialmente a través del evento `window.onscroll()`, pero este no funcionó de la manera esperada en dispositivos móviles y fue reemplazado por [IntersectionObserver API](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver) incluida ya, en la mayoría de los navegadores. Esto con el fin de detectar cuando la barra de desplazamiento llega al final de la pagina, y así ejecutar la acción para disparar la petición a la API SuperHero.

El [`store de Redux`](https://github.com/dany-eduard/superhero-react-app/blob/main/src/store/index.ts) recibe la lista de héroes y cuando el servicio obtiene la respuesta realiza un dispatch para concatenar los nuevos héroes recibidos a la lista anterior.

### [Barra de búsqueda](https://github.com/dany-eduard/superhero-react-app/tree/main/src/components/Navbar) y [vista resultado de búsqueda](https://github.com/dany-eduard/superhero-react-app/tree/main/src/pages/ResultadoBusqueda)

![image](https://user-images.githubusercontent.com/54107524/141874342-cb2bcfa1-3264-404f-8ae1-914049875f09.png)

Se implementa la funcionalidad para buscar un héroe consumiendo el endpoint `/search/:nombre-heroe` proporcionado por la API SuperHero. Cuando el usuario realiza la búsqueda:

1. Se limpia la lista de héroes almacenada en el [`store de Redux`](https://github.com/dany-eduard/superhero-react-app/blob/main/src/store/index.ts).
2. A través de `react-router-dom` se redirige al usuario a la vista `/resultado-busqueda?valor-buscado` (página [Resultado de Búsqueda](https://github.com/dany-eduard/superhero-react-app/tree/main/src/pages/ResultadoBusqueda)).
3. Se dispara la petición que consultará a la API y se almacena en el `[`store de Redux`](https://github.com/dany-eduard/superhero-react-app/blob/main/src/store/index.ts)` la respuesta recibida que contiene los héroes coincidentes con la búsqueda.
4. En el componente ResultadoBusqueda se recorre la lista de héroes y se pintan en pantalla los resultados.
   En esta página se ubicó una barra de búsqueda para realizar otras consultas dentro de este componente, siguiendo el flujo descrito en los pasos anteriores.

### [Habilidades](https://github.com/dany-eduard/superhero-react-app/tree/main/src/pages/Habilidades)

![image](https://user-images.githubusercontent.com/54107524/141875327-e5739db6-5e9a-4d62-b6b3-5316eaf8ff46.png)

En esta vista se implementa la funcionalidad que permite filtrar por habilidad, en orden ascendente o descendente, la lista de héroes previamente cargada en la [petición que se disparó en el Inicio](https://github.com/dany-eduard/superhero-react-app/blob/1dd03da8cb8671e25677ddde9555774fb4e2881a/src/services/index.ts#L15) (dashboard).
El usuario debe seleccionar una habilidad y elegir el orden en que se mostrarán los resultados. Aquí lo que se hizo es:

1. Crear un array ordenado con el criterio de ordenamiento ingresado, que contiene el valor de la habilidad seleccionada de los héroes presentes en la lista del [`store de Redux`](https://github.com/dany-eduard/superhero-react-app/blob/main/src/store/index.ts)
2. Se utiliza el array obtenido para recorrer y ordenar la lista de héroes
3. La nueva lista es almacenada en el estado del componente (un useState) y de pinta en la vista.

### [Apariencia](https://github.com/dany-eduard/superhero-react-app/tree/main/src/pages/Apariencia)

![image](https://user-images.githubusercontent.com/54107524/141875966-6dbb2696-daf6-447b-a471-0674f91f0a1a.png)
![image](https://user-images.githubusercontent.com/54107524/141876105-ad646300-9580-4a39-95a3-d3d9ccb35946.png)

En esta vista se implementa el filtro por característica, el cual permite al usuario obtener los héroes que coincidan con en la característica selecciona con un criterio especifico. El resultado será todos los héroes que tengan en su peso, por ejemplo, el valor ingresado.
El filtro consiste en buscar en la lista de héroes almacenada en el [`store de Redux`](https://github.com/dany-eduard/superhero-react-app/blob/main/src/store/index.ts), los héroes que en la característica tengan el mismo valor ingresado como criterio. Se obtiene un nuevo arreglo y este el que se muestra en pantalla.

## Herramientas utilizadas

- Plantilla [cra-template-ts-eslint-prettier](https://github.com/dany-eduard/cra-template-ts-eslint-prettier)
- React
- HTML
- CSS
- Bootstrap
- TypeScript
- [Redux Toolkit](https://redux-toolkit.js.org/)
