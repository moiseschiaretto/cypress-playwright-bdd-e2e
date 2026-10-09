// Massa de teste e regras do wizard, compartilhadas pelo Cypress e pelo Playwright.

// Formata uma data no padrão da aplicação: MM/DD/YYYY
function formatarData(data) {
  const mes = String(data.getMonth() + 1).padStart(2, '0');
  const dia = String(data.getDate()).padStart(2, '0');
  return `${mes}/${dia}/${data.getFullYear()}`;
}

// A aplicação exige "Start Date" pelo menos 1 mês no futuro.
// Por isso a data é calculada a cada execução, e não fixa no código.
function dataInicioSeguro() {
  const data = new Date();
  data.setMonth(data.getMonth() + 2);
  return formatarData(data);
}

// Quantidade de campos obrigatórios esperada no contador de cada aba
const camposObrigatorios = {
  enterVehicleData: '12',
  enterInsurantData: '7',
  enterProductData: '6',
  selectPriceOption: '1',
  sendQuote: '4',
  // Valor divergente de propósito: demonstra um cenário COM FALHA
  sendQuoteComFalha: '14',
};

const veiculo = {
  make: 'Volkswagen',
  model: 'Scooter',
  cylinderCapacity: '500',
  enginePerformance: '2000',
  dateOfManufacture: formatarData(new Date()),
  numberOfSeats: '7',
  numberOfSeatsMotorcycle: '2',
  fuel: 'Gas',
  payload: '1000',
  totalWeight: '50000',
  listPrice: '100000',
  licensePlateNumber: '100000',
  annualMileage: '100000',
};

const segurado = {
  firstName: 'Moises',
  lastName: 'Chiaretto',
  birthDate: '05/15/1990',
  streetAddress: 'Rua X',
  country: 'Brazil',
  zipCode: '123456',
  city: 'Curitiba',
  occupation: 'Employee',
  website: 'https://www.google.com',
};

const produto = {
  startDate: dataInicioSeguro(),
  insuranceSumTexto: '3.000.000,00',
  insuranceSumValor: '3000000',
  meritRating: 'Bonus 3',
  damageInsurance: 'Partial Coverage',
  courtesyCar: 'Yes',
};

const cotacao = {
  email: 'test@gmail.com',
  phone: '4199997777',
  username: 'MoisesChiaretto',
  password: 'Teste123',
  comments: 'Cliente Gold',
};

module.exports = {
  formatarData,
  camposObrigatorios,
  veiculo,
  segurado,
  produto,
  cotacao,
};
