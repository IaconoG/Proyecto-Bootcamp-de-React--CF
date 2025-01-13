# My Home

#### FrontEnd base on React

- React
- JavaScript
- TypeScript
- Vite
- Zustand
- LocalStorage
- Fetch API
- Google API Login
- React Router
- React Hook Form
- date-fns
- React Icons
- React Testing Library
- ChacrkaUI

#### BackEnd base on Java

- Java
- Spring Boot
- Spring Security
- Spring Data JPA
- Spring Web
- Spring Validation
- Spring Mail
- Spring Cache
- Spring Actuator

#### Database

- MySQL
- H2
- Flyway

## Tecnologías

- [React](https://es.reactjs.org/)
  - `Suspense`: Permite a los componentes mostrar un fallback mientras se cargan los datos.
- [TypeScript](https://www.typescriptlang.org/)

### Sistema de Compilación

- [Vite](https://vitejs.dev/)

### Manejo de Estado

- [Zustand](https://zustand-demo.pmnd.rs/)
- [LocalStorage](https://developer.mozilla.org/es/docs/Web/API/Window/localStorage)
  - `setItem`: Almacena un par clave-valor.
  - `getItem`: Obtiene el valor asociado con la clave especificada.

### Llamadas a la API

- [Fetch API](https://developer.mozilla.org/es/docs/Web/API/Fetch_API)

#### Google API Login

- [Acceso con Google]: https://developers.google.com/identity/sign-in/web/sign-in?hl=es-419
- `npm i jwt-decode`: Decodifica un token JWT y devuelve el objeto decodificado.

### Enrutamiento

- [React Router](https://reactrouter.com/en/main)
  - `createBrowserHistory`: Utiliza la API DOM History para actualizar la URL y administrar la pila del historial.
  - `RouterProvider`: Todos los objetos del router de datos se pasan a este componente para representar su aplicaoicn y habilitar el resto de las API de datos.
  - `Outlet`: Permite que la interfaz de usuario anidada aparezca cuando se renderizan las child routes.
  - `useRouteError`: Devuelve un objeto con la ruta actual y la información de error.
  - `isRouteErrorResponse`: Verifica si el error de la ruta actual es una respuesta de error.

### Formularios

- [React Hook Form](https://react-hook-form.com/)
  - `useForm`: Devuelve todos los métodos necesarios para construir un formulario.

### Dates

- [date-fns](https://date-fns.org/)

### Iconos

- [React Icons](https://react-icons.github.io/react-icons/)

### Testing

- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

## Lineamientos

- [x] Hooks Reusables
- [x] Zustand
  - [x] Minimo 2 stores
  - [ ] Almacenar inforamcion obtenida de una API
  - [x] Herramientas o/y middleware de Zustand
- [ ] Llamadas a la API
- [x] Routing
  - [x] Al menos 3 rutas
- [x] Formularios
  - [x] Implementar validaciones
  - [x] Implementar mensajos de errores
- [ ] Deploy a servidor
  - [ ] Deploy en Vercel
  - [ ] La url del proyecto debe ser de acceso publico
- [ ] Testing
  - [ ] Al menos 2 componentes con test
- [ ] Documentacion - PDF
  - [ ] Informacion acerca del proyecto, quienes trabajaron en él.
    - [ ] Que hace el proyecto.
    - [ ] Tecnologias / Dependencias utilizadas.
    - [ ] Descripción de los componentes y hooks utilizados.
    - [ ] Descripción de la API utilizada.
    - [ ] Descripción de los test realizados.
    - [ ] Descripción de los stores utilizados.
    - [ ] Capturas de pantalla del proyecto.
  - [ ] Desafios que se presentaron en el desarrollo del proyecto y como los resolvieron.
  - [ ] Puntos clave a destacar del proyecto.
  - [ ] Instrucciones especiales para ejecutar si es que existen.
    - [ ] Credencial de prueba.

### Hoooks & Components & Referencia de la API

### Hooks

- `useFetch`
- `useLocalStorage`
- `useEffect`
- `useState`
- `context`
- `useTransition`
- `useCallback`
- `useMemo`
- `useRef`
- `useLocation`
- `useParams`

#### Components

- `Suspense`
- `ErrorBoundary`

#### API

- `memo`

## Ideas

- [ ] Implementar un sistema de autenticación con Google.
- [ ] Implementar un sistema de administracion de productos.
  - Como Trello.
