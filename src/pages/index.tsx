import Head from 'next/head';
import Button from '@/components/button';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main>
        <h1>
          Teste page
        </h1>
        <Button />
      </main>
    </div>
  );
}
