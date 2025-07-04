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
import { Plus } from "lucide-react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { createTodoActions } from "@/actions/todo.actions"
import { useState } from "react"
import FormTodo from "./FormTodo"

const formSchema = z.object({
  title: z.string().min(2, {
    message: "title must be at least 2 characters.",
  }),
   body: z?.string().optional(),
   completed:z.boolean(),
})

export function AddTodoForm({userId}:{userId:string | null}) {
  const [loading, setLoading] = useState(false)
  const [open, setOpen] = useState(false)
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      body: "",
      completed: false,
    },
  })

    const onSubmit = async (data: z.infer<typeof formSchema>) => {  
      console.log(data)
      setLoading(true)
      await createTodoActions(
          {
            title: data.title,
            body: data.body,
            completed:data.completed,
            userId: userId as string
          }
        )
        setLoading(false)
        setOpen(false)
        form.reset();
    }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
        <Button variant="outline">
            <Plus />
            Add Todo</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Todo</DialogTitle>
          <DialogDescription>
            Add a new todo item to your list.
          </DialogDescription>
        </DialogHeader>

              <FormTodo onSubmit={onSubmit} form={form} loading={loading} />
        </DialogContent>
    </Dialog>
  )
}
