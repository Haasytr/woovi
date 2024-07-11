"use client";
import { useEffect, useState } from "react";
import { PaymentCard } from "./paymentCard";
import { cookies } from "next/headers";

interface PaymentListProps {
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
}

export function PaymentList({ options }: PaymentListProps) {
  const [selectedInstallment, setSelectedInstallment] = useState<number>(1);

  return (
    <div className="p-4">
      {options.map((paymentOption) => (
        <PaymentCard
          key={paymentOption.installments}
          amount={paymentOption.amount}
          installments={paymentOption.installments}
          promotions={paymentOption.promotions}
          total={paymentOption.total}
          selectedInstallment={selectedInstallment}
          setSelectedInstallment={setSelectedInstallment}
        />
      ))}
    </div>
  );
}
