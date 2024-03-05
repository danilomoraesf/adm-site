"use client"
import * as React from 'react';
import { Box } from '@mui/material';

interface Props {
    page: string
}

export default function BoxMenuRightDash(props: Props) {
    return <Box
        borderBottom='1px solid black'
        bgcolor="white"
        display="flex"
        alignItems="center"
        gap='10px'
        height="80px"
        paddingLeft="10px"
        fontSize="18px"
        className='fontmenulogo' >
        {props.page}
    </Box>;
}
