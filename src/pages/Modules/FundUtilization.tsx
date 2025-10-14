import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import StatsCard from "@/components/StatsCard";
import { DollarSign, TrendingUp, TrendingDown, Wallet } from "lucide-react";

const FundUtilization = () => {
  const transactions = [
    {
      id: "TXN001",
      description: "Medical Equipment Purchase",
      amount: "₹12,50,000",
      date: "15 Mar 2024",
      category: "Infrastructure",
      status: "Completed",
    },
    {
      id: "TXN002",
      description: "Staff Training Program",
      amount: "₹3,75,000",
      date: "10 Mar 2024",
      category: "Training",
      status: "Completed",
    },
    {
      id: "TXN003",
      description: "Medicine Procurement",
      amount: "₹8,20,000",
      date: "5 Mar 2024",
      category: "Healthcare",
      status: "In Progress",
    },
    {
      id: "TXN004",
      description: "Awareness Campaign",
      amount: "₹2,50,000",
      date: "1 Mar 2024",
      category: "Marketing",
      status: "Pending",
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Fund Utilization</h1>
        <p className="text-muted-foreground">Track and manage financial allocations</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total Allocated"
          value="₹250Cr"
          icon={DollarSign}
          variant="primary"
        />
        <StatsCard
          title="Utilized"
          value="₹212Cr"
          icon={TrendingUp}
          trend="84.8% utilization"
          variant="accent"
        />
        <StatsCard
          title="Available"
          value="₹38Cr"
          icon={Wallet}
          variant="secondary"
        />
        <StatsCard
          title="Pending Approval"
          value="₹5.5Cr"
          icon={TrendingDown}
        />
      </div>

      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
          <CardDescription>Latest fund utilization activities</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {transactions.map((transaction) => (
              <div
                key={transaction.id}
                className="flex items-center justify-between p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <p className="font-medium">{transaction.description}</p>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      transaction.status === "Completed" ? "bg-accent text-accent-foreground" :
                      transaction.status === "In Progress" ? "bg-primary text-primary-foreground" :
                      "bg-muted-foreground/20"
                    }`}>
                      {transaction.status}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    {transaction.category} • {transaction.date}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-primary">{transaction.amount}</p>
                  <p className="text-xs text-muted-foreground">{transaction.id}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FundUtilization;
