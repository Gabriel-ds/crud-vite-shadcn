import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const students = [
  {
    ra: "0191178165",
    name: "Gabriel dos Santos",
    cpf: "373.467.92-98",
    email: "gab@123",
  },
  {
    ra: "8768767",
    name: "Aryna",
    cpf: "373.467.92-98",
    email: "gab@123",
  },
  {
    ra: "445446354356",
    name: "Baruk",
    cpf: "373.467.92-98",
    email: "gab@123",
  },
  {
    ra: "0191178165",
    name: "Cadu",
    cpf: "373.467.92-98",
    email: "gab@123",
  },
  {
    ra: "0191178165",
    name: "Felipe",
    cpf: "373.467.92-98",
    email: "gab@123",
  },
];

export function TableData() {
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
        {students.map((student) => (
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
