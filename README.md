# TMDBApp

Aplicación móvil desarrollada con React Native CLI y TypeScript.

## Requisitos para Android

- macOS con Android Studio instalado.
- Android SDK instalado en:

  `/Users/vicentefleitas/Library/Android/sdk`

- Un emulador Android creado desde Android Studio → **Virtual Device Manager**.
- Node.js y npm.
- Java/JDK 17.

## Instalación

Desde la carpeta del proyecto:

```sh
npm install
```

Si Gradle no encuentra el Android SDK, crear el archivo local `android/local.properties`:

```sh
printf 'sdk.dir=/Users/vicentefleitas/Library/Android/sdk\n' > android/local.properties
```

Este archivo es local y no debe subirse a GitHub.

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

## Comandos útiles

```sh
npm run lint
npm test -- --watchAll=false
adb devices
emulator -list-avds
```

`adb devices` debe mostrar el emulador con estado `device` cuando esté encendido.
