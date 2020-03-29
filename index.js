const Hapi = require('@hapi/hapi')

const server = Hapi.server({
  host: 'localhost',
  port: 3000
})

server.route({
  method: 'GET',
  path: '/',
  handler: (req, h) => {
    return 'Hello World !'
  }
})

const start = async () => {
  try {
    await server.start()
    console.log(`Server start at: ${server.info.uri}`)
  }
  catch (err) {
    console.error(err)
    process.exit(1)
  }
}

start()