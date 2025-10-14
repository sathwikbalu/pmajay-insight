import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GraduationCap, Clock, Users } from "lucide-react";

const SkillTraining = () => {
  const courses = [
    {
      id: "CRS001",
      title: "Healthcare Assistant Training",
      duration: "3 months",
      enrolled: 245,
      capacity: 300,
      status: "Open",
      level: "Beginner",
    },
    {
      id: "CRS002",
      title: "Medical Equipment Maintenance",
      duration: "2 months",
      enrolled: 180,
      capacity: 200,
      status: "Open",
      level: "Intermediate",
    },
    {
      id: "CRS003",
      title: "Advanced First Aid Certification",
      duration: "1 month",
      enrolled: 150,
      capacity: 150,
      status: "Full",
      level: "Advanced",
    },
    {
      id: "CRS004",
      title: "Digital Health Records Management",
      duration: "6 weeks",
      enrolled: 95,
      capacity: 200,
      status: "Open",
      level: "Beginner",
    },
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner":
        return "bg-accent text-accent-foreground";
      case "Intermediate":
        return "bg-primary text-primary-foreground";
      case "Advanced":
        return "bg-secondary text-secondary-foreground";
      default:
        return "bg-muted";
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Skill Training Programs</h1>
        <p className="text-muted-foreground">Enroll in courses to enhance your skills</p>
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
                    <CardDescription className="text-xs mt-1">ID: {course.id}</CardDescription>
                  </div>
                </div>
                <Badge className={getLevelColor(course.level)}>{course.level}</Badge>
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
                  <span>{course.enrolled}/{course.capacity}</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">Enrollment Progress</span>
                  <span className="font-medium">
                    {Math.round((course.enrolled / course.capacity) * 100)}%
                  </span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-primary"
                    style={{ width: `${(course.enrolled / course.capacity) * 100}%` }}
                  />
                </div>
              </div>
              <Button
                className="w-full"
                disabled={course.status === "Full"}
                variant={course.status === "Full" ? "outline" : "default"}
              >
                {course.status === "Full" ? "Course Full" : "Enroll Now"}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SkillTraining;
