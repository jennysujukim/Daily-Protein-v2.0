import { Card, CardContent, Typography, List, ListItem, ListItemText, Button, Tooltip } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';

function FoodList() {
  return (
    <>
        <Card variant="outlined">
            <CardContent>
                <div className="flex justify-between items-center">
                    <Typography className="text-xl font-semibold pb-3">
                        Chicken
                    </Typography>
                    <Tooltip title="Add to protein tracker">
                        <Button 
                            variant="outlined"
                            endIcon={<AddIcon />}
                        >
                            Add
                        </Button>
                    </Tooltip>
                </div>
                <List className="md:grid md:grid-cols-2 pt-4 pb-0">
                    <ListItem>
                        <ListItemText className="uppercase">Calories:</ListItemText>
                        <ListItemText className="text-right">215 kcal</ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemText className="uppercase">Protein:</ListItemText>
                        <ListItemText className="text-right">19 g</ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemText className="uppercase">Carbs:</ListItemText>
                        <ListItemText className="text-right">0 g</ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemText className="uppercase">Fat:</ListItemText>
                        <ListItemText className="text-right">15 g</ListItemText>
                    </ListItem>
                </List>
            </CardContent>
        </Card>
    </>
  )
}

export default FoodList