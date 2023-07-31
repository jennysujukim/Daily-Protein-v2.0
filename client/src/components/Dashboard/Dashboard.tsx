import { 
  useState, 
  useEffect 
} from "react"
import { 
  LinearProgress, 
  List, 
  ListItem, 
  ListItemText, 
  Typography,
  Alert 
} from "@mui/material"
import { Link } from "react-router-dom"
import axios from 'axios'
import { useAuthContext } from "../../hooks/useAuthContext"
import { Calculator } from '../../components/Calculator/Calculator';
import { useProteinIntakeContext } from "../../hooks/useProteinIntakeContext"
import { ProfileInitialStateModel } from "../../models"
import DashboardContainer from "../DashboardContainer/DashboardContainer"


function Dashboard() {

  const { user } = useAuthContext()
  const { 
    remainingProtein, 
    barPercent, 
    proteinSum, 
    proteinGoal, 
    setProteinGoal 
  } = useProteinIntakeContext()


  const [ data, setData ] = useState<ProfileInitialStateModel | null>(null)
  const [ isPending, setIsPending ] = useState<boolean>(false)
  const [ error, setError ] = useState<string | null>(null)


  useEffect(() => {
    // Fetch profile data from database (server)
    const getData = async () => {
      setIsPending(true)
  
      try {
        const response = await axios.get(`http://localhost:${process.env.REACT_APP_PORT}/api/profile/${user?.uid}`)
        const data = await response.data.profile
  
        setIsPending(false)
        setData(data)
        setError(null)

        // Calculate protein intake based on profile data
        const result = Calculator(
          data.age, 
          data.gender, 
          data.height, 
          data.weight, 
          data.activity, 
          data.goal )

        // set claculated protein intake to useProteinIntakeContext
        setProteinGoal(result)
        
      } catch(error) {
        setIsPending(false)
        setError(`Error when fetching data : ${error}`)
      }
    }

    getData()

  }, [user, setProteinGoal])


  return (
    <div className="col-span-5">
        <Typography 
          variant="h2"
          className="font-medium"
        >
          Welcome, {user?.displayName}!
        </Typography>
        <div>
          <DashboardContainer title="Profile" >
          {error && 
            <Alert 
              severity="error"
              className="mt-4"
            >
              Profile data does not exist.&nbsp;
              <Link to="/account/setting">Click here</Link>&nbsp;
              to save profile.
            </Alert>              
          } 
          {isPending && <div>Loading...</div>}
          {data && 
            <List className="laptop:grid laptop:grid-cols-2">
              <ListItem>
                <ListItemText primary="Age" />
                <ListItemText 
                  primary={data.age}
                  className="text-right"
                />
              </ListItem>
              <ListItem>
                <ListItemText primary="Gender" />
                <ListItemText 
                  primary={data.gender} 
                  className="text-right"
                />
              </ListItem>
              <ListItem>
                <ListItemText primary="Height" />
                <ListItemText 
                  primary={`${data.height} cm`} 
                  className="text-right"
                />
              </ListItem>
              <ListItem>
                <ListItemText primary="Weight" />
                <ListItemText  
                  primary={`${data.weight} kg`} 
                  className="text-right"
                />
              </ListItem>
              <ListItem>
                <ListItemText primary="Activity" />
                <ListItemText 
                  primary={data.activity} 
                  className="text-right"
                />
              </ListItem>
              <ListItem>
                <ListItemText primary="Goal" />
                <ListItemText 
                  primary={data.goal} 
                  className="text-right"
                />
              </ListItem>
            </List>
          }
          </DashboardContainer>
          <DashboardContainer title="Summary" >
            <div className="flex justify-between items-center py-4">
              <Typography className="font-semibold">Today's Protein Intake</Typography>
              <Typography className="font-semibold"> {proteinSum.toFixed(0)} / {proteinGoal.toFixed(0)}g </Typography>
            </div>
            <div>
              <Typography>{remainingProtein.toFixed(0)}g remaining</Typography>
              <LinearProgress 
                variant="determinate" 
                value={barPercent} 
                className="my-4"
              />
            </div>
          </DashboardContainer>
        </div>
    </div>
  )
}

export default Dashboard