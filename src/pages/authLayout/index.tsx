import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";

export const AuthLayout: React.FC = ({children}) => {
    const history = useHistory();
    const [access, setAccess] = useState<boolean>(false);

    const getCode = async () => {
        await fetch('http://188.227.16.66/answer/').then(res => res.json())
            .then(post => {
                if (post.code === localStorage.getItem('code_access')) {
                    setAccess(true);
                } else {
                    history.push('/');
                }
            })
    };

    useEffect(() => {
        getCode();
    },[]);

    return (
        <>
            {access && children}
        </>
    )
}
