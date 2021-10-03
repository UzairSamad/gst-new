import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import Button from '@mui/material/Button';





export default function BasicTable() {
    const tableHeader = ['Guide', 'First Name', 'Test Version', 'Belived Impaired', 'Full Attention', 'Test Start Time', 'Classic (/6)Score', 'GST (/12)Score', 'Z_TAP_ART', 'Z_TAPED_AED', 'Z_EST_ART', 'Z_EST_TIM', 'Z_FOL_PNT', 'Z_EST_AED', 'Z_BAL_LLD', 'Z_BAL_RLD', 'Z_TAP_PWS', 'Z_FOL_AED', 'Z_FOL_ERRCT', 'TAP_ART', 'EST_ART', 'EST_TIM', 'FOL_COS', 'BAL_DIS', 'BAL_LLD', 'BAL_RLD', 'BAL_LeftAverage', 'BAL_RightAverage', 'BAL_TotalAverage', 'TAP_Sum_of_React_Time', 'TAP_Sum_ of Error Distance', 'TAP_Total_Shapes_Shown', 'TAP_Total_Target_Shapes', 'TAP_WSC', 'TAP_Sum_of_Reaction_Time', 'EST_Sum_of_Error_Distance', 'EST_Total_Circles_Shown', 'FOL_Total_Squares_Shown', 'FOL_Square_Count_Error', 'TAP_AED', 'TAP_TTC', 'TAP_CTC', 'TAP_PWS', 'FOL_CSE', 'FOL_PNT', 'FOL_AED', 'FOL_TD', 'FOL_TOT', 'FOL_TDIS', 'EST_TEC', 'EST_TEE', 'EST_AED', 'EST_AED', 'EST_TSC', 'EST_TTC', 'Tap Task Detail', 'Follow Task Detail', 'Estimate Task Detail', 'Balance Task Detail', 'Get Json Data']
    let products = [
        {
            guide: 'Revamped813F8050-1940-407E-9478-6765CFA4776D',
            fname: 'Jhon',
            testVersion: 'Classic',
            believedImpaired: 'Classic',
            fullAttention: 'True',
            testStart: '2021-08-10 10:08:54 +0000',
            classicScore: '68.22',
            gsTScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            detailButton: 'Button',
            detailButton: 'Button1',

        },
        {
            guide: 'Revamped813F8050-1940-407E-9478-6765CFA4776D',
            fname: 'Jhon',
            testVersion: 'Classic',
            believedImpaired: 'Classic',
            fullAttention: 'True',
            testStart: '2021-08-10 10:08:54 +0000',
            classicScore: '68.22',
            gsTScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            detailButton: 'Button',
            detailButton: 'Button1',
        },
        {
            guide: 'Revamped813F8050-1940-407E-9478-6765CFA4776D',
            fname: 'Jhon',
            testVersion: 'Classic',
            believedImpaired: 'Classic',
            fullAttention: 'True',
            testStart: '2021-08-10 10:08:54 +0000',
            classicScore: '68.22',
            gsTScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            detailButton: 'Button',
        },
        {
            guide: 'Revamped813F8050-1940-407E-9478-6765CFA4776D',
            fname: 'Jhon',
            testVersion: 'Classic',
            believedImpaired: 'Classic',
            fullAttention: 'True',
            testStart: '2021-08-10 10:08:54 +0000',
            classicScore: '68.22',
            gsTScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            detailButton: 'Button',
        },
        {
            guide: 'Revamped813F8050-1940-407E-9478-6765CFA4776D',
            fname: 'Jhon',
            testVersion: 'Classic',
            believedImpaired: 'Classic',
            fullAttention: 'True',
            testStart: '2021-08-10 10:08:54 +0000',
            classicScore: '68.22',
            gsTScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            detailButton: 'Button',
        },
        {
            guide: 'Revamped813F8050-1940-407E-9478-6765CFA4776D',
            fname: 'Jhon',
            testVersion: 'Classic',
            believedImpaired: 'Classic',
            fullAttention: 'True',
            testStart: '2021-08-10 10:08:54 +0000',
            classicScore: '68.22',
            gsTScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            detailButton: 'Button',
        },
        {
            guide: 'Revamped813F8050-1940-407E-9478-6765CFA4776D',
            fname: 'Jhon',
            testVersion: 'Classic',
            believedImpaired: 'Classic',
            fullAttention: 'True',
            testStart: '2021-08-10 10:08:54 +0000',
            classicScore: '68.22',
            gsTScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            classicScore: '68.22',
            detailButton: 'Button',
        },
    ]


    return (
        <div>
            <div style={{ backgroundColor: '#fff', marginBottom: '30px', marginTop: '30px', height: '100px', textAlign: 'left', paddingRight: '10px', paddingLeft: '10px', alignSelf: 'center', paddingTop: '0.5px' }}>
                <p style={{ fontWeight: '100', fontSize: '23px', color: "#676A6C" }}>Data Tables</p>
                <p style={{ marginTop: '-20px', fontSize: '15px', color: "#676A6C" }}>Dashboard</p>
            </div>


            <div style={{ backgroundColor: '#fff', marginBottom: '30px', marginTop: '30px', height: '70px', display: 'flex', justifyContent: 'space-between', paddingRight: '10px', paddingLeft: '10px' }}>
                <div style={{ display: "flex", alignItems: 'center', color: "#676A6C", fontWeight: '100' }}> GST Record</div>
                <div style={{ display: "flex", width: '20%', justifyContent: 'space-between', alignContent: "center", alignItems: 'center' }}>
                    <Button style={{ backgroundColor: '#1ab394', height: '35px', width: '120px', color: '#fff' }}>
                        Get JSON
                    </Button>
                    <Button style={{ backgroundColor: '#1ab394', height: '35px', width: '120px', color: '#fff' }}>
                        Get Excel
                    </Button>
                </div>
            </div>
            <TableContainer style={{ maxWidth: '1230px' }} component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            {tableHeader.map(val => <TableCell style={{minWidth:'120px'}} align="center">{val}</TableCell>)}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products?.map((row) =>
                        (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >

                                <TableCell style={{minWidth:'150px'}}  align="center">{row.guide}</TableCell>
                                <TableCell align="center">{row.fname}</TableCell>
                                <TableCell align="center">{row.testVersion}</TableCell>
                                <TableCell align="center">{row.believedImpaired}</TableCell>
                                <TableCell align="center">{row.fullAttention}</TableCell>
                                <TableCell align="center">{row.classicScore}</TableCell>
                                <TableCell align="center">{row.testStart}</TableCell>
                                <TableCell align="center">{row.gsTScore}</TableCell>
                                <TableCell align="center">{row.classicScore}</TableCell>
                                <TableCell align="center">{row.classicScore}</TableCell>
                                <TableCell align="center">{row.classicScore}</TableCell>
                                <TableCell align="center">{row.classicScore}</TableCell>
                                <TableCell align="center">{row.classicScore}</TableCell>
                                <TableCell align="center">{row.classicScore}</TableCell>
                                <TableCell align="center">{row.classicScore}</TableCell>
                                <TableCell align="center">{row.classicScore}</TableCell>
                                <TableCell align="center">{row.classicScore}</TableCell>
                                <TableCell align="center">{row.classicScore}</TableCell>
                                <TableCell align="center">{row.classicScore}</TableCell>
                                <TableCell align="center">{row.classicScore}</TableCell>
                                <TableCell align="center">{row.classicScore}</TableCell>
                                <TableCell align="center">{row.classicScore}</TableCell>
                                <TableCell align="center">{row.classicScore}</TableCell>
                                <TableCell align="center">{row.classicScore}</TableCell>
                                <TableCell align="center">{row.classicScore}</TableCell>
                                <TableCell align="center">{row.classicScore}</TableCell>
                                <TableCell align="center">{row.classicScore}</TableCell>
                                <TableCell align="center">{row.classicScore}</TableCell>
                                <TableCell align="center">{row.classicScore}</TableCell>
                                <TableCell align="center">{row.classicScore}</TableCell>
                                <TableCell align="center">{row.classicScore}</TableCell>
                                <TableCell align="center">{row.classicScore}</TableCell>
                                <TableCell align="center">{row.classicScore}</TableCell>
                                <TableCell align="center">{row.classicScore}</TableCell>
                                <TableCell align="center">{row.classicScore}</TableCell>
                                <TableCell align="center">{row.classicScore}</TableCell>
                                <TableCell align="center">{row.classicScore}</TableCell>
                                <TableCell align="center">{row.classicScore}</TableCell>
                                <TableCell align="center">{row.classicScore}</TableCell>
                                <TableCell align="center">{row.classicScore}</TableCell>
                                <TableCell align="center">{row.classicScore}</TableCell>
                                <TableCell align="center">{row.classicScore}</TableCell>
                                <TableCell align="center">{row.classicScore}</TableCell>
                                <TableCell align="center">{row.classicScore}</TableCell>
                                <TableCell align="center">{row.classicScore}</TableCell>
                                <TableCell align="center">{row.classicScore}</TableCell>
                                <TableCell align="center">{row.classicScore}</TableCell>
                                <TableCell align="center">{row.classicScore}</TableCell>
                                <TableCell align="center">{row.classicScore}</TableCell>
                                <TableCell align="center">{row.classicScore}</TableCell>
                                <TableCell align="center">{row.classicScore}</TableCell>
                                <TableCell align="center">{row.classicScore}</TableCell>
                                <TableCell align="center">{row.classicScore}</TableCell>
                                <TableCell align="center">{row.classicScore}</TableCell>
                                <TableCell align="center">{row.classicScore}</TableCell>
                                <TableCell align="center">{row.classicScore}</TableCell>
                                <TableCell align="center" style={{ minWidth: '130px' }}>
                                    <Button style={{ height:'30px',backgroundColor: '#1ab394',color:'#fff',fontSize:'10px' }}>
                                        Get JSON
                                    </Button>
                                </TableCell>
                                <TableCell align="center" style={{ minWidth: '130px' }}>
                                    <Button style={{ height:'30px', backgroundColor: '#1ab394',color:'#fff',fontSize:'10px'  }}>
                                        Get JSON
                                    </Button>
                                </TableCell>
                                <TableCell align="center" style={{ minWidth: '130px' }}>
                                    <Button style={{ height:'30px', backgroundColor: '#1ab394',color:'#fff' ,fontSize:'10px' }}>
                                        Get JSON
                                    </Button>
                                </TableCell>
                                <TableCell align="center" style={{ minWidth: '130px' }}>
                                    <Button style={{ height:'30px', backgroundColor: '#1ab394' ,color:'#fff',fontSize:'10px' }}>
                                        Get JSON
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}