import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import {AuthLayout} from "../authLayout";
import './index.css';
import {Checkbox, FormControlLabel} from "@mui/material";

export interface IUser {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    age: string;
    city: string;
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
        city: '',
        isParent: false,
    })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setUserData({...userData, [name]: value})
    };

    const onCheckbox = () => {
        setUserData({...userData, isParent: !userData.isParent})
    }

    const handleSubmit = () => {
        const { firstName, city, age, email, phone, lastName } = userData;
        if (firstName && city && age && email && phone && lastName) {
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
                                <input name='city' value={userData.city}
                                       onChange={handleChange} type="text" className="login__input" placeholder="Вид спорта"/>
                            </div>
                            <FormControlLabel
                                value="is_parent"
                                control={
                                    <Checkbox
                                        checked={userData.isParent}
                                        onClick={onCheckbox}
                                        style={{ color: 'white' }}
                                    />
                                }
                                label="Я родитель"
                                labelPlacement="start"
                                style={{ color: 'white' }}
                            />
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
