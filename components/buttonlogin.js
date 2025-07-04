import Link from "next/link";

// this button is ued to log people in or send them to the dashboard page
const ButtonLogin = ({name , isLoggedIn , extraStyle}) =>{

    if(isLoggedIn){
        // template literals
        return <Link href="/dashboard" className={`btn btn-primary ${extraStyle ? extraStyle : ""}`}>
            Welcome Back {name}
            </Link>;
    }
    return <button>Login</button>
}
export default ButtonLogin;