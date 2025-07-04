'use server'
import { getUserTodoListActions } from "@/actions/todo.actions";
import { AddTodoForm } from "@/components/AddTodoForm";
import Navbar from "@/components/Navbar";
import TableTodo from "@/components/TableTodo";
import { auth } from "@clerk/nextjs/server";

export default async function Home(){
  const { userId } = await auth()
  const getTodo = await getUserTodoListActions({userId});


  return (
    <div className="container mx-auto p-4">
            <Navbar/>
      <main className="">
        <div className="flex items-center justify mb-4">
      <AddTodoForm userId={userId}/>
        </div>
        <TableTodo todo={getTodo} />
      </main>
    </div>
  );
}
