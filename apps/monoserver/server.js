// Require the framework and instantiate it
import Fastify from 'fastify';
import cors from '@fastify/cors'

const fastify = Fastify({ logger: true })

await fastify.register(cors, {
  origin: (origin, cb) => {
    const hostname = new URL(origin).hostname
    if (hostname === "localhost") {
      //  Request from localhost will pass
      cb(null, true)
      return
    }
    // Generate an error on other origins, disabling access
    cb(new Error("Not allowed"), false)
  }
})

// Declare a route
fastify.get('/', async (request, reply) => {
  return { msg: 'Hola mundo desde servidor!' }
})


fastify.post('/', {}, async (request, reply) => {
  console.debug('me llamaron con ', request.body)
  return { msg: `Hello ${request.body.name}. Greetings from server at ${new Date().toISOString()}` }
})

// Run the server!
const start = async () => {
  try {
    await fastify.listen({ port: 3000 })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()