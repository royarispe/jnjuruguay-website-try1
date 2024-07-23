// src/app/documents.tsx
import Navbar from '../../components/ui/Navbar';

const DocumentsPage = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold">Documentos</h1>
        <p>Aquí puedes encontrar los documentos necesarios para el evento.</p>
      </div>
    </div>
  );
};

export default DocumentsPage;
