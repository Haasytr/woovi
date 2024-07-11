"use client";

import { InstallmentsProps } from "@/interfaces/installmentsInterface";
import { Check } from "lucide-react";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

interface PaymentCardProps extends InstallmentsProps {
  setSelectedInstallment: Dispatch<SetStateAction<number>>;
  selectedInstallment: number;
}

export function PaymentCard({
  amount,
  installments,
  promotions,
  total,
  selectedInstallment,
  setSelectedInstallment,
}: PaymentCardProps) {
  return (
    <Link href={`/${installments}`}>
      <div
        className={
          " border-zinc-300 border p-5 rounded-none relative space-y-2.5 first:rounded-lg first:mb-9"
        }
      >
        <span className="bg-gray-200 rounded-[100px] font-extraboldbold px-5 absolute top-[-10px]">
          {(installments == 1 && "Pix") ||
            (installments == 2 && "Pix Parcelado")}
        </span>
        <div className="flex justify-between align-middle">
          <p className="text-2xl text-zinc-600 flex gap-2">
            <b>{installments}x</b>
            {amount}
          </p>
          <button
            className={`flex align-middle justify-center rounded-full border border-gray-200 h-6 w-6 ${
              selectedInstallment == installments ? "bg-green" : ""
            }`}
            onClick={() => setSelectedInstallment(installments)}
          >
            {selectedInstallment == installments && (
              <Check className="h-full w-4 text-white" />
            )}
          </button>
        </div>

        {total && <p className="text-gray-600">Total: {total}</p>}

        {promotions.map(
          (promotion) =>
            promotion.type === "cashback" && (
              <p className="text-sm text-green" key={promotion.details}>
                Ganhe <b>{promotion.title}</b> de Cashback
              </p>
            )
        )}
        {promotions.map(
          (promotion) =>
            promotion.type === "bonus" && (
              <div
                key={promotion.details}
                className="p-2 bg-blue flex align-middle after:content-[''] rounded-md after:absolute after:right-[2%] after:bottom-[19%] after:bo after:rotate-45 after:bg-white after:w-6 after:h-6 bg-blue-600 text-white text-sm"
              >
                <p>
                  <b>{promotion.title}</b> {promotion.details}
                </p>
              </div>
            )
        )}
      </div>
    </Link>
  );
}
