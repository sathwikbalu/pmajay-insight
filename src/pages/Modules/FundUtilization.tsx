import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import StatsCard from "@/components/StatsCard";
import { DollarSign, TrendingUp, TrendingDown, Wallet } from "lucide-react";
import { useTranslation } from "react-i18next";

const FundUtilization = () => {
  const { t } = useTranslation();

  const transactions = [
    {
      id: "TXN001",
      description: t("modules.fundUtilization.transactions.medicalEquipment"),
      amount: "₹12,50,000",
      date: "15 " + t("modules.projectTracking.months.mar") + " 2024",
      category: t("modules.fundUtilization.categories.infrastructure"),
      status: t("modules.projectTracking.status.completed"),
    },
    {
      id: "TXN002",
      description: t("modules.fundUtilization.transactions.staffTraining"),
      amount: "₹3,75,000",
      date: "10 " + t("modules.projectTracking.months.mar") + " 2024",
      category: t("modules.fundUtilization.categories.training"),
      status: t("modules.projectTracking.status.completed"),
    },
    {
      id: "TXN003",
      description: t(
        "modules.fundUtilization.transactions.medicineProcurement"
      ),
      amount: "₹8,20,000",
      date: "5 " + t("modules.projectTracking.months.mar") + " 2024",
      category: t("modules.fundUtilization.categories.healthcare"),
      status: t("modules.projectTracking.status.inProgress"),
    },
    {
      id: "TXN004",
      description: t("modules.fundUtilization.transactions.awarenessCampaign"),
      amount: "₹2,50,000",
      date: "1 " + t("modules.projectTracking.months.mar") + " 2024",
      category: t("modules.fundUtilization.categories.marketing"),
      status: t("modules.projectTracking.status.pending"),
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">
          {t("modules.fundUtilization.title")}
        </h1>
        <p className="text-muted-foreground">
          {t("modules.fundUtilization.description")}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title={t("modules.fundUtilization.stats.allocated")}
          value="₹250Cr"
          icon={DollarSign}
          variant="primary"
        />
        <StatsCard
          title={t("modules.fundUtilization.stats.utilized")}
          value="₹212Cr"
          icon={TrendingUp}
          trend={t("modules.fundUtilization.stats.utilizationRate", {
            rate: "84.8%",
          })}
          variant="accent"
        />
        <StatsCard
          title={t("modules.fundUtilization.stats.available")}
          value="₹38Cr"
          icon={Wallet}
          variant="secondary"
        />
        <StatsCard
          title={t("modules.fundUtilization.stats.pending")}
          value="₹5.5Cr"
          icon={TrendingDown}
        />
      </div>

      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>
            {t("modules.fundUtilization.recentTransactions")}
          </CardTitle>
          <CardDescription>
            {t("modules.fundUtilization.transactionsDescription")}
          </CardDescription>
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
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        transaction.status ===
                        t("modules.projectTracking.status.completed")
                          ? "bg-accent text-accent-foreground"
                          : transaction.status ===
                            t("modules.projectTracking.status.inProgress")
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted-foreground/20"
                      }`}
                    >
                      {transaction.status}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    {transaction.category} • {transaction.date}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-primary">{transaction.amount}</p>
                  <p className="text-xs text-muted-foreground">
                    {transaction.id}
                  </p>
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
