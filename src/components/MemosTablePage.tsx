"use client"
import * as React from 'react';
import { Box, TextField, Modal } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { MemosTable } from '@/containers/memos';
import EditIcon from '@mui/icons-material/Edit';
import { useState } from 'react';
import ButtonRegister from './ButtonRegister';
import ButtonUpdate from './ButtonUpdate';
import DeleteIcon from '@mui/icons-material/Delete';
import MemosContainer from '@/containers/memos';
import PostsContainer from '@/containers/posts';

interface TableMemosProps { memos: MemosTable[] }

export const MemosTablePage: React.FC<TableMemosProps> = ({ memos }) => {
    const { createMemo, getMemos, updateMemo, deleteMemo } = MemosContainer.useContainer()
    // const { deletePostsmemo } = PostsContainer.useContainer()
    const [open, setOpen] = React.useState(false);
    const [memoSelected, setMemoSelected] = useState({
        name: '',
        code: ''
    })


    const handleOpen = (memo: any) => {
        setOpen(true);
        setMemoSelected(memo)
    }
    const handleClose = () => {
        setOpen(false);
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        { field: 'name', headerName: 'Nome', width: 250 },
        { field: 'code', headerName: 'Code', width: 250 },
        {
            field: 'edit', headerName: '', width: 50, renderCell: (item: any) => <Box >
                <EditIcon sx={{ color: 'grey' }} onClick={() => handleOpen(item.row)}></EditIcon>
            </Box>
        },
        {
            field: 'delete', headerName: '', width: 50, renderCell: (item: any) => <Box >
                <DeleteIcon sx={{ color: 'grey' }} onClick={() => deleteMemo(item.row)}></DeleteIcon>
            </Box>
        }
    ];






    const changeInput = (e: any) => {
        const newmemo = {
            ...memoSelected,
            [e.target.name]: e.target.value
        }
        setMemoSelected(newmemo)
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

    const submitUpdateMemo = () => {
        updateMemo(memoSelected)
        handleClose()
        getMemos()
    }

    return (
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", width: '100%' }} bgcolor="#d3d3d3">
            <Box sx={{ height: 370, width: "90%", borderRadius: "25px" }} bgcolor="white" border="1px solid black">
                <DataGrid rows={memos} columns={columns}
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
                        <TextField id="standard-basic" label='Nome' name='name' onChange={changeInput} value={memoSelected.name}></TextField>
                        <TextField id="standard-basic" label='Código' name='code' onChange={changeInput} value={memoSelected.code}></TextField>
                        <Box>
                            <ButtonUpdate onClick={() => { submitUpdateMemo() }} />
                        </Box>
                    </Box>
                </Box>
            </Modal>
        </Box>
    )
}

export default MemosTablePage;