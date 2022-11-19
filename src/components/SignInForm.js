import { TextField, Typography, Box, FormControlLabel, Checkbox, Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { grey } from "@mui/material/colors";
import { Link } from "react-router-dom";
function SignInForm() {

    const theme = createTheme();
    const greyColor = grey[800]

    return <div className="SignIn__form">
        <CssBaseline />
        <ThemeProvider theme={theme}>
            <Typography component="h1" variant="h4" 
            style={{
                color: "#ffffff"
            }}>
                Sign In
            </Typography>
            <Box component="form" sx={{mt:4}}>
                <TextField 
                style={{
                    background: "#303030",
                    borderRadius: "8px",
                }}
                 margin="normal"
                 required
                 fullWidth
                 id="email"
                 label="Email Address"
                 name="email"
                 autoComplete="email"
                 autoFocus
                />
                 <TextField
                 inputProps={{style:{color: 'white'}}}
                 sx={{
                    background: "#303030",
                    borderRadius: "8px",
                    
                }}
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"/>
                  
                  <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="error"
                  sx={{ mt: 4, mb: 2, py:2,}}
                  >Sign in</Button>
                  <FormControlLabel
                  sx={{
                    color: "white"
                  }}
                  control={<Checkbox value="remember" sx={{
                    color: "white"
                  }}/>}
                  label = "Remember Me"/>
            </Box>
            <Box sx={{mt:2}}>
                <Typography variant="p" color={greyColor}>New to Netflix? </Typography>
                <Link to="/">sign up</Link>
            </Box>
        </ThemeProvider>
    </div>
}

export default SignInForm;