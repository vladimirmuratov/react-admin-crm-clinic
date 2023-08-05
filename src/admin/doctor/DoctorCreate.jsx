import {Create, SimpleForm, TextInput} from 'react-admin'

export const DoctorCreate = () => (
    <Create redirect="list" title="Новая запись">
        <SimpleForm>
            <TextInput source="name" label="Ф.И.О" />
            <TextInput source="specialization" label="Специализация"/>
            <TextInput source="phone1" label="Телефон 1"/>
            <TextInput source="phone2" label="Телефон 2"/>
            <TextInput source="email" label="Email"/>
        </SimpleForm>
    </Create>
);
