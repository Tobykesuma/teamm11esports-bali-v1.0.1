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
import Ramz from '../pages/Talent/Dota 2/Ramz/Ramz'
import Ifrit from '../pages/Talent/Dota 2/Ifrit/Ifrit'
import Bfl from '../pages/Talent/Dota 2/Bfl/Bfl'
import Vinz from '../pages/Talent/Dota 2/Vinz/Vinz'
import Juju from '../pages/Talent/Dota 2/Juju/Juju'
import TalentPage from '../pages/TalentPage/TalentPage'


const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-us' element={<AboutNav />} />
        <Route path='/teams' element={<TeamNav />} />
        {/* Dota 2 Talent Section Page */}
        <Route path='/teams/dota-2' element={<Dota2 />} />
        <Route path='/teams/dota-2/talent/ramz' element={<Ramz />} />
        <Route path='/teams/dota-2/talent/ifrit' element={<Ifrit />} />
        <Route path='/teams/dota-2/talent/bfl' element={<Bfl />} />
        <Route path='/teams/dota-2/talent/vinz' element={<Vinz />} />
        <Route path='/teams/dota-2/talent/juju' element={<Juju />} />
        {/* Dota 2 Talent Section Page Ended */}
        {/* Valorant Talent Section Page */}
        <Route path='/teams/valorant' element={<Valorant />} />

        {/* Valorant Talent Section Page Ended */}
        {/* PUBG Mobile Talent Section Page */}
        <Route path='/teams/pubgm' element={<PUBGM />} />

        {/* PUBG Mobile Talent Section Page Ended */}
        {/* Mobile Legend Talent Section Page */}
        <Route path='/teams/mobile-legend' element={<MLBB />} />

        {/* Mobile Legend Talent Section Page Ended */}
        <Route path='/schedule' element={<ScheduleNav />} />
        <Route path='/news' element={<NewsNav />} />
        <Route path='/partners' element={<PartnersNav />} />
        <Route path='/live-streaming' element={<LiveStreamNav />} />
        <Route path='/faq' element={<Faq />} />
        <Route path='/terms-of-services' element={<TermsOfServices />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route path='/coming-soon' element={<ComingSoon />} />
        <Route path='/talent' element={<TalentPage />} />
        <Route path='*' element={<NotFound />} />

    </Routes>
  )
}

export default Routers