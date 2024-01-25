import { React, useEffect } from 'react'
import { getRedirectResult } from 'firebase/auth'
import { auth, signInWithGooglePopup, signInWithGoogleRedirect, createUserDocFromAuth } from '../../utils/firebase.utils'

import SignUpForm from '../../components/sign-up-form/sign-up-form.components'
import SignInForm from '../../components/sign-in-form/sign-in-form.component'

import './auth.styles.scss'

const Auth = () => {

    // useEffect(async () => {
    //     try {
    //         const res = await getRedirectResult(auth)
    //         if (res) {
    //             const userRef = await createUserDocFromAuth(res.user)
    //         }
    //     } catch (e) {
    //         console.log(e)
    //     }
    // }, [])

    return (
        <div className='auth-conatiner'>
            {/* <button onClick={logGoogleUser}>SignIn with google</button>
            <button onClick={signInWithGoogleRedirect}>SignIn with google redirect</button> */}
            <SignInForm></SignInForm>
            <SignUpForm></SignUpForm>
        </div>
    )
}

export default Auth