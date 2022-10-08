import React from 'react'
import { auth } from '../firebase';
import { signOut } from 'firebase/auth'; 
const SignOut = () => {
 
  return (
    <div>
    <modal>
        <div>
            <p>are you sure you went to log out?</p>
            <button>yes</button>
            <button>cancel</button>
        </div>
    </modal>
    </div>
  )
}

export default SignOut