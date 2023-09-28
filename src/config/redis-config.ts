import Redis from 'ioredis'

export const redis = new Redis({
  host: process.env.REDIS_HOST,
  port: parseInt(process.env.REDIS_PORT || '6379'),
  username: String(process.env.REDIS_USER),
  password: process.env.REDIS_PASSWORD,
})
  .on('connect', () => {
    console.log('Conectado a Redis')
  })
  .on('error', (err) => {
    console.log('Error al conectar a Redis: ' + err)
  })
