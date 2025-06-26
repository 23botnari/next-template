import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
  server: {
    PORT: z.coerce.number(),
  },
  experimental__runtimeEnv: process.env,
  emptyStringAsUndefined: true,
})
