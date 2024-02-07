import { z } from 'zod'

export const createStudentFormSchema = z.object({
    name: z
        .string()
        .nonempty("O nome deve ser preeenchido"),
    ra: z.string()
        .nonempty("O RA deve ser preenchido")
        .min(10, "O RA deve ter 10 digitos"),
    cpf: z
        .string()
        .nonempty("O CPF deve ser preenchido")
        .refine(
            (value) =>
                /^[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}-?[0-9]{2}$/i.test(value),
            {
                message: "CPF inválido",
            }
        ),
    email: z
        .string()
        .nonempty("O E-mail deve ser preenchido")
        .email('Email inválido')

}
)