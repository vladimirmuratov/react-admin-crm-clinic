import {red, yellow} from '@mui/material/colors'

export function setRowStyle(record, index) {
    const dateNextVisit = new Date(record.dateNextVisit).toLocaleDateString()
    const today = new Date().toLocaleDateString()
    const nextDateArr = dateNextVisit.split('.')
    const todayArr = today.split('.')

    if (record.dateNextVisit) {
        if(todayArr[1] === nextDateArr[1] && todayArr[2] === nextDateArr[2]){
            const t = +todayArr[0]
            const n = +nextDateArr[0]
            if(n - t === 0){
                return {
                    backgroundColor: red[100]
                }
            }
            if(n - t === 1){
                return {
                    backgroundColor: yellow[100]
                }
            }
        }
    }
}
