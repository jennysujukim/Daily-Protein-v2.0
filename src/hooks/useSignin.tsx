import { useState } from "react"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebase/config"
import { useDispatch } from "react-redux"
import { login } from "../redux/features/auth"
import { 
    AuthProps, 
    User 
} from "../models"
 

export const useSignin = () => {

    const [ error, setError ] = useState<string | null>(null)
    const dispatch = useDispatch();

    const signIn = async ({email, password} : AuthProps) => {

        setError(null)

        try {
            const response = await signInWithEmailAndPassword(auth, email, password)

            dispatch(login(response.user as User))
        }
        
        catch(error) {
            setError(`Error when signing in : ${error}`)
        }
    }

    return { signIn, error }

}
