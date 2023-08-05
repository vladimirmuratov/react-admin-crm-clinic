import { Card, CardContent, CardHeader } from '@mui/material'
import { Title } from 'react-admin';

export const Dashboard = () => (
    <Card>
        <Title title="Главная" />
        <CardHeader title="Добро пожаловать" />
        <CardContent>Система учета пациентов</CardContent>
    </Card>
);
