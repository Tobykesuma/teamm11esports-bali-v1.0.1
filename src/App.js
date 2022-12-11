import React, { useEffect, useState } from "react";
import { PulseLoader } from "react-spinners";
import Layout from "./components/layout/layout";
import BacktoTop from "./components/ui/BacktoTop";



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
    }, 5000)
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
