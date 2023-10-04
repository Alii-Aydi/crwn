import { React, useEffect } from 'react'
import { getRedirectResult } from 'firebase/auth'
import { auth, signInWithGooglePopup, signInWithGoogleRedirect, createUserDocFromAuth } from '../../utils/firebase.utils'

import SignUpForm from '../../components/sign-up-form/sign-up-form.components'

const SignIn = () => {

    useEffect(async () => {
        try {
            const res = await getRedirectResult(auth)
            if (res) {
                const userRef = await createUserDocFromAuth(res.user)
            }
        } catch (e) {
            console.log(e)
        }
    }, [])

    const logGoogleUser = async () => {
        try {
            const { user } = await signInWithGooglePopup()
            const userRef = await createUserDocFromAuth(user)
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div>
            <h1>sign-in</h1>
            <button onClick={logGoogleUser}>SignIn with google</button>
            <button onClick={signInWithGoogleRedirect}>SignIn with google redirect</button>
            <SignUpForm></SignUpForm>

        </div>
    )
}

export default SignIn