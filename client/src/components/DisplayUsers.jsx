import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';

const { isEmpty } = require('lodash');



const DisplayUser = (props) =>{
    {console.log(props)}
    const allUsers = props.users;
    const users = !isEmpty(allUsers) ? allUsers : [];
    return (
            <div className="users">
                {!isEmpty(users) ? <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Company</TableCell>
                            <TableCell align="right">Position</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map(({ name, position, msgContent }, key) => (
                            <TableRow key={key}>
                                <TableCell component="th" scope="row"> {name ? name : 'No Name Found'} </TableCell>
                                <TableCell align="right">{msgContent ? msgContent : 'No Company Found'}</TableCell>
                                <TableCell align="right">{position ? position : 'No Position Found'}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table> : null}
            </div>
        );
}

export default DisplayUser;
