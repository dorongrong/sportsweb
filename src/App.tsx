import React from 'react';
import logo from './logo.svg';
import './App.css';
import Appbar from './pages/Appbar';
import TestAppbar from './pages/TestAppbar';
import AppBar from '@mui/material/AppBar';
import Show from './pages/Show';
import Button from '@mui/material/Button';
import {
  Avatar,
  Container,
  Grid,
  Box,
  Typography,
  LinearProgress,
} from "@mui/material";
import Table from './pages/Table';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Solo from './pages/Solo';
import Team from './pages/Team';
import TableRanking from './pages/TableRanking';
import { ForkRight } from '@mui/icons-material';
import Home from './pages/Home';
import Information from './pages/Information';

const App = (): JSX.Element => {
  return (
    <>
      <header>
        <TestAppbar></TestAppbar>
      </header>
      {/* <Appbar price={900} isinterest={true} isAdjustable={true} /> */}
      <body>
        {/* Routes 안에 body 태그 넣으니까 오류뜸 */}
        <Routes>
          <Route path="/hello" element={<Information />} />
          <Route path="/" element={<Home />} />
        </Routes>



      </body>
      <footer></footer>
    </>
  );
};

export default App;
