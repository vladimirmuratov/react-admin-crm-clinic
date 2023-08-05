import {useRecordContext} from 'react-admin'

export const BaseTitle = () => {
    const record = useRecordContext()
    if (!record) return null
    return <span>{record.name}</span>
}
