import {
    Datagrid,
    DateField,
    EmailField,
    List,
    NumberField,
    TextField,
    SimpleList,
} from 'react-admin'
import {useMediaQuery} from '@mui/material'
import {setRowStyle} from '@/utils/setRowStyle'

export const PatientList = () => {
    const isSmall = useMediaQuery((theme) => theme.breakpoints.down('sm'))

    return (
        <List>
            {isSmall
                ? (
                    <SimpleList
                        linkType="show"
                        primaryText={(record) => record.name}
                        secondaryText={(record) => record.phone}
                        // tertiaryText={(record) => record.email}
                        rowStyle={setRowStyle}
                    />
                )
                : (<Datagrid rowClick="show" rowStyle={setRowStyle}>
                    <TextField source="id"/>
                    <TextField source="name" label="Ф.И.О"/>
                    <NumberField source="amount" label="Сумма оплаты"/>
                    <DateField source="dateAmount" label="Дата отлаты"/>
                    <DateField source="dateNextVisit" label="Дата след.визита"/>
                    {/*<DateField source="dateOfBirth" />*/}
                    {/*<EmailField source="email" />*/}
                    <TextField source="phone" label="Телефон"/>
                    {/*<TextField source="address" />*/}
                    {/*<TextField source="auto" />*/}
                    {/*<TextField source="passport" />*/}
                    {/*<TextField source="oms" />*/}
                    {/*<TextField source="contract" />*/}
                    {/*<TextField source="info" />*/}
                </Datagrid>)
            }
        </List>
    )
}
