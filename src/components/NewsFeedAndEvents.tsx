import { motion } from "framer-motion";
import { Newspaper, Pin, ArrowRight, CalendarDays, MapPin, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const newsItems = [
  { title: "New TB Diagnostic Protocol Launched Nationwide", date: "19 Mar 2026", pinned: true, category: "Operations", excerpt: "The NHLS has officially rolled out the updated TB diagnostic protocol across all 268 laboratories..." },
  { title: "NHLS Annual Research Symposium: Call for Abstracts", date: "17 Mar 2026", pinned: false, category: "Research", excerpt: "Submit your abstracts for the 2026 annual symposium by 15 April. Topics include pathology innovation..." },
  { title: "System Maintenance: LIS Downtime Scheduled", date: "15 Mar 2026", pinned: false, category: "IT Notice", excerpt: "Planned maintenance on the Laboratory Information System from 22:00 to 04:00 on 22 March..." },
  { title: "Employee Wellness Programme Update", date: "14 Mar 2026", pinned: false, category: "HR", excerpt: "New mental health support resources now available for all NHLS staff members..." },
];

const events = [
  { title: "Quarterly Lab Directors Meeting", date: "22 Mar", time: "09:00", location: "NHLS HQ, Johannesburg", attendees: 45 },
  { title: "POPIA Compliance Training", date: "25 Mar", time: "14:00", location: "Virtual (MS Teams)", attendees: 120 },
  { title: "NICD Disease Surveillance Briefing", date: "28 Mar", time: "10:00", location: "NICD Campus, Sandringham", attendees: 30 },
];

const categoryColors: Record<string, string> = {
  Operations: "bg-nhls-teal/10 text-nhls-teal",
  Research: "bg-nhls-blue/10 text-nhls-blue",
  "IT Notice": "bg-nhls-gold/10 text-nhls-gold",
  HR: "bg-nhls-green/10 text-nhls-green",
};

export function NewsFeedAndEvents() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      {/* News Feed */}
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="lg:col-span-2">
        <Card className="nhls-card-hover h-full">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-nhls-blue/10 flex items-center justify-center">
                  <Newspaper className="w-4 h-4 text-nhls-blue" />
                </div>
                <CardTitle className="text-base font-display">Internal Communications</CardTitle>
              </div>
              <button className="text-xs text-primary font-medium flex items-center gap-1 hover:underline">
                View All <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            {newsItems.map((item, i) => (
              <div key={i} className="p-3 rounded-lg hover:bg-secondary/50 transition-colors cursor-pointer group">
                <div className="flex items-start gap-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      {item.pinned && <Pin className="w-3 h-3 text-nhls-gold rotate-45" />}
                      <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${categoryColors[item.category]}`}>
                        {item.category}
                      </span>
                      <span className="text-[10px] text-muted-foreground">{item.date}</span>
                    </div>
                    <p className="text-sm font-semibold group-hover:text-primary transition-colors">{item.title}</p>
                    <p className="text-xs text-muted-foreground mt-1 line-clamp-1">{item.excerpt}</p>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </motion.div>

      {/* Events */}
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
        <Card className="nhls-card-hover h-full">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-nhls-gold/10 flex items-center justify-center">
                <CalendarDays className="w-4 h-4 text-nhls-gold" />
              </div>
              <CardTitle className="text-base font-display">Upcoming Events</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            {events.map((event, i) => (
              <div key={i} className="p-3 rounded-lg border border-border hover:border-primary/30 transition-colors cursor-pointer">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded">{event.date}</span>
                  <span className="text-xs text-muted-foreground">{event.time}</span>
                </div>
                <p className="text-sm font-medium">{event.title}</p>
                <div className="flex items-center gap-3 mt-2 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{event.location}</span>
                  <span className="flex items-center gap-1"><Users className="w-3 h-3" />{event.attendees}</span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
