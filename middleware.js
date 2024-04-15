import { withAuth } from "next-auth/middleware"


export default withAuth(function middleware(req){

}, {
    callbacks: {
        authorized: ({token}) => token?.role === "admin",
    }
});

export const config = { matcher: ["/admin"] }