type PaymentProps ={
    payments: {
      options: {
        installments: number;
        amount: string;
        total: string;
        promotions: {
          type: string;
          title: string;
          details: string;
        }[];
      }[];
    };
  }

export async function getInstallments() {
    const response = await fetch("http://localhost:3000/api.json", {
        cache: "no-cache",
      });
      const { payments }: PaymentProps = await response.json();

      return payments
}

export async function getInstallment(installment: number) {
   const payments = getInstallments()

   const selectedInstallment = (await payments).options.find((payment) => payment.installments == installment)

   return selectedInstallment
}