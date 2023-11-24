import React from 'react'
import { Grid, Typography, Container, TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {SearchbarGrid} from './SearchSectionStyle';

export default function SearchSection() {
    return (
        <>
            <Grid style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "30px", marginTop: "52px" }}>
                <Grid style={{ width: "625px" }}>
                    <Typography variant='h1' component='h1' fontSize="64px" fontWeight="800" position="relative">
                        <img style={{ position: "absolute", bottom: "10px", left: "86px", width: "154px", height: "63" }} src='/Images/img-vector-meet.png' alt='circle'></img>Meet your
                        <span style={{ color: "white", textShadow: "2px 2px 0px black, -2px -2px 0px black, 2px -2px 0px black, -2px 2px 0px black" }}> Icon</span></Typography>
                    <Typography variant="p" component="p" fontSize='28px'>
                        Icon delivers a once-in-a-lifetime opportunity
                        to directly connect you with artists you admire.
                    </Typography>
                </Grid>
                <SearchbarGrid>
                    <TextField id='search' type='search' label='Porfolio review, Photoshop, Canon...' sx={{ width: "30%", height: "48px", margin:"0px"  }}></TextField>
                    <Grid style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "24px" }}>
                        <FormControl fullWidth style={{ width: "192px"}}>
                            <InputLabel id="demo-simple-select-label" style={{color:"black"}}>Speciality</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Speciality"
                                style={{ height: "55px", margin:"0px"  }}
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl fullWidth style={{ width: "192px" }}>
                            <InputLabel id="demo-simple-select-label" style={{color:"black"}}>Topic</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Topic"
                                style={{ height: "55px", margin:"0px"  }}
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl >
                        {/* <Grid style={{ backgroundColor: "#E32320", color: "white", width: "64px", height: "48px", borderRadius:"6px", }} > */}
                        <SearchIcon  sx={{padding:"9px", backgroundColor:"#E32320",color:"white",fontSize:"10px", width:"64px", height:"48px", borderRadius:"5px", marginRight:"20px"}}/>
                        {/* </Grid> */}
                    </Grid>
                </SearchbarGrid>
            </Grid>
        </>
    )
}
