import prisma from '@/prisma'

export default async function handler(req, res) {
    if(req.method === 'GET'){
        const patients = await prisma.patient.findMany()
        res.status(200).json(patients)
    }
}
