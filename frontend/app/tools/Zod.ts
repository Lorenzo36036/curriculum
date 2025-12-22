import { z } from "zod";

export const RegisterData = z
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

export const LoginData = z.object({
  email: z.string().email("Correo no válido"),
  password: z.string().min(1, "La contraseña es obligatoria"),
});

export const formContactData = z.object({
  name: z.string().min(1, "El nombre es obligatorio"),
  email: z.string().email("Correo no válido"),
  subject: z.string().min(1, "El asunto es obligatorio"),
  message: z.string().min(1, "El mensaje es obligatorio"),
});

export type FormContactSchema = z.infer<typeof formContactData>;
export type LoginDataSchema = z.infer<typeof LoginData>;
export type RegisterDataSchema = z.infer<typeof RegisterData>;
