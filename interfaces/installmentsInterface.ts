export interface PaymentCardProps {
    installments: number;
    amount: string;
    total: string;
    promotions: {
      type: string;
      title: string;
      details: string;
    }[];
}