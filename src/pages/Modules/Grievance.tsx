import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Grievance = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    category: "",
    subject: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Grievance Submitted",
      description: "Your grievance has been registered. You'll receive updates via email.",
    });
  };

  const previousGrievances = [
    {
      id: "GRV001",
      subject: "Document Verification Delay",
      status: "Resolved",
      date: "10 Mar 2024",
    },
    {
      id: "GRV002",
      subject: "Payment Not Received",
      status: "In Progress",
      date: "15 Mar 2024",
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Grievance Redressal</h1>
        <p className="text-muted-foreground">Report issues and track their resolution</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Submit New Grievance</CardTitle>
            <CardDescription>Describe your issue in detail</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="category">Category *</Label>
                <Select onValueChange={(value) => setFormData({ ...formData, category: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="documentation">Documentation</SelectItem>
                    <SelectItem value="payment">Payment</SelectItem>
                    <SelectItem value="service">Service Quality</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject *</Label>
                <Input
                  id="subject"
                  placeholder="Brief description of the issue"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Detailed Description *</Label>
                <Textarea
                  id="description"
                  placeholder="Please provide detailed information about your grievance"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  required
                  rows={5}
                />
              </div>
              <Button type="submit" className="w-full">
                Submit Grievance
              </Button>
            </form>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Previous Grievances</CardTitle>
            <CardDescription>Track status of your submitted grievances</CardDescription>
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
                      grievance.status === "Resolved"
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
