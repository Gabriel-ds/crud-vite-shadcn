/* eslint-disable @typescript-eslint/no-explicit-any */
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface PropsTableData {
  data: any[];
}

export function TableData(props: PropsTableData) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[150px]">RA</TableHead>
          <TableHead>Nome</TableHead>
          <TableHead>CPF</TableHead>
          <TableHead>E-mail</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {props.data.map((student) => (
          <TableRow key={student.ra}>
            <TableCell>{student.ra}</TableCell>
            <TableCell>{student.name}</TableCell>
            <TableCell>{student.email}</TableCell>
            <TableCell>{student.cpf}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
