import { getInstallment } from "@/actions/getPayment";
import { getUser } from "@/actions/getUser";
import { Files } from "lucide-react";
import Image from "next/image";
import { redirect } from "next/navigation";
import { Installment } from "../../../../components/installments";
import Link from "next/link";

export default async function SelectedInstallmentPage({
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
    <div className="space-y-6">
      <h1 className="text-center font-extrabold text-2xl text-zinc-600 px-7">
        {user.name.split(" ")[0]}, pague a entrada de {installment?.amount} pelo
        Pix
      </h1>

      <div className="px-16 space-y-7 flex align-middle justify-center flex-col">
        <Image
          className="border rounded-lg border-green p-2.5"
          src="/qrcode.svg"
          alt="qrcode"
          width={333}
          height={333}
        />
        <button className="bg-blue font-semibold text-white rounded-md p-2 flex justify-center gap-2">
          Clique para copiar QR CODE <Files />
        </button>

        <button className="bg-slate-200 font-semibold rounded-md p-2 flex justify-center gap-2">
          <Link href={`/${installment.installments}/credit-card-pay`}>
            Proxíma página
          </Link>
        </button>
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
