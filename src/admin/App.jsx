import * as React from 'react'
import {Admin, Resource, ListGuesser, EditGuesser, ShowGuesser} from 'react-admin'
import { dataProvider } from 'ra-data-simple-prisma'
import {PatientList} from '@/admin/patient/PatientList'
import UserIcon from '@mui/icons-material/People'
import GroupAddIcon from '@mui/icons-material/GroupAdd'
import {Dashboard} from '@/admin/Dashboard'
import russianMessages from 'ra-language-russian'
import polyglotI18nProvider from 'ra-i18n-polyglot'
import {DoctorList} from '@/admin/doctor/DoctorList'
import {PatientShow} from '@/admin/patient/PatientShow'
import {DoctorShow} from '@/admin/doctor/DoctorShow'
import {PatientEdit} from '@/admin/patient/PatientEdit'
import {DoctorEdit} from '@/admin/doctor/DoctorEdit'
import {PatientCreate} from '@/admin/patient/PatientCreate'
import {DoctorCreate} from '@/admin/doctor/DoctorCreate'
import {authProvider} from '@/admin/authProvider'

const i18nProvider = polyglotI18nProvider(() => russianMessages, 'ru')

const App = () => (
    <Admin
        dataProvider={dataProvider("/api")}
        dashboard={Dashboard}
        i18nProvider={i18nProvider}
        authProvider={authProvider}
    >
        <Resource
            name="patient"
            list={PatientList}
            show={PatientShow}
            edit={PatientEdit}
            create={PatientCreate}
            icon={UserIcon}
            options={{ label: 'Пациенты' }}
        />
        <Resource
            name="doctor"
            list={DoctorList}
            show={DoctorShow}
            edit={DoctorEdit}
            create={DoctorCreate}
            icon={GroupAddIcon}
            options={{ label: 'Доктора' }}
        />
        {/*<Resource name="comments" list={ListGuesser} edit={EditGuesser}/>*/}
    </Admin>
)

export default App
