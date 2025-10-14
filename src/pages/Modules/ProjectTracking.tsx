import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const ProjectTracking = () => {
  const projects = [
    {
      id: "PRJ001",
      name: "Healthcare Infrastructure Development",
      status: "In Progress",
      progress: 65,
      startDate: "Jan 2024",
      endDate: "Dec 2024",
    },
    {
      id: "PRJ002",
      name: "Rural Health Awareness Campaign",
      status: "Completed",
      progress: 100,
      startDate: "Oct 2023",
      endDate: "Mar 2024",
    },
    {
      id: "PRJ003",
      name: "Medical Equipment Procurement",
      status: "In Progress",
      progress: 40,
      startDate: "Feb 2024",
      endDate: "Aug 2024",
    },
    {
      id: "PRJ004",
      name: "Telemedicine Service Rollout",
      status: "Pending",
      progress: 15,
      startDate: "Mar 2024",
      endDate: "Sep 2024",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-accent text-accent-foreground";
      case "In Progress":
        return "bg-primary text-primary-foreground";
      case "Pending":
        return "bg-secondary text-secondary-foreground";
      default:
        return "bg-muted";
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Project Tracking</h1>
        <p className="text-muted-foreground">Monitor ongoing and completed projects</p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {projects.map((project) => (
          <Card key={project.id} className="shadow-card">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle>{project.name}</CardTitle>
                  <CardDescription className="mt-1">
                    Project ID: {project.id} • {project.startDate} - {project.endDate}
                  </CardDescription>
                </div>
                <Badge className={getStatusColor(project.status)}>{project.status}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Progress</span>
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
