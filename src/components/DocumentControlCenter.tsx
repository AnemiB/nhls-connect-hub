import { motion } from "framer-motion";
import { FileText, Clock, CheckCircle2, AlertCircle, Upload, Search, Filter, MoreHorizontal } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const documents = [
  { name: "SOP-LAB-2024-001", title: "Blood Sample Collection Protocol", version: "v3.2", status: "approved", updated: "2 hours ago", author: "Dr. Pillay" },
  { name: "SOP-QC-2024-015", title: "Quality Control Procedures - Microbiology", version: "v2.1", status: "review", updated: "5 hours ago", author: "Dr. Nkosi" },
  { name: "POL-SEC-2024-003", title: "Data Protection & POPIA Compliance", version: "v1.4", status: "approved", updated: "1 day ago", author: "Legal Dept" },
  { name: "SOP-LAB-2024-022", title: "TB Diagnostic Testing Protocol", version: "v4.0", status: "draft", updated: "3 days ago", author: "Dr. Mokoena" },
  { name: "REP-ANN-2024-001", title: "Annual Lab Performance Report", version: "v1.0", status: "approved", updated: "1 week ago", author: "Management" },
];

const statusConfig: Record<string, { color: string; icon: typeof CheckCircle2 }> = {
  approved: { color: "bg-nhls-green/10 text-nhls-green border-nhls-green/20", icon: CheckCircle2 },
  review: { color: "bg-nhls-gold/10 text-nhls-gold border-nhls-gold/20", icon: Clock },
  draft: { color: "bg-nhls-blue/10 text-nhls-blue border-nhls-blue/20", icon: AlertCircle },
};

export function DocumentControlCenter() {
  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
      <Card className="nhls-card-hover">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <FileText className="w-4 h-4 text-primary" />
              </div>
              <CardTitle className="text-base font-display">Document Control Center</CardTitle>
            </div>
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary text-xs font-medium text-secondary-foreground hover:bg-secondary/80 transition-colors">
                <Filter className="w-3 h-3" /> Filter
              </button>
              <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary text-xs font-medium text-primary-foreground hover:opacity-90 transition-opacity">
                <Upload className="w-3 h-3" /> Upload
              </button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-2">
          {documents.map((doc, i) => {
            const cfg = statusConfig[doc.status];
            const StatusIcon = cfg.icon;
            return (
              <div
                key={i}
                className="flex items-center gap-4 p-3 rounded-lg hover:bg-secondary/50 transition-colors cursor-pointer group"
              >
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                  <FileText className="w-5 h-5 text-muted-foreground" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-medium truncate">{doc.title}</p>
                    <Badge variant="outline" className="text-[10px] shrink-0">{doc.version}</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">{doc.name} · {doc.author} · {doc.updated}</p>
                </div>
                <Badge className={`${cfg.color} border text-[10px] capitalize gap-1`}>
                  <StatusIcon className="w-3 h-3" />
                  {doc.status}
                </Badge>
                <button className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <MoreHorizontal className="w-4 h-4 text-muted-foreground" />
                </button>
              </div>
            );
          })}
        </CardContent>
      </Card>
    </motion.div>
  );
}
