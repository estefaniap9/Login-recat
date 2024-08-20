import jwt from 'jsonwebtoken';

function decodeJWT(token) {
  try {
    // Decodificar el JWT sin verificar para evitar el problema de KeyObject
    const decoded = jwt.decode(token);
    console.log('Payload decodificado:', decoded);

    return decoded;
  } catch (error) {
    console.error('Error al decodificar el JWT:', error.message);
    return null;
  }
}

export default decodeJWT;












    // Extraer la clave "key"
    //if (decoded && decoded.key) {
       // console.log('Texto plano de la clave:', decoded.key);
     // } else {
     //   console.log("No se encontró la clave 'key' en el payload.");
     // }