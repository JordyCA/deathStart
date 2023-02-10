<strong> Pre requisistos </strong>

instalar las dependencias con nmp install 

importar la base de datos del proyecto con el nombre JediDataBase.sql 

<strong>Para inicializar el proyecto es con el siguiente comando</strong>

npm start

<strong> Manejo de las Apis </strong>

http://localhost:6000/api/v1/Jedis/allUser -> para ver todos los usuarios -> get

http://localhost:6000/api/v1/Jedis/deleteUser -> para eliminar un usuario de manera logica -> delete -> json content ejemplo  {
  "id" : "2"
}

http://localhost:6000/api/v1/Jedis/newUser -> para agregar un nuevo usuario -> post -> json contetn ejemplo {
  "nombre": "Cal",
  "apellido_paterno": "Kestis",
  "apellido_materno": "xxx",
  "estilo_batalla" : 4
}

http://localhost:6000/api/v1/Jedis/user -> para obtener un solo usuario ->  get -> param ejemplo id=2

http://localhost:6000/api/v1/Jedis/modifyUser -> para modificar un usario -> post -> jscon content ejemplo {
"id" : 2,
  "estilo_batalla" : 5
}

<strong> Distribucion del proyecto</strong>

config -> las variables globales del proyecto

controller -> los controladores en este caso del usuario

models -> el  modelo para que se conecte a la base de datos se obtenga o realice los ajuste de datos

routes -> aquí se encuentran las rutas para las apis

utils -> herramientas como la conexión a la base de datos 

