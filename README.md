# API REST Nest.js + PostgreSQL


## Prerrequisitos

- Tener Node.js y Nest.js instalados
- Tener un servicio de PostgreSQL activo y abierto a conexiones (remoto o local)
- Tener el puerto `:3000` libre


## Ejecutar el proyecto

Para ejecutar el proyecto, debes seguir los siguientes pasos:

- Clonar o descargar el código del repositorio
- Modificar los ajustes de conexión en `src/database/database.providers.ts` según sea necesario para conectarse a la base de datos de PostgreSQL
- Abrir la consola de comandos en la carpeta principal del proyecto
- Ejecutar `npm i` en la consola para instalar todos los paquetes requeridos
- Ejecutar `npm run start`. Con esto, el proyecto queda iniciado y listo para recibir solicitudes HTTP
- Para visualizar la documentación del proyecto, ir a `http://localhost:3000/api` en un navegador web