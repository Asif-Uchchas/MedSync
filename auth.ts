import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import authConfig from "./auth.config"
import { db } from "./src/lib/db"
import { getUserById } from "./data/user"
import { UserRole } from "@prisma/client"

// declare module "next-auth" {
//   interface Session {
//     /** The user's postal address. */
//     role: "ADMIN" | "USER"
//   }
// }


export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut,
} = NextAuth({
  // pages: {
  //   signIn: "/auth/login",
  //   error: "/auth/error"
  // },
  events: {
    async linkAccount({ user }) {
      await db.user.update({
        where: {
          id: user.id
        },
        data: {
          emailVerified: new Date()
        }
      })
    }
  },
  callbacks: {

    // async signIn({ user }) {

    //   const existingUser = await getUserById(user.id as string)

    //   if (!existingUser || !existingUser.emailVerified) {
    //     return true
    //   }
    //   return true
    // },
    
    async session({ session, token }) {
      console.log("Session user: ", token)
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }

      if (token.role && session.user) {
        session.user.role = token.role as UserRole
      }

      return session
    },
    async jwt({ token }) {
      // console.log({ token })
      if (!token.sub) return token
      
      const existingUser = await getUserById(token.sub)

      if (!existingUser) return token

      token.role = existingUser.role
      return token
    }
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
})