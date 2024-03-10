import { ArrowRight } from "lucide-react";
import { localJakarta } from "@/lib/font";

type Props = {
  children: React.ReactNode;
};

export default function Button({ children }: Props) {
  return (
    <button
      className={`font-jakarta flex items-center font-semibold gap-1 hover:bg-prime bg-prime/80 transition-all px-4 py-3 rounded-md`}
    >
      <span className="text-sm">{children}</span>
    </button>
  );
}
