import { 
    createContext, 
    useEffect
} from "react";
import { 
    useDispatch,
    useSelector
} from "react-redux";
import { 
    AuthContextProviderProps, 
    User,
    RootState, 
    AuthInitialState
} from "../models";
import { auth } from "../firebase/config";
import { authIsReady } from "../redux/features/auth";
import { onAuthStateChanged } from "firebase/auth";
import axios from "axios";

export const AuthContext = createContext<AuthInitialState>({ user: null, authIsReady: false });

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {

    const authState = useSelector((state: RootState) => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, user => {
            dispatch(authIsReady(user as User))

            if (user) {

                axios.post("http://localhost:8080/api/user", { uid: user.uid })
                .then((response) => {
                    console.log(response.data)
                })
                .catch((error) => {
                    console.error("Error making uid request", error)
                })
            }
        })

        return () => unsub();
        
    }, [dispatch]);

    return (
        <AuthContext.Provider value={authState}>
            {children}
        </AuthContext.Provider>
    )
}
