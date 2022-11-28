import React from 'react'
import Helmet from '../components/helmet/helmet'
import LiveStreaming from '../components/ui/LiveStreaming'
import New from '../components/ui/New'
import NewsLetters from '../components/ui/NewsLetters'
import Store from '../components/ui/Store'



const Home = () => {
  return (
    <Helmet title='Homepage'>
        {/* Hero */}




         {/* Live Stream */}
         <LiveStreaming />
         {/* Store */}
         <Store />
         {/* News & Blogs  */}
         {/* <New /> */}
         {/* Newsletter */}
         {/* <NewsLetters /> */}
    </Helmet>
  )
}

export default Home