import React from 'react';
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { PersonaFormProps } from './types';

const PersonaForm: React.FC<PersonaFormProps> = ({ control, index, dioceses, movimientos }) => {
  return (
    <div className="grid grid-cols-1 gap-4">
      <FormField name={`personas.${index}.nombre`} control={control} render={({ field }) => (
        <FormItem>
          <FormLabel>Nombre</FormLabel>
          <FormControl>
            <input {...field} placeholder="Nombre" className="form-control mt-1 p-2 w-full border rounded text-black" />
          </FormControl>
          <FormMessage />
        </FormItem>
      )} />
      <FormField name={`personas.${index}.apellido`} control={control} render={({ field }) => (
        <FormItem>
          <FormLabel>Apellido</FormLabel>
          <FormControl>
            <input {...field} placeholder="Apellido" className="form-control mt-1 p-2 w-full border rounded text-black" />
          </FormControl>
          <FormMessage />
        </FormItem>
      )} />
      <FormField name={`personas.${index}.celular`} control={control} render={({ field }) => (
        <FormItem>
          <FormLabel>Celular</FormLabel>
          <FormControl>
            <input {...field} placeholder="Celular" className="form-control mt-1 p-2 w-full border rounded text-black" />
          </FormControl>
          <FormMessage />
        </FormItem>
      )} />
      <FormField name={`personas.${index}.email`} control={control} render={({ field }) => (
        <FormItem>
          <FormLabel>Email</FormLabel>
          <FormControl>
            <input {...field} placeholder="Email" className="form-control mt-1 p-2 w-full border rounded text-black" />
          </FormControl>
          <FormMessage />
        </FormItem>
      )} />
      <FormField name={`personas.${index}.fechaNacimiento`} control={control} render={({ field }) => (
        <FormItem>
          <FormLabel>Fecha de Nacimiento</FormLabel>
          <FormControl>
            <input {...field} type="date" className="form-control mt-1 p-2 w-full border rounded text-black" />
          </FormControl>
          <FormMessage />
        </FormItem>
      )} />
      <FormField name={`personas.${index}.restriccionAlimenticia`} control={control} render={({ field }) => (
        <FormItem>
          <FormLabel>Restricción Alimenticia</FormLabel>
          <FormControl>
            <select {...field} className="form-control mt-1 p-2 w-full border rounded text-black">
              <option value="No">No</option>
              <option value="Vegetariano">Vegetariano</option>
            </select>
          </FormControl>
          <FormMessage />
        </FormItem>
      )} />
      <FormField name={`personas.${index}.diocesis`} control={control} render={({ field }) => (
        <FormItem>
          <FormLabel>Diocesis</FormLabel>
          <FormControl>
            <select {...field} className="form-control mt-1 p-2 w-full border rounded text-black">
              <option value="">Seleccione una Diócesis</option>
              {dioceses.map((diocesis, diocesisIndex) => (
                <option key={diocesisIndex} value={diocesis}>{diocesis}</option>
              ))}
            </select>
          </FormControl>
          <FormMessage />
        </FormItem>
      )} />
      <FormField name={`personas.${index}.movimiento`} control={control} render={({ field }) => (
        <FormItem>
          <FormLabel>Movimiento</FormLabel>
          <FormControl>
            <select {...field} className="form-control mt-1 p-2 w-full border rounded text-black">
              {movimientos.map((movimiento, index) => (
                <option key={index} value={movimiento}>{movimiento}</option>
              ))}
            </select>
          </FormControl>
          <FormMessage />
        </FormItem>
      )} />
    </div>
  );
};

export default PersonaForm;
