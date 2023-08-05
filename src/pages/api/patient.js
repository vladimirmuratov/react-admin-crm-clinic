import prisma from '@/prisma'
import {
    createHandler,
    deleteHandler,
    deleteManyHandler,
    getListHandler,
    getOneHandler,
    updateHandler
} from 'ra-data-simple-prisma'

export default async function handler(req, res) {
    // console.log(req.body.method)
    // console.log(req.body)
    switch (req.body.method) {
        case 'getList':
            await getListHandler(req, res, prisma.patient)
            break
        case 'getOne':
            await getOneHandler(req, res, prisma.patient)
            break
        case 'update':
            await updateHandler(req, res, prisma.patient)
            break
        case 'create':
            await createHandler(req, res, prisma.patient)
            break
        case 'delete':
            await deleteHandler(req, res, prisma.patient)
            break
        case 'deleteMany':
            await deleteManyHandler(req, res, prisma.patient)
            break
    }
}
