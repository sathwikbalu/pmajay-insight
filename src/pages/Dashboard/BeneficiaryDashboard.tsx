import StatsCard from "@/components/StatsCard";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Users, FolderKanban, DollarSign, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const BeneficiaryDashboard = () => {
  const { t } = useTranslation();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">
          {t("dashboard.beneficiary.welcome")}
        </h1>
        <p className="text-muted-foreground">
          {t("dashboard.beneficiary.overview")}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title={t("dashboard.beneficiary.activeApplications")}
          value="2"
          icon={FolderKanban}
          variant="primary"
        />
        <StatsCard
          title={t("dashboard.beneficiary.completedTraining")}
          value="3"
          icon={GraduationCap}
          variant="secondary"
        />
        <StatsCard
          title={t("dashboard.beneficiary.fundsReceived")}
          value="₹45,000"
          icon={DollarSign}
          variant="accent"
        />
        <StatsCard
          title={t("dashboard.beneficiary.pendingActions")}
          value="1"
          icon={Users}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>{t("dashboard.beneficiary.recentActivities")}</CardTitle>
            <CardDescription>
              {t("dashboard.beneficiary.activitiesDescription")}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              {
                title: t(
                  "dashboard.beneficiary.activities.applicationSubmitted"
                ),
                date: t("dashboard.beneficiary.activities.twoHoursAgo"),
                status: t("dashboard.beneficiary.activities.pending"),
              },
              {
                title: t(
                  "dashboard.beneficiary.activities.documentVerification"
                ),
                date: t("dashboard.beneficiary.activities.oneDayAgo"),
                status: t("dashboard.beneficiary.activities.completed"),
              },
              {
                title: t(
                  "dashboard.beneficiary.activities.skillTrainingEnrolled"
                ),
                date: t("dashboard.beneficiary.activities.threeDaysAgo"),
                status: t("dashboard.beneficiary.activities.inProgress"),
              },
            ].map((activity, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-muted rounded-lg"
              >
                <div>
                  <p className="font-medium">{activity.title}</p>
                  <p className="text-sm text-muted-foreground">
                    {activity.date}
                  </p>
                </div>
                <span
                  className={`text-xs px-2 py-1 rounded-full ${
                    activity.status ===
                    t("dashboard.beneficiary.activities.completed")
                      ? "bg-accent text-accent-foreground"
                      : activity.status ===
                        t("dashboard.beneficiary.activities.inProgress")
                      ? "bg-secondary text-secondary-foreground"
                      : "bg-muted-foreground/20"
                  }`}
                >
                  {activity.status}
                </span>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>{t("dashboard.beneficiary.quickActions")}</CardTitle>
            <CardDescription>
              {t("dashboard.beneficiary.quickActionsDescription")}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button asChild className="w-full justify-start" variant="outline">
              <Link to="/modules/beneficiary-form">
                <FolderKanban className="mr-2 h-4 w-4" />
                {t("dashboard.beneficiary.newApplication")}
              </Link>
            </Button>
            <Button asChild className="w-full justify-start" variant="outline">
              <Link to="/modules/skill-training">
                <GraduationCap className="mr-2 h-4 w-4" />
                {t("dashboard.beneficiary.enrollTraining")}
              </Link>
            </Button>
            <Button asChild className="w-full justify-start" variant="outline">
              <Link to="/modules/grievance">
                {t("dashboard.beneficiary.raiseGrievance")}
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BeneficiaryDashboard;
