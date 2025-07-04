"use client"
import React from 'react'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Checkbox } from './ui/checkbox'
import { Label } from './ui/label'
import Spinner from './Spinner'
import { Button } from './ui/button'
import { UseFormReturn } from 'react-hook-form'

interface IFormTodoProps {
    onSubmit:  (data: {title: string;completed: boolean;body?: string | undefined;}) => Promise<void>;
    form: UseFormReturn<{ title: string; completed: boolean; body?: string | undefined }, unknown, { title: string; completed: boolean; body?: string | undefined }>;
    loading: boolean;
}
const FormTodo = ({onSubmit, form , loading}:IFormTodoProps) => {
  return (
      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="title todo" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="body"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Desertion</FormLabel>
              <FormControl>
                    <Textarea placeholder="Type your description here." {...field}/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex items-center gap-3">
        <Checkbox  id="completed" 
        checked={form.watch("completed")}
        onCheckedChange={(checked) => form.setValue("completed", checked ? true : false)}
        />
        <Label htmlFor="completed">Completed Todo</Label>
      </div>
        <div className="flex justify-flex-start items-center">
          {loading ? <Spinner/> : 
            <Button type="submit">Submit</Button>
          }  
        </div>
      </form>
    </Form>
  )
}

export default FormTodo
