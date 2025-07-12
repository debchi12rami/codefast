import Link from "next/link";

// this button is ued to log people in or send them to the dashboard page
const ButtonLogin = ({session , extraStyle}) =>{

    if(session){
        // template literals
        return <Link href="/dashboard" className={`btn btn-primary ${extraStyle ? extraStyle : ""}`}>
            Welcome Back {session.user.name || "Friend"}
            </Link>;
    }
    return <button>Login</button>

    //1.create a /login page

    //. create a email/password form 

    // make a POST request to /api/login
}
export default ButtonLogin;