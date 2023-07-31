import { useState } from 'react'
import { 
    createUserWithEmailAndPassword, 
    updateProfile 
} from 'firebase/auth'
import { auth } from '../firebase/config'
import { useDispatch } from 'react-redux'
import { login } from '../redux/features/auth'
import { 
    AuthProps, 
    UserModel
} from '../models'

export const useSignup = () => {

    const [ error, setError ] = useState<string | null>(null)
    const dispatch = useDispatch()

    const signUp = async ( { email, password, username }: AuthProps) => {

        setError(null)

        try {
            // sign up with email and password using firebase auth
            const response = await createUserWithEmailAndPassword(auth, email, password)
            // update username (firebase auth)
            await updateProfile(response.user, { displayName: username })
            // dispatch login action to redux store
            dispatch(login(response.user as UserModel))
        } catch(error) {
            setError(`Error when signing up : ${error}`)
        }
    }

    return { signUp, error }
}