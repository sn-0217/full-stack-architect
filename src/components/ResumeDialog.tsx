import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Download, FileText, Folder, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const resumeFiles = [
  {
    name: "Full Stack Architect - Main.pdf",
    url: "https://docs.google.com/document/d/1yj4-YVBzwYbTrB_-aWKiwuw6l_fNDCdJ/export?format=pdf",
    date: "Updated 2 days ago",
    size: "1.2 MB",
    tag: "Recommended"
  },
  {
    name: "Frontend Specialist - Resume.pdf",
    url: "https://docs.google.com/document/d/1yj4-YVBzwYbTrB_-aWKiwuw6l_fNDCdJ/export?format=pdf",
    date: "Updated 1 week ago",
    size: "1.1 MB",
    tag: "Technical Focus"
  },
  {
    name: "System Design Portfolio.pdf",
    url: "https://docs.google.com/document/d/1yj4-YVBzwYbTrB_-aWKiwuw6l_fNDCdJ/export?format=pdf",
    date: "Updated 1 month ago",
    size: "4.5 MB",
    tag: "Portfolio"
  }
];

export function ResumeDialog({ trigger }: { trigger?: React.ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger || (
          <Button variant="outline" className="ml-2 inline-flex items-center gap-2 text-sm font-medium px-5 py-2 rounded-lg bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-all duration-300">
             <Download className="h-3.5 w-3.5" />
             Resume
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[480px] bg-background/95 backdrop-blur-2xl border-border/50 shadow-2xl p-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 pointer-events-none" />
        
        <DialogHeader className="p-6 pb-0 relative">
          <div className="flex items-center gap-3 mb-1">
            <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/20">
              <Folder className="h-5 w-5 text-primary" />
            </div>
            <div>
              <DialogTitle className="text-xl font-heading font-bold tracking-tight">Cloud Drive</DialogTitle>
              <p className="text-xs text-muted-foreground">/Documents/Resumes</p>
            </div>
          </div>
        </DialogHeader>

        <div className="p-6 relative">
          <div className="space-y-3">
            {resumeFiles.map((file, idx) => (
              <div 
                key={idx}
                className="group relative flex items-center justify-between p-4 rounded-2xl border border-border/40 bg-secondary/20 hover:bg-secondary/40 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-500"
              >
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="p-3 rounded-xl bg-background border border-border/50 group-hover:border-primary/30 transition-all duration-500 shadow-sm">
                      <FileText className="h-6 w-6 text-primary/80 group-hover:text-primary transition-colors" />
                    </div>
                    {idx === 0 && (
                      <span className="absolute -top-1 -right-1 flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                       <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors truncate max-w-[160px] md:max-w-[200px]">
                        {file.name}
                      </span>
                      {file.tag && (
                        <span className="text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-md bg-primary/10 text-primary border border-primary/10">
                          {file.tag}
                        </span>
                      )}
                    </div>
                    <span className="text-[11px] text-muted-foreground flex items-center gap-2 mt-0.5">
                      {file.size} • {file.date}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center gap-1.5">
                  <a 
                    href={file.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl hover:bg-background border border-transparent hover:border-border/50 text-muted-foreground hover:text-foreground transition-all duration-300"
                    title="Preview"
                  >
                    <ExternalLink className="h-4.5 w-4.5" />
                  </a>
                  <a 
                    href={file.url}
                    download
                    className="p-2.5 rounded-xl bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/20 hover:scale-105 active:scale-95 transition-all duration-300"
                    title="Download"
                  >
                    <Download className="h-4.5 w-4.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 flex items-center justify-between px-2">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-6 w-6 rounded-full border-2 border-background bg-secondary flex items-center justify-center overflow-hidden">
                  <div className="h-full w-full bg-gradient-to-br from-primary/20 to-primary/40" />
                </div>
              ))}
              <div className="h-6 w-6 rounded-full border-2 border-background bg-secondary flex items-center justify-center text-[10px] font-bold text-muted-foreground">
                +8
              </div>
            </div>
            <span className="text-[11px] text-muted-foreground font-medium">Shared with 12 collaborators</span>
          </div>
        </div>

        <div className="p-4 bg-secondary/30 border-t border-border/50 flex items-center justify-between">
            <span className="text-[10px] text-muted-foreground font-medium uppercase tracking-[0.2em]">Google Drive Integration</span>
            <div className="flex items-center gap-1">
                <div className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] font-bold text-green-500 uppercase tracking-wider">Storage Sync Active</span>
            </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
