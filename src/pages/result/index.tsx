import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import Pic1 from '../../media/pic1.jpg';
import Pic2 from '../../media/pic2.png';
import Pic3 from '../../media/pic3.jpg';
import Pic4 from '../../media/pic4.jpg';
import Pic5 from '../../media/pic5.jpg';
import Pic6 from '../../media/pic6.jpg';
import Pic7 from '../../media/pic-7.jpeg';
import {Button, Card, CardContent, CardHeader, CardMedia, Typography} from "@mui/material";
import {IResult} from "../quiz";
import './index.scss';
import {ALL_RESULT, DESCRIPTIONS_RESULT, RESULT_TEXT} from "./const";
import {AuthLayout} from "../authLayout";

export const ResultPage = () => {
    const history = useHistory();
    const res = localStorage.getItem('result');
    const [result, setResult] = useState<IResult>();
    const [all, setAll] = useState<number>(0);

    useEffect(() => {
        if (res) {
            const resl = JSON.parse(res) as IResult;
            setResult(resl);
            setAll(resl['res1'] + resl['res2'] + resl['res3'] + resl['res4'] + resl['res5'] + resl['res6']);
        } else {
            history.push('/');
        }
    },[res])

    const getResultText = (name: 'res1' | 'res2' | 'res3'| 'res4' | 'res5' | 'res6' | 'res7') => {
        if (result) {
            if(result[name] < 9) {
                return RESULT_TEXT[0];
            }
            if (result[name] < 17) {
                return RESULT_TEXT[1];
            }
            return RESULT_TEXT[2];
        }
    }

    const onTest = () => {
        history.push('/quiz');
    }

    return (
        <AuthLayout>
            <div className='container-result'>
                <div className='content-wrapper'>
                    <Typography variant='h3' style={{ fontWeight: 'bold' }}>
                        Результат
                    </Typography>

                    {result && (
                        <>
                            {result["res7"] > 16 && (
                                <Card style={{ backgroundColor: '#FF4500'}}>
                                    <CardHeader style={{textAlign: 'center'}}
                                                title={`Ложь: ${Math.ceil((result["res7"] / 24) * 100)}%`}/>
                                    <CardContent>
                                        <h4>
                                            При ответах на вопросы были недостаточно искренни, поэтому полученные результаты не соответствуют
                                            действительному положению вещей. Заполните опросник еще раз, оценив себя более критично.
                                        </h4>

                                        <Button onClick={onTest} color='primary' variant='contained'>
                                            Начать тест заново
                                        </Button>
                                    </CardContent>
                                </Card>
                            )}
                            <div className="ServicesWrapper">
                                <div className="Info">
                                    <h1>Общий показатель:</h1>
                                    <p>
                                        {ALL_RESULT[all < 49 ? 0 : all < 97 ? 1 : 2]}
                                    </p>
                                </div>
                            </div>
                            <div className='card-wrapper'>
                                <Card style={{width: 300, margin: 16}}>
                                    <CardHeader title='1. Ценностно-смысловая организация личности '/>
                                    <CardMedia
                                        component="img"
                                        height="194"
                                        image={Pic1}
                                        alt="Paella dish"
                                    />
                                    <CardContent>
                                        <div className={`pie-wrapper
                                 progress-${Math.ceil((result["res1"] / 24) * 10)} style-2`}>
                                    <span className="label">
                                        {Math.ceil((result["res1"] / 24) * 100)}
                                        <span className="smaller">%</span></span>
                                            <div className="pie">
                                                <div className="left-side half-circle"/>
                                                <div className="right-side half-circle"/>
                                            </div>
                                            <div className="shadow"/>
                                        </div>
                                        <h4>
                                            {getResultText('res1')}
                                        </h4>
                                        <hr style={{margin: '16px 0'}}/>
                                        {DESCRIPTIONS_RESULT[0]}
                                    </CardContent>
                                </Card>

                                <Card style={{width: 300, margin: 16}}>
                                    <CardHeader title='2. Организация деятельности '/>
                                    <CardMedia
                                        component="img"
                                        height="194"
                                        image={Pic2}
                                        alt="Paella dish"
                                    />
                                    <CardContent>
                                        <div className={`pie-wrapper
                                 progress-${Math.ceil((result["res2"] / 24) * 10)} style-2`}>
                                    <span className="label">
                                        {Math.ceil((result["res2"] / 24) * 100)}
                                        <span className="smaller">%</span></span>
                                            <div className="pie">
                                                <div className="left-side half-circle"/>
                                                <div className="right-side half-circle"/>
                                            </div>
                                            <div className="shadow"/>
                                        </div>
                                        <h4>
                                            {getResultText('res2')}
                                        </h4>
                                        <hr style={{margin: '16px 0'}}/>
                                        {DESCRIPTIONS_RESULT[1]}
                                    </CardContent>
                                </Card>

                                <Card style={{width: 300, margin: 16}}>
                                    <CardHeader title='3. Решительность  '/>
                                    <CardMedia
                                        component="img"
                                        height="194"
                                        image={Pic3}
                                        alt="Paella dish"
                                    />
                                    <CardContent>
                                        <div className={`pie-wrapper
                                 progress-${Math.ceil((result["res3"] / 24) * 10)} style-2`}>
                                    <span className="label">
                                        {Math.ceil((result["res3"] / 24) * 100)}
                                        <span className="smaller">%</span></span>
                                            <div className="pie">
                                                <div className="left-side half-circle"/>
                                                <div className="right-side half-circle"/>
                                            </div>
                                            <div className="shadow"/>
                                        </div>
                                        <h4>
                                            {getResultText('res3')}
                                        </h4>
                                        <hr style={{margin: '16px 0'}}/>
                                        {DESCRIPTIONS_RESULT[2]}
                                    </CardContent>
                                </Card>

                                <Card style={{width: 300, margin: 16}}>
                                    <CardHeader title='4. Настойчивость'/>
                                    <CardMedia
                                        component="img"
                                        height="194"
                                        image={Pic4}
                                        alt="Paella dish"
                                    />
                                    <CardContent>
                                        <div className={`pie-wrapper
                                 progress-${Math.ceil((result["res4"] / 24) * 10)} style-2`}>
                                    <span className="label">
                                        {Math.ceil((result["res4"] / 24) * 100)}
                                        <span className="smaller">%</span></span>
                                            <div className="pie">
                                                <div className="left-side half-circle"/>
                                                <div className="right-side half-circle"/>
                                            </div>
                                            <div className="shadow"/>
                                        </div>

                                        <h4>
                                            {getResultText('res4')}
                                        </h4>
                                        <hr style={{margin: '16px 0'}}/>
                                        {DESCRIPTIONS_RESULT[3]}
                                    </CardContent>
                                </Card>

                                <Card style={{width: 300, margin: 16}}>
                                    <CardHeader title='5. Самообладание'/>
                                    <CardMedia
                                        component="img"
                                        height="194"
                                        image={Pic5}
                                        alt="Paella dish"
                                    />
                                    <CardContent>
                                        <div className={`pie-wrapper
                                 progress-${Math.ceil((result["res5"] / 24) * 10)} style-2`}>
                                    <span className="label">
                                        {Math.ceil((result["res5"] / 24) * 100)}
                                        <span className="smaller">%</span></span>
                                            <div className="pie">
                                                <div className="left-side half-circle"/>
                                                <div className="right-side half-circle"/>
                                            </div>
                                            <div className="shadow"/>
                                        </div>

                                        <h4>
                                            {getResultText('res5')}
                                        </h4>
                                        <hr style={{margin: '16px 0'}}/>
                                        {DESCRIPTIONS_RESULT[4]}
                                    </CardContent>
                                </Card>

                                <Card style={{width: 300, margin: 16}}>
                                    <CardHeader title='6. Самостоятельность'/>
                                    <CardMedia
                                        component="img"
                                        height="194"
                                        image={Pic6}
                                        alt="Paella dish"
                                    />
                                    <CardContent>
                                        <div className={`pie-wrapper
                                 progress-${Math.ceil((result["res6"] / 24) * 10)} style-2`}>
                                    <span className="label">
                                        {Math.ceil((result["res6"] / 24) * 100)}
                                        <span className="smaller">%</span></span>
                                            <div className="pie">
                                                <div className="left-side half-circle"/>
                                                <div className="right-side half-circle"/>
                                            </div>
                                            <div className="shadow"/>
                                        </div>
                                        <h4>
                                            {getResultText('res6')}
                                        </h4>
                                        <hr style={{margin: '16px 0'}}/>
                                        {DESCRIPTIONS_RESULT[5]}
                                    </CardContent>
                                </Card>

                                <Card style={{width: 300, margin: 16}}>
                                    <CardHeader title='Показатель лжи'/>
                                    <CardMedia
                                        component="img"
                                        height="194"
                                        image={Pic7}
                                        alt="Paella dish"
                                    />
                                    <CardContent>
                                        <div className={`pie-wrapper
                                 progress-${Math.ceil((result["res7"] / 24) * 10)} style-2`}>
                                    <span className="label">
                                        {Math.ceil((result["res7"] / 24) * 100)}
                                        <span className="smaller">%</span></span>
                                            <div className="pie">
                                                <div className="left-side half-circle"/>
                                                <div className="right-side half-circle"/>
                                            </div>
                                            <div className="shadow"/>
                                        </div>
                                        <h4>
                                            {getResultText('res7')}
                                        </h4>
                                        <hr style={{margin: '16px 0'}}/>
                                        {DESCRIPTIONS_RESULT[6]}
                                    </CardContent>
                                </Card>
                            </div>
                        </>
                    )}

                    <button onClick={onTest}>
                        Начать тест заново
                    </button>

                </div>
            </div>
        </AuthLayout>
    )
}
