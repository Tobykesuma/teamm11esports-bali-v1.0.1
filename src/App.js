import React, { useEffect } from "react";
import { PropagateLoader } from "react-spinners";

function App() {
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
            <PropagateLoader size={10} color={'#000'} loading={loading} style={{display: 'flex', justifyContent: 'center', textAlign: 'center', height: '100vh', width: '100%', alignItems: 'center'}} />
          )
        }
      </div>
    </>
  );
}

export default App;
