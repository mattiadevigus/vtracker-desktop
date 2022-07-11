import { useEffect } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Fade, Stack, LinearProgress } from "@mui/material";


const HomePage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        Axios.get("/")
            .then(res => {
                setTimeout(() => {
                    res.data.authenticated ? navigate("/dashboard") : navigate("/login")
                }, 2000);
            })
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <Box sx={{ display: "flex", flexDirection: "column", height: "100vh", alignItems: "center", justifyContent: "center" }}>
            <Typography color="primary" sx={{ position: "absolute", bottom: 5, right: 5 }}>v 0.1</Typography>
            <Fade in={true}><Typography variant="h2">VTRACKER</Typography></Fade>
            <Fade in={true}><Typography variant="h5">Server Tracker</Typography></Fade>
            <Stack sx={{ position: "absolute", bottom: 20, width: "40%", color: "grey.500" }} spacing={2}>
                <LinearProgress color="primary" />
            </Stack>
        </Box>
    )
}

export default HomePage;