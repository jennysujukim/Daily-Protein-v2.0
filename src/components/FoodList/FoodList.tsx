import axios from "axios";
import { 
    Card, 
    CardContent,  
    Typography, 
    List, 
    ListItem, 
    ListItemText, 
    Button, 
    Tooltip 
} from "@mui/material"
import { useAuthContext } from "../../hooks/useAuthContext";
import { 
    FoodListProps, 
    AddFoodProps 
} from "../../models";
import AddIcon from '@mui/icons-material/Add';


// receieve lists FoodData from Add.tsx and map through each list
function FoodList({ lists }: FoodListProps ) {

    // in order to store user's uid in traker's database tgt when handleClick
    const { user } = useAuthContext()

    // Create tracker's food list to database (server) when user clicks add button
    const handleClick = ( { foodName, foodProtein } : AddFoodProps ) => {

        axios.post(`${process.env.REACT_APP_SERVER_PORT}/api/tracker`, {
            uid: user?.uid,
            name: foodName,
            protein: foodProtein
        })
        .catch((error) => {
            console.error("Error making tracker request:", error)
        })
    }

  return (
    <>
        {lists.map((list, index) => (
            <Card 
                variant="outlined"
                key={index}
            >
                <CardContent>
                    <div className="flex justify-between items-center">
                        <Typography className="text-xl font-semibold pb-3">
                            {list.food.label}
                        </Typography>
                        <Tooltip title="Add to protein tracker">
                            <Button 
                                variant="outlined"
                                endIcon={<AddIcon />}
                                onClick={() => handleClick({
                                    foodName: list.food.label, 
                                    foodProtein: list.food.nutrients.PROCNT
                                })}
                            >
                                Add
                            </Button>
                        </Tooltip>
                    </div>
                    <List className="md:grid md:grid-cols-2 pt-4 pb-0">
                        <ListItem>
                            <ListItemText className="uppercase">Calories:</ListItemText>
                            <ListItemText className="text-right">
                                {list.food.nutrients?.ENERC_KCAL?.toFixed(0)} kcal
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemText className="uppercase">Protein:</ListItemText>
                            <ListItemText className="text-right">
                                {list.food.nutrients?.PROCNT?.toFixed(0)} g
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemText className="uppercase">Carbs:</ListItemText>
                            <ListItemText className="text-right">
                                {list.food.nutrients?.CHOCDF?.toFixed(0)} g
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemText className="uppercase">Fat:</ListItemText>
                            <ListItemText className="text-right">
                                {list.food.nutrients?.FAT?.toFixed(0)} g
                            </ListItemText>
                        </ListItem>
                    </List>
                </CardContent>
            </Card>
        ))}
    </>
  )
}

export default FoodList