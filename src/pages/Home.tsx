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
import { useMediaQuery } from "react-responsive";


const Home = (): JSX.Element => {
    return (
        <Box sx={{ mt: "100px", mx: "150px" }}>
            <Box
                sx={{
                    bgcolor: 'background.paper',
                    boxShadow: 1,
                    borderRadius: 2,
                    p: 2,
                    minWidth: 650
                }}>
                <Grid container sx={{ mt: "100px", justifyContent: 'space-between' }}  >
                    <Grid md={6} sx={{ minWidth: 550 }} xs={12} >
                        {/* 근데 이거 maxWidth 왜안됨? */}
                        {/* sx={{ display: { xs: 'none', md: 'flex' } }} */}
                        < Grid >
                            <div><h1><p>반 페르시<br />
                                내 마음 속 작은 아이가 맨유를 외쳤다.</p></h1></div>
                        </Grid>
                        <Grid container>
                            <Grid xs={12}>
                                <Show></Show>
                            </Grid>
                        </Grid>
                    </Grid>
                    {/* <Grid xs={12} sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <Grid>
                            <div><h1><p>루이스 수아레즈<br />
                                깨물줄은 몰랐제~!!</p></h1></div>
                        </Grid>
                        <Grid container>
                            <Grid xs={12}>
                                <Show></Show>
                            </Grid>
                        </Grid>
                    </Grid> */}
                    {/* <Grid md={2} sx={{ display: { xs: 'none', md: 'flex' } }} ></Grid> 나중에 대려올께 */}
                    {/* sx={{ display: { xs: 'flex', md: 'none' } }} */}
                    <Grid md={3} xs={12} sx={{ minWidth: 350 }}>
                        <Grid container >
                            <Grid xs={12}>
                                <p>날씨 API</p>
                            </Grid>
                            <Grid xs={12}>
                                <TableRanking></TableRanking>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box >
        </Box >
    );
};

export default Home;
