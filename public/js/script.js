$(document).ready(function () {
    let socket = io.connect();

    socket.on('connect', function () {
        var chat = document.getElementById("chat");
        chat.value += 'New user connected to chat\n';
        chat.scrollTop = chat.scrollHeight;
    });
    socket.on('message', function (data) {
        var chat = document.getElementById("chat");
        chat.value += `${data.username}: ${data.msg}\n`;
        chat.scrollTop = chat.scrollHeight;
    });

    $('#send').click(function () {
        let text = document.getElementById("text").value;
        let username = document.getElementById("username").value;
        document.getElementById("text").value = '';
        document.getElementById("username").value = '';
        socket.emit('message', {msg: text, username: username});
    });
});
