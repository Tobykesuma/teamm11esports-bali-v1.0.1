import React from 'react'
import '../../style/cookies.css'
import { useCookies } from 'react-cookie'


function CustomComponent() {
    const [cookies, setCookies, removeCookies] = useCookies(['user']);
    const onSubmit = (data) => {
        setCookies('user', data, {path: '/'});
    }
}

function Cookies () {
    const [cookies, setCookies, removeCookies] = useCookies(['user']);
    const onSubmit = (data) => {
        setCookies('user', data, {path: '/'});
    };

  return (
    <>
    <button onClick={() => {
        alert(`User Cookie is ${JSON.stringify(cookies['user'])}`);
    }}
    >
        Show user cookie
    </button>
    <button onClick={() => {
        removeCookies('user');
    }}
    >
        Delete user cookie
    </button>
    </>
  )
}

export default Cookies