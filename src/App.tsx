import { 
  BrowserRouter, 
  Route, 
  Routes, 
  Navigate
} from 'react-router-dom'
import { 
  ThemeProvider, 
  CssBaseline 
} from '@mui/material'
import { theme } from './theme/theme'
import { useAuthContext } from './hooks/useAuthContext'

import AppLayout from './layout/AppLayout/AppLayout'
import Home from './pages/Home/Home'
import Setting from './pages/Setting/Setting'
import Signin from './pages/Signin/Signin'
import Signup from './pages/Signup/Signup'
import Add from './pages/Add/Add'

function App () {

  const { user, authIsReady } = useAuthContext()

  return (
    <>
      { authIsReady && (
          <BrowserRouter>
          <CssBaseline />
          <ThemeProvider theme={theme}>
            <AppLayout>
              <Routes>
                <Route 
                  path="/" 
                  element={user ? <Home /> : <Navigate to="/account/signin" replace={true} />}
                />
                <Route 
                  path="/account/signin" 
                  element={!user ? <Signin /> : <Navigate to="/" replace={true} /> }
                />
                <Route 
                  path="/account/signup" 
                  element={!user ? <Signup /> : <Navigate to="/" replace={true} /> }
                />
                <Route 
                  path="/account/setting" 
                  element={user && <Setting />}
                />
                <Route 
                  path="/add" 
                  element={user && <Add />}
                />
              </Routes>
            </AppLayout>
          </ThemeProvider>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
