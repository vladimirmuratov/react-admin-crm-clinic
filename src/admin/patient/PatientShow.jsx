import {DateField, EmailField, NumberField, Show, SimpleShowLayout, TextField} from 'react-admin'
import {BaseTitle} from '@/admin/base/BaseTitle'
import {Divider} from '@mui/material'

export const PatientShow = () => (
    <Show title={<BaseTitle/>}>
        <SimpleShowLayout>
            {/*<TextField source="id"/>*/}
            <TextField source="name" label="Ф.И.О"/>
            <NumberField source="amount" label="Сумма оплаты"/>
            <DateField source="dateAmount" label="Дата оплаты"/>
            <DateField source="dateNextVisit" label="Дата след.визита"/>
            <Divider/>
            <DateField source="dateOfBirth" label="Дата рождения"/>
            <EmailField source="email" label="Email"/>
            <TextField source="phone" label="Телефон"/>
            <TextField source="address" label="Адрес"/>
            <TextField source="auto" label="Автомобиль"/>
            <TextField source="passport" label="Паспорт"/>
            <TextField source="oms" label="ОМС"/>
            <TextField source="contract" label="Договор"/>
            <TextField source="info" label="Информация"/>
        </SimpleShowLayout>
    </Show>
)
