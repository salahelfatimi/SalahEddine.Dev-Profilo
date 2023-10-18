import Nav from '@/components/Nav'
import Head from '@/components/Head'
import Image from 'next/image'
import About from '@/components/About'
import Footer from '@/components/Footer'
import Project from '@/components/Project'

export default function Home() {
  return (
    
    <>
    
      <div className=' '>
          <Nav/>
          <Head/>
          <About/>
          <Project/>
          <Footer/>
      </div>
   
    </>
  )
}
