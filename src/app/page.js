import Nav from '@/components/Nav'
import Head from '@/components/Head'
import Image from 'next/image'
import About from '@/components/About'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    
    <>
    
      <div className=' '>
          <Nav/>
          <Head/>
          <About/>
          <Footer/>
      </div>
   
    </>
  )
}
