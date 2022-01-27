import React, { useEffect } from 'react';

import styled, { createGlobalStyle } from 'styled-components';

// declare const MercadoPago:any|undefined;

// if(MercadoPago){
// const mp = new MercadoPago('TEST-1c3353f2-b6f9-4906-9d8f-0cf2eeec2b4d');

// const cardForm = mp.cardForm({
//   amount: "100.5",
//   autoMount: true,
//   form: {
//     id: "form-checkout",
//     cardholderName: {
//       id: "form-checkout__cardholderName",
//       placeholder: "Titular do cartão",
//     },
//     cardholderEmail: {
//       id: "form-checkout__cardholderEmail",
//       placeholder: "E-mail",
//     },
//     cardNumber: {
//       id: "form-checkout__cardNumber",
//       placeholder: "Número do cartão",
//     },
//     cardExpirationDate: {
//       id: "form-checkout__cardExpirationDate",
//       placeholder: "Data de vencimento (MM/YYYY)",
//     },
//     securityCode: {
//       id: "form-checkout__securityCode",
//       placeholder: "Código de segurança",
//     },
//     installments: {
//       id: "form-checkout__installments",
//       placeholder: "Parcelas",
//     },
//     identificationType: {
//       id: "form-checkout__identificationType",
//       placeholder: "Tipo de documento",
//     },
//     identificationNumber: {
//       id: "form-checkout__identificationNumber",
//       placeholder: "Número do documento",
//     },
//     issuer: {
//       id: "form-checkout__issuer",
//       placeholder: "Banco emissor",
//     },
//   },
//   callbacks: {
//     onFormMounted: (Error:any) => {
//       if (Error) return console.warn("Form Mounted handling error: ", Error);
//       console.log("Form mounted");
//     },
//     onSubmit: (event:React.FormEvent) => {
//       event.preventDefault();

//       const {
//         paymentMethodId: payment_method_id,
//         issuerId: issuer_id,
//         cardholderEmail: email,
//         amount,
//         token,
//         installments,
//         identificationNumber,
//         identificationType,
//       } = cardForm.getCardFormData();

//       fetch("/process_payment", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           token,
//           issuer_id,
//           payment_method_id,
//           transaction_amount: Number(amount),
//           installments: Number(installments),
//           description: "Descrição do produto",
//           payer: {
//             email,
//             identification: {
//               type: identificationType,
//               number: identificationNumber,
//             },
//           },
//         }),
//       });
//     },
//     onFetching: (resource:any) => {
//       console.log("Fetching resource: ", resource);

//     }
//   },
// });
// }
const GlobalStyle = createGlobalStyle`
 #form-checkout { width: 30%; display: flex; flex-direction:column; margin: 0 auto;
        input, select, button
            {
                width: 100%;
                min-height:40px;
                margin: 1%;
                border: solid 0.5px #ccc;
                border-radius: 5px; 
                padding-left: 20px;
            }
        } {
      display: block;
    }
`;
const Container = styled.div`

width: 40%;
margin: 0 auto;
display: flex;
flex-direction: column;
    

`;



export default function MercadoPagoComponent(){



    return (
        <>
            <Container>
            
            </Container>
        </>
    )
}