import React from 'react'
import Helmet from '../components/helmet/helmet'
import LiveStreaming from '../components/ui/LiveStreaming'
import New from '../components/ui/New'
import NewsLetters from '../components/ui/NewsLetters'
import Store from '../components/ui/Store'
import TournamentLogo from '../components/ui/TournamentLogo'
import Video from '../components/ui/Video'
import Teams from '../components/ui/Teams'
import Modal from '../components/ui/Modal'
import About from '../components/ui/About'
import Talent from '../components/ui/Talent'


const Home = () => {
  return (
    <Helmet title='Homepage'>
        {/* Hero */}
        {/* <Modal /> */}

        <TournamentLogo />
        <Teams />
        <About />
         {/* Live Stream */}
         <LiveStreaming />
         <Video />
         <Talent />
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