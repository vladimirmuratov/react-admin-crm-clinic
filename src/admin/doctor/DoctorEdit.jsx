import { Edit, SimpleForm, TextInput } from 'react-admin'
import {BaseTitle} from '@/admin/base/BaseTitle'

export const DoctorEdit = () => (
    <Edit title={<BaseTitle/>}>
        <SimpleForm>
            <TextInput source="id" disabled/>
            <TextInput source="name" label="Ф.И.О" />
            <TextInput source="specialization" label="Специализация"/>
            <TextInput source="phone1" label="Телефон 1"/>
            <TextInput source="phone2" label="Телефон 2"/>
            <TextInput source="email" label="Email"/>
        </SimpleForm>
    </Edit>
);
