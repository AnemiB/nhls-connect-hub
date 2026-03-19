import { motion } from "framer-motion";
import { User, Bell, Shield, Palette, Globe, Key, Monitor, Mail, Smartphone, ChevronRight, ToggleLeft } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const settingsSections = [
  {
    id: "profile",
    icon: User,
    title: "Profile Information",
    description: "Manage your personal details and preferences",
  },
  {
    id: "notifications",
    icon: Bell,
    title: "Notifications",
    description: "Configure how and when you receive alerts",
  },
  {
    id: "security",
    icon: Shield,
    title: "Security & Access",
    description: "Password, 2FA, and session management",
  },
  {
    id: "appearance",
    icon: Palette,
    title: "Appearance",
    description: "Theme, language, and display settings",
  },
];

export function SettingsPanel() {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {/* Settings Nav */}
        <Card className="nhls-card-hover lg:col-span-1">
          <CardContent className="p-3 space-y-1">
            {settingsSections.map((s) => (
              <button
                key={s.id}
                onClick={() => setActiveTab(s.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === s.id
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-secondary"
                }`}
              >
                <s.icon className="w-4 h-4 shrink-0" />
                <span className="truncate">{s.title}</span>
              </button>
            ))}
          </CardContent>
        </Card>

        {/* Settings Content */}
        <div className="lg:col-span-3 space-y-4">
          {activeTab === "profile" && <ProfileSettings />}
          {activeTab === "notifications" && <NotificationSettings />}
          {activeTab === "security" && <SecuritySettings />}
          {activeTab === "appearance" && <AppearanceSettings />}
        </div>
      </div>
    </motion.div>
  );
}

function ProfileSettings() {
  return (
    <Card className="nhls-card-hover">
      <CardHeader className="pb-3">
        <CardTitle className="text-base font-display">Profile Information</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center gap-4">
          <Avatar className="w-16 h-16">
            <AvatarFallback className="bg-primary/10 text-primary text-lg font-semibold">TM</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium">Dr. Thandi Mokoena</p>
            <p className="text-sm text-muted-foreground">Senior Pathologist · Johannesburg Central</p>
            <button className="text-xs text-primary font-medium mt-1 hover:underline">Change photo</button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label className="text-xs">Full Name</Label>
            <Input defaultValue="Dr. Thandi Mokoena" />
          </div>
          <div className="space-y-2">
            <Label className="text-xs">Employee ID</Label>
            <Input defaultValue="NHLS-2019-04821" disabled className="bg-secondary" />
          </div>
          <div className="space-y-2">
            <Label className="text-xs">Email</Label>
            <Input defaultValue="t.mokoena@nhls.ac.za" />
          </div>
          <div className="space-y-2">
            <Label className="text-xs">Phone</Label>
            <Input defaultValue="+27 11 489 8XXX" />
          </div>
          <div className="space-y-2">
            <Label className="text-xs">Department</Label>
            <Input defaultValue="Pathology" disabled className="bg-secondary" />
          </div>
          <div className="space-y-2">
            <Label className="text-xs">Location</Label>
            <Input defaultValue="Johannesburg Central Lab" />
          </div>
        </div>
        <div className="flex justify-end">
          <button className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity">
            Save Changes
          </button>
        </div>
      </CardContent>
    </Card>
  );
}

function NotificationSettings() {
  const notifications = [
    { icon: Mail, label: "Email Notifications", desc: "Receive updates via email", defaultOn: true },
    { icon: Smartphone, label: "Push Notifications", desc: "Browser push alerts", defaultOn: true },
    { icon: Bell, label: "Document Approvals", desc: "When documents need your review", defaultOn: true },
    { icon: Bell, label: "System Maintenance", desc: "Planned downtime alerts", defaultOn: true },
    { icon: Bell, label: "News & Announcements", desc: "Internal comms updates", defaultOn: false },
    { icon: Bell, label: "Event Reminders", desc: "Upcoming calendar events", defaultOn: true },
  ];

  return (
    <Card className="nhls-card-hover">
      <CardHeader className="pb-3">
        <CardTitle className="text-base font-display">Notification Preferences</CardTitle>
      </CardHeader>
      <CardContent className="space-y-1">
        {notifications.map((n, i) => (
          <div key={i} className="flex items-center justify-between p-3 rounded-lg hover:bg-secondary/50 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center">
                <n.icon className="w-4 h-4 text-muted-foreground" />
              </div>
              <div>
                <p className="text-sm font-medium">{n.label}</p>
                <p className="text-xs text-muted-foreground">{n.desc}</p>
              </div>
            </div>
            <Switch defaultChecked={n.defaultOn} />
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

function SecuritySettings() {
  return (
    <Card className="nhls-card-hover">
      <CardHeader className="pb-3">
        <CardTitle className="text-base font-display">Security & Access</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between p-4 rounded-lg border border-border">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Key className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium">Password</p>
              <p className="text-xs text-muted-foreground">Last changed 45 days ago</p>
            </div>
          </div>
          <button className="px-3 py-1.5 rounded-lg bg-secondary text-xs font-medium hover:bg-secondary/80 transition-colors">
            Change Password
          </button>
        </div>

        <div className="flex items-center justify-between p-4 rounded-lg border border-border">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-nhls-green/10 flex items-center justify-center">
              <Shield className="w-5 h-5 text-nhls-green" />
            </div>
            <div>
              <p className="text-sm font-medium">Two-Factor Authentication</p>
              <p className="text-xs text-muted-foreground">Authenticator app enabled</p>
            </div>
          </div>
          <Badge className="bg-nhls-green/10 text-nhls-green border-nhls-green/20 text-[10px]">Enabled</Badge>
        </div>

        <div className="flex items-center justify-between p-4 rounded-lg border border-border">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
              <Monitor className="w-5 h-5 text-muted-foreground" />
            </div>
            <div>
              <p className="text-sm font-medium">Active Sessions</p>
              <p className="text-xs text-muted-foreground">2 devices currently logged in</p>
            </div>
          </div>
          <button className="px-3 py-1.5 rounded-lg bg-secondary text-xs font-medium hover:bg-secondary/80 transition-colors">
            Manage
          </button>
        </div>

        <div className="p-4 rounded-lg border border-nhls-gold/30 bg-nhls-gold/5">
          <p className="text-sm font-medium text-nhls-gold">POPIA Compliance</p>
          <p className="text-xs text-muted-foreground mt-1">Your data is handled in accordance with the Protection of Personal Information Act. Last privacy review: 12 Feb 2026.</p>
        </div>
      </CardContent>
    </Card>
  );
}

function AppearanceSettings() {
  return (
    <Card className="nhls-card-hover">
      <CardHeader className="pb-3">
        <CardTitle className="text-base font-display">Appearance & Display</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between p-3 rounded-lg hover:bg-secondary/50 transition-colors">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center">
              <Palette className="w-4 h-4 text-muted-foreground" />
            </div>
            <div>
              <p className="text-sm font-medium">Theme</p>
              <p className="text-xs text-muted-foreground">System default</p>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-muted-foreground" />
        </div>

        <div className="flex items-center justify-between p-3 rounded-lg hover:bg-secondary/50 transition-colors">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center">
              <Globe className="w-4 h-4 text-muted-foreground" />
            </div>
            <div>
              <p className="text-sm font-medium">Language</p>
              <p className="text-xs text-muted-foreground">English (South Africa)</p>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-muted-foreground" />
        </div>

        <div className="flex items-center justify-between p-3 rounded-lg hover:bg-secondary/50 transition-colors">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center">
              <ToggleLeft className="w-4 h-4 text-muted-foreground" />
            </div>
            <div>
              <p className="text-sm font-medium">Compact Mode</p>
              <p className="text-xs text-muted-foreground">Reduce spacing for denser layout</p>
            </div>
          </div>
          <Switch />
        </div>
      </CardContent>
    </Card>
  );
}
