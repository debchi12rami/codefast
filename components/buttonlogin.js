import Link from "next/link";

// this button is ued to log people in or send them to the dashboard page
const ButtonLogin = ({name , isLoggedIn}) =>{

    if(isLoggedIn){
        return <Link href="/dashboard" className="btn btn-success">
            Welcome Back {name}
            </Link>;
    }
    return <button>Login</button>
}
export default ButtonLogin;