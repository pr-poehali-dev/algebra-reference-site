
import { cn } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface AlgebraSectionProps {
  title: string;
  description: string;
  id: string;
  topics: AlgebraTopic[];
  className?: string;
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
  className,
}: AlgebraSectionProps) => {
  return (
    <section id={id} className={cn("py-8", className)}>
      <div className="container">
        <div className="flex flex-col gap-4">
          <div className="space-y-1">
            <h2 className="text-2xl font-semibold">{title}</h2>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {topics.map((topic) => (
              <Card key={topic.title} className="hover:shadow-sm transition-all">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">{topic.title}</CardTitle>
                  <CardDescription className="text-xs">{topic.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex justify-end pt-0">
                  <Button variant="ghost" size="sm" className="text-xs">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlgebraSection;
