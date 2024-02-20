import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { reset_password_confirm } from '../actions/auth';

function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="/">
          Tigrim
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

const ResetPasswordConfirm = ( { match, reset_password_confirm } ) => {
    const [requestSent, setRequestSent] = React.useState(false);

    const [formData, setFormData] = React.useState({
        new_password: '',
        re_new_password: ''
    });

    const { new_password, re_new_password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        const uid = match.params.uid;
        const token = match.params.token;

        reset_password_confirm(uid, token, new_password, re_new_password);
        setRequestSent(true);
    }

    if(requestSent) {
        return <Redirect to='/' />
    }

    return (
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Nova Senha
            </Typography>
            <Typography component="h5" marginTop={2}>
              Informe a nova senha para a conta
            </Typography>
            <Box component="form" onSubmit={e => onSubmit(e)} noValidate sx={{ mt: 1 }}>
              <TextField
                className='form-control'
                type='password'
                placeholder='Nova Senha'
                name="new_password"
                value={new_password}
                onChange={e => onChange(e)}
                margin="normal"
                required
                fullWidth
                id="password"
                label="Senha"
                autoComplete="password"
                autoFocus
              />
              <TextField
                className='form-control'
                type='password'
                placeholder='Confirmar Senha'
                name="re_new_password"
                value={re_new_password}
                onChange={e => onChange(e)}
                margin="normal"
                required
                fullWidth
                id="confirm_password"
                label="Confirmar Senha"
                autoComplete="confirm_password"
                autoFocus
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Confirmar
              </Button>
            </Box>
          </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
      );
};

export default connect(null, { reset_password_confirm })(ResetPasswordConfirm);