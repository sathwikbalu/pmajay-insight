import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, GraduationCap, TrendingUp, Home, Users } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Landing = () => {
  const { t } = useTranslation();
  
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-accent/10 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeInUp}
          className="container mx-auto px-4 text-center relative z-10"
        >
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow">
              <Heart className="h-10 w-10 text-primary-foreground" fill="currentColor" />
            </div>
          </div>
          <motion.div variants={fadeInUp}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
              PM-AJAY
            </h1>
            <p className="text-2xl md:text-4xl mb-4 text-foreground font-semibold">
              {t('landing.tagline')}
            </p>
            <p className="text-lg md:text-xl mb-8 text-muted-foreground max-w-2xl mx-auto">
              {t('landing.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <Button size="lg" className="text-lg px-8 shadow-glow">
                  {t('landing.applyNow')}
                </Button>
              </Link>
              <Link to="/login">
                <Button size="lg" variant="outline" className="text-lg px-8">
                  {t('landing.checkEligibility')}
                </Button>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Scheme Overview Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {t('landing.schemeOverview')}
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <Card className="h-full backdrop-blur-sm bg-card/50 border-primary/20 hover:border-primary/40 transition-all">
                <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4">{t('landing.ourMission')}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('landing.missionDesc')}
                </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <Card className="h-full backdrop-blur-sm bg-card/50 border-primary/20 hover:border-primary/40 transition-all">
                <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4">{t('landing.beneficiaries')}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('landing.beneficiariesDesc')}
                </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <Card className="h-full backdrop-blur-sm bg-card/50 border-primary/20 hover:border-primary/40 transition-all">
                <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4">{t('landing.keyGoals')}</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>{t('landing.goal1')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>{t('landing.goal2')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>{t('landing.goal3')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>{t('landing.goal4')}</span>
                  </li>
                </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Stats Section */}
      <section className="py-20 bg-accent/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {t('landing.impactStats')}
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInUp}>
              <Card className="backdrop-blur-lg bg-gradient-to-br from-card/80 to-card/40 border-primary/20 shadow-glow">
                <CardContent className="p-8 text-center">
                  <TrendingUp className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <div className="text-3xl md:text-4xl font-bold mb-2">₹2,500 Cr</div>
                  <div className="text-muted-foreground">{t('landing.fundsDistributed')}</div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInUp}>
              <Card className="backdrop-blur-lg bg-gradient-to-br from-card/80 to-card/40 border-primary/20 shadow-glow">
                <CardContent className="p-8 text-center">
                  <Home className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <div className="text-3xl md:text-4xl font-bold mb-2">15,000+</div>
                  <div className="text-muted-foreground">{t('landing.activeProjects')}</div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInUp}>
              <Card className="backdrop-blur-lg bg-gradient-to-br from-card/80 to-card/40 border-primary/20 shadow-glow">
                <CardContent className="p-8 text-center">
                  <GraduationCap className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <div className="text-3xl md:text-4xl font-bold mb-2">50,000+</div>
                  <div className="text-muted-foreground">{t('landing.skillTrainingsCompleted')}</div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInUp}>
              <Card className="backdrop-blur-lg bg-gradient-to-br from-card/80 to-card/40 border-primary/20 shadow-glow">
                <CardContent className="p-8 text-center">
                  <Users className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <div className="text-3xl md:text-4xl font-bold mb-2">1 Million+</div>
                  <div className="text-muted-foreground">{t('landing.beneficiariesEmpowered')}</div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {t('landing.keyFeatures')}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInUp}>
              <Card className="h-full backdrop-blur-sm bg-card/50 border-primary/20 hover:border-primary/40 transition-all hover:shadow-glow">
                <CardContent className="p-6 text-center">
                  <Users className="h-12 w-12 mb-4 text-primary mx-auto" />
                  <h3 className="text-xl font-bold mb-3">{t('landing.beneficiarySupportTitle')}</h3>
                  <p className="text-muted-foreground">
                    {t('landing.beneficiarySupportDesc')}
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInUp}>
              <Card className="h-full backdrop-blur-sm bg-card/50 border-primary/20 hover:border-primary/40 transition-all hover:shadow-glow">
                <CardContent className="p-6 text-center">
                  <TrendingUp className="h-12 w-12 mb-4 text-primary mx-auto" />
                  <h3 className="text-xl font-bold mb-3">{t('landing.directBenefitTitle')}</h3>
                  <p className="text-muted-foreground">
                    {t('landing.directBenefitDesc')}
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInUp}>
              <Card className="h-full backdrop-blur-sm bg-card/50 border-primary/20 hover:border-primary/40 transition-all hover:shadow-glow">
                <CardContent className="p-6 text-center">
                  <Home className="h-12 w-12 mb-4 text-primary mx-auto" />
                  <h3 className="text-xl font-bold mb-3">{t('landing.infrastructureTitle')}</h3>
                  <p className="text-muted-foreground">
                    {t('landing.infrastructureDesc')}
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInUp}>
              <Card className="h-full backdrop-blur-sm bg-card/50 border-primary/20 hover:border-primary/40 transition-all hover:shadow-glow">
                <CardContent className="p-6 text-center">
                  <GraduationCap className="h-12 w-12 mb-4 text-primary mx-auto" />
                  <h3 className="text-xl font-bold mb-3">{t('landing.livelihoodTitle')}</h3>
                  <p className="text-muted-foreground">
                    {t('landing.livelihoodDesc')}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-accent/10 to-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            {t('landing.readyToStart')}
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
            {t('landing.joinDesc')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button size="lg" className="text-lg px-8 shadow-glow">
                {t('landing.applyNow')}
              </Button>
            </Link>
            <Link to="/login">
              <Button size="lg" variant="outline" className="text-lg px-8">
                {t('landing.checkEligibility')}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <Heart className="h-6 w-6 text-primary-foreground" fill="currentColor" />
                </div>
                <span className="font-bold text-xl">PM-AJAY</span>
              </div>
              <p className="text-muted-foreground">
                {t('landing.tagline')}
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">{t('landing.footerQuickLinks')}</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link to="/login" className="hover:text-primary transition-colors">
                    {t('landing.applyNow')}
                  </Link>
                </li>
                <li>
                  <Link to="/register" className="hover:text-primary transition-colors">
                    {t('register.registerButton')}
                  </Link>
                </li>
                <li>
                  <Link to="/login" className="hover:text-primary transition-colors">
                    {t('landing.checkEligibility')}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">{t('landing.footerMinistries')}</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="https://tribal.nic.in" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    {t('landing.ministryTribal')}
                  </a>
                </li>
                <li>
                  <a href="https://socialjustice.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    {t('landing.ministrySocialJustice')}
                  </a>
                </li>
                <li>
                  <a href="https://india.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    {t('landing.nationalPortal')}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t pt-8 text-center text-muted-foreground">
            © 2024 PM-AJAY. {t('landing.allRights')}.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
