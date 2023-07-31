import PageLayout from "../../layout/PageLayout/PageLayout"
import Dashboard from "../../components/Dashboard/Dashboard"
import Tracker from "../../components/Tracker/Tracker"
import { ProteinIntakeContextProvider } from "src/context/ProteinIntakeContext"

function Home() {
  return (
    <ProteinIntakeContextProvider>
      <PageLayout>
        <div className="md:grid md:grid-cols-12 md:gap-x-8">
          <Dashboard />
          <Tracker />
        </div>
      </PageLayout>
    </ProteinIntakeContextProvider>
  )
}

export default Home