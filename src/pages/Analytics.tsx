import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import StatsCard from "@/components/StatsCard";
import { Users, TrendingUp, DollarSign, FolderKanban } from "lucide-react";

const Analytics = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Analytics & Insights</h1>
        <p className="text-muted-foreground">Data-driven insights for better decision making</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total Beneficiaries"
          value="10.5L"
          icon={Users}
          trend="+15% this quarter"
          variant="primary"
        />
        <StatsCard
          title="Active Projects"
          value="524"
          icon={FolderKanban}
          trend="+8% this month"
          variant="secondary"
        />
        <StatsCard
          title="Funds Allocated"
          value="₹250Cr"
          icon={DollarSign}
          trend="85% utilized"
          variant="accent"
        />
        <StatsCard
          title="Growth Rate"
          value="+24%"
          icon={TrendingUp}
          trend="Year over year"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Monthly Enrollment Trend</CardTitle>
            <CardDescription>Beneficiary registrations over time</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-end justify-between gap-2">
              {[65, 80, 75, 90, 85, 95, 100, 88, 92, 98, 105, 110].map((height, index) => (
                <div
                  key={index}
                  className="flex-1 bg-gradient-primary rounded-t-lg transition-all hover:opacity-80 cursor-pointer"
                  style={{ height: `${height}%` }}
                  title={`Month ${index + 1}: ${(height * 100).toFixed(0)} registrations`}
                />
              ))}
            </div>
            <div className="flex justify-between mt-4 text-xs text-muted-foreground">
              <span>Jan</span>
              <span>Apr</span>
              <span>Jul</span>
              <span>Oct</span>
              <span>Dec</span>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Category Distribution</CardTitle>
            <CardDescription>Projects by category</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { category: "Healthcare", value: 35, color: "bg-primary" },
                { category: "Infrastructure", value: 28, color: "bg-secondary" },
                { category: "Training", value: 22, color: "bg-accent" },
                { category: "Awareness", value: 15, color: "bg-muted-foreground" },
              ].map((item) => (
                <div key={item.category} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">{item.category}</span>
                    <span className="text-muted-foreground">{item.value}%</span>
                  </div>
                  <div className="h-3 bg-muted rounded-full overflow-hidden">
                    <div
                      className={`h-full ${item.color} transition-all duration-500`}
                      style={{ width: `${item.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card lg:col-span-2">
          <CardHeader>
            <CardTitle>State-wise Performance</CardTitle>
            <CardDescription>Top performing states by beneficiary count</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { state: "Maharashtra", count: "2.5L", percentage: 95 },
                { state: "Karnataka", count: "2.1L", percentage: 88 },
                { state: "Tamil Nadu", count: "1.8L", percentage: 82 },
                { state: "Gujarat", count: "1.5L", percentage: 75 },
                { state: "Uttar Pradesh", count: "1.2L", percentage: 68 },
                { state: "Rajasthan", count: "1.4L", percentage: 72 },
              ].map((item) => (
                <div key={item.state} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">{item.state}</span>
                    <span className="text-primary font-bold">{item.count}</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-primary"
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Analytics;
