import 'dotenv/config'

import fastify from 'fastify'
import { memoriesRoutes } from './routes/memories'
import cors from '@fastify/cors'
import { authRoutes } from './routes/auth'
import jwt from '@fastify/jwt'

const app = fastify()

app.register(cors, {
  origin: true, //todas URLs de front-end poderão acessar nosso back-end
})

app.register(jwt, {
  secret: 'spacetime'
})

app.register(memoriesRoutes)
app.register(authRoutes)


app
  .listen({
    port: 3333,
    host: '0.0.0.0',
  })
  .then(() => {
    console.log('🚀 Http server running on http://localhost:3333')
  })

  
