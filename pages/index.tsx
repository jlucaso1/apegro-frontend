import type { NextPage } from 'next'
import { useState } from 'react'
import { Button } from '../components/button';



const Home: NextPage = () => {
  const [joke, setJoke] = useState("Aperte o botão para obter uma piada!");
  return (
    <div className='flex flex-col items-center'>

      <div className='text-white border border-double border-1 border-slate-400 p-3'>
        {joke}
      </div>
      <Button className='mt-2'>
        Piada aleatória
      </Button>
    </div>
  )
}

export default Home
