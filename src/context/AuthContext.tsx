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


export const AuthContext = createContext<AuthInitialState>({ user: null, authIsReady: false });

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {

    const authState = useSelector((state: RootState) => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, user => {
            dispatch(authIsReady(user as User))
        })

        return () => unsub();
        
    }, [dispatch]);

    return (
        <AuthContext.Provider value={authState}>
            {children}
        </AuthContext.Provider>
    )
}
