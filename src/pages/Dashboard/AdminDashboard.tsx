import StatsCard from "@/components/StatsCard";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Users, DollarSign, FolderKanban, TrendingUp } from "lucide-react";
import { useTranslation } from "react-i18next";

const AdminDashboard = () => {
  const { t } = useTranslation();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">{t("dashboard.admin.welcome")}</h1>
        <p className="text-muted-foreground">{t("dashboard.admin.overview")}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title={t("dashboard.admin.totalBeneficiaries")}
          value="10.5L"
          icon={Users}
          trend={t("dashboard.admin.beneficiaryGrowth")}
          variant="primary"
        />
        <StatsCard
          title={t("dashboard.admin.totalFundsDisbursed")}
          value="₹250Cr"
          icon={DollarSign}
          trend={t("dashboard.admin.fundUtilization")}
          variant="accent"
        />
        <StatsCard
          title={t("dashboard.admin.activeProjects")}
          value="524"
          icon={FolderKanban}
          variant="secondary"
        />
        <StatsCard
          title={t("dashboard.admin.systemGrowth")}
          value="+24%"
          icon={TrendingUp}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>{t("dashboard.admin.regionalDistribution")}</CardTitle>
            <CardDescription>
              {t("dashboard.admin.beneficiaryRegions")}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { region: t("dashboard.admin.north"), percentage: 25 },
                { region: t("dashboard.admin.south"), percentage: 20 },
                { region: t("dashboard.admin.east"), percentage: 15 },
                { region: t("dashboard.admin.west"), percentage: 10 },
              ].map((item, index) => (
                <div key={item.region} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>{item.region}</span>
                    <span className="font-medium">{item.percentage}%</span>
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

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>{t("dashboard.admin.systemHealth")}</CardTitle>
            <CardDescription>
              {t("dashboard.admin.platformMetrics")}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
              <span className="text-sm">
                {t("dashboard.admin.serverUptime")}
              </span>
              <span className="font-bold text-accent">99.9%</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
              <span className="text-sm">
                {t("dashboard.admin.activeUsers")}
              </span>
              <span className="font-bold text-primary">12,458</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
              <span className="text-sm">
                {t("dashboard.admin.avgResponseTime")}
              </span>
              <span className="font-bold text-secondary">1.2s</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
