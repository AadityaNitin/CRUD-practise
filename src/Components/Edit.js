import React, {useState, useEffect} from 'react'
import { FormControl, FormGroup, InputLabel, Input, Typography, Button, styled  } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'
import { getUser, editUser } from '../Service/api'

const Container = styled(FormGroup)`
width:50%;
margin: 5% auto 0 auto;
& > div {
margin-top:1em;
}
`

const initialValues = {
    name:'',
    username:'',
    email:'',
    phone:''
}

const Edit = () => {

    const [user, setUser] = useState(initialValues)
    const navigate = useNavigate();
    const { id } = useParams();
    
    useEffect(() => {
        getUserData();
    }, []);

    const getUserData = async () => {
        let response = await getUser(id);
        setUser(response.data);
    }

    const onValueChange = (e) => {
        setUser( { ...user, [e.target.name]: e.target.value} )
        console.log(user);
    }

    const addUserDetails = async () => {
        await editUser(user, id);
        navigate('/all');
    }

  return (
    <div>
      <Container>
        <Typography variant='h4'>Edit User</Typography>
        <FormControl>
            <InputLabel>Name</InputLabel>
            <Input onChange={ (e) => onValueChange(e)} name="name" value={user.name}/>
        </FormControl>
        <FormControl>
            <InputLabel>Username</InputLabel>
            <Input onChange={ (e) => onValueChange(e)} name="username" value={user.username}/>
        </FormControl>
        <FormControl>
            <InputLabel>Email</InputLabel>
            <Input onChange={ (e) => onValueChange(e)} name="email" value={user.email}/>
        </FormControl>
        <FormControl>
            <InputLabel>Phone</InputLabel>
            <Input onChange={ (e) => onValueChange(e)} name="phone" value={user.phone}/>
        </FormControl>
        <FormControl>
            <Button onClick={() => addUserDetails()} variant='contained'>Edit User</Button>
        </FormControl>
      </Container>
    </div>
  )
}

export default Edit
