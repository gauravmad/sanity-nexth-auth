import Image from 'next/image'
import Navbar from '../components/Navbar'
import Contact from './contact'

import { client } from '../lib/client'

import { useSession, signIn, signOut } from 'next-auth/react'
import Login from './login'

export default function Home({contactformData}) {

  const session = useSession();
  console.log('Session', session)

  if (session.data === null){
    return(
      <Login/>
    )
  }

  return (
    <div className='my-[5vh]'>
      <Contact contactformData={contactformData}/>
      {console.log(contactformData)}
    </div>
  )
}


export const getServerSideProps = async()=>{

  const contactformQuery = '*[_type == "contactfrom"]';
  const contactformData = await client.fetch(contactformQuery);

  return{
    props:{ contactformData}
  }
}
