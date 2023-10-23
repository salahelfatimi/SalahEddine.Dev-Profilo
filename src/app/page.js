import Nav from '@/components/Nav'
import Head from '@/components/Head'

import About from '@/components/About'
import Footer from '@/components/Footer'
import Project from '@/components/Project'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    
    <>
    
      <div className=' relative'>
          <Nav/>
         
            <Head/>
            <About/>
            <Project/>
            <Contact/>
         
         
          <Footer/>
      </div>
   
    </>
  )
}
