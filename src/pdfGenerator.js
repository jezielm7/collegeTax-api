const pdf = require('html-pdf');

const content = `

<h1 style="text-align: center; font-family: sans-serif">Declaração</h1>

<p style="font-family: sans-serif">
  Disponibilizamos o valor total pago referente às semestralidades 
  do exercício de 2019, desta Instituição de Ensino Superior, que poderá ser 
  utilizado como comprovante para Declaração de Imposto de Renda de 2020.  
</p>

<table style="margin-left: 10px; font-family: sans-serif">
  <tr>
    <td>Responsável: </td>
    <td>Pai</td>
  </tr>

  <tr>
    <td>Nº do CPF: </td>
    <td>111.111.111-11</td>
  </tr>

  <tr>
    <td>Aluno: </td>
    <td>Luis Henrique</td>
  </tr>

  <tr>
    <td>Matrícula: </td>
    <td>482938</td>
  </tr>

  <tr>
    <td>Curso: </td>
    <td>Desenvolvimento de Software</td>
  </tr>

  <tr>
    <td>Valor pago: </td>
    <td>R$ 17.367,63</td>
  </tr>

  <tr>
    <td>CNPJ: </td>
    <td>99.999.999/9999-99</td>
  </tr>

  <tr>
    <td>INSTITUIÇÃO: </td>
    <td>Universidade de Caruaru</td>
  </tr>
</table>

<p style="text-align: center; font-family: sans-serif">Caruaru, 05 de junho</p>

`;

pdf.create(content, {}).toFile('./imposto-universitario.pdf', (err, res) => {
  if (err) {
    console.log("error: file not found!");
  } else {
    console.log(res);
  }
})