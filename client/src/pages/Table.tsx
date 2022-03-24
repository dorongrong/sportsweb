import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(
    ranking: number,
    teamname: string,
    rating: number,
    wincount: number,
) {
    return { ranking, teamname, rating, wincount };
}

const solo = [
    createData(1, "손흥민", 1.0, 24),
    createData(2, "박지성", 9.0, 37),
    createData(3, "차두리", 16.0, 24),
    createData(4, "박주영", 3.7, 67),
    createData(5, "이천수", 16.0, 49),
    createData(6, "김남일", 16.0, 49),
];

const team = [
    createData(1, "서울FC", 6.0, 24),
    createData(2, "부산FC", 9.0, 37),
    createData(3, "경주FC", 16.0, 24),
    createData(4, "전주FC", 3.7, 67),
    createData(5, "울산FC", 16.0, 49),
];

export default function Tables() {
    return (
        <TableContainer >
            <Table aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>순위</StyledTableCell>
                        <StyledTableCell >이름</StyledTableCell>
                        <StyledTableCell >승률</StyledTableCell>
                        <StyledTableCell >골 수</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {solo.map((solo) => (
                        <StyledTableRow key={solo.ranking}>
                            <StyledTableCell component="th" scope="row">
                                {solo.ranking}
                            </StyledTableCell>
                            <StyledTableCell >{solo.teamname}</StyledTableCell>
                            <StyledTableCell >{solo.rating}</StyledTableCell>
                            <StyledTableCell >{solo.wincount}</StyledTableCell>

                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}