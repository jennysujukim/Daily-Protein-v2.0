import { 
    Card, 
    CardContent, 
    Tooltip, 
    Typography
} from "@mui/material"
import CloseIcon from '@mui/icons-material/Close';
import { TrackerListProps } from "../../models";
import axios from "axios";


// receive lists TrackerData from Tracker.tsx and map through each list,
// also receive handleDelete function from Tracker.tsx for real-time update
function TrackList({ lists, handleDelete }: TrackerListProps) {

    // Delete foodlist from database (server) when button clicked
    const handleClick = (dataId: string ) => {
        axios.delete(`${process.env.REACT_APP_SERVER_PORT}/api/tracker/${dataId}`)
        .then(() => {
            handleDelete(dataId)
        })
        .catch((error) => {
            console.error("Error making delete request:", error)
        })
    }

  return (
    <>
        {lists.map((list, index) => (
            <Card 
                variant="outlined"
                className="mb-4"
                key={index}
            >
                <CardContent className="relative">
                    <Typography className="text-xl pb-3 font-semibold">
                        {list.name}
                    </Typography>
                    <Typography>Protein {list.protein.toFixed(0)} g</Typography>
                    <Tooltip title="Delete">
                        <CloseIcon 
                            className="absolute right-4 top-4 cursor-pointer" 
                            color="secondary"
                            onClick={() => handleClick(list.id)}
                        />
                    </Tooltip>
                </CardContent>
            </Card>
        ))
        }
    </>

  )
}

export default TrackList