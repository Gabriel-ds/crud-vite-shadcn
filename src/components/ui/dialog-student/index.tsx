import { Button } from "@/components/core/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/core/dialog";
import { Input } from "@/components/core/input";
import { Label } from "@/components/core/label";

interface PropsDialogCustom {
  buttonLabel: string;
  titleDialog: string;
}

export function DialogCustom(props: PropsDialogCustom) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>{props.buttonLabel}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{props.titleDialog}</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Nome
            </Label>
            <Input id="name" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="ra" className="text-right">
              RA
            </Label>
            <Input id="ra" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="CPF" className="text-right">
              CPF
            </Label>
            <Input id="cpf" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              E-mail
            </Label>
            <Input id="email" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Salvar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
