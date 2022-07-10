import { Box, Grid, Typography } from "@mui/material";
import Form from "./Form/Form";
import Info from "./Info/Info";

const Login = () => {
    return (
        <Box sx={{ display: "flex", flexDirection: "column", marginLeft: "2rem", marginRight: "2rem", height: "100vh", alignItems: "center", justifyContent: "center" }}>
            <Grid container>
                <Grid item xs={12} md={6} lg={6} sx={{ alignSelf: "center" }}>
                    <Typography variant="h5" align="center">Welcome to Vtracker!</Typography>
                    <Typography color="secondary" align="center">Log in with your credentials or register a new account!</Typography>
                    <Form />
                </Grid>
                <Grid item xs={12} md={6} lg={6} sx={{ alignSelf: "center", borderLeft: "1px solid grey" }}>
                    <Typography variant="h5" align="center">What does it offer?</Typography>
                    <Info />
                </Grid>
            </Grid>
        </Box>
    )
}

export default Login;