import NextAuth, { type NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@core/libraries/prisma";

export const authOptions: NextAuthOptions = {
  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET,
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  callbacks: {
    async jwt({ token, isNewUser }) {
      if (isNewUser) {
        const generateUsername = async () => {
          const username = `${token.email?.split("@")[0]}`;
          await prisma.user.update({
            where: { id: token.sub },
            data: { username },
          });
        };
        const becomeClient = async () => {
          await prisma.client.create({
            data: {
              userId: token.sub as string,
            },
          });
        };
        generateUsername();
        becomeClient();
      }
      return token;
    },
  },
};

export default NextAuth(authOptions);
