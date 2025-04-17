import { Elysia, t } from 'elysia'
import { swagger } from '@elysiajs/swagger'
import { opentelemetry } from '@elysiajs/opentelemetry'

import { note } from './routes/note'
import { user } from './middlewares/user'
const app = new Elysia()
    .use(opentelemetry()) 
    .use(swagger())
    .onError(({ error, code }) => { 
        if (code === 'NOT_FOUND') return 'Not Found :('

        console.error(error) 
    }) 
    .use(note)
    .use(user)
    .listen(3000)