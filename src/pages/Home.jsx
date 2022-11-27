import React from 'react'
import Helmet from '../components/helmet/helmet'
import LiveStreaming from '../components/ui/LiveStreaming'
import New from '../components/ui/New'
import NewsLetters from '../components/ui/NewsLetters'



const Home = () => {
  return (
    <Helmet title='Home'>
        {/* Hero */}




        {/* Live Stream */}
        <LiveStreaming />
         {/* News & Blogs  */}
         <New />
         {/* Newsletter */}
         {/* <NewsLetters /> */}
    </Helmet>
  )
}

export default Home