import React from 'react'
import {Header, HomeContent} from '../layout';


function Home() {
  return (

    <div className="flex flex-col h-full overflow-hidden ">
      <Header />
      <div className="relative mt-24 h-96"></div>

      {/* content */}
      <HomeContent />
      
    </div>
    
  )
}

export default Home
