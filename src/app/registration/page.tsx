"use client";

import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import ReferenteForm from '@/components/ui/ReferenteForm';
import PersonaForm from '@/components/ui/PersonaForm';
import { FormSchema, formSchema } from '@/components/ui/types';
import { calcularCosto } from '@/utils/calcularCosto'; // Importar la función desde utils

const dioceses = [
  "Diócesis de Canelones", "Diócesis de Florida", "Diócesis de Maldonado-Punta del Este-Minas",
  "Diócesis de Melo", "Diócesis de Mercedes", "Diócesis de Montevideo", "Diócesis de Salto",
  "Diócesis de San José de Mayo", "Diócesis de Tacuarembó",
];

const movimientos = ["No", "Movimiento Salesiano", "Movimiento Scout"];

const Registration = () => {
  const [personas, setPersonas] = useState(Array(4).fill({
    nombre: '', apellido: '', celular: '', email: '', fechaNacimiento: '', restriccionAlimenticia: 'No', diocesis: "", movimiento: "No"
  }));
  const [valorInscripcion, setValorInscripcion] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');
  const updatingRef = useRef(false);

  const formMethods = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      referente: {
        nombre: '', apellido: '', celular: '', email: '', fechaNacimiento: '', restriccionAlimenticia: 'No',
        diocesis: "", movimiento: 'No', contactoEmergencia: '', nombreContactoEmergencia: '', vinculoContactoEmergencia: ''
      },
      personas: personas,
      inscripcion: {
        totalPersonas: 5,
        valorInscripcion: 0,
      }
    }
  });

  const { handleSubmit, control, watch, setValue, getValues } = formMethods;

  const prevValoresRef = useRef({ valorInscripcion: 0, totalPersonas: 0 });

  const calcularCostoYActualizar = (referenteDiocesis: string = "", personasDiocesis: string[] = []) => {
    const { total, totalPersonas } = calcularCosto(referenteDiocesis, personasDiocesis);

    if (!updatingRef.current) {
      updatingRef.current = true;
      setValorInscripcion(total);
      setValue("inscripcion.valorInscripcion", total, { shouldDirty: false, shouldTouch: false, shouldValidate: false });
      setValue("inscripcion.totalPersonas", totalPersonas, { shouldDirty: false, shouldTouch: false, shouldValidate: false });
      updatingRef.current = false;
    }
  };

  useEffect(() => {
    const subscription = watch((value) => {
      if (!updatingRef.current) {
        const referenteDiocesis = value.referente?.diocesis || "";
        const personasDiocesis = value.personas?.map((persona: any) => persona.diocesis || "") || [];
        calcularCostoYActualizar(referenteDiocesis, personasDiocesis);
      }
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  const onSubmit: SubmitHandler<FormSchema> = async (data) => {
    try {
      const response = await axios.post('/api/registration', data);
      alert(response.data.message);
    } catch (error) {
      console.error('Error al enviar el formulario', error);
      alert('Error al enviar el formulario');
    }
  };

  const addPerson = () => {
    if (personas.length < 15) {
      const currentValues = getValues("personas");
      const newPerson = { nombre: '', apellido: '', celular: '', email: '', fechaNacimiento: '', restriccionAlimenticia: 'No', diocesis: "", movimiento: "No" };
      const updatedPersonas = [...currentValues, newPerson];
      setPersonas(updatedPersonas);
      formMethods.setValue("personas", updatedPersonas);
      setErrorMessage('');
    } else {
      setErrorMessage('No puedes agregar más de 15 integrantes.');
    }
  };

  const removeLastPerson = () => {
    if (personas.length > 4) {
      const currentValues = getValues("personas");
      const newPersonas = currentValues.slice(0, -1);
      setPersonas(newPersonas);
      formMethods.setValue("personas", newPersonas);
      setErrorMessage('');
    } else {
      setErrorMessage('Debe haber al menos 4 integrantes.');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Inscripción</h1>
      <Form {...formMethods}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <h2 className="text-xl font-bold">Referente</h2>
          <Card>
            <CardHeader>
              <CardTitle>Referente</CardTitle>
              <CardDescription>Información del referente del grupo</CardDescription>
            </CardHeader>
            <CardContent>
              <ReferenteForm control={control} />
            </CardContent>
          </Card>
          <h2 className="text-xl font-bold">Integrante del grupo</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {personas.map((persona, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>Integrante {index + 1}</CardTitle>
                  <CardDescription>Información del integrante {index + 1}</CardDescription>
                </CardHeader>
                <CardContent>
                  <PersonaForm control={control} index={index} dioceses={dioceses} movimientos={movimientos} />
                </CardContent>
              </Card>
            ))}
          </div>
          {errorMessage && <div className="text-red-500">{errorMessage}</div>}
          <div className="flex justify-between space-x-4">
            <div className="flex space-x-4">
              <button type="button" onClick={addPerson} className="btn btn-secondary p-2 bg-green-500 text-white rounded mt-2">Agregar Persona</button>
              <button type="button" onClick={removeLastPerson} className="btn btn-secondary p-2 bg-red-500 text-white rounded mt-2">Quitar Persona</button>
            </div>
            <button type="submit" className="btn btn-primary p-2 bg-cyan-500 text-white rounded mt-2">Pagar</button>
          </div>
          <div className="text-right mt-4">
            <span className="text-xl font-bold">Total Inscripción: ${valorInscripcion} UYU</span>
          </div>
        </form>
      </Form>
    </div>
  );
}

export default Registration;
