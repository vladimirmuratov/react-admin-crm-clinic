import {Box, Card, CardContent, CardHeader} from '@mui/material'
import {Title} from 'react-admin'
import {useEffect, useState} from 'react'
import {DashboardCard} from '@/components/DashboardCard'

export const Dashboard = () => {
    const isAuth = sessionStorage.getItem('username')
    const [countPatients, setCountPatients] = useState(0)
    const [amount, setAmount] = useState(0)

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('/api')
            const json = await res.json()
            const {count, total} = json
            setCountPatients(count)
            setAmount(total)
        }

        if (isAuth) fetchData()

    }, [isAuth])

    return (
        <Box>
            <Card sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: {xs: 'center', sm: 'start'}
            }}>
                <Title title="Главная"/>
                <CardHeader title="Добро пожаловать"/>
                <CardContent>Система учета пациентов</CardContent>
                {countPatients
                    ? <Box
                        display="flex"
                        gap={1}
                        justifyContent={{xs: 'center', sm: 'start'}}
                    >
                        <DashboardCard label="Пациентов" value={countPatients}/>
                        <DashboardCard label="Сумма" value={amount}/>
                    </Box>
                    : <></>
                }
            </Card>
        </Box>
    )
}
