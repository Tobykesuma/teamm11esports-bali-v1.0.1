import React, { Fragment, useEffect, useState } from 'react'
import Header from '../header/header'
import { PropagateLoader } from "react-spinners";
import Footer from '../footer/footer';


const Layout = () => {
    // Loading Pages //
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 5000)
  }, [])
  return (
    <>
        <Fragment>
            <Header />
                <div>
            
                </div>
            <Footer />
        </Fragment>
    </>
    
  )
}

export default Layout