# AL MUNDO - Backend

Para iniciar la aplicación en desarrollo, es necesario setear las variables de entorno del archivo ".env"

```sh
cp .env.dist .env # copiar archivo environment propio 
```

## Librerías externas usadas

1. Express
  Servidor usado 
2. Nodemon
  Permite refrescar automáticamente los archivos para desarrollo. 
3. Cors:
  Habilita cors para habilitar peticiones entre dominios.
4. mongoose: 
  Usado para la capa de persistencia DB con mongo.
5. node-env-file
  Manejar las variables de entorno en pruebas y producción.
6. odata-v4-mongodb
  Permite usar las sentencias odata.

## Hosting en IBM cloud
Endpoint: https://api-almundo.mybluemix.net/api
- Hotels: /hotel

# Links
Demo en vivo
- Front: [https://jairofernandez.github.io/AlMundoFrontend/](https://jairofernandez.github.io/AlMundoFrontend/)
- Back: [https://api-almundo.mybluemix.net/api](https://api-almundo.mybluemix.net/api)

## Repositorios:
- Backend: [https://github.com/jairoFernandez/AlMundoBackend](https://github.com/jairoFernandez/AlMundoBackend)
- Frontend: [https://github.com/jairoFernandez/AlMundoFrontend](https://github.com/jairoFernandez/AlMundoFrontend)

## Deploy
```sh
  bluemix app push api-almundo 
```
