import { PaymentList } from "./_components/paymentList";
import { getInstallments } from "@/actions/getPayment";
import { getUser } from "@/actions/getUser";

export default async function Home() {
  const payments = await getInstallments();

  const user = await getUser();

  return (
    <main className="space-y-6">
      <h1 className="text-center font-extrabold text-2xl text-zinc-600 ">
        {user.name}, como você quer pagar?
      </h1>

      <div className="p-4">
        <PaymentList options={payments.options} />
      </div>
    </main>
  );
}
