import React, { useEffect, useState } from "react";
import { PulseLoader } from "react-spinners";
import Layout from "./components/layout/layout";
import BacktoTop from "./components/ui/BacktoTop";
import ReactGa from 'react-ga';



function App() {
  // Server Back-End //
  // const [backendData, setbackendData] = useState([{}])
  // useEffect(() => {
  //   fetch('/api').then(
  //     response => response.json()
  //   ).then(
  //     data => {
  //       setbackendData(data)
  //     }
  //   )
  // }, [])

  // Loading Pages //
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  // Google Analytics React Module
  useEffect(() => {
    ReactGa.initialize('G-MF1S89G15W')
    
  // To Report Page PerView 
    ReactGa.pageview(window.location.pathname + window.location.search)
  }, [])



  return (
    <>
      <div className="main-app">
        
        {
          loading ? (
            <PulseLoader size={10} color={'#fff'} loading={loading} style={{display: 'flex', justifyContent: 'center', textAlign: 'center', height: '100vh', width: '100%', alignItems: 'center'}} />
          ) : (
            <>
              <BacktoTop />
              <Layout /> 
            </>
          )
        }
      </div>
    </>
  );
}

export default App;
