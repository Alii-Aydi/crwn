import React, { useEffect } from 'react'
import { applyActionCode } from 'firebase/auth'
import { auth } from '../../utils/firebase.utils'

const VerifieEmail = () => {
    const queryString = window.location.search;
    const params = new URLSearchParams(queryString);
    const actionCode = params.get('oobCode');

    useEffect(() => {
        applyActionCode(auth, actionCode).then((res) => {
            console.log('email verified')
        }).catch((e) => {
            console.log(e)
        })
    }, [actionCode])

    return (
        <div>VerifieEmail</div>
    )
}

export default VerifieEmail