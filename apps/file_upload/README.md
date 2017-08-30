## Universidad EAFIT
## Ing. de Sistemas
### Edwin Montoya - emontoya@eafit.edu.co

# App de carga de imagenes para Jmeter test

* Hace file upload desde una pagina web.
* Deja los archivos en dir upload/

## Tener en cuenta para correr app en Linux Centos:

* Abrir el puerto de la app, por default es 3456, pero puede cambiarlo en "server.js"

>     user1@dca236$ sudo firewall-cmd --zone=public --add-port=3456/tcp --permanent
>     user1@dca236$ sudo firewall-cmd --reload

## Descargar y correr:

* Descargue, instale dependenciaas y ejecute:

>     user1@dca236$ cd apps
>     user1@dca236$ git clone https://github.com/st0263eafit/file_upload.git
>     user1@dca236$ cd file_upload
>     user1@dca236$ npm install
>     user1@dca236$ node server.js
>     Working on port 3456

* Ejecuta bajo pm2:

>     user1@dca236$ pm2 start server.js --name "file_upload"

Debe garantizar que las aplicaciones pm2 cuando reinicie la máquina ejecuta.

>     user1@dca236$ pm2 startup systemd
