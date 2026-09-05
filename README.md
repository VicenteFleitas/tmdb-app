# TMDBApp

Aplicación móvil desarrollada con React Native CLI y TypeScript.

## Tecnologías

- React Native CLI (sin Expo)
- TypeScript
- React Navigation
- Axios
- TanStack Query para datos remotos, cache y estados de las consultas
- Redux Toolkit para estado global de la aplicación

## Arquitectura

El proyecto utiliza una arquitectura **Feature-Based Clean Architecture**.
Cada funcionalidad mantiene separadas sus capas de presentación, dominio y
datos.

```text
src/
├── app/
│   ├── navigation/   # Rutas y navegación
│   ├── providers/    # Proveedores globales
│   ├── store/        # Redux Toolkit
│   └── theme/        # Tema y estilos globales
├── features/
│   ├── movies/       # Listado y búsqueda de películas
│   └── movie-detail/ # Detalle de una película
└── shared/
    ├── api/          # Cliente Axios y configuración común
    ├── components/   # Componentes reutilizables
    ├── hooks/        # Hooks compartidos
    ├── types/        # Tipos comunes
    └── utils/        # Utilidades
```

Cada feature se divide en:

- `data`: llamadas a API, DTOs, mappers y repositorios concretos.
- `domain`: entidades, contratos y casos de uso de negocio.
- `presentation`: pantallas, componentes y hooks de UI.

TanStack Query gestiona los datos remotos de TMDB, incluyendo cache, loading y
errores. Redux Toolkit gestiona el estado global de la aplicación y la UI. No
se duplican los datos remotos de TMDB dentro de Redux.

La navegación actual contiene:

```text
HomeScreen → MovieDetailScreen
```

La búsqueda se incorporará dentro de `HomeScreen` mediante una barra de
búsqueda; no se utilizará una pantalla independiente para buscar.

## Requisitos para Android

- macOS con Android Studio instalado.
- Android SDK instalado en la ruta estándar:

  `$HOME/Library/Android/sdk`

- Un emulador Android creado desde Android Studio → **Virtual Device Manager**.
- Node.js y npm.
- Java/JDK 17.

## Instalación

Desde la carpeta del proyecto:

```sh
npm install
```

## Configuración de TMDB

La aplicación necesita un **API Read Access Token** de TMDB para consultar
películas y detalles.

1. Copiar el archivo de ejemplo:

   ```sh
   cp .env.sample .env
   ```

2. Abrir `.env` y reemplazar el valor de ejemplo:

   ```env
   TMDB_API_TOKEN=tu_token_real_de_tmdb
   ```

Si Gradle no encuentra el Android SDK, crear el archivo local `android/local.properties`:

```sh
printf 'sdk.dir=%s\n' "$HOME/Library/Android/sdk" > android/local.properties
```

`android/local.properties` contiene la ruta del Android SDK de cada computadora.
Como esa ruta puede cambiar entre desarrolladores, el archivo no se versiona en
GitHub. Cada persona debe crearlo localmente si Gradle no encuentra el SDK.

También se pueden configurar las variables de entorno para la sesión actual:

```sh
export ANDROID_HOME="$HOME/Library/Android/sdk"
export ANDROID_SDK_ROOT="$ANDROID_HOME"
export PATH="$PATH:$ANDROID_HOME/platform-tools:$ANDROID_HOME/emulator"
```

## Ejecutar en Android

1. Abrir Android Studio y encender un dispositivo desde **Virtual Device Manager**.
2. Iniciar Metro en una terminal:

   ```sh
   npm start
   ```

3. En otra terminal, desde la raíz del proyecto, ejecutar:

   ```sh
   npm run android
   ```

También se puede iniciar Metro automáticamente con:

```sh
npm run android
```

Si Metro ya está ejecutándose en otra terminal, usar:

```sh
npm run android -- --no-packager
```

## Comandos útiles

```sh
npm run lint
npm test -- --watchAll=false
adb devices
emulator -list-avds
```

`adb devices` debe mostrar el emulador con estado `device` cuando esté encendido.

## Ejecutar en iOS

Requisitos:

- Xcode instalado.
- Un iOS Simulator Runtime instalado desde Xcode → **Settings → Platforms**.
- CocoaPods instalado.

Desde la raíz del proyecto, instalar las dependencias nativas de iOS:

```sh
cd ios
pod install
cd ..
```

Abrir el simulador de iPhone y ejecutar:

```sh
npm run ios
```

Si Metro ya está ejecutándose en otra terminal, usar:

```sh
npm run ios -- --no-packager
```

Si se modifican dependencias nativas, volver a ejecutar `pod install`.
