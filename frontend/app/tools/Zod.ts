import { z } from "zod";

export const UserSchema = z
  .object({
    username: z.string().min(2, { message: "El nombre es muy corto" }),
    email: z.string().email({ message: "Correo electrónico no válido" }),
    password: z
      .string()
      .min(6, { message: "La contraseña es muy corta" })
      .max(20, { message: "La contraseña es muy larga" }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Contrasenaña no coinciden",
    path: ["confirmPassword"],
  });

export const LoginSchema = z.object({
  email: z.string().email("Correo no válido"),
  password: z.string().min(1, "La contraseña es obligatoria"),
});

export type LoginData = z.infer<typeof LoginSchema>;
export type FormData = z.infer<typeof UserSchema>;
