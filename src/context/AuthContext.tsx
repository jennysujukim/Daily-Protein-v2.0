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
    UserModel,
    RootState, 
    AuthContextModel
} from "../models";
import { auth } from "../firebase/config";
import { authIsReady } from "../redux/features/auth";
import { onAuthStateChanged } from "firebase/auth";


export const AuthContext = createContext<AuthContextModel>({ user: null, authIsReady: false });

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {

    // use auth state from redux tookit
    const authState = useSelector((state: RootState) => state.auth);
    const dispatch = useDispatch();

    // listen to auth state change from firebase auth
    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user: UserModel | null) => {
            // dispatch authIsReady action to update auth state
            dispatch(authIsReady(user as UserModel))
        })

        return () => unsub();
        
    }, [dispatch]);

    return (
        <AuthContext.Provider value={authState}>
            {children}
        </AuthContext.Provider>
    )
}
