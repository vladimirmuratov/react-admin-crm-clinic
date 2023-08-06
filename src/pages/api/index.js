import prisma from '@/prisma'

export default async function handler(req, res) {
    if(req.method === 'GET'){
        const count = await prisma.patient.count()
        const amounts = await prisma.patient.findMany({
            select: {
                amount: true
            }
        })
        const total = amounts.reduce((acc, item) => acc + item.amount, 0)

        res.status(200).json({count, total})
    }
}
