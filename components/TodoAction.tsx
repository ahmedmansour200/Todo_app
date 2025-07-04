"use client"
import React, { useState } from 'react'
import { Button } from './ui/button'
import { Trash } from 'lucide-react'
import Spinner from './Spinner'
import { ITodo } from '@/interfaces'
import { deleteTodoActions } from '@/actions/todo.actions'
import { EditTodoForm } from './EditTodoForm'

const TodoAction = ({todo} : {todo:ITodo}) => {
     const [loading, setLoading] = useState(false);
    
        const handleDelete = async (id: string) => {
            setLoading(true);
            await deleteTodoActions({ id });
            setLoading(false);
        }
  return (
      <div className="flex items-center justify-end gap-2">
            <EditTodoForm todo={todo} /> 
             <Button  onClick={() => handleDelete(todo.id as string)} size={'icon'} variant="destructive">
                   {loading ? <Spinner/> : <Trash size={16} color="red" />}  
            </Button>
        </div>
  )
}

export default TodoAction
