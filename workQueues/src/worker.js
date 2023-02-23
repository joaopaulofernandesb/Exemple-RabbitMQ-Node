const amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', function(error, connection) {
    connection.createChannel(function(error, channel) {
        const queue = 'task_queue';

        channel.assertQueue(queue, {
            durable: true
        });
        channel.prefetch(1);
        console.log(" [*] Aguardando mensagens em %s. Para sair pressione CTRL+C", queue);
        channel.consume(queue, function(msg) {
            const secs = msg.content.toString().split('.').length - 1;

            console.log(" [x] Recebida %s", msg.content.toString());
            setTimeout(function() {
                console.log("[x] Finalizando");
                channel.ack(msg);
            }, secs * 1000);
        }, {
            noAck: false
        });
    });
});