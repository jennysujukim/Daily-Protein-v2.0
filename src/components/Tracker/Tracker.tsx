import { Link } from 'react-router-dom'
import { Button, Tooltip, Typography } from "@mui/material"
import TrackList from '../TrackList/TrackList'

function Tracker() {
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
        <div className="mt-8">
          <TrackList />
        </div>
    </div>
  )
}

export default Tracker