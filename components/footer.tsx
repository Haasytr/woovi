import { ShieldCheck } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <div className="flex items-center justify-center text-gray-600 p-10">
      <ShieldCheck />
      <p>Pagamento 100% seguro via:</p>
      <Image
        src="/logo-secondary.svg"
        width={57}
        height={17}
        alt="logo woovi"
      />
    </div>
  );
}
