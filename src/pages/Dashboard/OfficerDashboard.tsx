import StatsCard from "@/components/StatsCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, CheckCircle, Clock, AlertCircle } from "lucide-react";

const OfficerDashboard = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Officer Dashboard</h1>
        <p className="text-muted-foreground">Monitor and manage beneficiary applications</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total Applications"
          value="1,245"
          icon={Users}
          trend="+12% from last month"
          variant="primary"
        />
        <StatsCard
          title="Approved"
          value="892"
          icon={CheckCircle}
          trend="71.6% approval rate"
          variant="accent"
        />
        <StatsCard
          title="Pending Review"
          value="245"
          icon={Clock}
          variant="secondary"
        />
        <StatsCard
          title="Rejected"
          value="108"
          icon={AlertCircle}
        />
      </div>

      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Pending Applications</CardTitle>
          <CardDescription>Applications awaiting your review</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-muted rounded-lg">
                <div>
                  <p className="font-medium">Application #{1000 + i}</p>
                  <p className="text-sm text-muted-foreground">Submitted 2 days ago</p>
                </div>
                <div className="text-secondary font-medium">Review</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default OfficerDashboard;
