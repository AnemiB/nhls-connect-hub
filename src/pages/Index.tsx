import { useState } from "react";
import { IntranetSidebar } from "@/components/IntranetSidebar";
import { IntranetHeader } from "@/components/IntranetHeader";
import { MetricsDashboard } from "@/components/MetricsDashboard";
import { DocumentControlCenter } from "@/components/DocumentControlCenter";
import { NewsFeedAndEvents } from "@/components/NewsFeedAndEvents";
import { SecureLoginPanel } from "@/components/SecureLoginPanel";
import { EmployeeDirectory } from "@/components/EmployeeDirectory";

const Index = () => {
  const [activeSection, setActiveSection] = useState("dashboard");

  return (
    <div className="flex min-h-screen w-full">
      <IntranetSidebar activeSection={activeSection} onSectionChange={setActiveSection} />
      <div className="flex-1 flex flex-col min-w-0">
        <IntranetHeader />
        <main className="flex-1 p-6 space-y-4 overflow-y-auto">
          {/* Welcome Banner */}
          <div className="nhls-gradient rounded-xl p-6 text-sidebar-primary-foreground">
            <h1 className="text-xl font-display font-bold">Good morning, Dr. Mokoena</h1>
            <p className="text-sm text-sidebar-foreground/70 mt-1">Welcome to the NHLS Employee Intranet — your centralised hub for documents, communications, and lab operations.</p>
          </div>

          {activeSection === "dashboard" && (
            <>
              <MetricsDashboard />
              <DocumentControlCenter />
              <NewsFeedAndEvents />
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <SecureLoginPanel />
                <div className="nhls-gradient rounded-xl p-6 flex flex-col justify-center">
                  <h3 className="font-display font-bold text-sidebar-primary-foreground text-lg">Easy Content Management</h3>
                  <p className="text-sm text-sidebar-foreground/70 mt-2 leading-relaxed">
                    Upload reports, update news articles, and manage documents — no coding required.
                    Our SharePoint-integrated CMS empowers every staff member to contribute content
                    through intuitive drag-and-drop interfaces and guided workflows.
                  </p>
                  <div className="flex gap-3 mt-4">
                    <span className="text-[10px] bg-sidebar-accent text-sidebar-accent-foreground px-3 py-1.5 rounded-full font-medium">Drag & Drop Upload</span>
                    <span className="text-[10px] bg-sidebar-accent text-sidebar-accent-foreground px-3 py-1.5 rounded-full font-medium">Approval Workflows</span>
                    <span className="text-[10px] bg-sidebar-accent text-sidebar-accent-foreground px-3 py-1.5 rounded-full font-medium">Version Control</span>
                  </div>
                </div>
              </div>
            </>
          )}

          {activeSection === "documents" && <DocumentControlCenter />}
          {activeSection === "news" && <NewsFeedAndEvents />}
          {activeSection === "events" && <NewsFeedAndEvents />}
          {activeSection === "analytics" && <MetricsDashboard />}
          {activeSection === "security" && <SecureLoginPanel />}

          {activeSection === "directory" && <EmployeeDirectory />}

          {activeSection === "settings" && (
            <div className="flex items-center justify-center h-64 rounded-xl border border-border bg-card">
              <p className="text-muted-foreground text-sm">Settings — Coming Soon</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Index;
