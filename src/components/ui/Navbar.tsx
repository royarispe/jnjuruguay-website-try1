// src/components/ui/Navbar.tsx
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">
          <Link href="/">Evento Iglesia</Link>
        </div>
        <div className="space-x-4">
          <Link href="/" className="text-gray-300 hover:text-white">Inicio</Link>
          <Link href="/info" className="text-gray-300 hover:text-white">Información</Link>
          <Link href="/documents" className="text-gray-300 hover:text-white">Documentos</Link>
          <Link href="/contact" className="text-gray-300 hover:text-white">Contacto y Ubicación</Link>
          <Link href="/registration" className="text-green-500 hover:text-green-700 font-bold">¡Inscribite!</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


