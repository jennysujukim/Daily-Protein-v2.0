import PageLayout from "../../layout/PageLayout/PageLayout"
import Dashboard from "../../components/Dashboard/Dashboard"
import Tracker from "../../components/Tracker/Tracker"

function Home() {
  return (
    <PageLayout>
      <div className="md:grid md:grid-cols-12 md:gap-x-8">
        <Dashboard />
        <Tracker />
      </div>
    </PageLayout>
  )
}

export default Home