"use client"
import * as React from 'react';
import { Box } from '@mui/material';
import { MemosPostsPage } from '@/containers/posts';

interface Props { posts: MemosPostsPage }

export const Card: React.FC<Props> = ({ posts }) => {
    return <Box>
        <Box sx={{ border: "1px solid black ", height: '280px', width: '200px' }}>
            <Box sx={{ border: "1px solid red ", height: "80%" }}>
                {posts.name}
            </Box>
            <Box sx={{ border: "1px solid blue ", height: "20%" }}>
                {posts.photoUrl}
            </Box>
        </Box>
    </Box>;
}

export default Card;