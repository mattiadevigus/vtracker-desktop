import { Container, Box, Grid, TextField, Button } from "@mui/material";
import PropTypes from "prop-types";
import { useState } from "react";

const Form = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, hasChanged: true, [e.target.name]: e.target.value })
        console.log(formData.email);
    }

    const submit = (e) => {
        console.log("si")
    }

    return (
        <Container align="center">
            <Box marginTop="2rem">
                <form onSubmit={submit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField name="email" label="Email" variant="filled" fullWidth onChange={handleChange} value={formData.email} required/>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField name="password" label="Password" variant="filled" fullWidth onChange={handleChange} value={formData.password} required/>
                        </Grid>
                    </Grid>
                    <Button type="submit" variant="contained" sx={{ marginTop: "2rem" }}>Login</Button>
                </form>
            </Box>
        </Container >
    )
}

export default Form;