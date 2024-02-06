/* eslint-disable @typescript-eslint/no-explicit-any */
import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "./components/core/button";
import { Input } from "./components/core/input";
import { ModeToggle } from "./components/theme/mode-toggle";
import { ThemeProvider } from "./components/theme/theme-provider";
import { DialogCustom } from "./components/ui/dialog-student";
import { TableStudents } from "./components/ui/table-students";
import { IStudent } from "./interfaces";
import { UseApiStudents } from "./service/hooks/use-students-api";

function App() {
  const [dataStudents, setDataStudents] = useState<IStudent[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const apiStudents = UseApiStudents();

  const getData = async () => {
    try {
      const data = await apiStudents.getAllStudents();
      setDataStudents(data);
    } catch (error) {
      window.alert("Erro");
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const searchData = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSearchValue(inputValue);
  };

  const onChangeSearch = (value: string) => {
    if (!value.length) {
      setSearchValue("");
      setInputValue("");
      return;
    }
    setInputValue(value);
  };

  const filterRows = dataStudents.filter(
    (student) =>
      student.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      student.cpf.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      student.ra.includes(searchValue) ||
      student.email.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
  );

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex flex-col gap-4 max-w-3xl m-auto mt-5">
        <div className="flex justify-end">
          <ModeToggle />
        </div>
        <div>
          <DialogCustom buttonLabel="Criar aluno" titleDialog="Criar aluno" />
        </div>
        <form onSubmit={searchData} className="flex space-x-2">
          <Input placeholder="RA, nome ou CPF..." onChange={(e) => onChangeSearch(e.target.value)} />
          <Button variant={"ghost"} className="flex justify-center" type="submit">
            <Search className="mr-2 h-4 w-4" />
            Buscar
          </Button>
        </form>
        <TableStudents data={filterRows} />
      </div>
    </ThemeProvider>
  );
}

export default App;
