import UserModel from "@/models/UserModel";
import connectDb from "@/utils/connectDb";
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcrypt";
import { signIn } from "next-auth/react";
import GoogleProvider from "next-auth/providers/google"


async function login(credentials){
    try {
        await connectDb(); 
        const user = await UserModel.findOne({email: credentials.email});
        const isCorrect = await bcrypt.compare(credentials.password,user.password)

        if(!isCorrect) throw new Error("wrong credentials");
        return user;
    }
    catch(er){

    }
}

async function createUserIfNotExists(token){
    await connectDb();

    let user = await UserModel.findOne({email:token.email});

    if(!user){
        user = await new UserModel({email:token.email, name: token.name, image:token.picture}).save();
    }

    return user;
}


export const authOptions = {
   pages:{
    signIn:"/login"
   },
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
        name:"credentials",
        credentials:{},
        async authorize(credentials) {
            try{
                const user = await login(credentials);
                console.log("this is user = ", user);
                return user;
            }
            catch(errors){
                console.log("fail to login = ", errors.message);
                throw new Error("failed to login");
            }
        }
    }),

    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
  callbacks:{
    async jwt({token, user}){
        if(user){
            token.id = user._id;
            token.email = user.email;

            const newUser = await createUserIfNotExists(token);
            
            token.name = newUser.name;
            token.role = newUser.role;

            console.log("this is token", token);
        }
        return token;
    },
    async session({session, token}){
        if(token){
            session.id = token.id;
            session.email = token.email;
            session.name = token.name;
            session.role = token.role;
        }
        return session;
    }
  }
}
const handler = NextAuth(authOptions);
export {handler as GET, handler as POST}