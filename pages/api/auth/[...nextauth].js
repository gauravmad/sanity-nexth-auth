import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from 'next-auth/providers/google'

export const authOptions = {
    providers:[
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
            callbackUrl:'https://sanity-nexth-auth.vercel.app/api/auth/callback/github'
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackUrl:'https://sanity-nexth-auth.vercel.app/api/auth/callback/google'
        })
    ]
}

export default NextAuth(authOptions)