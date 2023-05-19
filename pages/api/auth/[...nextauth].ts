import GoogleProvider from 'next-auth/providers/google'
import NextAuth from 'next-auth'
import { signIn } from 'next-auth/react'
export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code',
        },
      },
    }),
  ],
  secret: process.env.JWT_SECRET,
})
