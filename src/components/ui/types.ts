import { Control } from "react-hook-form";
import { z } from "zod";

export interface ReferenteFormProps {
  control: Control<any>;
}

export interface PersonaFormProps {
  control: Control<any>;
  index: number;
  dioceses: string[];
  movimientos: string[];
}

export interface ReferenteFormProps {
  control: Control<any>;
}

export interface PersonaFormProps {
  control: Control<any>;
  index: number;
  dioceses: string[];
  movimientos: string[];
}

const isAtLeast15YearsOld = (dateString: string): boolean => {
  const birthDate = new Date(dateString);
  const today = new Date();
  const age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();

  if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
    return age - 1 >= 15;
  }

  return age >= 15;
};

export const formSchema = z.object({
  referente: z.object({
    nombre: z.string().min(1, "El nombre es requerido"),
    apellido: z.string().min(1, "El apellido es requerido"),
    celular: z.string().min(1, "El celular es requerido"),
    email: z.string().email("Debe ser un email válido"),
    fechaNacimiento: z.string().refine(isAtLeast15YearsOld, "La edad debe ser de al menos 15 años"),
    restriccionAlimenticia: z.string(),
    diocesis: z.string(),
    movimiento: z.string(),
    contactoEmergencia: z.string().min(1, "El contacto de emergencia es requerido"),
    nombreContactoEmergencia: z.string().min(1, "El nombre del contacto de emergencia es requerido"),
    vinculoContactoEmergencia: z.string().min(1, "El vínculo del contacto de emergencia es requerido"),
  }),
  personas: z.array(
    z.object({
      nombre: z.string().min(1, "El nombre es requerido"),
      apellido: z.string().min(1, "El apellido es requerido"),
      celular: z.string().min(1, "El celular es requerido"),
      email: z.string().email("Debe ser un email válido"),
      fechaNacimiento: z.string().refine(isAtLeast15YearsOld, "La edad debe ser de al menos 15 años"),
      restriccionAlimenticia: z.string(),
      diocesis: z.string(),
      movimiento: z.string(),
    })
  ),
  inscripcion: z.object({
    totalPersonas: z.number(),
    valorInscripcion: z.number(),
  }),
});

export type FormSchema = z.infer<typeof formSchema>;

