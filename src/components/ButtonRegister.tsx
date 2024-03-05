"use client"
import * as React from 'react';
import { Box, Button } from '@mui/material';

interface NewMemoProps {
    onClick: any
}

export const ButtonRegister: React.FC<NewMemoProps> = ({ onClick }) => {
    return <Box onClick={onClick}>
        <Button variant="contained" sx={{ color: 'black', bgcolor: "white", borderRadius: "10px", textTransform: "none", boxShadow: "none", fontSize: 15, width: "165px", border: "solid 1px black" }}>
            Cadastrar
        </Button>
    </Box>;
}
export default ButtonRegister;