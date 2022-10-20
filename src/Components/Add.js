import React, {useState} from 'react'
import { FormControl, FormGroup, InputLabel, Input, Typography, Button, styled  } from '@mui/material'
import { addUser } from '../Service/api'

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

const Add = () => {

    const [user, setUser] = useState(initialValues)

    const onValueChange = (e) => {
        setUser( { ...user, [e.target.name]: e.target.value} )
        console.log(user);
    }

    const addUserDetails = async () => {
        await addUser(user);
    }

  return (
    <div>
      <Container>
        <Typography variant='h4'>Add User</Typography>
        <FormControl>
            <InputLabel>Name</InputLabel>
            <Input onChange={ (e) => onValueChange(e)} name="name"/>
        </FormControl>
        <FormControl>
            <InputLabel>Username</InputLabel>
            <Input onChange={ (e) => onValueChange(e)} name="username"/>
        </FormControl>
        <FormControl>
            <InputLabel>Email</InputLabel>
            <Input onChange={ (e) => onValueChange(e)} name="email"/>
        </FormControl>
        <FormControl>
            <InputLabel>Phone</InputLabel>
            <Input onChange={ (e) => onValueChange(e)} name="phome"/>
        </FormControl>
        <FormControl>
            <Button onClick={() => addUserDetails()} variant='contained'>Add User</Button>
        </FormControl>
      </Container>
    </div>
  )
}

export default Add
