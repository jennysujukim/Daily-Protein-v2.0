import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { LayoutProps } from '../../models'
import { useAuthContext } from '../../hooks/useAuthContext'

function AppLayout( { children }:LayoutProps ) {

  const { user } = useAuthContext()

  return (
    <>
      {user && <Header />}
      <main className="font-roboto mx-auto">
          { children }
      </main>
      {user && <Footer />}
    </>
  )
}

export default AppLayout