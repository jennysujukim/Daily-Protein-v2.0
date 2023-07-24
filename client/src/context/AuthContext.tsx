import { 
    createContext, 
    useEffect
} from "react";
import { auth } from "../firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import { 
    useDispatch,
    useSelector
} from "react-redux";
import { authIsReady } from "../redux/features/user";
import { AuthContextProviderProps, AuthState } from "../models";
import { RootState } from "../redux/store";


export const AuthContext = createContext<AuthState>({ user: null, authIsReady: false });


export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {

    const authState = useSelector((state: RootState) => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, user => {

            dispatch(authIsReady(user ? {uid: user.uid, displayName: user.displayName, email: user.email} : null))
        })

        return () => unsub();
        
    }, [dispatch]);

    return (
        <AuthContext.Provider value={authState}>
        {children}
        </AuthContext.Provider>
    )
}
