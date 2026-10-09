// Seletores da aplicação testada (Tricentis Sample App — Vehicle Insurance).
// Arquivo único, compartilhado pelo Cypress e pelo Playwright.
// Regra: só seletores CSS estáveis (id ou classe) — nada de XPath absoluto.

const URL_APP = 'https://sampleapp.tricentis.com/101/app.php';

const comum = {
  tituloDaPagina: '#app_sub_title',
  textoTituloDaPagina: 'Vehicle Insurance Application',
};

// Cada aba do wizard tem um contador de campos obrigatórios pendentes.
// Quando todos estão preenchidos, o contador mostra "0" e recebe a classe "zero".
const abas = {
  enterVehicleData: { aba: '#entervehicledata', contador: '#entervehicledata .counter' },
  enterInsurantData: { aba: '#enterinsurantdata', contador: '#enterinsurantdata .counter' },
  enterProductData: { aba: '#enterproductdata', contador: '#enterproductdata .counter' },
  selectPriceOption: { aba: '#selectpriceoption', contador: '#selectpriceoption .counter' },
  sendQuote: { aba: '#sendquote', contador: '#sendquote .counter' },
};

const enterVehicleData = {
  make: '#make',
  model: '#model',
  cylinderCapacity: '#cylindercapacity',
  enginePerformance: '#engineperformance',
  dateOfManufacture: '#dateofmanufacture',
  numberOfSeats: '#numberofseats',
  rightHandDriveYes: '#righthanddriveyes',
  numberOfSeatsMotorcycle: '#numberofseatsmotorcycle',
  fuel: '#fuel',
  payload: '#payload',
  totalWeight: '#totalweight',
  listPrice: '#listprice',
  licensePlateNumber: '#licenseplatenumber',
  annualMileage: '#annualmileage',
};

const enterInsurantData = {
  firstName: '#firstname',
  lastName: '#lastname',
  birthDate: '#birthdate',
  genderMale: '#gendermale',
  streetAddress: '#streetaddress',
  country: '#country',
  zipCode: '#zipcode',
  city: '#city',
  occupation: '#occupation',
  hobbyOther: '#other',
  website: '#website',
};

const enterProductData = {
  startDate: '#startdate',
  insuranceSum: '#insurancesum',
  meritRating: '#meritrating',
  damageInsurance: '#damageinsurance',
  legalDefenseInsurance: '#LegalDefenseInsurance',
  courtesyCar: '#courtesycar',
};

const selectPriceOption = {
  gold: '#selectgold',
};

const sendQuote = {
  email: '#email',
  phone: '#phone',
  username: '#username',
  password: '#password',
  confirmPassword: '#confirmpassword',
  comments: '#Comments',
  botaoSend: '#sendemail',
  mensagemAlerta: '.sweet-alert h2',
  textoMensagemSucesso: 'Sending e-mail success!',
  botaoOkAlerta: '.sweet-alert button.confirm',
};

module.exports = {
  URL_APP,
  comum,
  abas,
  enterVehicleData,
  enterInsurantData,
  enterProductData,
  selectPriceOption,
  sendQuote,
};
