var socket = io();

socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor');
});

//Enviar información
socket.emit('enviarMensaje', {
    usuario: 'Fernando',
    mensaje: 'Hola mundo'
}, function(response) {
    console.log('respuesta server:', response);
});

//Escuchar informacion
socket.on('enviarMensaje', function(respuesta) {
    console.log('Servidor', respuesta);
});