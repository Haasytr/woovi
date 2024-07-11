import Image from "next/image";

export function Header() {
  return (
    <div className="w-full py-9 flex align-middle justify-center">
      <Image src="/logo.svg" alt="Wooxi" width={123} height={36} />
    </div>
  );
}
