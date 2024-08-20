  import React, { useState } from 'react';
  import { Container, Typography, TextField, Button, CircularProgress, Alert } from '@mui/material';
  import { useNavigate } from 'react-router-dom'; 
  import config from '../config.js';

  function Login() {
    const [UserName, setUserName] = useState('');
    const [Password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
      setError(null);

      try {
        const direccion = config.dir_server + config.puerto_server + config.login_admin;
        console.log(direccion);
        const response = await fetch(direccion, { 
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ UserName, Password }),
        });

        if (!response.ok) {
          throw new Error('Error en el inicio de sesión');
        }

        const data = await response.json(); 
        config.JWT = data;
        console.log('Respuesta del servidor:', data);

        // Guardar JWT 
        localStorage.setItem('JWT', data.JWT);

        // Redirigir a la vista Usuarios después de una autenticación exitosa
        navigate('/Usuarios');

      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    return (
      <Container maxWidth="sm">
        <Typography variant="h4" gutterBottom>
          Inicio de sesión
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Usuario"
            variant="outlined"
            fullWidth
            margin="normal"
            value={UserName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
          <TextField
            label="Contraseña"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} /> : 'Iniciar sesión'}
          </Button>
          {error && <Alert severity="error" style={{ marginTop: '16px' }}>{error}</Alert>}
        </form>
      </Container>
    );
  }

  export default Login;



