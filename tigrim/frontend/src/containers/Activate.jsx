import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { verify } from '../actions/auth';

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

const Activate = ({ verify, match }) => {
    const [verified, setVerified] = React.useState(false);

    const verifyAccount = e =>{
        const uid = match.params.uid;
        const token = match.params.token;
        verify(uid, token);
        setVerified(true);
    };

    if(verified) {
      return <Redirect to='/login' />
    }

    return (
        <Container component="main" maxWidth="xs">
      <Typography variant="h5" align="center" sx={{ marginTop: 4 }}>
        Verificar Conta
      </Typography>
      <Button
        onClick={verifyAccount}
        className="btn btn-primary"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
      >
        Verify
      </Button>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
    );
};

export default connect(null, { verify })(Activate);