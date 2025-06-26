import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

const coercedBooleanSchema = z
  .string()
  .refine((s) => s === 'true' || s === 'false')
  .transform((s) => s === 'true')

export const env = createEnv({
  client: {
    NEXT_PUBLIC_API_URL: z.string().url(),
    NEXT_PUBLIC_IS_PRODUCTION: coercedBooleanSchema,
  },
  runtimeEnv: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_IS_PRODUCTION: process.env.NEXT_PUBLIC_IS_PRODUCTION,
  },
  emptyStringAsUndefined: true,
})
