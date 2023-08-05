import {Card, CardContent} from '@mui/material'

export const DashboardCard = ({label = '', value = 0}) => {
    return (
        <Card>
            <CardContent sx={{
                fontSize: {xs: '1rem', sm: '1.5rem'},
                fontWeight: {xs: 'light', sm: 'normal'}
            }}
            >
                {`${label}: ${value}`}
            </CardContent>
        </Card>
    )
}
