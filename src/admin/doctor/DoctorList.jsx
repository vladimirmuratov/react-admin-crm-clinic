import {Datagrid, EmailField, List, TextField, SimpleList} from 'react-admin'
import {useMediaQuery} from '@mui/material'

export const DoctorList = () => {
    const isSmall = useMediaQuery((theme) => theme.breakpoints.down('sm'))

    return (
        <List>
            {isSmall
                ? (
                    <SimpleList
                        primaryText={(record) => record.name}
                        secondaryText={(record) => record.phone1}
                        // tertiaryText={(record) => record.phone2}
                        linkType="show"
                    />
                )
                : (< Datagrid rowClick="show">
                    <TextField source="id"/>
                    <TextField source="name" label="Ф.И.О"/>
                    <TextField source="specialization" label="Специализация"/>
                    <TextField source="phone1" label="Телефон 1"/>
                    <TextField source="phone2" label="Телефон 2"/>
                    <EmailField source="email" label="Email"/>
                </Datagrid>)
            }
        </List>
    )
}
