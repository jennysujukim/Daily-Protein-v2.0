import { Link } from 'react-router-dom'
import { 
    Button, 
    InputAdornment,
    MenuItem, 
    TextField, 
    Typography,
    FormLabel
} from '@mui/material'
import { 
    useDispatch,
    useSelector
} from "react-redux";
import {
    updateAge,
    updateGender,
    updateHeight,
    updateWeight,
    updateActivity,
    updateGoal
} from '../../redux/features/profile'
import { RootState } from '../../models'
import PageLayout from '../../layout/PageLayout/PageLayout'
import { useAuthContext } from '../../hooks/useAuthContext';
import axios from 'axios';


function Setting() {
 
    const { user } = useAuthContext()
    const profileState = useSelector((state:RootState) => state.profile)
    const dispatch = useDispatch();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        axios.post(`http://localhost:${process.env.REACT_APP_PORT}/api/profile`, { 
            uid: user?.uid,
            age: profileState.age,
            gender: profileState.gender,
            height: profileState.height,
            weight: profileState.weight,
            activity: profileState.activity,
            goal: profileState.goal
         })
        .then((response) => {
            console.log(response.data)
        })
        .catch((error) => {
            console.error("Error making profile request:", error)
        })
    }

  return (
    <PageLayout>
        <div className="max-w-2xl mx-auto">
            <Typography 
                variant='h2'
                component="h2"
                className="font-medium text-center"
            >
                Profile Setting
            </Typography>
            <form 
                className="flex flex-col w-full pt-8"
                onSubmit={handleSubmit}
            >
                <FormLabel 
                    component="label" 
                    required
                >
                    Age
                </FormLabel>
                <TextField 
                    required
                    variant='standard'
                    type="number"
                    value={profileState.age}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => dispatch(updateAge(e.target.value))}
                />
                <FormLabel 
                    component="label" 
                    required
                >
                    Gender
                </FormLabel>
                <TextField 
                    required
                    select
                    variant='standard'
                    value={profileState.gender}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => dispatch(updateGender(e.target.value))}
                >
                    <MenuItem key="Female" value="Female">Female</MenuItem>
                    <MenuItem key="Male" value="Male">Male</MenuItem>
                </TextField>
                <FormLabel 
                    component="label" 
                    required
                >
                    Height
                </FormLabel>
                <TextField 
                    required
                    variant='standard'
                    type="number"
                    value={profileState.height}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => dispatch(updateHeight(e.target.value))}
                    InputProps={{
                        endAdornment: <InputAdornment position="end">cm</InputAdornment>
                    }}
                />
                <FormLabel 
                    component="label" 
                    required
                >
                    Weight
                </FormLabel>
                <TextField 
                    required
                    variant='standard'
                    type="number"
                    value={profileState.weight}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => dispatch(updateWeight(e.target.value))}
                    InputProps={{
                        endAdornment: <InputAdornment position="end">kg</InputAdornment>
                    }}
                />
                <FormLabel 
                    component="label" 
                    required
                >
                    Activity Level
                </FormLabel>
                <TextField 
                    required
                    select
                    variant='standard'
                    value={profileState.activity}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => dispatch(updateActivity(e.target.value))}
                >
                    <MenuItem key="Highly Active" value="Highly Active">Highly Active</MenuItem>
                    <MenuItem key="Active" value="Active">Active</MenuItem>
                    <MenuItem key="Average" value="Average">Average</MenuItem>
                    <MenuItem key="Low Active" value="Low Active">Low Active</MenuItem>
                    <MenuItem key="No Active" value="No Active">No Active</MenuItem>
                </TextField>
                <FormLabel 
                    component="label" 
                    required
                >
                    Goal
                </FormLabel>
                <TextField 
                    required
                    select
                    variant='standard'
                    value={profileState.goal}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => dispatch(updateGoal(e.target.value))}
                >
                    <MenuItem key="Gain Weight" value="Gain Weight">Gain Weight</MenuItem>
                    <MenuItem key="Maintain Weight" value="Maintain Weight">Maintain Weight</MenuItem>
                    <MenuItem key="Loose Weight" value="Loose Weight">Loose Weight</MenuItem>
                </TextField>
                <Button
                    type="submit"
                    variant='outlined'
                    size="large"
                    className="w-full mt-8"
                >
                    Save
                </Button>
            </form>
            <Link to="/">
                <Button 
                size="large"
                color="secondary"
                className="w-full mt-4"
                >
                Go Back
                </Button>
          </Link>
        </div>
    </PageLayout>
  )
}

export default Setting