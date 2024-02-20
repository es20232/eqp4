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
import { reset_password } from '../actions/auth';

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

const ResetPassword = ( { reset_password } ) => {
    const [requestSent, setRequestSent] = React.useState(false);

    const [formData, setFormData] = React.useState({
        email: ''
    });

    const { email } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        reset_password(email);
        setRequestSent(true);
    }

    if(requestSent) {
        return <Redirect to='/' />
    }

    return (
            <Container component="main" maxWidth="xs" >
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
                        Recuperar Senha
                        </Typography>
                        <Typography component="h5" marginTop={2}>
                        Informe o email da conta para recuperar a senha
                        </Typography>
                        <Box component="form" onSubmit={e => onSubmit(e)} sx={{ mt: 1 }}>
                        <TextField
                            className='form-control'
                            type='email'
                            placeholder='Email'
                            name="email"
                            value={email}
                            onChange={e => onChange(e)}
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email"
                            autoComplete="email"
                            autoFocus
                        />
                        <Button
                            className='btn btn-primary'
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Enviar Email
                        </Button>
                        </Box>
                    </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
          );
};

export default connect(null, { reset_password })(ResetPassword);