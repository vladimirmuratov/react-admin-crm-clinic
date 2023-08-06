import {EmailField, Show, SimpleShowLayout, TextField} from 'react-admin'
import {BaseTitle} from '@/admin/base/BaseTitle'

export const DoctorShow = () => (
    <Show title={<BaseTitle/>}>
        <SimpleShowLayout>
            {/*<TextField source="id"/>*/}
            <TextField source="name" label="Ф.И.О"/>
            <TextField source="specialization" label="Специализация"/>
            <TextField source="phone1" label="Телефон 1"/>
            <TextField source="phone2" label="Телефон 2"/>
            <EmailField source="email" label="Email"/>
        </SimpleShowLayout>
    </Show>
)
