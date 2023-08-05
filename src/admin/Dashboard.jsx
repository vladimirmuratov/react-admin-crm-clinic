import {Box, Card, CardContent, CardHeader, Stack} from '@mui/material'
import {Title} from 'react-admin'
import {useEffect, useState} from 'react'
import {DashboardCard} from '@/components/DashboardCard'

export const Dashboard = () => {
    const isAuth = sessionStorage.getItem('username')
    const [countPatients, setCountPatients] = useState()
    const [amount, setAmount] = useState()

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('/api')
            const patients = await res.json()
            setCountPatients(patients.length)
            if (patients.length) {
                const total = patients.reduce((acc, item) => acc + item.amount, 0)
                setAmount(total)
            }
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
                <Box
                    display="flex"
                    gap={1}
                    justifyContent={{xs: 'center', sm: 'start'}}
                >
                    <DashboardCard label="Пациентов" value={countPatients}/>
                    <DashboardCard label="Сумма" value={amount}/>
                </Box>
            </Card>
        </Box>
    )
}
