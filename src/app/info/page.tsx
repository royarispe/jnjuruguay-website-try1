// src/app/info.tsx
import Navbar from '../../components/ui/Navbar';

const InfoPage = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold">Información</h1>
        <p>Aquí se encuentra toda la información relevante del evento.</p>
      </div>
    </div>
  );
};

export default InfoPage;
