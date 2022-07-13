import { Container, Box, Grid, TextField, Button, Snackbar, Alert } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

const Form = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const [snackBar, setSnackBar] = useState({
        show: false,
        severity: "",
        text: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, hasChanged: true, [e.target.name]: e.target.value })
        console.log(formData.email);
    }

    const submit = (e) => {
        e.preventDefault();
        Axios.post("/login", formData, { withCredentials: true })
            .then(res => {
                console.log(res);
                if (res.data.authenticated) {
                    setSnackBar({ show: true, severity: "success", text: "Login successful" });
                    setTimeout(() => {
                        navigate("/dashboard");
                    }, 500);
                } else {
                    setSnackBar({ show: true, severity: "error", text: "Invalid Credentials" });
                }
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
                        <Alert severity={snackBar.severity} sx={{ width: '100%' }}>
                            {snackBar.text}
                        </Alert>
                    </Snackbar>
                </form>
            </Box>
        </Container>
    )
}

export default Form;