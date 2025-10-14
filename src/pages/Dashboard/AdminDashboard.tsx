import StatsCard from "@/components/StatsCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, DollarSign, FolderKanban, TrendingUp } from "lucide-react";

const AdminDashboard = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <p className="text-muted-foreground">Complete system overview and analytics</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total Beneficiaries"
          value="10.5L"
          icon={Users}
          trend="+15% growth"
          variant="primary"
        />
        <StatsCard
          title="Total Funds Disbursed"
          value="₹250Cr"
          icon={DollarSign}
          trend="85% utilization"
          variant="accent"
        />
        <StatsCard
          title="Active Projects"
          value="524"
          icon={FolderKanban}
          variant="secondary"
        />
        <StatsCard
          title="System Growth"
          value="+24%"
          icon={TrendingUp}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Regional Distribution</CardTitle>
            <CardDescription>Beneficiaries across regions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {["North", "South", "East", "West"].map((region, index) => (
                <div key={region} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>{region}</span>
                    <span className="font-medium">{25 - index * 5}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-primary"
                      style={{ width: `${25 - index * 5}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>System Health</CardTitle>
            <CardDescription>Platform performance metrics</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
              <span className="text-sm">Server Uptime</span>
              <span className="font-bold text-accent">99.9%</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
              <span className="text-sm">Active Users (24h)</span>
              <span className="font-bold text-primary">12,458</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
              <span className="text-sm">Avg Response Time</span>
              <span className="font-bold text-secondary">1.2s</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
