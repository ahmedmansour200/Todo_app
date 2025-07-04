'use server'
import { PrismaClient } from '@prisma/client'
import { ITodo } from '@/interfaces';
import { revalidatePath } from 'next/cache';


const prisma = new PrismaClient()

export const getUserTodoListActions = async ({userId}:{userId: string | null}) => {
    return await prisma.todo.findMany({ 
        where: {
            userId: userId as string
        },
        orderBy: {
            createdAt: 'desc'
        },}
    )
}
export const createTodoActions = async ({title,body,completed, userId }:{title:string,body?:string,completed:boolean,userId: string | null}) => {
    await prisma.todo.create({
        data: {
            title,
            body,
            completed,
            userId: userId as string

        }
    },)
    revalidatePath('/', 'layout')

}
export const updateTodoActions = async ({id ,title,body,completed} : ITodo) => {
    await prisma.todo.update(
        {
            where: {
                id: id
            },
            data: {
                title,
                body,
                completed
            }
        }
    )
    revalidatePath('/', 'layout')
}
export const deleteTodoActions = async ({id}:{id:string}) => {
    if (!id) {
        throw new Error('ID is required to delete a todo item')
    }
    await prisma.todo.delete({
        where: {
            id
        }
    })
    revalidatePath('/', 'layout')
}
