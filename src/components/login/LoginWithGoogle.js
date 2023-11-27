import { GoogleOAuthProvider } from "@react-oauth/google";
import Login from './login';

export default function LoginWithGoogle({ setIsLoggedIn }){

    const id = window.location.hostname.toLowerCase() === "localhost" ? "484620940572-6kjm9ga1t6426lfi6557t07440o5tu9h.apps.googleusercontent.com" : "484620940572-eqao4bhgsnatnqt912kikknp6sah8r2f.apps.googleusercontent.com"

    console.log(id)

    return (
        <GoogleOAuthProvider clientId={id}>
            <Login setIsLoggedIn={setIsLoggedIn} />
        </GoogleOAuthProvider>
    )
}