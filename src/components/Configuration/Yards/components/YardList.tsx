import YardCard from './YardCard.tsx'
import { Yard } from "@/types/yard";

interface YardListProps {
  yards: Yard[];
}

export function YardList({ yards }: YardListProps) {
  return (
    <div className="mt-4">
      {yards.map((yard) => (
        <YardCard key={yard.id} yard={yard} />
      ))}
    </div>
  );
}

