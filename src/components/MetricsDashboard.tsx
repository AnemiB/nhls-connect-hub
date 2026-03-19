import { motion } from "framer-motion";
import { Activity, TrendingUp, TrendingDown, FlaskConical, Timer, Users, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const metrics = [
  { label: "Samples Processed", value: "12,847", change: "+8.3%", trend: "up", icon: FlaskConical, period: "Today" },
  { label: "Avg Turnaround", value: "4.2h", change: "-12%", trend: "up", icon: Timer, period: "vs Last Week" },
  { label: "Active Lab Staff", value: "1,342", change: "+2", trend: "up", icon: Users, period: "On Shift" },
  { label: "Pending Alerts", value: "7", change: "+3", trend: "down", icon: AlertTriangle, period: "Critical" },
];

const labThroughput = [
  { lab: "Johannesburg Central", processed: 2840, capacity: 85 },
  { lab: "Cape Town Regional", processed: 1920, capacity: 72 },
  { lab: "Durban Coastal", processed: 1650, capacity: 68 },
  { lab: "Pretoria Academic", processed: 1430, capacity: 91 },
  { lab: "Bloemfontein", processed: 980, capacity: 55 },
];

export function MetricsDashboard() {
  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}>
      {/* Metric Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        {metrics.map((m, i) => (
          <Card key={i} className="nhls-card-hover">
            <CardContent className="p-4">
              <div className="flex items-start justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <m.icon className="w-5 h-5 text-primary" />
                </div>
                <span className={`flex items-center gap-1 text-xs font-semibold ${m.trend === "up" ? "text-nhls-green" : "text-nhls-red"}`}>
                  {m.trend === "up" ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                  {m.change}
                </span>
              </div>
              <p className="text-2xl font-display font-bold">{m.value}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{m.label} · {m.period}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Lab Throughput */}
      <Card className="nhls-card-hover">
        <CardHeader className="pb-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <Activity className="w-4 h-4 text-primary" />
            </div>
            <CardTitle className="text-base font-display">Lab Throughput Monitor</CardTitle>
            <span className="ml-auto text-[10px] text-muted-foreground bg-secondary px-2 py-1 rounded-full">Live</span>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          {labThroughput.map((lab, i) => (
            <div key={i} className="flex items-center gap-4">
              <p className="text-sm w-44 truncate font-medium">{lab.lab}</p>
              <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${lab.capacity}%` }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                  className={`h-full rounded-full ${lab.capacity > 85 ? "bg-nhls-red" : lab.capacity > 70 ? "bg-nhls-gold" : "bg-nhls-teal"}`}
                />
              </div>
              <div className="text-right w-20">
                <span className="text-xs font-semibold">{lab.capacity}%</span>
                <span className="text-[10px] text-muted-foreground ml-1">({lab.processed.toLocaleString()})</span>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </motion.div>
  );
}
