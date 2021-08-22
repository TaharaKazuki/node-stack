import Fastify from 'fastify'

const fastify = Fastify({ logger: true })

fastify.get('/', async () => {
  return {
    hello: 'world',
  }
})

const port = process.env.PORT ?? 8080
const start = async () => {
  try {
    await fastify.listen(port, '0.0.0.0')
  } catch (error) {
    fastify.log.error(error)
    process.exit(1)
  }
}

start()
