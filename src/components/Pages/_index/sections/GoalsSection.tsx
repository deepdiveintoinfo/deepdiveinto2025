import { Shield, Search, Users, Book } from "lucide-react";

export const GoalsSection = () => (
  <section className="container bg-gray-50 rounded-lg shadow-lg p-8 mt-12">
    <h2 className="text-center text-3xl font-display font-bold tracking-tight text-primary mb-8">
      Goals of the Analysis
    </h2>
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
      <GoalItem
        title="Identify Risks and Implications"
        description="Analyze each chapter to uncover potential dangers, biases, and impacts on various communities."
        icon={Shield}
      />
      <GoalItem
        title="Simplify and Clarify Content"
        description="Break down complex language and concepts to make the document accessible and understandable for everyone."
        icon={Book}
      />
      <GoalItem
        title="Encourage Collaborative Analysis"
        description="Foster open, public discussions to gather diverse perspectives and critical insights into the document's proposals."
        icon={Users}
      />
      <GoalItem
        title="Prepare for Real-World Outcomes"
        description="Equip readers and communities with knowledge to anticipate and respond to the possible effects of these policies."
        icon={Search}
      />
    </ul>
  </section>
);

const GoalItem = ({
  title,
  description,
  icon: Icon,
}: {
  title: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}) => (
  <li className="bg-white rounded-lg shadow p-6 text-center border border-gray-200 hover:shadow-lg transition">
    <Icon className="h-8 w-8 text-primary mx-auto mb-4" />
    <h3 className="text-lg font-semibold text-foreground">{title}</h3>
    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{description}</p>
  </li>
);
