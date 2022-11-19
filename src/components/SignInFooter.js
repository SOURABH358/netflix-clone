import { Grid, Link, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material/CssBaseline";
function SignInFooter() {
    return <ThemeProvider>
        <CssBaseline />
        <div className="SignIn__footer">
            <Box>
                <Typography>Questions? Call
                    <Link variant = "body2" href="#">000-800-040-1843</Link>
                </Typography>
            </Box>
            <Grid container >
                <Grid item><Link href="#" variant="body2" xs={4} md={3}>FAQ</Link></Grid>
                <Grid item><Link href="#" variant="body2" xs={4} md={3}>Help Centre</Link></Grid>
                <Grid item><Link href="#" variant="body2" xs={4} md={3}>Terms of Use</Link></Grid>
                <Grid item><Link href="#" variant="body2" xs={4} md={3}>Privacy</Link></Grid>
                <Grid item><Link href="#" variant="body2" xs={4} md={3}>Cookie Preferences</Link></Grid>
                <Grid item><Link href="#" variant="body2" xs={4} md={3}>Corporate Information</Link></Grid>
            </Grid>
            <Box variant="p">
                English
            </Box>
        </div>
    </ThemeProvider>
}

export default SignInFooter;