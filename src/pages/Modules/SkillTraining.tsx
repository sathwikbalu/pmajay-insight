import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GraduationCap, Clock, Users } from "lucide-react";
import { useTranslation } from "react-i18next";

const SkillTraining = () => {
  const { t } = useTranslation();

  const courses = [
    {
      id: "CRS001",
      title: t("modules.skillTraining.courses.healthcareAssistant"),
      duration: t("modules.skillTraining.duration.months", { count: 3 }),
      enrolled: 245,
      capacity: 300,
      status: t("modules.skillTraining.status.open"),
      level: t("modules.skillTraining.levels.beginner"),
    },
    {
      id: "CRS002",
      title: t("modules.skillTraining.courses.medicalEquipment"),
      duration: t("modules.skillTraining.duration.months", { count: 2 }),
      enrolled: 180,
      capacity: 200,
      status: t("modules.skillTraining.status.open"),
      level: t("modules.skillTraining.levels.intermediate"),
    },
    {
      id: "CRS003",
      title: t("modules.skillTraining.courses.firstAid"),
      duration: t("modules.skillTraining.duration.months", { count: 1 }),
      enrolled: 150,
      capacity: 150,
      status: t("modules.skillTraining.status.full"),
      level: t("modules.skillTraining.levels.advanced"),
    },
    {
      id: "CRS004",
      title: t("modules.skillTraining.courses.digitalHealth"),
      duration: t("modules.skillTraining.duration.weeks", { count: 6 }),
      enrolled: 95,
      capacity: 200,
      status: t("modules.skillTraining.status.open"),
      level: t("modules.skillTraining.levels.beginner"),
    },
  ];

  const getLevelColor = (level: string) => {
    if (level === t("modules.skillTraining.levels.beginner")) {
      return "bg-accent text-accent-foreground";
    } else if (level === t("modules.skillTraining.levels.intermediate")) {
      return "bg-primary text-primary-foreground";
    } else if (level === t("modules.skillTraining.levels.advanced")) {
      return "bg-secondary text-secondary-foreground";
    } else {
      return "bg-muted";
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">
          {t("modules.skillTraining.title")}
        </h1>
        <p className="text-muted-foreground">
          {t("modules.skillTraining.description")}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {courses.map((course) => (
          <Card key={course.id} className="shadow-card">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <GraduationCap className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{course.title}</CardTitle>
                    <CardDescription className="text-xs mt-1">
                      {t("modules.skillTraining.courseId")}: {course.id}
                    </CardDescription>
                  </div>
                </div>
                <Badge className={getLevelColor(course.level)}>
                  {course.level}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  <span>
                    {course.enrolled}/{course.capacity}
                  </span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">
                    {t("modules.skillTraining.enrollmentProgress")}
                  </span>
                  <span className="font-medium">
                    {Math.round((course.enrolled / course.capacity) * 100)}%
                  </span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-primary"
                    style={{
                      width: `${(course.enrolled / course.capacity) * 100}%`,
                    }}
                  />
                </div>
              </div>
              <Button
                className="w-full"
                disabled={
                  course.status === t("modules.skillTraining.status.full")
                }
                variant={
                  course.status === t("modules.skillTraining.status.full")
                    ? "outline"
                    : "default"
                }
              >
                {course.status === t("modules.skillTraining.status.full")
                  ? t("modules.skillTraining.courseFull")
                  : t("modules.skillTraining.enrollNow")}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SkillTraining;
