import React from 'react'
import Helmet from '../components/helmet/helmet'
import LiveStreaming from '../components/ui/LiveStreaming'
import New from '../components/ui/New'



const Home = () => {
  return (
    <Helmet title='Home'>
        {/* Hero */}




        {/* Live Stream */}
        <LiveStreaming />

         {/* News & Blogs  */}
         <New />
    </Helmet>
  )
}

export default Home