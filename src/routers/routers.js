import React from 'react'
import {
    Routes,
    Route,
} from 'react-router-dom'
import Home from '../pages/Home'
import AboutNav from '../pages/AboutNav/AboutNav'
import TeamNav from '../pages/TeamsNav/TeamNav'
import ScheduleNav from '../pages/Schedule/ScheduleNav'
import NewsNav from '../pages/NewsBav/NewsNav'
import PartnersNav from '../pages/PartnersNav/PartnersNav'
import LiveStreamNav from '../pages/LiveStreamNav/LiveStreamNav'
import Faq from '../components/ui/faq'
import TermsOfServices from '../components/ui/TermsOfServices'
import PrivacyPolicy from '../components/ui/PrivacyPolicy'
import Dota2 from '../pages/Dota2/Dota2'
import Valorant from '../pages/Valorant/Valorant'
import MLBB from '../pages/MLBB/MLBB'
import PUBGM from '../pages/PUBGM/PUBGM'
import NotFound from '../components/ui/NotFound'
import ComingSoon from '../pages/ComingSoon/ComingSoon'



const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-us' element={<AboutNav />} />
        <Route path='/teams' element={<TeamNav />} />
        <Route path='/teams/dota-2' element={<Dota2 />} />
        <Route path='/teams/valorant' element={<Valorant />} />
        <Route path='/teams/pubgm' element={<PUBGM />} />
        <Route path='/teams/mobile-legend' element={<MLBB />} />
        <Route path='/schedule' element={<ScheduleNav />} />
        <Route path='/news' element={<NewsNav />} />
        <Route path='/partners' element={<PartnersNav />} />
        <Route path='/live-streaming' element={<LiveStreamNav />} />
        <Route path='/faq' element={<Faq />} />
        <Route path='/terms-of-services' element={<TermsOfServices />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route path='/coming-soon' element={<ComingSoon />} />
        <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default Routers