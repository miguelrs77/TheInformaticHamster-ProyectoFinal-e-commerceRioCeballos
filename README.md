
<h1 align="center"> Final-Project-UTN-Rio-Ceballos  </h1>
<br>
<p align="center">
  <img width="50%"
  src= "https://hotelesygastronomiacordoba.com/wp-content/uploads/2023/01/Rio-Ceballos.jpg" />
</p>



Dentro del archivo package.json estan los scripts: 
-
"dev": "nodemon dist/index.js" 
-
(genera el servidor de desarrollo, que se actualiza cuando se genera cambios)

"typescript": "tsc --watch"
-
(Cada vez que se haga un cambio en un archivo TS este comando lo esta viendo y va a volver a generar la carpeta dist y nodemon a su vez va estar viendo esos cambios y nos va a mostrar el resultado)

(Importante) - Antes debes crear la base de datos app-Rio
-

(Importante para desplegar la App)
-
1) Primero ejecuten en la carpeta Front-End y Back-End el comando (npm i) para instalar todas las dependencias necesarias.

2) En la carpeta Back-End npm run typescript (Que va a visualizar los cambios generados)

3) En la carpeta Back-End hay una archivo llamado .env que dentro trae una archivo conection.TS, ahi dentro deben colocar el nombre de usuario que tienen en MySQL (por dafault: root), el nombre de la base de datos (que debe ser creada con anterioridad) y la misma contraseña con la que abren el MySQL Workbench...   

4) En la carpeta Back-End Ejecutando el comando npm run dev (Va a ejecutar el proyecto)
                          
5) En la carpeta Front-End ejecutando el comando ng serve o el algunos casos lo toma como npm run ng serve (Van a ejecutar la App)


Proyecto Final UTN
-
Documentación de la Aplicación Web Rio Ceballos
Resumen
Este documento detalla el proceso de desarrollo de la Aplicación Web Rio Ceballos, una plataforma informativa diseñada para tres tipos de roles: Usuario, Encuestador y Administrador. 
La aplicación ofrece funcionalidades específicas a cada uno de estos roles, con un enfoque en la claridad, estética y usabilidad.

Requerimientos
La Aplicación Web Rio Ceballos se desarrolló con los siguientes requerimientos principales:

Creación de una aplicación informativa.
Implementación de tres roles: Usuario, Encuestador y Administrador.
Diseño Inicial
Para comenzar el proyecto, se realizó una fase de diseño que involucró la creación de una maqueta del Front-End. 
Esta maqueta permitió visualizar y planificar las funcionalidades necesarias para garantizar la claridad y la atractiva presentación de la aplicación.

Roles y Funcionalidades

Usuario
-
Los usuarios tienen acceso a las siguientes funcionalidades:
Visualización de información general.
Acceso a encuestas y formularios.

Encuestador
-
Los encuestadores cuentan con las siguientes funcionalidades:
Acceso a la sección de encuestas.
Realización de operaciones CRUD en encuestas.

Administrador
-
Los administradores tienen acceso a las siguientes funcionalidades:
Acceso al panel de control (Dashboard).
Gestión completa de encuestas mediante operaciones CRUD.


Implementación
-

Back-End
-
En el Back-End, se implementaron los roles de Encuestador y Administrador. Se creó una base de datos que almacena de manera segura los nombres y contraseñas encriptadas de los Encuestadores y Administradores.

Autenticación y Autorización
-
Se empleó el protocolo JWT (JSON Web Token) para gestionar la autenticación y autorización de usuarios. Solo los Administradores tienen acceso al Dashboard y la sección de encuestas con operaciones CRUD, mientras que los Encuestadores solo pueden acceder a la sección de encuestas.

Modelos y Referencias
-
Se proporcionan los siguientes modelos y referencias:

Modelo de Encuestas para Usuarios: (Link / Youtube)

Modelo de Login: (Front-End / Back-End / Youtube)

Modelo del Dashboard: (GitHub / Youtube)

Modelo CRUD de Encuestas: (Front-End / Back-End / Youtube)

Próximos Pasos
-
Con la base sólida implementada, los siguientes pasos incluirán:

Ampliar las funcionalidades existentes.
Implementar mejoras adicionales para enriquecer la experiencia del usuario.
