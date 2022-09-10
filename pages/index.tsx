import type { NextPage } from 'next';
import Link from 'next/link';

import { MainLayout } from '../components/layouts/MainLayout';

const Home: NextPage = () => {
  return (
    <MainLayout>
      <h1>Holi Lau</h1>

      <h1 className={'title'}>
        {/* Go to <a href="/about">About</a> */}
        Manda a esa loca del set de grabación a la <Link href="/shit">SHIT!</Link>
      </h1>

      <p className={'description'}>
        Y esta es una mini página para molestar y decir que me{' '}
        <code className={'code'}>agradas mucho</code>
      </p>
    </MainLayout>
  );
}

export default Home
