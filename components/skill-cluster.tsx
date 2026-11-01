import { Badge } from "@/components/ui/badge";
import type { SkillCluster as SkillClusterType } from "@/content/skills";

type SkillClusterProps = {
  cluster: SkillClusterType;
  headingLevel?: "h3" | "h4";
};

export function SkillCluster({ cluster, headingLevel = "h3" }: SkillClusterProps) {
  const Heading = headingLevel;
  return (
    <div className="space-y-3">
      <Heading className="text-sm font-semibold">{cluster.title}</Heading>
      <ul className="flex flex-wrap gap-2">
        {cluster.skills.map((skill) => (
          <li key={skill}>
            <Badge
              variant="secondary"
              className="h-auto rounded-full px-2.5 py-1 font-normal whitespace-normal"
            >
              {skill}
            </Badge>
          </li>
        ))}
      </ul>
    </div>
  );
}
