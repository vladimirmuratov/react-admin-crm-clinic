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
    switch (req.body.method) {
        case 'getList':
            await getListHandler(req, res, prisma.doctor)
            break
        case 'getOne':
            await getOneHandler(req, res, prisma.doctor)
            break
        case 'create':
            await createHandler(req, res, prisma.doctor)
            break
        case 'update':
            await updateHandler(req, res, prisma.doctor)
            break
        case 'delete':
            await deleteHandler(req, res, prisma.doctor)
            break
        case 'deleteMany':
            await deleteManyHandler(req, res, prisma.doctor)
            break
    }
}
