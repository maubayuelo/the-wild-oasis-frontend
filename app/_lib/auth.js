//auth.js
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { getGuest, createGuest } from "./data-service";

const authConfig = {
    providers:[
        Google({
            clientId: process.env.AUTH_GOOGLE_ID,
            clientSecret: process.env.AUTH_GOOGLE_SECRET,
        }),
        //credentialProvider,
    ],
    callbacks:{
        authorized({auth, request}){
            return !!auth?.user;
        },
        async signIn({user, account, profile}) {
            try{
                const existingGuest = await getGuest(user.email);
                console.log("SignIn attempt for:", user.email);
                if(!existingGuest){
                    await createGuest({
                        email: user.email,
                        fullName: user.name,
                    });   
                }
                return true;
            } catch (error) {
                console.error("SignIn error:", error);
                return false;
            }
        },
        async session({session, user}) {
            const guest = await getGuest(session.user.email);
            session.user.guestId = guest?.id || null;
            session.user.fullName = guest?.fullName || null;
            return session;
        }
    },
    pages:{
        signIn: '/login',
        //error: '/',    
    }
}

export const {
    auth,
    signIn,
    signOut,
    handlers: {GET, POST}} = NextAuth(authConfig);