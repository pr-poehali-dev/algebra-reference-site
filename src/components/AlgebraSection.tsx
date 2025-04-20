
interface AlgebraSectionProps {
  title: string;
  description: string;
  id: string;
  topics: AlgebraTopic[];
}

interface AlgebraTopic {
  title: string;
  description: string;
}

const AlgebraSection = ({
  title,
  description,
  id,
  topics,
}: AlgebraSectionProps) => {
  return (
    <section id={id} className="py-6">
      <div className="container">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic) => (
            <div key={topic.title} className="border p-3 rounded">
              <h3 className="font-medium mb-1">{topic.title}</h3>
              <p className="text-sm text-gray-600">{topic.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AlgebraSection;
