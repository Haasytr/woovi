import { getInstallment } from "@/actions/getPayment";
import { getUser } from "@/actions/getUser";
import { Installment } from "@/components/installments";
import { redirect } from "next/navigation";

export default async function CreditCardPayPage({
  params,
}: {
  params: { selectedInstallment: string };
}) {
  const user = await getUser();

  if (!params.selectedInstallment) {
    redirect("/");
  }

  const installment = await getInstallment(Number(params.selectedInstallment));

  if (!installment) {
    return;
  }
  return (
    <div>
      <div className="space-y-6">
        <h1 className="text-center font-extrabold text-2xl text-zinc-800 px-7">
          {user.name.split(" ")[0]}, pague o restante em
          {installment.installments - 1}x no cartão
        </h1>
        <form className="px-6 py-4 space-y-7">
          <div
            className={
              " border-zinc-300 border p-3 relative space-y-2.5 rounded-lg mb-9"
            }
          >
            <label className="text-gray-800 bg-white text-sm font-semibold absolute top-[-15%]">
              Nome completo
            </label>
            <input
              className="w-full h-fu focus:outline-none block"
              type="text"
              placeholder={user.name}
            />
          </div>
          <div
            className={
              " border-zinc-300 border p-3 relative space-y-2.5 rounded-lg mb-9"
            }
          >
            <label className="text-gray-800 bg-white text-sm font-semibold absolute top-[-15%]">
              CPF
            </label>
            <input
              className="w-full h-fu focus:outline-none block"
              type="text"
              placeholder={user.cpf}
            />
          </div>
          <div
            className={
              " border-zinc-300 border p-3 relative space-y-2.5 rounded-lg mb-9"
            }
          >
            <label className="text-gray-800 bg-white text-sm font-semibold absolute top-[-15%]">
              Número do cartão
            </label>
            <input
              className="w-full h-fu focus:outline-none block"
              type="text"
              placeholder={user.card_number}
            />
          </div>
          <div className="flex space-x-5">
            <div
              className={
                " border-zinc-300 border p-3 relative space-y-2.5 rounded-lg mb-9"
              }
            >
              <label className="text-gray-800 bg-white text-sm font-semibold absolute top-[-15%]">
                Vencimento
              </label>
              <input
                className="w-full h-fu focus:outline-none block"
                type="text"
                placeholder={user.card_expiration}
              />
            </div>
            <div
              className={
                " border-zinc-300 border p-3 relative space-y-2.5 rounded-lg mb-9"
              }
            >
              <label className="text-gray-800 bg-white text-sm font-semibold absolute top-[-15%]">
                CVV
              </label>
              <input
                className="w-full h-fu focus:outline-none block"
                type="number"
                placeholder={user.CVV.toString()}
              />
            </div>
          </div>
          <div
            className={
              " border-zinc-300 border p-3 mt-0 relative space-y-2.5 rounded-lg"
            }
          >
            <label className="text-gray-800 bg-white text-sm font-semibold absolute top-[-15%]">
              Parcelas
            </label>
            <select className="w-full focus:outline-none block bg-white">
              <option value={installment.amount}>
                {installment.installments - 1}x de {installment.amount}
              </option>
            </select>
          </div>

          <button className="bg-blue font-semibold w-full text-white rounded-md p-2 flex justify-center gap-2">
            Pagar
          </button>
        </form>
      </div>
      <Installment
        total={installment.total}
        promotions={installment.promotions}
        amount={installment.amount}
        installments={installment.installments}
      />
    </div>
  );
}
