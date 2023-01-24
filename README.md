# Web MVC

## Descripción
    Proyecto web que obtiene información de la base de datos y los muestra en la página web.
    El proyecto ocupa el modelo MVC (Modelo, Vista, Controlador) para la creación de la página web.

## Stack
    - Express
    - MySQL
    - Node
    - Pug
    - Sequelize

## Instalación
1. Clonar el repositorio
2. Instalar las dependencias
    ```bash
    npm install
    ```
3. Cargar el archivo ./config/agentes.sql en la base de datos MySQL
4. Renombrar el archivo example.env a .env y modificar los datos de conexión a la base de datos.
  ```code
    PORT= `Puerto de la aplicación`
    DB_NAME= `Nombre de la base de datos`
    DB_USER= `Usuario de la base de datos`
    DB_PASS= `Contraseña de la base de datos`
    DB_HOST= `Host de la base de datos`
  ```
5. Iniciar el servidor
    - Desarrollo
        ```bash
        npm run dev 
        ```
    - Producción
        ```bash
        npm run start
        ```

<img src="https://raw.githubusercontent.com/bl0pez/Node-Viajes/master/preview.png" alt="preview" width="100%" style="margin: 0 auto; display: block;"></img>

