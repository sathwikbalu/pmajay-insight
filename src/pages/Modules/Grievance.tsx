import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "react-i18next";

const Grievance = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    category: "",
    subject: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: t("modules.grievance.submittedTitle"),
      description: t("modules.grievance.submittedDescription"),
    });
  };

  const previousGrievances = [
    {
      id: "GRV001",
      subject: t("modules.grievance.previousGrievances.docVerification"),
      status: t("modules.grievance.status.resolved"),
      date: "10 " + t("modules.projectTracking.months.mar") + " 2024",
    },
    {
      id: "GRV002",
      subject: t("modules.grievance.previousGrievances.paymentNotReceived"),
      status: t("modules.grievance.status.inProgress"),
      date: "15 " + t("modules.projectTracking.months.mar") + " 2024",
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">{t("modules.grievance.title")}</h1>
        <p className="text-muted-foreground">
          {t("modules.grievance.description")}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>{t("modules.grievance.submitNew")}</CardTitle>
            <CardDescription>
              {t("modules.grievance.submitDescription")}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="category">
                  {t("modules.grievance.category")} *
                </Label>
                <Select
                  onValueChange={(value) =>
                    setFormData({ ...formData, category: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue
                      placeholder={t("modules.grievance.selectCategory")}
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="documentation">
                      {t("modules.grievance.categories.documentation")}
                    </SelectItem>
                    <SelectItem value="payment">
                      {t("modules.grievance.categories.payment")}
                    </SelectItem>
                    <SelectItem value="service">
                      {t("modules.grievance.categories.serviceQuality")}
                    </SelectItem>
                    <SelectItem value="other">
                      {t("modules.grievance.categories.other")}
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">
                  {t("modules.grievance.subject")} *
                </Label>
                <Input
                  id="subject"
                  placeholder={t("modules.grievance.subjectPlaceholder")}
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">
                  {t("modules.grievance.detailedDescription")} *
                </Label>
                <Textarea
                  id="description"
                  placeholder={t("modules.grievance.descriptionPlaceholder")}
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  required
                  rows={5}
                />
              </div>
              <Button type="submit" className="w-full">
                {t("modules.grievance.submitButton")}
              </Button>
            </form>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>{t("modules.grievance.previousTitle")}</CardTitle>
            <CardDescription>
              {t("modules.grievance.previousDescription")}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {previousGrievances.map((grievance) => (
              <div key={grievance.id} className="p-4 bg-muted rounded-lg">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="font-medium">{grievance.subject}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {grievance.id} • {grievance.date}
                    </p>
                  </div>
                  <Badge
                    className={
                      grievance.status ===
                      t("modules.grievance.status.resolved")
                        ? "bg-accent text-accent-foreground"
                        : "bg-primary text-primary-foreground"
                    }
                  >
                    {grievance.status}
                  </Badge>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Grievance;
