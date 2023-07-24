import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/config";
import { useDispatch } from "react-redux";
import { logout } from "../redux/features/user";
import { useNavigate } from "react-router-dom";

export const useLogout = () => {

    const [ error, setError ] = useState<string | null>(null)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const logOut = async () => {

        setError(null)

        try {
            await signOut(auth)
            dispatch(logout())
            navigate("/account/signin")
        }

        catch(error) {
            setError(`Error when logging out : ${error}`)
        }
    }

    return { logOut, error }
}