"use client"
import * as React from 'react';
import { Box, TextField, Modal } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import UserContainer, { MemosUsersTable } from '@/containers/user';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';
import ButtonUpdate from './ButtonUpdate';

interface TableUsersProps { users: MemosUsersTable[] }

export const UsersTable: React.FC<TableUsersProps> = ({ users }) => {

    const { deleteUser, getUsersmemo, updateUser } = UserContainer.useContainer()


    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        { field: 'name', headerName: 'Nome', width: 250 },
        { field: 'email', headerName: 'E-mail', width: 250 },
        { field: 'phone', headerName: 'Telefone', width: 250 },
        {
            field: 'edit', headerName: '', width: 50, renderCell: (item: any) => <Box >
                <EditIcon sx={{ color: 'grey' }} onClick={() => handleOpen(item.row)}></EditIcon>
            </Box>
        },
        {
            field: 'delete', headerName: '', width: 50, renderCell: (item: any) => <Box >
                <DeleteIcon sx={{ color: 'grey' }} onClick={() => deleteUser(item.row)}></DeleteIcon>
            </Box>
        }

    ];

    const [open, setOpen] = React.useState(false);
    const [userSelected, setUserSelected] = useState({
        name: '',
        email: '',
        phone: ''
    })

    const handleOpen = (memo: any) => {
        setOpen(true);
        setUserSelected(memo)
    }

    const handleClose = () => {
        setOpen(false);
    }

    const changeInput = (e: any) => {
        const newmemo = {
            ...userSelected,
            [e.target.name]: e.target.value
        }
        setUserSelected(newmemo)
    }


    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const submitUpdateUser = () => {
        updateUser(userSelected)
        handleClose()
        getUsersmemo()
    }





    return (
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }} bgcolor="#d3d3d3">
            <Box sx={{ height: 370, width: "90%", borderRadius: "25px" }} bgcolor="white" border="1px solid black">
                <DataGrid rows={users} columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: { pageSize: 5, },
                        },
                    }}
                    pageSizeOptions={[5]} checkboxSelection disableRowSelectionOnClick />
            </Box>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
                        <TextField id="standard-basic" label='Nome' name='name' onChange={changeInput} value={userSelected.name}></TextField>
                        <TextField id="standard-basic" label='E-mail' name='email' onChange={changeInput} value={userSelected.email}></TextField>
                        <TextField id="standard-basic" label='Telefone' name='phone' onChange={changeInput} value={userSelected.phone}></TextField>
                        <Box>
                            <ButtonUpdate onClick={() => { submitUpdateUser() }} />
                        </Box>
                    </Box>
                </Box>
            </Modal>







        </Box>
    )
}

export default UsersTable;