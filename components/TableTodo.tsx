import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { ITodo } from "@/interfaces";
import { Badge } from "./ui/badge";
import TodoAction from "./TodoAction";
const TableTodo = ({todo} : {todo:ITodo[]}) => {
   
  return (
   <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">ID</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Body</TableHead>
          <TableHead className="text-right">Completed</TableHead>
          <TableHead className="text-right">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {todo && todo.map((todo) => (
          <TableRow key={todo.id}>
            <TableCell className="font-medium">{todo.id}</TableCell>
            <TableCell>{todo.title}</TableCell>
            <TableCell >
                <p className="text-sm text-muted-foreground ">
                    {todo.body && todo.body.length > 16 ? `${todo.body.slice(0, 16)}...` : todo.body}
                </p>
                </TableCell>
            <TableCell className="text-right">
                {todo.completed ? (<Badge   className="text-xs"> Completed </Badge> ):
                ( <Badge  variant="secondary" className="text-xs"> UnComplete</Badge> )    
            }</TableCell>
            <TableCell className="text-right">
              <TodoAction todo={todo}/>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={4}>Total</TableCell>
          <TableCell className="text-end">{todo.length}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  )
}

export default TableTodo;
