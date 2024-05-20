import { useRouter } from 'next/navigation'
import React from 'react'

const NeedToConnectComponent = () => {
  const router = useRouter()
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <h1 className='text-center mt-10'>Vous devez vous connecter pour accéder à cette page !!!</h1>
      <button onClick={() => router.push("/auth/login")} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mt-2 px-4 rounded">
        Se connecter
      </button>
    </div>
  )
}

export default NeedToConnectComponent
