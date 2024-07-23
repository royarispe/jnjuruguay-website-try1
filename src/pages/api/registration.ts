// src/pages/api/registration.ts
import { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { referente, personas } = req.body;

    // Aquí puedes agregar la lógica para manejar los datos de inscripción
    // Por ejemplo, guardarlos en una base de datos

    res.status(200).json({ message: 'Inscripción exitosa' });
  } else {
    // Manejar cualquier método HTTP que no sea POST
    res.status(405).json({ message: 'Método no permitido' });
  }
};
