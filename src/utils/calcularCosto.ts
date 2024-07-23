// src/utils/calcularCosto.ts
export const calcularCosto = (referenteDiocesis: string = "", personasDiocesis: string[] = []) => {
  const hoy = new Date();
  const esDespuesDeAgosto = hoy >= new Date(hoy.getFullYear(), 7, 16);
  const precioAlto = esDespuesDeAgosto ? 800 : 600;
  const precioBajo = esDespuesDeAgosto ? 500 : 400;

  const esAlto = (diocesis: string) => !["Diócesis de Melo", "Diócesis de Salto", "Diócesis de Tacuarembó"].includes(diocesis);

  const costoReferente = referenteDiocesis && esAlto(referenteDiocesis) ? precioAlto : (referenteDiocesis ? precioBajo : 0);
  console.log(`Costo referente: ${costoReferente}`);

  const costoPersonas = personasDiocesis.reduce((total: number, diocesis: string) => {
    const costo = diocesis && esAlto(diocesis) ? precioAlto : (diocesis ? precioBajo : 0);
    console.log(`Costo persona (${diocesis}): ${costo}`);
    return total + costo;
  }, 0);

  const total = costoReferente + costoPersonas;
  console.log(`Costo total: ${total}`);
  
  const totalPersonas = 1 + personasDiocesis.length;
  console.log(`Total personas: ${totalPersonas}`);

  return { total, totalPersonas };
};
