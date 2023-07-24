import { useState } from "react"
import { Link } from "react-router-dom"
import { 
    Button, 
    TextField, 
    Typography
} from "@mui/material"
import AccountLayout from "../../layout/AccountLayout/AccountLayout"
import { useSignin } from "../../hooks/useSignin"

function Signin() {

    const [ email, setEmail ] = useState<string>("")
    const [ password, setPassword ] = useState<string>("")

    const { error, signIn } = useSignin()

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        signIn({emailAddress: email, password: password})
    }

  return (
    <>
        <AccountLayout>
            <div className="max-w-5/12">
                <Typography
                    variant="h2"
                    component="h2"
                    className="uppercase text-center pb-4 text-deepOrange font-semibold"
                >
                    Daily Protein
                </Typography>
                <form 
                    className="flex flex-col w-full"
                    onSubmit={handleSubmit}
                >
                    <TextField 
                        required 
                        type="email" 
                        variant='standard' 
                        label="Email" 
                        className="pb-4"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField 
                        required 
                        type="password" 
                        variant='standard' 
                        label="Password" 
                        autoComplete="current-password"
                        className="pb-4"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    { error && <p>{error}</p>}
                    <Button 
                        type="submit"
                        variant="contained"
                        size="large"
                        className="mt-8"
                    >
                        Sign In
                    </Button>
                </form>
                <Link to="/account/signup">
                    <Button 
                        variant="outlined" 
                        size="large"
                        className="w-full mt-4"
                    >
                        Sign Up
                    </Button>
                </Link>
            </div>
        </AccountLayout>
    </>
  )
}

export default Signin