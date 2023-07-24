import { LinearProgress, List, ListItem, ListItemText, Typography } from "@mui/material"
import DashboardContainer from "../DashboardContainer/DashboardContainer"

function Dashboard() {
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
            <List className="grid grid-cols-2">
              <ListItem>
                <ListItemText primary="Age" />
                <ListItemText 
                  primary="23" 
                  className="text-right"
                />
              </ListItem>
              <ListItem>
                <ListItemText primary="Gender" />
                <ListItemText 
                  primary="23" 
                  className="text-right"
                />
              </ListItem>
              <ListItem>
                <ListItemText primary="Height" />
                <ListItemText 
                  primary="23" 
                  className="text-right"
                />
              </ListItem>
              <ListItem>
                <ListItemText primary="Weight" />
                <ListItemText  
                  primary="23" 
                  className="text-right"
                />
              </ListItem>
              <ListItem>
                <ListItemText primary="Activity" />
                <ListItemText 
                  primary="23" 
                  className="text-right"
                />
              </ListItem>
              <ListItem>
                <ListItemText primary="Goal" />
                <ListItemText 
                  primary="23" 
                  className="text-right"
                />
              </ListItem>
            </List>
          </DashboardContainer>
          <DashboardContainer 
            title="Summary" 
            isProfile={false} 
          >
            <div className="flex justify-between items-center py-4">
              <Typography className="font-semibold">Today's Protein Intake</Typography>
              <Typography className="font-semibold"> 0 / 148g </Typography>
            </div>
            <div>
              <Typography>148g remaining</Typography>
              <LinearProgress 
                variant="determinate" 
                value={50} 
                className="my-4"
              />
            </div>
          </DashboardContainer>
        </div>
    </div>
  )
}

export default Dashboard