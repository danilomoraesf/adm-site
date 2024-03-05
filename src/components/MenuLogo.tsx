"use client"
import * as React from 'react';
import CameraIcon from '@mui/icons-material/Camera';
import { Box, } from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


export default function MenuLogo() {
    return <Box display='flex' alignItems="center" gap='10px' height="80px" paddingLeft="10px">
        <CameraIcon sx={{ color: "black", fontSize: 60 }} />
        <Box fontWeight='bold' className='fontmenulogo'>MEMOS</Box>
    </Box >;
}

