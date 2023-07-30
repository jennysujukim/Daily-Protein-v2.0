import { Typography, Paper, Divider, Tooltip } from "@mui/material"
import { DashboardContainerProps } from "../../models"
import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from "react-router-dom";

function DashboardContainer( { isProfile, title, children }: DashboardContainerProps ) {

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
            { isProfile ? 
                <Link 
                    to="/account/setting"
                    className="flex justify-center items-center"
                >
                    <Tooltip title="Profile setting">
                        <SettingsIcon 
                            color="primary" 
                            className="cursor-pointer" 
                        />
                    </Tooltip>
                </Link>
                : 
                "" 
            }
        </div>
        <Divider />
        <div>
            { children }
        </div>
    </Paper>
  )
}

export default DashboardContainer