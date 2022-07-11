import { Container, Box, Grid, TextField, Button, Snackbar, Alert } from "@mui/material";
import { useState } from "react";
import Axios from "axios";

const Form = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const [snackBar, setSnackBar] = useState({
        severity: "success",
        show: false,
        text: "Login successful"
    })

    const handleChange = (e) => {
        setFormData({ ...formData, hasChanged: true, [e.target.name]: e.target.value })
        console.log(formData.email);
    }

    const submit = (e) => {
        e.preventDefault();
        Axios.post("/login", formData)
            .then(res => {
                console.log(res);
                if (res.data.authenticated === true) setSnackBar({ severity: "success", show: true, text: "Login successful" })
            })
    }

    return (
        <Container align="center">
            <Box marginTop="2rem">
                <form onSubmit={submit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField type="email" name="email" label="Email" variant="filled" fullWidth onChange={handleChange} value={formData.email} required />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField type="password" name="password" label="Password" variant="filled" fullWidth onChange={handleChange} value={formData.password} required />
                        </Grid>
                    </Grid>
                    <Button type="submit" variant="contained" sx={{ marginTop: "2rem" }}>Login</Button>
                    <Snackbar open={snackBar.show} autoHideDuration={6000}>
                        <Alert severity="success" sx={{ width: '100%' }}>
                            {snackBar.text}
                        </Alert>
                    </Snackbar>
                </form>
            </Box>
        </Container>
    )
}

export default Form;