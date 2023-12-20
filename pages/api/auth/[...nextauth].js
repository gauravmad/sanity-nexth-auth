import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from 'next-auth/providers/google'

export const authOptions = {
    providers:[
        GithubProvider({
            clientId:'c2c6b6ac1d88ff4ff717',
            clientSecret:'6004e84032e746948f1980d489d6004f095640e8'
        }),
        GoogleProvider({
            clientId:'695706373319-o09aiimg8jsv48e544e7cgo8nia7ob30.apps.googleusercontent.com',
            clientSecret:'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'
        })
    ]
}

export default NextAuth(authOptions)