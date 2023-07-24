import { Button, InputAdornment, MenuItem, TextField, Typography } from '@mui/material'
import PageLayout from '../../layout/PageLayout/PageLayout'
import { Link } from 'react-router-dom'

function Setting() {


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
            <form className="flex flex-col w-full pt-8">
                <TextField 
                    required
                    variant='standard'
                    label="Age"
                    type="number"
                    className="pb-4"
                />
                <TextField 
                    required
                    select
                    variant='standard'
                    label="Gender"
                    className="pb-4"
                >
                    <MenuItem key="Female" value="Female">Female</MenuItem>
                    <MenuItem key="Male" value="Male">Male</MenuItem>
                </TextField>
                <TextField 
                    required
                    variant='standard'
                    label="Height"
                    type="number"
                    className="pb-4"
                    InputProps={{
                        endAdornment: <InputAdornment position="end">cm</InputAdornment>
                    }}
                />
                <TextField 
                    required
                    variant='standard'
                    label="Weight"
                    type="number"
                    className="pb-4"
                    InputProps={{
                        endAdornment: <InputAdornment position="end">kg</InputAdornment>
                    }}
                />
                <TextField 
                    required
                    select
                    variant='standard'
                    label="Activity"
                    className="pb-4"
                >
                    <MenuItem key="Highly Active" value="Highly Active">Highly Active</MenuItem>
                    <MenuItem key="Active" value="Active">Active</MenuItem>
                    <MenuItem key="Average" value="Average">Average</MenuItem>
                    <MenuItem key="Low Active" value="Low Active">Low Active</MenuItem>
                    <MenuItem key="No Active" value="No Active">No Active</MenuItem>
                </TextField>
                <TextField 
                    required
                    select
                    variant='standard'
                    label="Goal"
                    className="pb-4"
                >
                    <MenuItem key="Gain Weight" value="Gain Weight">Gain Weight</MenuItem>
                    <MenuItem key="Maintain Weight" value="Maintain Weight">Maintain Weight</MenuItem>
                    <MenuItem key="Loose Weight" value="Loose Weight">Loose Weight</MenuItem>
                </TextField>
                <Button
                    type="submit"
                    variant="outlined" 
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