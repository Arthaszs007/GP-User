import NextAuth from "next-auth/next";
import GitHubProvider from "next-auth/providers/github"
import  CredentialsProvider  from "next-auth/providers/credentials";


const handler = NextAuth({
    session:{ strategy:"jwt" },
    providers:[
        GitHubProvider({
            clientId:process.env.GITHUB_ID as string,
            clientSecret:process.env.GITHUB_SECRET as string,
   
        }),
        CredentialsProvider({
            name:"credentials",
            credentials :{
                username:{},
                password:{}
            },
            async authorize(credentials,req){

                const res  = await fetch(`${process.env.WEB_URL}/api/auth?username=${credentials?.username}&password=${credentials?.password}`)
                
                const data = await res.json();
                
                // create a user data to return and save in session, id is necessary,others is customized
                const user ={name:credentials?.username,id:""}

                if(res.ok && data) {return user}

                return null;
            }
        })
    ],
    // auto jump to customized page when sign in, if no this, will use default sign with nextauth in page
    pages: {signIn: "/login"},
    })

export {handler as GET, handler as POST}