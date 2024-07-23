import Navbar from '../components/ui/Navbar';
import RootLayout from './layout';

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold">Bienvenidos al Evento de la Iglesia</h1>
        <p>Esta es la página de bienvenida con información general.</p>
      </div>
    </div>
  );
}
