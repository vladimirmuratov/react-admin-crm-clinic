import {Create, DateTimeInput, NumberInput, SimpleForm, TextInput} from 'react-admin'

export const PatientCreate = () => (
    <Create redirect="list" title="Новая запись">
        <SimpleForm>
            <TextInput source="name" label="Ф.И.О"/>
            <NumberInput source="amount" label="Сумма оплаты"/>
            <DateTimeInput source="dateAmount" label="Дата оплаты"/>
            <DateTimeInput source="dateNextVisit" label="Дата след.визита"/>
            <DateTimeInput source="dateOfBirth" label="Дата рождения"/>
            <TextInput source="email" label="Email"/>
            <TextInput source="phone" label="Телефон"/>
            <TextInput source="address" label="Адрес"/>
            <TextInput source="auto" label="Автомобиль"/>
            <TextInput source="passport" label="Паспорт"/>
            <TextInput source="oms" label="ОМС"/>
            <TextInput source="contract" label="Договор"/>
            <TextInput source="info" label="Информация" multiline/>
        </SimpleForm>
    </Create>
);
