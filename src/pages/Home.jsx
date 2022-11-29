import React from 'react'
import Helmet from '../components/helmet/helmet'
import LiveStreaming from '../components/ui/LiveStreaming'
import New from '../components/ui/New'
import NewsLetters from '../components/ui/NewsLetters'
import Store from '../components/ui/Store'
import TournamentLogo from '../components/ui/TournamentLogo'
import Video from '../components/ui/Video'



const Home = () => {
  return (
    <Helmet title='Homepage'>
        {/* Hero */}



        <TournamentLogo />
         {/* Live Stream */}
         <LiveStreaming />
         <Video />
         {/* Store */}
         <Store />
         {/* News & Blogs  */}
         <New />
         {/* Newsletter */}
         {/* <NewsLetters /> */}
    </Helmet>
  )
}

export default Home