import React, { useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import decodeJWT from '../utils/cipher/JWT_Decode'; 
import config from '../config';

function Usuarios() {
  useEffect(() => {
    const JWT = localStorage.getItem('JWT') || config.JWT; // Obtener JWT de localStorage o config
    console.log('JWT:', JWT);

    if (JWT) {
      const payload = decodeJWT(JWT);
      console.log('Payload decodificado:', payload);
    }
  }, []);

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Usuarios
      </Typography>
      {/* contenido */}
    </Container>
  );
}

export default Usuarios;


