import { motion } from "framer-motion";
import { Search, Filter, Mail, Phone, MapPin, Building2, ChevronRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const departments = [
  { name: "Pathology", count: 342, color: "bg-nhls-teal" },
  { name: "Microbiology", count: 218, color: "bg-nhls-blue" },
  { name: "Virology", count: 156, color: "bg-nhls-gold" },
  { name: "Haematology", count: 189, color: "bg-nhls-green" },
  { name: "IT & Digital", count: 87, color: "bg-primary" },
  { name: "Administration", count: 134, color: "bg-nhls-red" },
];

const employees = [
  { name: "Dr. Thandi Mokoena", role: "Senior Pathologist", department: "Pathology", location: "Johannesburg Central", email: "t.mokoena@nhls.ac.za", phone: "+27 11 489 8XXX", status: "online", initials: "TM" },
  { name: "Dr. Rajesh Pillay", role: "Lab Director", department: "Microbiology", location: "Cape Town Regional", email: "r.pillay@nhls.ac.za", phone: "+27 21 404 6XXX", status: "online", initials: "RP" },
  { name: "Dr. Nokuthula Nkosi", role: "Quality Manager", department: "Microbiology", location: "Durban Coastal", email: "n.nkosi@nhls.ac.za", phone: "+27 31 240 2XXX", status: "away", initials: "NN" },
  { name: "Mr. Johan van der Merwe", role: "Systems Administrator", department: "IT & Digital", location: "NHLS HQ, Johannesburg", email: "j.vdmerwe@nhls.ac.za", phone: "+27 11 489 8XXX", status: "online", initials: "JM" },
  { name: "Dr. Amina Bashir", role: "Virologist", department: "Virology", location: "NICD Campus, Sandringham", email: "a.bashir@nhls.ac.za", phone: "+27 11 386 6XXX", status: "offline", initials: "AB" },
  { name: "Ms. Lerato Dlamini", role: "HR Business Partner", department: "Administration", location: "NHLS HQ, Johannesburg", email: "l.dlamini@nhls.ac.za", phone: "+27 11 489 8XXX", status: "online", initials: "LD" },
  { name: "Dr. Peter Govender", role: "Haematologist", department: "Haematology", location: "Pretoria Academic", email: "p.govender@nhls.ac.za", phone: "+27 12 319 2XXX", status: "away", initials: "PG" },
  { name: "Dr. Fatima Ismail", role: "Research Scientist", department: "Virology", location: "NICD Campus, Sandringham", email: "f.ismail@nhls.ac.za", phone: "+27 11 386 6XXX", status: "online", initials: "FI" },
];

const statusColors: Record<string, string> = {
  online: "bg-nhls-green",
  away: "bg-nhls-gold",
  offline: "bg-muted-foreground/40",
};

export function EmployeeDirectory() {
  const [search, setSearch] = useState("");
  const [selectedDept, setSelectedDept] = useState<string | null>(null);

  const filtered = employees.filter((emp) => {
    const matchesSearch =
      emp.name.toLowerCase().includes(search.toLowerCase()) ||
      emp.role.toLowerCase().includes(search.toLowerCase()) ||
      emp.department.toLowerCase().includes(search.toLowerCase());
    const matchesDept = !selectedDept || emp.department === selectedDept;
    return matchesSearch && matchesDept;
  });

  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
      {/* Department Overview */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
        {departments.map((dept) => (
          <Card
            key={dept.name}
            onClick={() => setSelectedDept(selectedDept === dept.name ? null : dept.name)}
            className={`nhls-card-hover cursor-pointer transition-all ${selectedDept === dept.name ? "ring-2 ring-primary" : ""}`}
          >
            <CardContent className="p-4 text-center">
              <div className={`w-3 h-3 rounded-full ${dept.color} mx-auto mb-2`} />
              <p className="text-sm font-medium truncate">{dept.name}</p>
              <p className="text-lg font-display font-bold">{dept.count}</p>
              <p className="text-[10px] text-muted-foreground">employees</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Search & Filter */}
      <Card className="nhls-card-hover">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <Building2 className="w-4 h-4 text-primary" />
              </div>
              <CardTitle className="text-base font-display">Employee Directory</CardTitle>
              <Badge variant="secondary" className="text-[10px]">{filtered.length} results</Badge>
            </div>
            {selectedDept && (
              <button
                onClick={() => setSelectedDept(null)}
                className="text-xs text-primary font-medium hover:underline"
              >
                Clear filter
              </button>
            )}
          </div>
          <div className="relative mt-3">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search by name, role, or department…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9"
            />
          </div>
        </CardHeader>
        <CardContent className="space-y-2">
          {filtered.map((emp, i) => (
            <div
              key={i}
              className="flex items-center gap-4 p-3 rounded-lg hover:bg-secondary/50 transition-colors cursor-pointer group"
            >
              <div className="relative">
                <Avatar className="w-10 h-10">
                  <AvatarFallback className="bg-primary/10 text-primary text-sm font-semibold">
                    {emp.initials}
                  </AvatarFallback>
                </Avatar>
                <span className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-card ${statusColors[emp.status]}`} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate group-hover:text-primary transition-colors">{emp.name}</p>
                <p className="text-xs text-muted-foreground">{emp.role} · {emp.department}</p>
              </div>
              <div className="hidden md:flex items-center gap-1 text-xs text-muted-foreground">
                <MapPin className="w-3 h-3" />
                <span className="truncate max-w-[160px]">{emp.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <button className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary/10 transition-colors" title={emp.email}>
                  <Mail className="w-3.5 h-3.5 text-muted-foreground" />
                </button>
                <button className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary/10 transition-colors" title={emp.phone}>
                  <Phone className="w-3.5 h-3.5 text-muted-foreground" />
                </button>
              </div>
              <ChevronRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}

          {filtered.length === 0 && (
            <div className="flex items-center justify-center h-32 text-sm text-muted-foreground">
              No employees found matching your search.
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}
