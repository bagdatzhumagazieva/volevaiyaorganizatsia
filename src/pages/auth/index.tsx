import React, {useState} from "react";
import { TextField, Typography, CircularProgress} from "@mui/material";
import {useHistory} from "react-router-dom";
import './index.scss';

export const AuthCode = () => {
    const history = useHistory();

    const [code, setCode] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);

    const onChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const {value} = e.target;
        setCode(value);
        setError(false)
    }

    const onClick = async () => {
        setLoading(true);
        try {
            await getCode()
            setLoading(false);
        } catch {
            setLoading(false);
        }
    }

    const getCode = async () => {
        await fetch('http://188.227.16.66/answer/').then(res => res.json())
            .then(post => {
                if (post.code === code) {
                    localStorage.setItem('code_access', code);
                    history.push('/login');
                } else {
                    setError(true)
                }
            })
    }

    return (
        <div className='auth-content'>
            <div className='content-is'>
                <Typography variant='h3' style={{ color: "white", textAlign: 'center', marginBottom: 32}}>
                    Код доступа
                </Typography>
                <div className='input-wrapper'>
                    <TextField
                        value={code}
                        error={error}
                        id="outlined-basic"
                        label="Введите код"
                        onChange={onChange}
                        helperText={error && 'Неверный код'}
                        variant="outlined"
                    />
                </div>
                <button onClick={onClick} className="btn">
                    {loading ? <CircularProgress size={20} style={{color: 'white'}} /> : 'Начать тест'}
                </button>
            </div>
        </div>
    )
}
