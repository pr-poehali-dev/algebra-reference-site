import { cn } from "@/lib/utils";

interface MathFormulaProps {
  formula: string;
  description?: string;
  className?: string;
}

const MathFormula = ({ formula, description, className }: MathFormulaProps) => {
  return (
    <div className={cn("flex flex-col items-center my-4 p-4 border rounded-md bg-secondary/50", className)}>
      <div className="text-xl font-mono text-center py-2">{formula}</div>
      {description && <p className="text-sm text-muted-foreground text-center">{description}</p>}
    </div>
  );
};

export default MathFormula;
