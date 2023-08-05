import prisma from '@/prisma'

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const {username, password} = req.body
        const user = await prisma.admin.findFirst({
            where: {
                username
            }
        })
        if (user && user.password === password) {
            res.status(200).json(user.username)
        } else {
            res.status(401).json({error: 'Ошибка! Проверьте логин или пароль'})
        }
    }
}
