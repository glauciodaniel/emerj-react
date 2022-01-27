import React, {useEffect} from 'react';

// importando um js dentro de um TypeScript
//estruturas diferentes.

declare const MercadoPago: any;

const mp = new MercadoPago('TEST-917a663f-ffe1-411b-9e1c-73ec764f1db8');

const cardForm = mp.cardForm({
  amount: "100.5",
  autoMount: true,
  form: {
    id: "form-checkout",
    cardholderName: {
      id: "form-checkout__cardholderName",
      placeholder: "Titular do cartão",
    },
    cardholderEmail: {
      id: "form-checkout__cardholderEmail",
      placeholder: "E-mail",
    },
    cardNumber: {
      id: "form-checkout__cardNumber",
      placeholder: "Número do cartão",
    },
    cardExpirationDate: {
      id: "form-checkout__cardExpirationDate",
      placeholder: "Data de vencimento (MM/YYYY)",
    },
    securityCode: {
      id: "form-checkout__securityCode",
      placeholder: "Código de segurança",
    },
    installments: {
      id: "form-checkout__installments",
      placeholder: "Parcelas",
    },
    identificationType: {
      id: "form-checkout__identificationType",
      placeholder: "Tipo de documento",
    },
    identificationNumber: {
      id: "form-checkout__identificationNumber",
      placeholder: "Número do documento",
    },
    issuer: {
      id: "form-checkout__issuer",
      placeholder: "Banco emissor",
    },
  },
  callbacks: {
    onFormMounted: (Error:any) => {
      if (Error) return console.warn("Form Mounted handling error: ", Error);
      console.log("Form mounted");
    },
    onSubmit: (event: React.FormEvent) => {
      event.preventDefault();

      const {
        paymentMethodId: payment_method_id,
        issuerId: issuer_id,
        cardholderEmail: email,
        amount,
        token,
        installments,
        identificationNumber,
        identificationType,
      } = cardForm.getCardFormData();

      fetch("/process_payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token,
          issuer_id,
          payment_method_id,
          transaction_amount: Number(amount),
          installments: Number(installments),
          description: "Descrição do produto",
          payer: {
            email,
            identification: {
              type: identificationType,
              number: identificationNumber,
            },
          },
        }),
      });
    },
    onFetching: (resource: any) => {
      console.log("Fetching resource: ", resource);

    
    //   const progressBar = document.querySelector(".progress-bar");
    //   progressBar.removeAttribute("value");

    //   return () => {
    //     progressBar.setAttribute("value", "0");
    //   };
    }
  },
});


export default function MercadoPagoCheckout(){

    //  useEffect(() =>{
    //         const script = document.createElement('script');
    //         script.src = 'https://sdk.mercadopago.com/js/v2';
    //         //script.async = true;
    //         document.body.appendChild(script);
    //  },[]);
    return (
        <>
            
        </>

    )
}