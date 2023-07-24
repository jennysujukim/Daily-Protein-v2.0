import { useState } from 'react'
import { 
    createUserWithEmailAndPassword, 
    updateProfile 
} from 'firebase/auth'
import { auth } from '../firebase/config'
import { useDispatch } from 'react-redux'
import { login } from '../redux/features/user'
import { AuthProps, User } from '../models'

export const useSignup = () => {

    const [ error, setError ] = useState<string | null>(null)
    const dispatch = useDispatch()

    const signUp = async ( {emailAddress, password, username }: AuthProps) => {

        setError(null)

        try {
            const response = await createUserWithEmailAndPassword(auth, emailAddress, password)

            await updateProfile(response.user, { displayName: username })

            dispatch(login({ uid: response.user.uid, displayName: username, email: emailAddress } as User))
        }

        catch(error) {
            setError(`Error when signing up : ${error}`)
        }
    }

    return { signUp, error }

}