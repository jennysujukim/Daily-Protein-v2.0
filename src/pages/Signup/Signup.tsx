import { useState } from "react"
import { Link } from "react-router-dom"
import { 
    Button, 
    TextField, 
    Typography
} from "@mui/material"
import AccountLayout from "../../layout/AccountLayout/AccountLayout"
import { useSignup } from "../../hooks/useSignup"
import { AuthProps } from "../../models"

function Signup() {

  const [ displayName, setDisplayName ] = useState<string>("")
  const [ email, setEmail ] = useState<string>("")
  const [ password, setPassword ] = useState<string>("")

  const { error, signUp } = useSignup()

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    signUp({email: email, password: password, username: displayName} as AuthProps)
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
          <Typography className="text-center pb-8">Start tracking your daily protein intake!</Typography>
          <form 
            className="flex flex-col w-full"
            onSubmit={handleSubmit}
          >
            <TextField 
              required 
              type="text" 
              variant='standard' 
              label="Username" 
              className="pb-4"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDisplayName(e.target.value)}
            />
            <TextField 
              required 
              type="email" 
              variant='standard' 
              label="Email" 
              className="pb-4"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            />
            <TextField 
              required 
              type="password" 
              variant='standard' 
              label="Confirm Password" 
              autoComplete="current-password"
              className="pb-4"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
            />
            { error && <p>{error}</p>}
            <Button 
              type="submit"
              variant="contained"
              size="large"
              className="mt-8"
            >
              Sign Up
            </Button>
          </form>
          <Link to="/account/signin">
            <Button 
              variant="outlined" 
              size="large"
              className="w-full mt-4"
            >
              Sign In
            </Button>
          </Link>
        </div>
      </AccountLayout>
    </>
  )
}

export default Signup