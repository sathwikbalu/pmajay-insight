import StatsCard from "@/components/StatsCard";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Users, CheckCircle, Clock, AlertCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

const OfficerDashboard = () => {
  const { t } = useTranslation();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">{t("dashboard.officer.welcome")}</h1>
        <p className="text-muted-foreground">
          {t("dashboard.officer.overview")}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title={t("dashboard.officer.totalApplications")}
          value="1,245"
          icon={Users}
          trend={t("dashboard.officer.trendApplications")}
          variant="primary"
        />
        <StatsCard
          title={t("dashboard.officer.approved")}
          value="892"
          icon={CheckCircle}
          trend={t("dashboard.officer.approvalRate")}
          variant="accent"
        />
        <StatsCard
          title={t("dashboard.officer.pendingReview")}
          value="245"
          icon={Clock}
          variant="secondary"
        />
        <StatsCard
          title={t("dashboard.officer.rejected")}
          value="108"
          icon={AlertCircle}
        />
      </div>

      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>{t("dashboard.officer.pendingApplications")}</CardTitle>
          <CardDescription>
            {t("dashboard.officer.pendingDescription")}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="flex items-center justify-between p-4 bg-muted rounded-lg"
              >
                <div>
                  <p className="font-medium">
                    {t("dashboard.officer.applicationId", { id: 1000 + i })}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {t("dashboard.officer.submittedDaysAgo", { days: 2 })}
                  </p>
                </div>
                <div className="text-secondary font-medium">
                  {t("dashboard.officer.review")}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default OfficerDashboard;
