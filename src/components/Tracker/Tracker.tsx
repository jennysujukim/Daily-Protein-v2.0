import { 
  useState,
  useEffect 
} from 'react'
import { Link } from 'react-router-dom'
import { 
  Button, 
  Tooltip, 
  Typography 
} from "@mui/material"
import TrackList from '../TrackList/TrackList'
import axios from 'axios'
import { useAuthContext } from '../../hooks/useAuthContext'
import { TrackerData } from '../../models'


function Tracker() {

  const { user } = useAuthContext()

  const [ data, setData ] = useState<TrackerData[]>([])
  const [ isPending, setIsPending ] = useState<boolean>(false)
  const [ error, setError ] = useState<string | null>(null)

  useEffect(() => {

    const getData = async () => {
      setIsPending(true)

      try {
        const response = await axios.get(`http://localhost:${process.env.REACT_APP_PORT}/api/tracker/${user?.uid}`)
        const data = await response.data

        console.log(data)
        setIsPending(false)
        setData(data)
        setError(null)
      }
      catch(error) {
        setError(`Error when fetching data : ${error}`)
        setIsPending(false)
      }
    }

    getData()
  
  }, [user])

  
  return (
    <div className="col-span-7">
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
        { isPending && <Typography className="text-center">Loading...</Typography> }
        { error && <Typography className="text-center">{error}</Typography> }
        { data &&
          <div className="mt-8">
            <TrackList lists={data} />
          </div>
        }

    </div>
  )
}

export default Tracker