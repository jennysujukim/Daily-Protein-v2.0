import { Card, CardContent, Tooltip, Typography } from "@mui/material"
import CloseIcon from '@mui/icons-material/Close';

function TrackList() {
  return (
    <>
        <Card variant="outlined">
            <CardContent className="relative">
                <Typography className="text-xl pb-3 font-semibold">Chicken</Typography>
                <Typography>Protein 16g</Typography>
                <Tooltip title="Delete">
                    <CloseIcon 
                        className="absolute right-4 top-4 cursor-pointer" 
                        color="secondary"
                    />
                </Tooltip>
            </CardContent>
        </Card>
    </>

  )
}

export default TrackList