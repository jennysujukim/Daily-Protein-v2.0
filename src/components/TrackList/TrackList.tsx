import { Card, CardContent, Tooltip, Typography } from "@mui/material"
import CloseIcon from '@mui/icons-material/Close';
import { TrackerListProps } from "../../models";

function TrackList({ lists }: TrackerListProps) {
  return (
    <>
        {lists.map((list, index) => (
            <Card 
                variant="outlined"
                className="mb-4"
                key={index}
            >
                <CardContent className="relative">
                    <Typography className="text-xl pb-3 font-semibold">{list.name}</Typography>
                    <Typography>Protein {list.protein}g</Typography>
                    <Tooltip title="Delete">
                        <CloseIcon 
                            className="absolute right-4 top-4 cursor-pointer" 
                            color="secondary"
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