import React from 'react';
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { ReferenteFormProps } from './types';

const ReferenteForm: React.FC<ReferenteFormProps> = ({ control }) => {
  const dioceses = [
    "Diócesis de Canelones", "Diócesis de Florida", "Diócesis de Maldonado-Punta del Este-Minas",
    "Diócesis de Melo", "Diócesis de Mercedes", "Diócesis de Montevideo", "Diócesis de Salto",
    "Diócesis de San José de Mayo", "Diócesis de Tacuarembó",
  ];

  const movimientos = ["No", "Movimiento Salesiano", "Movimiento Scout"];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <FormField name="referente.nombre" control={control} render={({ field }) => (
        <FormItem>
          <FormLabel>Nombre</FormLabel>
          <FormControl>
            <input {...field} placeholder="Nombre" className="form-control mt-1 p-2 w-full border rounded text-black" />
          </FormControl>
          <FormMessage />
        </FormItem>
      )} />
      <FormField name="referente.apellido" control={control} render={({ field }) => (
        <FormItem>
          <FormLabel>Apellido</FormLabel>
          <FormControl>
            <input {...field} placeholder="Apellido" className="form-control mt-1 p-2 w-full border rounded text-black" />
          </FormControl>
          <FormMessage />
        </FormItem>
      )} />
      <FormField name="referente.celular" control={control} render={({ field }) => (
        <FormItem>
          <FormLabel>Celular</FormLabel>
          <FormControl>
            <input {...field} placeholder="Celular" className="form-control mt-1 p-2 w-full border rounded text-black" />
          </FormControl>
          <FormMessage />
        </FormItem>
      )} />
      <FormField name="referente.email" control={control} render={({ field }) => (
        <FormItem>
          <FormLabel>Email</FormLabel>
          <FormControl>
            <input {...field} placeholder="Email" className="form-control mt-1 p-2 w-full border rounded text-black" />
          </FormControl>
          <FormMessage />
        </FormItem>
      )} />
      <FormField name="referente.fechaNacimiento" control={control} render={({ field }) => (
        <FormItem>
          <FormLabel>Fecha de Nacimiento</FormLabel>
          <FormControl>
            <input {...field} type="date" className="form-control mt-1 p-2 w-full border rounded text-black" />
          </FormControl>
          <FormMessage />
        </FormItem>
      )} />
      <FormField name="referente.restriccionAlimenticia" control={control} render={({ field }) => (
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
      <FormField name="referente.diocesis" control={control} render={({ field }) => (
        <FormItem>
          <FormLabel>Diocesis</FormLabel>
          <FormControl>
            <select {...field} className="form-control mt-1 p-2 w-full border rounded text-black">
              <option value="">Seleccione una Diócesis</option>
              {dioceses.map((diocesis, index) => (
                <option key={index} value={diocesis}>{diocesis}</option>
              ))}
            </select>
          </FormControl>
          <FormMessage />
        </FormItem>
      )} />
      <FormField name="referente.movimiento" control={control} render={({ field }) => (
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
      <FormField name="referente.contactoEmergencia" control={control} render={({ field }) => (
        <FormItem>
          <FormLabel>Contacto de Emergencia</FormLabel>
          <FormControl>
            <input {...field} placeholder="Contacto de Emergencia" className="form-control mt-1 p-2 w-full border rounded text-black" />
          </FormControl>
          <FormMessage />
        </FormItem>
      )} />
      <FormField name="referente.nombreContactoEmergencia" control={control} render={({ field }) => (
        <FormItem>
          <FormLabel>Nombre Contacto de Emergencia</FormLabel>
          <FormControl>
            <input {...field} placeholder="Nombre Contacto de Emergencia" className="form-control mt-1 p-2 w-full border rounded text-black" />
          </FormControl>
          <FormMessage />
        </FormItem>
      )} />
      <FormField name="referente.vinculoContactoEmergencia" control={control} render={({ field }) => (
        <FormItem>
          <FormLabel>Vínculo Contacto de Emergencia</FormLabel>
          <FormControl>
            <input {...field} placeholder="Vínculo Contacto de Emergencia" className="form-control mt-1 p-2 w-full border rounded text-black" />
          </FormControl>
          <FormMessage />
        </FormItem>
      )} />
    </div>
  );
};

export default ReferenteForm;
