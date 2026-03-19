import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Lock, Smartphone, KeyRound, Eye, EyeOff, CheckCircle2, AlertCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function SecureLoginPanel() {
  const [step, setStep] = useState<"credentials" | "2fa" | "success">("credentials");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
      <Card className="nhls-card-hover overflow-hidden">
        <CardHeader className="pb-3 nhls-gradient text-sidebar-primary-foreground">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <Shield className="w-4 h-4 text-primary-foreground" />
            </div>
            <div>
              <CardTitle className="text-base font-display text-sidebar-primary-foreground">Secure Admin Access</CardTitle>
              <p className="text-[10px] text-sidebar-foreground/70 mt-0.5">Two-Factor Authentication Required</p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-5">
          <AnimatePresence mode="wait">
            {step === "credentials" && (
              <motion.div key="cred" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} className="space-y-4">
                <div className="space-y-2">
                  <label className="text-xs font-medium text-foreground">Employee ID</label>
                  <div className="relative">
                    <KeyRound className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input placeholder="NHLS-EMP-XXXXX" className="pl-10" defaultValue="NHLS-EMP-04821" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-medium text-foreground">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      type={showPassword ? "text" : "password"}
                      className="pl-10 pr-10"
                      defaultValue="securepwd123"
                    />
                    <button onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg bg-nhls-gold/10 text-nhls-gold">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <p className="text-[10px]">OAuth SSO available for privileged admin accounts</p>
                </div>
                <Button onClick={() => setStep("2fa")} className="w-full">
                  Continue to 2FA
                </Button>
              </motion.div>
            )}

            {step === "2fa" && (
              <motion.div key="2fa" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} className="space-y-4">
                <div className="text-center py-2">
                  <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-3">
                    <Smartphone className="w-7 h-7 text-primary" />
                  </div>
                  <p className="text-sm font-display font-semibold">Enter Verification Code</p>
                  <p className="text-xs text-muted-foreground mt-1">A 6-digit code was sent to your authenticator app</p>
                </div>
                <div className="flex gap-2 justify-center">
                  {[4, 7, 2, 9, 1, 5].map((n, i) => (
                    <div key={i} className="w-10 h-12 rounded-lg border-2 border-primary/30 flex items-center justify-center text-lg font-display font-bold">
                      {n}
                    </div>
                  ))}
                </div>
                <Button onClick={() => setStep("success")} className="w-full">
                  Verify & Sign In
                </Button>
                <p className="text-center text-[10px] text-muted-foreground">
                  Didn't receive a code? <button className="text-primary font-medium hover:underline">Resend</button>
                </p>
              </motion.div>
            )}

            {step === "success" && (
              <motion.div key="success" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-6 space-y-3">
                <div className="w-14 h-14 mx-auto rounded-full bg-nhls-green/10 flex items-center justify-center">
                  <CheckCircle2 className="w-7 h-7 text-nhls-green" />
                </div>
                <p className="text-sm font-display font-semibold">Authentication Successful</p>
                <p className="text-xs text-muted-foreground">Admin privileges granted. Session expires in 30 minutes.</p>
                <Button variant="outline" size="sm" onClick={() => setStep("credentials")}>
                  Demo: Reset Login
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </CardContent>
      </Card>
    </motion.div>
  );
}
