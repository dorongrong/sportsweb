import { Box, Grid } from '@mui/material';
import * as React from 'react';
import TeamNameComponent from "./TeamNameComponent";

const TeamName = () => {
    return (
        <>
            <p>132</p>
        </>
    );
};

const TeamFormation = () => {
    return (
        <>
            <p>456</p>
        </>
    );
};

const TeamManager = () => {
    return (
        <>
            <p>789</p>
        </>
    );
};

const TeamInformation = () => {
    return (
        <Box sx={{ mx: "150px" }}>
            <Box
                sx={{
                    bgcolor: 'background.paper',
                    boxShadow: 1,
                    borderRadius: 2,
                    p: 2,
                    minWidth: 650
                }}>
                <Grid container>
                    <Grid xs={4}>{TeamNameComponent}</Grid>
                    <Grid xs={4}>{TeamFormation}</Grid>
                    <Grid xs={4}>{TeamManager}</Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default TeamInformation;
