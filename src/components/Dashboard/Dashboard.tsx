import { 
  useState, 
  useEffect 
} from "react"
import { 
  LinearProgress, 
  List, 
  ListItem, 
  ListItemText, 
  Typography 
} from "@mui/material"
import DashboardContainer from "../DashboardContainer/DashboardContainer"
import axios from 'axios'
import { useAuthContext } from "../../hooks/useAuthContext"
import { ProfileInitialState } from "../../models"
import { Calculator } from '../../components/Calculator/Calculator';
import { useProteinIntakeContext } from "../../hooks/useProteinIntakeContext"

function Dashboard() {

  const { user } = useAuthContext()
  const { remainingProtein, barPercent, setProteinGoal, proteinSum } = useProteinIntakeContext()

  const [ data, setData ] = useState<ProfileInitialState | null>(null)
  const [ isPending, setIsPending ] = useState<boolean>(false)
  const [ error, setError ] = useState<string | null>(null)
  const [ isProteinIntake, setIsProteinIntake ] = useState<number>(0)

  useEffect(() => {
    const getData = async () => {

      setIsPending(true)
  
      try {
        const response = await axios.get(`http://localhost:${process.env.REACT_APP_PORT}/api/profile/${user?.uid}`)
        const data = await response.data.profile
  
        setIsPending(false)
        setData(data)
        setError(null)

        const result = Calculator(
          data.age, 
          data.gender, 
          data.height, 
          data.weight, 
          data.activity, 
          data.goal)

        setIsProteinIntake(result)
        setProteinGoal(result)
        
      } catch(error) {
        setError(`Error when fetching data : ${error}`)
        setIsPending(false)
      }
    }

    getData()

  }, [user])


  return (
    <div className="col-span-5">
        <Typography 
          variant="h2"
          className="font-medium"
        >
          Welcome, Name!
        </Typography>
        <div>
          <DashboardContainer 
            title="Profile" 
            isProfile
          >
          {error && <div>{error}</div>} 
          {isPending && <div>Loading...</div>}
          {data && 
            <List className="grid grid-cols-2">
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
          <DashboardContainer 
            title="Summary" 
            isProfile={false} 
          >
            <div className="flex justify-between items-center py-4">
              <Typography className="font-semibold">Today's Protein Intake</Typography>
              <Typography className="font-semibold"> {proteinSum} / {isProteinIntake}g </Typography>
            </div>
            <div>
              <Typography>{remainingProtein}g remaining</Typography>
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