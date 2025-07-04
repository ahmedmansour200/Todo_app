"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { SquarePen } from "lucide-react"
import { useForm } from "react-hook-form"
import {  z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { updateTodoActions } from "@/actions/todo.actions"
import { useState } from "react"
import { ITodo } from "@/interfaces"
import FormTodo from "./FormTodo"

const formSchema = z.object({
  title: z.string().min(2, {
    message: "title must be at least 2 characters.",
  }),
   body: z?.string().optional(),
   completed:z.boolean(),
})

export function EditTodoForm({todo}:{todo:ITodo}) {
  const [loading, setLoading] = useState(false)
  const [open, setOpen] = useState(false)
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title:todo.title,
      body: todo.body as string,
      completed: todo.completed,
    },
  })

    const onSubmit = async (data: z.infer<typeof formSchema>) => {
      console.log(data)
      setLoading(true)
     await updateTodoActions({id: todo.id,title: data.title, body: data.body as string, completed:data.completed});
     setLoading(false)
        setOpen(false)
      }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
        <Button size={'icon'} variant="outline">
            <SquarePen size={16} />
        </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Todo</DialogTitle>
          <DialogDescription>
            Edit todo item to your list.
          </DialogDescription>
        </DialogHeader>
              <FormTodo onSubmit={onSubmit} form={form} loading={loading} />
        </DialogContent>
    </Dialog>
  )
}
