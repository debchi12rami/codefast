import NextAuth from "next-auth";
import Resend from "next-auth/providers/resend";

import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "@/libs/mongo";
import { adapter } from "next/dist/server/web/adapter";
import GoogleProvider from "next-auth/providers/google";



// Importing the MongoDB adapter for NextAuth
//this is the connection to the database
// and the client promise to connect to MongoDB
const config = {
    providers: [
        Resend({
            apiKey: process.env.RESEND_KEY,
            from: "noreply@resend.ramideve.live",
            name: "Email",
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
    adapter: MongoDBAdapter(clientPromise),
};

export const { handlers, signIn, signOut, auth } = NextAuth(config);