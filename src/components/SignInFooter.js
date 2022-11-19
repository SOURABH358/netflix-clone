import { Grid, Link, Typography, Box } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
function SignInFooter() {
    return <div className="SignIn__footer">
        <CssBaseline />
            <Box>
                <Typography color='grey' sx={{mb:4}}>Questions? Call 
                    <Link variant = "body1" href="#" color='inherit' sx={{ml:1}} underline="hover">000-800-040-1843</Link>
                </Typography>
            </Box>
            <Grid container color='grey' sx={{mb:4}} rowGap={2}>
                <Grid item xs={6} md={3}><Link href="#" variant="body2" color='inherit' underline="hover">FAQ</Link></Grid>
                <Grid item xs={6} md={3}><Link href="#" variant="body2" color='inherit' underline="hover">Help Centre</Link></Grid>
                <Grid item xs={6} md={3}><Link href="#" variant="body2" color='inherit' underline="hover">Terms of Use</Link></Grid>
                <Grid item xs={6} md={3}><Link href="#" variant="body2" color='inherit' underline="hover">Privacy</Link></Grid>
                <Grid item xs={6} md={3}><Link href="#" variant="body2" color='inherit' underline="hover">Cookie Preferences</Link></Grid>
                <Grid item xs={6} md={3}><Link href="#" variant="body2" color='inherit' underline="hover">Corporate Information</Link></Grid>
            </Grid>
            <Typography variant="body2" color='grey' width='fit-content' sx={{border:'1px solid grey', py:1, px:2}}>
                English
            </Typography>
        </div>
}

export default SignInFooter;