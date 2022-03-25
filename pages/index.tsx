import type { NextPage } from 'next'
import { useState } from 'react'
import { Button } from '../components/button';
import client from '../graphql/boot/apollo-client';
import { QueryGetRandomJoke } from '../graphql/queries/getRandomJoke';



const Home: NextPage = () => {
  const [joke, setJoke] = useState("Aperte o botão para obter uma piada!");
  const [loading, setLoading] = useState(false);

  const getJoke = async () => {
    setLoading(true);
    try {
      const data = await client.request(QueryGetRandomJoke);
      setJoke(data.randomJoke.value);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className='flex flex-col items-center'>

      <div className='text-white border border-double border-1 border-slate-400 p-3 max-w-lg text-justify'>
        {joke}
      </div>
      <Button className='mt-2' onClick={() => getJoke()} disabled={loading}>
        Piada aleatória
      </Button>
    </div>
  )
}

export default Home
