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
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "react-i18next";

const BeneficiaryForm = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    aadhaar: "",
    phone: "",
    state: "",
    district: "",
    address: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: t("modules.beneficiaryForm.submittedTitle"),
      description: t("modules.beneficiaryForm.submittedDescription"),
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">
          {t("modules.beneficiaryForm.title")}
        </h1>
        <p className="text-muted-foreground">
          {t("modules.beneficiaryForm.description")}
        </p>
      </div>

      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>{t("modules.beneficiaryForm.personalInfo")}</CardTitle>
          <CardDescription>
            {t("modules.beneficiaryForm.personalInfoDesc")}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="fullName">
                  {t("modules.beneficiaryForm.fullName")} *
                </Label>
                <Input
                  id="fullName"
                  placeholder={t("modules.beneficiaryForm.fullNamePlaceholder")}
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="aadhaar">
                  {t("modules.beneficiaryForm.aadhaar")} *
                </Label>
                <Input
                  id="aadhaar"
                  placeholder={t("modules.beneficiaryForm.aadhaarPlaceholder")}
                  maxLength={12}
                  value={formData.aadhaar}
                  onChange={(e) =>
                    setFormData({ ...formData, aadhaar: e.target.value })
                  }
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">
                  {t("modules.beneficiaryForm.phone")} *
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder={t("modules.beneficiaryForm.phonePlaceholder")}
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="state">
                  {t("modules.beneficiaryForm.state")} *
                </Label>
                <Select
                  onValueChange={(value) =>
                    setFormData({ ...formData, state: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue
                      placeholder={t("modules.beneficiaryForm.selectState")}
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="maharashtra">
                      {t("modules.beneficiaryForm.states.maharashtra")}
                    </SelectItem>
                    <SelectItem value="karnataka">
                      {t("modules.beneficiaryForm.states.karnataka")}
                    </SelectItem>
                    <SelectItem value="delhi">
                      {t("modules.beneficiaryForm.states.delhi")}
                    </SelectItem>
                    <SelectItem value="tamilnadu">
                      {t("modules.beneficiaryForm.states.tamilnadu")}
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="district">
                  {t("modules.beneficiaryForm.district")} *
                </Label>
                <Input
                  id="district"
                  placeholder={t("modules.beneficiaryForm.districtPlaceholder")}
                  value={formData.district}
                  onChange={(e) =>
                    setFormData({ ...formData, district: e.target.value })
                  }
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="address">
                {t("modules.beneficiaryForm.address")} *
              </Label>
              <Textarea
                id="address"
                placeholder={t("modules.beneficiaryForm.addressPlaceholder")}
                value={formData.address}
                onChange={(e) =>
                  setFormData({ ...formData, address: e.target.value })
                }
                required
                rows={3}
              />
            </div>
            <Button type="submit" className="w-full md:w-auto">
              {t("modules.beneficiaryForm.submitButton")}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default BeneficiaryForm;
