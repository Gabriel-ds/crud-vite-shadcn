import { Search } from "lucide-react";
import { useState } from "react";
import { DialogCustom } from "./components/core/dialog-student";
import { TableData } from "./components/core/table-data";
import { ModeToggle } from "./components/theme/mode-toggle";
import { ThemeProvider } from "./components/theme/theme-provider";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";

function App() {
  const [inputValue, setInputValue] = useState("");

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex flex-col gap-4 max-w-3xl m-auto mt-5">
        <div className="flex justify-end">
          <ModeToggle />
        </div>
        <div>
          <DialogCustom buttonLabel="Criar aluno" titleDialog="Criar aluno" />
        </div>
        <div className="flex space-x-2">
          <Input placeholder="RA, nome ou CPF..." onChange={(e) => setInputValue(e.target.value)} />
          <Button variant={"ghost"} className="flex justify-center" onClick={() => console.log(inputValue)}>
            <Search className="mr-2 h-4 w-4" />
            Buscar
          </Button>
        </div>
        <TableData />
      </div>
    </ThemeProvider>
  );
}

export default App;
