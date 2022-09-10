import Link from 'next/link'
import { DarkLayout } from '../../components/layouts/DarkLayout'
import { MainLayout } from '../../components/layouts/MainLayout'

export default function ShitPage() {
  return (
    <>
      <h1>Shit Page</h1>

      <h1 className={'title'}>
        {/* Go to <a href="/">Home</a> */}
        Go to <Link href="/">Home</Link>
      </h1>

      <p className={'description'}>
        Ignora a esa pendejita de complejo de superioridad. No te conocerá{' '}
        <br></br>
        <code className={'code'}>Ella se lo pierde</code>
      </p>
    </>
  );
}

ShitPage.getLayout = function getLayout(page: JSX.Element) {
  return (
    <MainLayout>
      {/* <DarkLayout> */}
        { page }
      {/* </DarkLayout> */}
    </MainLayout>
  );
}
