import { cn } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";

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
    <section id={id} className={cn("py-12", className)}>
      <div className="container">
        <div className="flex flex-col gap-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
            <p className="text-muted-foreground">{description}</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {topics.map((topic) => (
              <Card key={topic.title} className="group hover:shadow-md transition-all">
                <CardHeader>
                  <CardTitle>{topic.title}</CardTitle>
                  <CardDescription>{topic.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex justify-end">
                  <Button variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground">
                    <BookOpen className="mr-2 h-4 w-4" />
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
