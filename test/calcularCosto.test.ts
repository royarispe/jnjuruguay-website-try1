// test/calcularCosto.test.ts
import { calcularCosto } from '@/utils/calcularCosto';

describe('calcularCosto', () => {
  const calcularCostoWrapper = (referenteDiocesis: string, personasDiocesis: string[], mockDate: Date) => {
    // Mockeamos la fecha actual usando Jest
    jest
      .spyOn(global, 'Date')
      .mockImplementation(() => mockDate);

    // Llamamos a la función calcularCosto
    return calcularCosto(referenteDiocesis, personasDiocesis);
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  // Caso 1: Costo más bajo antes del 15 de agosto
  it('debería cobrar el costo más bajo antes del 15 de agosto', () => {
    const dateBeforeAugust15 = new Date('2024-08-14');
    const referenteDiocesis = "Diócesis de Montevideo"; // Diocesis de alto costo
    const personasDiocesis = ["Diócesis de Florida", "Diócesis de Melo"]; // Una diocesis de alto costo y una de bajo costo
    const { total } = calcularCostoWrapper(referenteDiocesis, personasDiocesis, dateBeforeAugust15);

    const expectedLowCostValue = 600 + 600 + 400;
    expect(total).toBe(expectedLowCostValue);
  });

  // Caso 2: Costo más bajo el 15 de agosto
  it('debería cobrar el costo más bajo el 15 de agosto', () => {
    const dateOnAugust15 = new Date('2024-08-15');
    const referenteDiocesis = "Diócesis de Montevideo"; // Diocesis de alto costo
    const personasDiocesis = ["Diócesis de Florida", "Diócesis de Melo"]; // Una diocesis de alto costo y una de bajo costo
    const { total } = calcularCostoWrapper(referenteDiocesis, personasDiocesis, dateOnAugust15);

    const expectedLowCostValue = 600 + 600 + 400;
    expect(total).toBe(expectedLowCostValue);
  });

  // Caso 3: Costo más alto el 16 de agosto
  it('debería cobrar el costo más alto el 16 de agosto', () => {
    const dateOnAugust16 = new Date('2024-08-16');
    const referenteDiocesis = "Diócesis de Montevideo"; // Diocesis de alto costo
    const personasDiocesis = ["Diócesis de Florida", "Diócesis de Melo"]; // Una diocesis de alto costo y una de bajo costo
    const { total } = calcularCostoWrapper(referenteDiocesis, personasDiocesis, dateOnAugust16);

    const expectedHighCostValue = 800 + 800 + 500;
    expect(total).toBe(expectedHighCostValue);
  });

  // Caso 4: Costo más alto después del 16 de agosto
  it('debería cobrar el costo más alto después del 16 de agosto', () => {
    const dateAfterAugust16 = new Date('2024-08-17');
    const referenteDiocesis = "Diócesis de Montevideo"; // Diocesis de alto costo
    const personasDiocesis = ["Diócesis de Florida", "Diócesis de Melo"]; // Una diocesis de alto costo y una de bajo costo
    const { total } = calcularCostoWrapper(referenteDiocesis, personasDiocesis, dateAfterAugust16);

    const expectedHighCostValue = 800 + 800 + 500;
    expect(total).toBe(expectedHighCostValue);
  });
});
