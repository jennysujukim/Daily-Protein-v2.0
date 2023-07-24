import { Link } from "react-router-dom"
import { Button, Tooltip } from "@mui/material"
import { useLogout } from "../../hooks/useLogout"

function Header() {

  const { logOut, error } = useLogout()

  return (
    <header className="font-roboto w-full fixed top-0 flex justify-between items-center text-deepOrange h-16">
        <Link 
          className="uppercase text-xl font-bold pl-6 text-deepOrange no-underline"
          to="/"
        >
          Daily Protein
        </Link>
        <div className="pr-6">
            <Tooltip title="Logout the app">
              <Button 
                variant="outlined"
                onClick={logOut}
              >
                Logout
              </Button>
            </Tooltip>
            { error && <p>{error}</p>}
        </div>
    </header>
  )
}

export default Header