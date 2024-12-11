import { ScrollArea, ScrollBar } from "@/components/ThirdParty/ShadCn/ScrollArea";
import Badge from "@/components/ThirdParty/ShadCn/Badge";

interface KeywordsBadgesProps {
    keywords: string[];
    size?: "sm" | "md" | "lg" | null | undefined;
  }

export const KeywordBadges: React.FC<KeywordsBadgesProps> = ({ keywords, ...props }) => {
    return (
      <ScrollArea className="whitespace-nowrap sm:whitespace-normal max-w-md sm:max-w-full">
        <div className="flex gap-2">
          {keywords.map((keyword) => (
            <Badge
              key={keyword}
              className="font-medium bg-accent text-accent-foreground hover:bg-accent/80"
              {...props}
            >
              {keyword}
            </Badge>
          ))}
        </div>
        <ScrollBar orientation='horizontal'/>
      </ScrollArea>
    );
  };

export default KeywordBadges;