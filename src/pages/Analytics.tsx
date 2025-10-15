import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import StatsCard from "@/components/StatsCard";
import { Users, TrendingUp, DollarSign, FolderKanban } from "lucide-react";
import { useTranslation } from "react-i18next";

const Analytics = () => {
  const { t } = useTranslation();

  // Mock data for the charts
  const enrollmentData = [65, 80, 75, 90, 85, 95, 100, 88, 92, 98, 105, 110];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">{t("modules.analytics.title")}</h1>
        <p className="text-muted-foreground">
          {t("modules.analytics.description")}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title={t("modules.analytics.stats.totalBeneficiaries")}
          value="10.5L"
          icon={Users}
          trend={t("modules.analytics.trends.quarter", { percentage: "+15%" })}
          variant="primary"
        />
        <StatsCard
          title={t("modules.analytics.stats.activeProjects")}
          value="524"
          icon={FolderKanban}
          trend={t("modules.analytics.trends.month", { percentage: "+8%" })}
          variant="secondary"
        />
        <StatsCard
          title={t("modules.analytics.stats.fundsAllocated")}
          value="₹250Cr"
          icon={DollarSign}
          trend={t("modules.analytics.trends.utilization", {
            percentage: "85%",
          })}
          variant="accent"
        />
        <StatsCard
          title={t("modules.analytics.stats.growthRate")}
          value="+24%"
          icon={TrendingUp}
          trend={t("modules.analytics.trends.yoy")}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>{t("modules.analytics.enrollment.title")}</CardTitle>
            <CardDescription>
              {t("modules.analytics.enrollment.description")}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-end justify-between gap-2">
              {enrollmentData.map((height, index) => (
                <div
                  key={index}
                  className="flex-1 bg-gradient-primary rounded-t-lg transition-all hover:opacity-80 cursor-pointer"
                  style={{ height: `${height}%` }}
                  title={`${t("modules.analytics.months.month", {
                    number: index + 1,
                  })}: ${(height * 100).toFixed(0)} ${t(
                    "modules.analytics.enrollment.registrations"
                  )}`}
                />
              ))}
            </div>
            <div className="flex justify-between mt-4 text-xs text-muted-foreground">
              <span>{t("modules.analytics.months.jan")}</span>
              <span>{t("modules.analytics.months.apr")}</span>
              <span>{t("modules.analytics.months.jul")}</span>
              <span>{t("modules.analytics.months.oct")}</span>
              <span>{t("modules.analytics.months.dec")}</span>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>
              {t("modules.analytics.categoryDistribution.title")}
            </CardTitle>
            <CardDescription>
              {t("modules.analytics.categoryDistribution.description")}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  category: "modules.analytics.categories.healthcare",
                  value: 35,
                  color: "bg-primary",
                },
                {
                  category: "modules.analytics.categories.infrastructure",
                  value: 28,
                  color: "bg-secondary",
                },
                {
                  category: "modules.analytics.categories.training",
                  value: 22,
                  color: "bg-accent",
                },
                {
                  category: "modules.analytics.categories.awareness",
                  value: 15,
                  color: "bg-muted-foreground",
                },
              ].map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">{t(item.category)}</span>
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
            <CardTitle>
              {t("modules.analytics.statePerformance.title")}
            </CardTitle>
            <CardDescription>
              {t("modules.analytics.statePerformance.description")}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  state: "modules.analytics.states.maharashtra",
                  count: "2.5L",
                  percentage: 95,
                },
                {
                  state: "modules.analytics.states.karnataka",
                  count: "2.1L",
                  percentage: 88,
                },
                {
                  state: "modules.analytics.states.tamilNadu",
                  count: "1.8L",
                  percentage: 82,
                },
                {
                  state: "modules.analytics.states.gujarat",
                  count: "1.5L",
                  percentage: 75,
                },
                {
                  state: "modules.analytics.states.uttarPradesh",
                  count: "1.2L",
                  percentage: 68,
                },
                {
                  state: "modules.analytics.states.rajasthan",
                  count: "1.4L",
                  percentage: 72,
                },
              ].map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">{t(item.state)}</span>
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
