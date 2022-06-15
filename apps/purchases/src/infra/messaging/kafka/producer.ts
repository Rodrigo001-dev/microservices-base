import { kafka } from "./kafka"

// o producer dentro do kafka é um objeto que vai me permitir enviar mensagens
// para dentro do kafka
export const producer = kafka.producer({
  allowAutoTopicCreation: true,
})

producer.connect().then(() => {
  console.log('[Purchases] Kafka producer connected');
})
