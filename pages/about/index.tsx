import Link from 'next/link'
import { DarkLayout } from '../../components/layouts/DarkLayout'
import { MainLayout } from '../../components/layouts/MainLayout'

export default function AboutPage() {
  return (
    <>
      <h1>About Page</h1>

      <h1 className={'title'}>
        {/* Go to <a href="/">Home</a> */}
        Página para Lau{/* <Link href="/">Lau</Link> */}
      </h1>

      <p className={'description'}>
        Sobre Lau: Tengo 1 año menos que esa persona{' '}
        {/* <code className={'code'}>pages/about/index.jsx</code> */}
      </p>
    </>
  );
}

AboutPage.getLayout = function getLayout(page: JSX.Element) {
  return (
    <MainLayout>
      
        { page }
      
    </MainLayout>
  );
}
