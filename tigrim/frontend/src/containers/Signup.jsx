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
import { Redirect } from 'react-router-dom';
import { singup } from '../actions/auth';

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

const Singup = ({ singup, isAuthenticated }) => {
    const [accountCreated, setAccountCreated] = React.useState(false);
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        password: '',
        re_password: ''
    });

    const { name, email, password, re_password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e =>{
        e.preventDefault();

        if(password === re_password) {
            singup(name, email, password, re_password);
            setAccountCreated(true);
        }

        
    };

    if(isAuthenticated) {
      return <Redirect to='/Dashboard' />
    }
    if(accountCreated) {
        return <Redirect to='/Login' />
    }

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
            Cadastro
          </Typography>
          <Box component="form" onSubmit={e => onSubmit(e)} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                    className='form-control'
                    type='name'
                    placeholder='Name'
                    name="name"
                    value={name}
                    onChange={e => onChange(e)}
                    required
                    autoComplete="given-nome"
                    fullWidth
                    id="nome"
                    label="Nome"
                    autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                    className='form-control'
                    type='email'
                    placeholder='Email'
                    name="email"
                    value={email}
                    onChange={e => onChange(e)}
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                    className='form-control'
                    type='password'
                    placeholder='Senha'
                    name="password"
                    value={password}
                    onChange={e => onChange(e)}
                    required
                    fullWidth
                    label="Senha"
                    id="senha"
                    autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                    className='form-control'
                    type='password'
                    placeholder='Confirmar Senha'
                    name="re_password"
                    value={re_password}
                    onChange={e => onChange(e)}
                    required
                    fullWidth
                    label="Confirmar Senha"
                    id="confirmarSenha"
                    autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Cadastrar
            </Button>
            <Grid container justifyContent="center">
              <Grid item>
                <Link href="/Home/" variant="body2">
                  Ja tem uma conta? Faça o Login
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    );
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { singup })(Singup);