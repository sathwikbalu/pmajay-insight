import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import DashboardLayout from "./pages/DashboardLayout";
import BeneficiaryDashboard from "./pages/Dashboard/BeneficiaryDashboard";
import OfficerDashboard from "./pages/Dashboard/OfficerDashboard";
import AdminDashboard from "./pages/Dashboard/AdminDashboard";
import BeneficiaryForm from "./pages/Modules/BeneficiaryForm";
import ProjectTracking from "./pages/Modules/ProjectTracking";
import FundUtilization from "./pages/Modules/FundUtilization";
import SkillTraining from "./pages/Modules/SkillTraining";
import Grievance from "./pages/Modules/Grievance";
import Feedback from "./pages/Modules/Feedback";
import Analytics from "./pages/Analytics";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<DashboardLayout />}>
            <Route path="/dashboard/beneficiary" element={<BeneficiaryDashboard />} />
            <Route path="/dashboard/officer" element={<OfficerDashboard />} />
            <Route path="/dashboard/admin" element={<AdminDashboard />} />
            <Route path="/modules/beneficiary-form" element={<BeneficiaryForm />} />
            <Route path="/modules/project-tracking" element={<ProjectTracking />} />
            <Route path="/modules/fund-utilization" element={<FundUtilization />} />
            <Route path="/modules/skill-training" element={<SkillTraining />} />
            <Route path="/modules/grievance" element={<Grievance />} />
            <Route path="/modules/feedback" element={<Feedback />} />
            <Route path="/analytics" element={<Analytics />} />
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
