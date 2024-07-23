// src/app/contact.tsx
import Navbar from '../../components/ui/Navbar';

const ContactPage = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold">Contacto y Ubicación</h1>
        <p>Aquí puedes encontrar la información de contacto y ubicación del evento.</p>
      </div>
    </div>
  );
};

export default ContactPage;
