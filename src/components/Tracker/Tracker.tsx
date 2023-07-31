import { 
  useState,
  useEffect 
} from 'react'
import { Link } from 'react-router-dom'
import { 
  Button, 
  Tooltip, 
  Typography,
  Alert
} from "@mui/material"
import axios from 'axios'
import { useAuthContext } from '../../hooks/useAuthContext'
import { TrackerDataModel } from '../../models'
import { useProteinIntakeContext } from '../../hooks/useProteinIntakeContext'
import TrackList from '../TrackList/TrackList'
 

function Tracker() {

  const { user } = useAuthContext()
  const { setProteinSum } = useProteinIntakeContext()

  const [ data, setData ] = useState<TrackerDataModel[]>([])
  const [ isPending, setIsPending ] = useState<boolean>(false)
  const [ error, setError ] = useState<string | null>(null)

  useEffect(() => {

    // Read logged foodlists from Tracker database (server)
    const getData = async () => {
      setIsPending(true)

      try {
        const response = await axios.get(`http://localhost:${process.env.REACT_APP_PORT}/api/tracker/${user?.uid}`)
        const data = await response.data.tracker

        setIsPending(false)
        setData(data)
        setError(null)

        // Calculate total daily protein intake from logged foodlists
        const proteinSum = data
          .map((item: TrackerDataModel) => item.protein)
          .reduce((prev: number, next: number) => prev + next, 0)
        
        // Set total daily protein intake to useProteinIntakeContext
        setProteinSum(proteinSum)
      }
      catch(error) {
        setError(`Error when fetching data : ${error}`)
        setIsPending(false)
      }
    }

    getData()
  
  }, [user, setProteinSum])


  // In order to show up-to-date realtime data,
  // filter undeleted data and update data state
  const handleDelete = (deletedDataId: string) => {
    const updatedData = data.filter((item) => item.id !== deletedDataId)
    setData(updatedData)

    // Calculate total daily protein intake from updated data
    const updatedProteinSum = updatedData
      .map((item: TrackerDataModel) => item.protein)
      .reduce((prev: number, next: number) => prev + next, 0)

    setProteinSum(updatedProteinSum)
  }

  
  return (
    <div className="py-12 col-span-7 md:py-0">
      <div className="flex justify-between items-center">
        <Typography 
          variant="h2"
          className="font-medium"
        >
        Track Protein
        </Typography>
        <Link to="/add">
          <Tooltip title="Add more food">
            <Button variant="contained">Add Food</Button>
          </Tooltip>
        </Link>
      </div>
      { isPending && 
        <Typography className="text-center">Loading...</Typography>
      }
      { (error || data.length === 0) &&
        <Alert 
          severity="warning"
          className="mt-4"
        >
          There's no data so far. Click 'Add Food' button to start logging food.
        </Alert>              
      }
      { data &&
        <div className="mt-8">
          <TrackList 
            lists={data} 
            handleDelete={handleDelete}
          />
        </div>
      }
    </div>
  )
}

export default Tracker