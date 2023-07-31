import { 
    Typography, 
    Paper, 
    Divider
} from "@mui/material"
import { DashboardContainerProps } from "../../models"

function DashboardContainer( { title, children }: DashboardContainerProps ) {

  return (
    <Paper 
        variant="outlined"
        className="p-4 mt-8"
    >
        <div className="flex justify-between items-center pb-4">
            <Typography 
                variant="h5"
                className="text-deepOrange uppercase font-medium"
            >
                { title }
            </Typography>
        </div>
        <Divider />
        <div>
            { children }
        </div>
    </Paper>
  )
}

export default DashboardContainer