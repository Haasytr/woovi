import { InstallmentsProps } from "@/interfaces/installmentsInterface";
import { ChevronUp, Circle } from "lucide-react";

export function Installment({
  amount,
  installments,
  promotions,
  total,
}: InstallmentsProps) {
  let count = 0;

  return (
    <div className="space-y-4">
      <div className="flex flex-col text-center">
        <span className="text-gray-600">Prazo de entrega:</span>
        <b className="font-bold text-gray-800">15/12/2021 - 08:17</b>
      </div>

      <div className="border-b-2 b-gray-600 space-y-4 p-5">
        {[...Array(installments)].map((_, index) => {
          count++;
          return (
            <div key={count} className="flex px-5 ">
              <div className="flex items-center justify-center space-x-1.5">
                <Circle
                  height="16"
                  width="16"
                  color={count == 1 ? "#03D69D" : "#E5E5E5"}
                />
                <p className="font-semibold">{count}ª entrada no Pix</p>
              </div>
              <b className="ml-auto text-gray-800">{amount}</b>
            </div>
          );
        })}
      </div>

      <div className="flex px-5 py-4 border-b-2 b-gray-600">
        <p className="font-semibold">CET: 0,5%</p>

        <b className="ml-auto text-gray-800 text-lg">Total: {total}</b>
      </div>

      <div className="flex px-5 py-4 border-b-2 b-gray-600 justify-between">
        <b className="text-gray-800">Como funciona?</b>

        <ChevronUp />
      </div>

      <div className="flex flex-col text-center">
        <span className="text-gray-600">Identificador</span>
        <b className="font-bold text-gray-800">
          2c1b951f356c4680b13ba1c9fc889c47
        </b>
      </div>
    </div>
  );
}
