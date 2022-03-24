import * as React from 'react';
import logo from './logo.svg';
import Appbar from './Appbar';
import TestAppbar from './TestAppbar';
import AppBar from '@mui/material/AppBar';
import Show from './Show';
import Button from '@mui/material/Button';
import {
    Avatar,
    Container,
    Grid,
    Box,
    Typography,
    LinearProgress,
} from "@mui/material";
import Table from './Table';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Solo from './Solo';
import Team from './Team';
import TableRanking from './TableRanking';
import { ForkRight } from '@mui/icons-material';
import VerticalTabs from './VerticalTabs';

const Information = (): JSX.Element => {
    return (
        <Box sx={{ mt: "100px", mx: "150px" }}>
            <Box
                sx={{
                    bgcolor: 'background.paper',
                    boxShadow: 1,
                    borderRadius: 2,
                    p: 2,
                }}>
                <Grid container>
                    <VerticalTabs></VerticalTabs>
                </Grid>
            </Box>
        </Box>
    );
};

export default Information;
