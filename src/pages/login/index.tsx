import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import {AuthLayout} from "../authLayout";
import './index.css';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup} from "@mui/material";

export interface IUser {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    age: string;
    sport: string;
    isParent: boolean;
}
export const LoginPage = () => {
    const history = useHistory();
    const [userData, setUserData] = useState<IUser>({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        age: '',
        sport: '',
        isParent: false,
    })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setUserData({...userData, [name]: value})
    };

    const onCheckbox = (type: 'parent' | 'child') => {
        setUserData({...userData, isParent: type === 'parent'})
    }

    const handleSubmit = () => {
        const { firstName, sport, age, email, phone, lastName } = userData;
        if (firstName && sport && age && email && phone && lastName) {
            localStorage.setItem('userData', JSON.stringify(userData));
            history.push('/quiz')
        }
    }

    return (
        <AuthLayout>
            <div className="container">
                <div className="screen">
                    <div className="screen__content">
                        <form className="login">
                            <div className="login__field">
                                <i className="login__icon fas fa-user"/>
                                <input name='firstName' value={userData.firstName}
                                       onChange={handleChange} type="text" className="login__input" placeholder="Имя"/>
                            </div>
                            <div className="login__field">
                                <i className="login__icon fas fa-lock"/>
                                <input name='lastName' value={userData.lastName}
                                       onChange={handleChange} type="text" className="login__input"
                                       placeholder="Фамилия"/>
                            </div>
                            <div className="login__field">
                                <i className="login__icon fas fa-user"/>
                                <input name='phone' value={userData.phone}
                                       onChange={handleChange} type="text" className="login__input" placeholder="Телефон"/>
                            </div>
                            <div className="login__field">
                                <i className="login__icon fas fa-user"/>
                                <input name='email' value={userData.email}
                                       onChange={handleChange} type="email" className="login__input" placeholder="Почта"/>
                            </div>
                            <div className="login__field">
                                <i className="login__icon fas fa-user"/>
                                <input name='age' value={userData.age}
                                       onChange={handleChange} type="text" className="login__input" placeholder="Возраст"/>
                            </div>
                            <div className="login__field">
                                <i className="login__icon fas fa-user"/>
                                <input name='sport' value={userData.sport}
                                       onChange={handleChange} type="text" className="login__input" placeholder="Вид спорта"/>
                            </div>
                            <FormControl>
                                <FormLabel
                                    id="demo-radio-buttons-group-label"
                                    style={{ fontWeight: 'bold', marginTop: 36, color: 'rgba(0, 0, 0, 0.6)' }}
                                >
                                    Тест проходит
                                </FormLabel>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="child"
                                    style={{ display: 'flex' }}
                                    name="isParent"
                                >
                                    <FormControlLabel
                                        style={{ color: 'white' }}
                                        value="parent"
                                        control={
                                            <Radio
                                                onClick={() => onCheckbox('parent')}
                                                style={{color: 'rgba(0, 0, 0, 0.6)'}}
                                            />
                                        }
                                        label="Родитель"
                                    />
                                    <FormControlLabel
                                        style={{ color: 'white' }}
                                        value="child" control={
                                            <Radio
                                                onClick={() => onCheckbox('child')}
                                                style={{color: 'rgba(0, 0, 0, 0.6)'}}
                                            />
                                        }
                                        label="Ребенок"
                                    />
                                </RadioGroup>
                            </FormControl>
                            <button onClick={handleSubmit} className="button login__submit">
                                <span className="button__text">Начать тест</span>
                                {/*<i className="button__icon fas fa-chevron-right"/>*/}
                            </button>
                        </form>
                    </div>
                    <div className="screen__background">
                        <span className="screen__background__shape screen__background__shape4"/>
                        <span className="screen__background__shape screen__background__shape3"/>
                        <span className="screen__background__shape screen__background__shape2"/>
                        <span className="screen__background__shape screen__background__shape1"/>
                    </div>
                </div>
            </div>
        </AuthLayout>
    )
}
