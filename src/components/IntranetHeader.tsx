import { Search, Bell, Shield, User } from "lucide-react";
import { Input } from "@/components/ui/input";

export function IntranetHeader() {
  return (
    <header className="h-16 bg-card border-b border-border flex items-center justify-between px-6 sticky top-0 z-10">
      <div className="flex items-center gap-4 flex-1 max-w-xl">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search documents, news, people..."
            className="pl-10 bg-secondary border-0 focus-visible:ring-primary"
          />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <span className="nhls-secure-badge">
          <Shield className="w-3 h-3" />
          Secure Environment
        </span>
        <span className="nhls-internal-badge">
          Internal Only
        </span>

        <button className="relative p-2 rounded-lg hover:bg-secondary transition-colors">
          <Bell className="w-5 h-5 text-muted-foreground" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-nhls-red rounded-full" />
        </button>

        <div className="flex items-center gap-2 pl-3 border-l border-border">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <User className="w-4 h-4 text-primary-foreground" />
          </div>
          <div className="hidden md:block">
            <p className="text-sm font-medium">Dr. N. Mokoena</p>
            <p className="text-xs text-muted-foreground">Lab Director</p>
          </div>
        </div>
      </div>
    </header>
  );
}
