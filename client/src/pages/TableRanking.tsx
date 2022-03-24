import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Table from './Table';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) { //메뉴 리스트
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
        // id={`simple-tabpanel-${index}`}
        // aria-labelledby={`simple-tab-${index}`}
        // {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}


export default function TableRanking() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="개인 랭킹" />
                    <Tab label="팀 랭킹" />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <Table></Table>
            </TabPanel>
            <TabPanel value={value} index={1}>
                몰라레후~
            </TabPanel>
        </Box>
    );
}