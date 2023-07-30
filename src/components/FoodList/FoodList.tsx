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
import AddIcon from '@mui/icons-material/Add';
import { FoodListProps, AddFoodProps } from "../../models";
import { useAuthContext } from "../../hooks/useAuthContext";
import axios from "axios";

function FoodList({ lists }: FoodListProps ) {

    const { user } = useAuthContext()

    const handleClick = ( { foodName, foodProtein } : AddFoodProps ) => {
        console.log(foodName, foodProtein)

        axios.post(`http://localhost:${process.env.REACT_APP_PORT}/api/tracker`, {
            uid: user?.uid,
            name: foodName,
            protein: foodProtein
        })
        .then((response) => {
            console.log(response.data)
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
                                onClick={() => handleClick({foodName: list.food.label, foodProtein: list.food.nutrients.PROCNT})}
                            >
                                Add
                            </Button>
                        </Tooltip>
                    </div>
                    <List className="md:grid md:grid-cols-2 pt-4 pb-0">
                        <ListItem>
                            <ListItemText className="uppercase">Calories:</ListItemText>
                            <ListItemText className="text-right">{list.food.nutrients.ENERC_KCAL} kcal</ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemText className="uppercase">Protein:</ListItemText>
                            <ListItemText className="text-right">{list.food.nutrients.PROCNT} g</ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemText className="uppercase">Carbs:</ListItemText>
                            <ListItemText className="text-right">{list.food.nutrients.CHOCDF} g</ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemText className="uppercase">Fat:</ListItemText>
                            <ListItemText className="text-right">{list.food.nutrients.FAT} g</ListItemText>
                        </ListItem>
                    </List>
                </CardContent>
            </Card>
        ))

        }

    </>
  )
}

export default FoodList