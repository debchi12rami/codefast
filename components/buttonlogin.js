"use client";
import Link from "next/link";
import { signIn } from "next-auth/react";
// this button is ued to log people in or send them to the dashboard page
const ButtonLogin = ({session , extraStyle}) =>{
    const dashboardUrl = "/dashboard";

    if(session){
        // template literals
        return <Link href={dashboardUrl} className={`btn btn-primary ${extraStyle ? extraStyle : ""}`}>
            Welcome Back {session.user.name || "Friend"}
            </Link>;
    }
    return <button className={`btn btn-primary ${extraStyle ? extraStyle : ""}`} onClick={() => {
        signIn(undefined, {callbackUrl: dashboardUrl}); // undefined means use the default provider
        // give all the providers
    }}>Get Started</button>

    //1.create a /login page

    //. create a email/password form 

    // make a POST request to /api/login
}
export default ButtonLogin;