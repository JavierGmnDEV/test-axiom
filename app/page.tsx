import { Navbar } from './components/Navbar';
import { Filters } from './components/Filters';
import { TokenTable } from './components/TokenTable';
import { Footer } from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="container mx-auto px-4 py-6 mb-16">
        <Filters />
        <TokenTable />
      </main>
      <Footer />
    </div>
  );
}