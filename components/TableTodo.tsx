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
        <TableHeader className="hidden md:table-header-group">
            <TableRow>
                <TableHead className="w-[100px]">Counter</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Body</TableHead>
                <TableHead className="text-right">Completed</TableHead>
                <TableHead className="text-right">Action</TableHead>
            </TableRow>
        </TableHeader>

        <TableBody className="grid grid-cols-1 gap-4 md:table-row-group">
            {todo && todo.map((todo, index) => (
                <TableRow key={todo.id} className="md rounded-lg p-4 grid grid-cols-2 gap-x-4 md:table-row">
                    
                    <TableCell className="font-medium col-span-2 md:col-span-1 md:table-cell">
                        <span className="font-bold md:hidden">Counter : </span>{index + 1}
                    </TableCell>
                    <TableCell className="font-medium col-span-2 md:col-span-1 md:table-cell">
                        <span className="font-bold md:hidden">Title : </span>{todo.title}
                    </TableCell>

                    <TableCell className="col-span-2 md:col-span-1 md:table-cell">
                        <span className="font-bold md:hidden">Details : </span>
                        {todo.body ?  (todo.body.length > 35 ? `${todo.body.slice(0, 35)}...`: todo.body):"Not Available"}
                    </TableCell>

                    <TableCell className="text-left md:text-right">
                        <span className="font-bold md:hidden">Status : </span>
                        {todo.completed ? (
                            <Badge variant="destructive" className="text-xs">Completed</Badge>
                        ) : (
                            <Badge  className="text-xs">UnComplete</Badge>
                        )}
                    </TableCell>
                    <TableCell className="col-span-2 md:col-span-1 md:table-cell">
                      <div className="flex items-end justify-between md:justify-end gap-2">
                        <p className="font-bold md:hidden">Action : </p>
                        <TodoAction todo={todo}/>
                      </div>
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>
        <TableFooter>
            <TableRow>
                <TableCell colSpan={4}>Total</TableCell>
                <TableCell className="text-end">{todo.length > 0 ? todo.length : "The Empty Todo"}</TableCell>
            </TableRow>
        </TableFooter>
    </Table>
  )
}

export default TableTodo;
