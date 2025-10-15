import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useTranslation } from "react-i18next";

const ProjectTracking = () => {
  const { t } = useTranslation();

  const projects = [
    {
      id: "PRJ001",
      name: t("modules.projectTracking.projects.healthcare.name"),
      status: t("modules.projectTracking.status.inProgress"),
      progress: 65,
      startDate: t("modules.projectTracking.months.jan") + " 2024",
      endDate: t("modules.projectTracking.months.dec") + " 2024",
    },
    {
      id: "PRJ002",
      name: t("modules.projectTracking.projects.healthAwareness.name"),
      status: t("modules.projectTracking.status.completed"),
      progress: 100,
      startDate: t("modules.projectTracking.months.oct") + " 2023",
      endDate: t("modules.projectTracking.months.mar") + " 2024",
    },
    {
      id: "PRJ003",
      name: t("modules.projectTracking.projects.medicalEquipment.name"),
      status: t("modules.projectTracking.status.inProgress"),
      progress: 40,
      startDate: t("modules.projectTracking.months.feb") + " 2024",
      endDate: t("modules.projectTracking.months.aug") + " 2024",
    },
    {
      id: "PRJ004",
      name: t("modules.projectTracking.projects.telemedicine.name"),
      status: t("modules.projectTracking.status.pending"),
      progress: 15,
      startDate: t("modules.projectTracking.months.mar") + " 2024",
      endDate: t("modules.projectTracking.months.sep") + " 2024",
    },
  ];

  const getStatusColor = (status: string) => {
    if (status === t("modules.projectTracking.status.completed")) {
      return "bg-accent text-accent-foreground";
    } else if (status === t("modules.projectTracking.status.inProgress")) {
      return "bg-primary text-primary-foreground";
    } else if (status === t("modules.projectTracking.status.pending")) {
      return "bg-secondary text-secondary-foreground";
    } else {
      return "bg-muted";
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">
          {t("modules.projectTracking.title")}
        </h1>
        <p className="text-muted-foreground">
          {t("modules.projectTracking.description")}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {projects.map((project) => (
          <Card key={project.id} className="shadow-card">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle>{project.name}</CardTitle>
                  <CardDescription className="mt-1">
                    {t("modules.projectTracking.projectId")}: {project.id} •{" "}
                    {project.startDate} - {project.endDate}
                  </CardDescription>
                </div>
                <Badge className={getStatusColor(project.status)}>
                  {project.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">
                    {t("modules.projectTracking.progress")}
                  </span>
                  <span className="font-medium">{project.progress}%</span>
                </div>
                <Progress value={project.progress} className="h-2" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProjectTracking;
