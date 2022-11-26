import React, { Fragment, useEffect, useState } from 'react'
import Header from '../header/header'
import Footer from '../footer/footer';
import Routers from '../../routers/routers';



const Layout = () => {
    
  return (
    <>
        <Fragment>
            <Header />
                <div>
                    <Routers />
                </div>
            <Footer />
        </Fragment>
    </>
    
  )
}

export default Layout