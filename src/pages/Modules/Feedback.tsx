import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Star } from "lucide-react";
import { useTranslation } from "react-i18next";

const Feedback = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: t("modules.feedback.thankYou"),
      description: t("modules.feedback.submittedDescription"),
    });
    setRating(0);
    setFeedback("");
  };

  const getRatingText = (rating: number) => {
    switch (rating) {
      case 0:
        return t("modules.feedback.pleaseRate");
      case 1:
        return t("modules.feedback.ratings.poor");
      case 2:
        return t("modules.feedback.ratings.fair");
      case 3:
        return t("modules.feedback.ratings.good");
      case 4:
        return t("modules.feedback.ratings.veryGood");
      case 5:
        return t("modules.feedback.ratings.excellent");
      default:
        return "";
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">{t("modules.feedback.title")}</h1>
        <p className="text-muted-foreground">
          {t("modules.feedback.description")}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>{t("modules.feedback.shareExperience")}</CardTitle>
            <CardDescription>
              {t("modules.feedback.feedbackHelps")}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-3">
                <Label>{t("modules.feedback.rateExperience")} *</Label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoveredRating(star)}
                      onMouseLeave={() => setHoveredRating(0)}
                      className="focus:outline-none transition-transform hover:scale-110"
                    >
                      <Star
                        className={`h-10 w-10 ${
                          star <= (hoveredRating || rating)
                            ? "fill-secondary text-secondary"
                            : "text-muted-foreground"
                        }`}
                      />
                    </button>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  {getRatingText(rating || hoveredRating)}
                </p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="feedback">
                  {t("modules.feedback.yourFeedback")} *
                </Label>
                <Textarea
                  id="feedback"
                  placeholder={t("modules.feedback.placeholder")}
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  required
                  rows={6}
                />
              </div>
              <Button type="submit" className="w-full" disabled={rating === 0}>
                {t("modules.feedback.submitButton")}
              </Button>
            </form>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>{t("modules.feedback.statsTitle")}</CardTitle>
            <CardDescription>
              {t("modules.feedback.statsDescription")}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold text-primary">4.6</div>
              <div className="flex justify-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`h-5 w-5 ${
                      star <= 4
                        ? "fill-secondary text-secondary"
                        : "text-muted-foreground"
                    }`}
                  />
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                {t("modules.feedback.basedOnReviews", { count: 1245 })}
              </p>
            </div>

            <div className="space-y-3">
              {[
                { stars: 5, percentage: 68 },
                { stars: 4, percentage: 22 },
                { stars: 3, percentage: 7 },
                { stars: 2, percentage: 2 },
                { stars: 1, percentage: 1 },
              ].map((item) => (
                <div key={item.stars} className="flex items-center gap-3">
                  <div className="flex items-center gap-1 w-16">
                    <span className="text-sm">{item.stars}</span>
                    <Star className="h-3 w-3 fill-secondary text-secondary" />
                  </div>
                  <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-secondary"
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                  <span className="text-sm text-muted-foreground w-12 text-right">
                    {item.percentage}%
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Feedback;
