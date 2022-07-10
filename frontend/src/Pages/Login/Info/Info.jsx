import { Box, Container, Grid, Typography } from "@mui/material";
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import WorkspacesIcon from '@mui/icons-material/Workspaces';
import QueryStatsIcon from '@mui/icons-material/QueryStats';

const Info = () => {
    return (
        <Box marginTop="2rem">
            <Container align="center">
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <FormatListNumberedIcon fontSize="large" />
                        <Typography>Register your server times 24/7</Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <WorkspacesIcon fontSize="large" />
                        <Typography>Tracking of multiple servers at the same time </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <QueryStatsIcon fontSize="large" />
                        <Typography>Automatically generated statistics</Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default Info;