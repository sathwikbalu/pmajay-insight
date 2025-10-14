import StatsCard from "@/components/StatsCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, FolderKanban, DollarSign, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const BeneficiaryDashboard = () => {
  const recentActivities = [
    { title: "Application Submitted", date: "2 hours ago", status: "Pending" },
    { title: "Document Verification", date: "1 day ago", status: "Completed" },
    { title: "Skill Training Enrolled", date: "3 days ago", status: "In Progress" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Beneficiary Dashboard</h1>
        <p className="text-muted-foreground">Welcome back! Here's your overview</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Active Applications"
          value="2"
          icon={FolderKanban}
          variant="primary"
        />
        <StatsCard
          title="Completed Training"
          value="3"
          icon={GraduationCap}
          variant="secondary"
        />
        <StatsCard
          title="Funds Received"
          value="₹45,000"
          icon={DollarSign}
          variant="accent"
        />
        <StatsCard
          title="Pending Actions"
          value="1"
          icon={Users}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Recent Activities</CardTitle>
            <CardDescription>Your latest interactions with the system</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <div>
                  <p className="font-medium">{activity.title}</p>
                  <p className="text-sm text-muted-foreground">{activity.date}</p>
                </div>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  activity.status === "Completed" ? "bg-accent text-accent-foreground" :
                  activity.status === "In Progress" ? "bg-secondary text-secondary-foreground" :
                  "bg-muted-foreground/20"
                }`}>
                  {activity.status}
                </span>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Commonly used features</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button asChild className="w-full justify-start" variant="outline">
              <Link to="/modules/beneficiary-form">
                <FolderKanban className="mr-2 h-4 w-4" />
                New Application
              </Link>
            </Button>
            <Button asChild className="w-full justify-start" variant="outline">
              <Link to="/modules/skill-training">
                <GraduationCap className="mr-2 h-4 w-4" />
                Enroll in Training
              </Link>
            </Button>
            <Button asChild className="w-full justify-start" variant="outline">
              <Link to="/modules/grievance">
                Raise Grievance
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BeneficiaryDashboard;
