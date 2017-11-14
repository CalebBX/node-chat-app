var test = {
    message : function(){
        socket.emit('createMessage', {
            from: 'Test Client', 
            text: 'This is a test message.'
        });
    }
}

var socket = io();

socket.on('connect', function(){
    console.log('connected to server');
});

socket.on('disconnect', function(){
    console.log('Disconnected from server');
});

socket.on('newMessage', function(message){
    console.log('New message', message);
});