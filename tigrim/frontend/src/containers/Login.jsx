import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import React from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/auth';

function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="">
          Tigrim
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
}

const Login = ({ login }) => {
    const [formData, setFormData] = React.useState({
        email: '',
        password: ''
    });

    const { email, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        login(email, password);
    };

    // Is the user authenticated?
    // Redirect them to the home page

    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Box component="form" onSubmit={e => onSubmit(e)} sx={{ mt: 1 }}>
            <TextField
                className='form-control'
                type='email'
                placeholder='Email'
                margin="normal"
                name="email"
                value={email}
                onChange={e => onChange(e)}
                required
                fullWidth
                id="email"
                label="Email"
                autoComplete="email"
                autoFocus
            />
            <TextField
                className='form-control'
                type="password"
                placeholder='Senha'
                name="password"
                value={password}
                onChange={e => onChange(e)}
                minLength='8'
                required
                margin="normal"
                fullWidth
                label="Senha"
                id="senha"
                autoComplete="current-password"
            />
            <Button
                className='btn btn-primary'
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
            >
              Login
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="/reset-password" variant="body2">
                  Esqueceu a Senha?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Não tem uma conta? Cadastre-se"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    );
};

const mapStateToProps = state => ({
    // isAuthenticated: state.auth.isAuthenticated
});

export default connect(null, { login })(Login);