import Link from 'next/link';
import ButtonLogout from '@/components/buttonlogout';
import ButtonHome from '@/components/ButtonHome';
import FormNewBoard from '@/components/FormNewBoard';

export default function Dashboard() {
  return (
    <section className="p-8 text-center bg-base-200 min-h-screen">
      
        {/* header */}
        <section className='max-w-5xl mx-auto bg-base-100 px-5 py-3 flex justify-between '>
           <ButtonLogout/>
           <ButtonHome/>
        </section>

        <section className='max-w-5xl mx-auto px-5 py-12'>
                  <FormNewBoard />
        </section>
    </section>
  );
}

