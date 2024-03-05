"use client"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { MemosPostsPage } from '@/containers/posts';
import postspage from '@/pages/postspage';
import Box from '@mui/material/Box';
import DeleteIcon from '@mui/icons-material/Delete';

interface CardProps {
    photoUrl: any
    user: any
    onClick: any
}

export const ActionAreaCard: React.FC<CardProps> = ({ photoUrl, user, onClick }) => {
    return (<>
        <Box onClick={onClick}>
            <Card sx={{ maxWidth: 200 }}>
                <CardActionArea >
                    <CardMedia
                        component="img"
                        height="200"
                        image={photoUrl}
                        alt="green iguana"
                        width='100px'
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" color='black' fontSize='19px'>
                            {user}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Box>
    </>
    );
}
export default ActionAreaCard;