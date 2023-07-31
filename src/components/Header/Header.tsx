import { useState } from "react"
import { Link } from "react-router-dom"
import { 
  Button, 
  Tooltip,
  Modal,
  Box,
  Typography
} from "@mui/material"
import { useLogout } from "../../hooks/useLogout"
import { theme } from "../../theme/theme"

function Header() {

  const [ open, setOpen ] = useState<boolean>(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const { logOut, error } = useLogout()

  // MUI modal style
  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "80%",
    bgcolor: theme.palette.secondary.light,
    boxShadow: 24,
    borderRadius: "0.5rem",
    p: 4,
    [theme.breakpoints.up('md')]: {
      width: "50%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    }
  };

  return (
    <header className="font-roboto w-full fixed top-0 flex justify-between items-center text-deepOrange h-16">
        <Link 
          to="/"
          className="uppercase text-xl font-bold pl-6 text-deepOrange no-underline"
        >
          Daily Protein
        </Link>
        <div className="pr-6">
            <Tooltip title="Logout the app">
              <Button 
                variant="outlined"
                onClick={handleOpen}
              >
                Logout
              </Button>
            </Tooltip>
            { error && <p>{error}</p>}
        </div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-logout-title"
          aria-describedby="modal-logout-description"
        >
          <Box sx={style}>
            <div>
              <Typography 
                id="modal-logout-title" 
                variant="h6" 
                component="h2"
              >
                Logout
              </Typography>
              <Typography id="modal-logout-description">
                Are you sure you want to logout?
              </Typography>
            </div>
            <Button 
                variant="outlined"
                onClick={logOut}
              >
                Yes, I'm sure
            </Button>
          </Box>
        </Modal>
    </header>
  )
}

export default Header