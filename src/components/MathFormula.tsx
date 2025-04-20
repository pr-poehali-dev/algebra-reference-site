
import { cn } from "@/lib/utils";

interface MathFormulaProps {
  name: string;
  formula: string;
  description?: string;
  className?: string;
}

const MathFormula = ({ name, formula, description, className }: MathFormulaProps) => {
  return (
    <div className={cn("p-3 border rounded-md bg-accent/30", className)}>
      <div className="text-sm font-medium">{name}</div>
      <div className="mt-1 p-2 bg-background rounded flex items-center justify-center">
        <code className="text-base font-mono">{formula}</code>
      </div>
      {description && (
        <p className="mt-2 text-xs text-muted-foreground">{description}</p>
      )}
    </div>
  );
};

export default MathFormula;
