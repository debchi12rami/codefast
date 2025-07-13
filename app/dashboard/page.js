import Link from 'next/link';
import ButtonLogout from '@/components/buttonlogout';
export default function Dashboard() {
  return (
    <section className="p-8 text-center">
      
        <h1 className="text-4xl font-extrabold text-center">Our Dashboard</h1>
        <ButtonLogout/>
    </section>
  );
}

