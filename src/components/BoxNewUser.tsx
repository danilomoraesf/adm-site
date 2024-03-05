"use client"
import * as React from 'react';
import { Box, Button } from '@mui/material';
import { on } from 'stream';

interface NewUserProps {
    onClick: any
}

export const BoxNewUser: React.FC<NewUserProps> = ({ onClick }) => {
    return <Box display="flex" alignItems="center" paddingRight="80px" height="110px" justifyContent="flex-end" bgcolor="#d3d3d3" onClick={onClick}>
        <Button variant="contained" sx={{ color: 'black', bgcolor: "white", borderRadius: "10px", textTransform: "none", boxShadow: "none", fontSize: 15, width: "165px", border: "solid 1px black" }}>
            Novo Memo
        </Button>
    </Box>;
}
export default BoxNewUser;