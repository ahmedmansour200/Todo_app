import { PrismaClient } from '@prisma/client'
import { faker } from '@faker-js/faker'
import { title } from 'process';
const prisma = new PrismaClient()

async function main() {
  // ... you will write your Prisma Client queries here
  // Create a many todo
//   const todo = await prisma.todo.createMany({
//     data: Array.from({ length: 20 }, () => ({
     
//       title: faker.book.title(),
//       body: faker.food.description(),
//   })),
//   })
}

main()
  .catch(async (e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  }) 