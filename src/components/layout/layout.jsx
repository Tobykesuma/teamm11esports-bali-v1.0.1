import React, { Fragment, useEffect, useState } from 'react'
import Header from '../header/header'
import Footer from '../footer/footer';
import Routers from '../../routers/routers';
import { motion } from 'framer-motion';


const Layout = () => {
    
  return (
    <motion.div initial='hidden' animate='show'>
        <Fragment>
            <Header />
                <div>
                    <Routers />
                </div>
            <Footer />
        </Fragment>
    </motion.div>
  )
}

export default Layout