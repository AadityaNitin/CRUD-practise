import { useEffect, useState } from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell, styled, Button } from '@mui/material'
import React from 'react'
import { getUsers, deleteUser } from '../Service/api';
import { Link } from 'react-router-dom';

const StyledTable = styled(Table)`
width:90%;
margin: 4em auto 0 auto;
`;

const Thead = styled(TableRow)`
background: #000;
& > th {
  color: #fff;
  font-size:20px;
}
`

const TBody = styled(TableRow)`
& > td {
  font-size:20px;
}
`

const All = () => {
  
  useEffect(() => {
    getUsersDetails();
  }, []);

  const [users, setUsers] = useState([]);


  const getUsersDetails = async () => {
      let response = await getUsers();
      setUsers(response.data);
  }

  const deleteUserData = async (id) => {
        await deleteUser(id);
        getUsersDetails();
  }

  return (
    <div>
      <StyledTable>
        <TableHead>
          <Thead>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Username</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell></TableCell>
          </Thead>
        </TableHead>
        <TableBody>
          {
            users.map(user => (
              <TBody>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.username}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.phone}</TableCell>
                <TableCell>
                  <Button variant='contained' color='secondary' style={{marginRight:10}} component={Link} to={`/edit/${user.id}`}>Edit</Button>
                  <Button variant='contained' color='error' onClick={() => deleteUserData(user.id)} >Delete</Button>
                </TableCell>
              </TBody>
            ))
          } 
        </TableBody>
      </StyledTable>
    </div>
  )
}

export default All
