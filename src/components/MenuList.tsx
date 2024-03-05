"use client"
import * as React from 'react';
import { Box, Link, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider } from '@mui/material';
import InboxIcon from '@mui/icons-material/Inbox'
import DraftsIcon from '@mui/icons-material/Drafts';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import CameraIcon from '@mui/icons-material/Camera';

export default function MenuList() {
    return <>
        <Box sx={{ width: '100%', bgcolor: 'white', border: "1px solid black" }} >
            <List>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <Link href="dashpage" sx={{ textDecoration: 'none', color: 'black' }}>
                            <ListItemText primary="Painel" />
                        </Link>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <AccountBoxIcon />
                        </ListItemIcon>
                        <Link href="http://localhost:3000/" sx={{ textDecoration: 'none', color: 'black' }}>
                            <ListItemText primary="Usuários" />
                        </Link>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <CameraIcon />
                        </ListItemIcon>
                        <Link href="memospage" sx={{ textDecoration: 'none', color: 'black' }}>
                            <ListItemText primary="Memos" />
                        </Link>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <DraftsIcon />
                        </ListItemIcon>
                        <Link href="postspage" sx={{ textDecoration: 'none', color: 'black' }}>
                            <ListItemText primary="Posts" />
                        </Link>
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    </>;
}
