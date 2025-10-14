import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface StatsCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  trend?: string;
  variant?: "default" | "primary" | "secondary" | "accent";
}

const StatsCard = ({ title, value, icon: Icon, trend, variant = "default" }: StatsCardProps) => {
  const variantClasses = {
    default: "bg-card",
    primary: "bg-gradient-primary text-primary-foreground",
    secondary: "bg-gradient-secondary text-secondary-foreground",
    accent: "bg-accent text-accent-foreground",
  };

  return (
    <Card className={`${variantClasses[variant]} shadow-card hover:shadow-elegant transition-shadow duration-300`}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className={`text-sm font-medium ${variant === "default" ? "text-muted-foreground" : "opacity-90"}`}>
              {title}
            </p>
            <h3 className="text-2xl font-bold mt-2">{value}</h3>
            {trend && (
              <p className={`text-xs mt-1 ${variant === "default" ? "text-muted-foreground" : "opacity-75"}`}>
                {trend}
              </p>
            )}
          </div>
          <div className={`p-3 rounded-lg ${variant === "default" ? "bg-muted" : "bg-white/20"}`}>
            <Icon className="h-6 w-6" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatsCard;
