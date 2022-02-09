import {Button, FormControl, FormControlLabel, Radio, RadioGroup, Typography} from "@mui/material";
import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import {IUser} from "../login";
import './index.scss'
import {answerList, questions} from "./mock";
import {AuthLayout} from "../authLayout";

interface IAnswer {
    questionId: string;
    answerId: string;
}

export interface IResult {
    res1: number;
    res2: number;
    res3: number;
    res4: number;
    res5: number;
    res6: number;
    res7: number;
}

const AscOrder0123 = [1, 2, 3, 4, 5, 6, 10, 12, 13, 16, 18, 19, 21, 25, 27, 28, 29,
    30, 31, 33, 34, 38, 41, 43, 44, 45, 46,
47, 48, 49, 50, 53, 55, 56];

export const QuizPage = () => {
    const user = localStorage.getItem('userData');
    const history = useHistory();
    const { handleSubmit, control, getValues } = useForm();
    const [error, setError] = useState<boolean>(false);
    const [userData, setUserData] = useState<IUser>();

    useEffect(() => {
        if (!user) {
            history.push('/login')
        } else {
            setUserData(JSON.parse(user) as IUser);
        }
    },[]);

    const onSubmit = (data: any) => {
        if (Object.values(data).filter(e => !e).length > 0) {
            setError(true);
        } else {
            setError(false);
            const answers: IAnswer[] = [];
            Object.entries(data).map((e) => answers.push({questionId: e[0], answerId: `${e[1]}`}));
            console.log(answers);
            let result: number[] = [0, 0, 0, 0, 0, 0, 0];
            for (let i = 0; i < 7; i += 1) {
                for (let j = 0; j < 8; j += 1) {
                    console.log(answers[7 * j + i])
                    if (AscOrder0123.includes(7 * j + i + 1)) {
                        result[i] += (Number(answers[7 * j + i]?.answerId) - 1);
                    } else {
                        result[i] += (4 - Number(answers[7 * j + i]?.answerId));
                    }
                    console.log(result[i], i)
                }
            }
            const newResult: IResult = {
                res1: result[0],
                res2: result[1],
                res3: result[2],
                res4: result[3],
                res5: result[4],
                res6: result[5],
                res7: result[6],
            };

            const body = {
                first_name: userData?.firstName,
                last_name: userData?.lastName,
                phone: userData?.phone,
                email: userData?.email,
                age: userData?.age,
                is_parent: userData?.isParent,
                sport: userData?.sport,
                answers: answers.map((e, index) => ({
                    questionId: Number(e.questionId),
                    answerId: Number(e.answerId),
                    questionText: questions[index],
                    answerText: answerList[Number(e.answerId) - 1]
                })),
                results: newResult,
            };
            createTest(body);
            localStorage.setItem('result', JSON.stringify(newResult));
            history.push('/result');
        }
    }

    const createTest = async (data: any) => {
        fetch('http://188.227.16.66/answer/', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        }).then(res => res.text()).then(data => {
            console.log(data)})
    }

    return (
        <AuthLayout>
            <div className='quiz'>
                <div className='content'>
                    {/*<Typography variant="h5">*/}
                    {/*    {`${user?.firstName} ${user.lastName}`}*/}
                    {/*</Typography>*/}

                    <div className='header'>
                        <Typography variant="h4">
                            Тест
                        </Typography>
                    </div>

                    <FormControl>
                        {questions.map((q: string, idx: number) => (
                            <div key={`q_${idx + 1}`}>
                                <Typography
                                    variant="h6"
                                    style={{ fontWeight: 'bold', color: 'black', margin: 12, fontSize: 22, lineHeight: '28px'}}
                                >
                                    {`${idx + 1}. ${q}`}
                                </Typography>
                                <Controller
                                    control={control}
                                    name={`${idx + 1}`}
                                    render={({ field: { onChange, value } }) => (
                                        <RadioGroup
                                            value={value}
                                            aria-labelledby="demo-radio-buttons-group-label"
                                            defaultValue="female"
                                            onChange={onChange}
                                        >
                                            <div className='radio-wrapper'>
                                                <FormControlLabel
                                                    style={{ width: '100%'}}
                                                    value="1"
                                                    control={<Radio required color="secondary" />}
                                                    label={<Typography style={{fontSize: 19, color: 'black'}}>Да</Typography>}
                                                />
                                            </div>
                                            <div className='radio-wrapper'>
                                                <FormControlLabel
                                                    style={{ width: '100%'}}
                                                    value="2"
                                                    control={<Radio required color="secondary" />}
                                                    label={<Typography style={{fontSize: 19, color: 'black'}}>Скорее да, чем нет</Typography>}
                                                />
                                            </div>
                                            <div className='radio-wrapper'>
                                                <FormControlLabel
                                                    style={{ width: '100%'}}
                                                    value="3"
                                                    control={<Radio required color="secondary" />}
                                                    label={<Typography style={{fontSize: 19, color: 'black'}}>Скорее нет, чем да</Typography>}
                                                />
                                            </div>
                                            <div className='radio-wrapper'>
                                                <FormControlLabel
                                                    style={{ width: '100%'}}
                                                    value="4"
                                                    control={<Radio required color="secondary" />}
                                                    label={<Typography style={{fontSize: 19, color: 'black'}}>Нет</Typography>}
                                                />
                                            </div>
                                        </RadioGroup>
                                    )}
                                />
                            </div>
                        ))}

                        {error && (<>ответье на все вопросы</>)}
                        <Button
                            color="secondary"
                            size="large"
                            variant="contained"
                            onClick={handleSubmit(onSubmit)}
                            style={{marginTop: 20}}
                        >
                            Отправить
                        </Button>

                    </FormControl>
                </div>

            </div>
        </AuthLayout>
    )
}
