
# Código Node.js para tutoriais RabbitMQ

Para usar os exemplos com sucesso, você precisará de um servidor RabbitMQ em execução.

## Requisitos

### Node.js

Você precisa de [Node.js](https://nodejs.org/en/download/) e [amqplib](https://github.com/amqp-node/amqplib)
para executar esses tutoriais.


### Biblioteca cliente

Para instalar `amqplib` usando npm:

``` concha
npm instalar amqplib -g
```

## Código

[Tutorial um: fila simples](https://www.rabbitmq.com/tutorials/tutorial-one-javascript.html):

``` concha
node src/send.js
node src/receive.js
```

[Tutorial dois: filas de trabalho](https://www.rabbitmq.com/tutorials/tutorial-two-javascript.html):

``` concha
node src/new_task.js "Uma tarefa muito difícil que leva dois segundos.."
node src/worker.js
```

[Tutorial três: Publicar/Inscrever-se](https://www.rabbitmq.com/tutorials/tutorial-three-javascript.html)

``` concha
nó src/receive_logs.js
node src/emit_log.js "info: Esta é a mensagem de log"
```

[Tutorial quatro: Roteamento](https://www.rabbitmq.com/tutorials/tutorial-four-javascript.html):

``` concha
nó src/receive_logs_direct.js info
node src/emit_log_direct.js info "A mensagem"
```
