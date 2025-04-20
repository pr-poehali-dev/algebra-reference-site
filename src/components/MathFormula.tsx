
interface MathFormulaProps {
  name: string;
  formula: string;
  description?: string;
}

const MathFormula = ({ name, formula, description }: MathFormulaProps) => {
  return (
    <div className="p-3 border rounded-md">
      <div className="font-medium">{name}</div>
      <div className="my-2 bg-gray-50 p-2 rounded text-center">
        <code className="font-mono">{formula}</code>
      </div>
      {description && <p className="text-sm text-gray-600">{description}</p>}
    </div>
  );
};

export default MathFormula;
