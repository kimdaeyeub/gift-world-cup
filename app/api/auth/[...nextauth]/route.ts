import User from "@/models/User";
import { connectToDB } from "@/utils/database";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],

  callbacks: {
    async session({ session }) {
      const sessionUser = await User.findOne({
        email: session.user?.email,
      });

      session.user.id = sessionUser!._id.toString();

      return session;
    },
    async signIn({ profile }) {
      try {
        await connectToDB();

        // check if user already exists
        const userExists = await User.findOne({ email: profile?.email });
        const name = profile?.name;
        // if not, create user
        if (!userExists) {
          await User.create({
            email: profile?.email,
            username: name?.replace(" ", "").toLowerCase(),
            image: profile?.image,
          });
        }
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  },
});

export { handler as GET, handler as POST };
