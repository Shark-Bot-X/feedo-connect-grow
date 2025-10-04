import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, Search } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Dashboard = () => {
  const [csvUploaded, setCsvUploaded] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { toast } = useToast();

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type === "text/csv") {
      setCsvUploaded(true);
      toast({
        title: "CSV uploaded successfully",
        description: `Processing ${file.name}...`,
      });
    } else {
      toast({
        title: "Invalid file",
        description: "Please upload a CSV file",
        variant: "destructive",
      });
    }
  };

  if (!csvUploaded) {
    return (
      <div className="flex-1 p-8 flex items-center justify-center">
        <Card className="max-w-md w-full">
          <CardHeader>
            <CardTitle>Upload Feedback CSV</CardTitle>
            <CardDescription>
              Upload your feedback CSV file to get started with AI-powered insights
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="border-2 border-dashed border-border rounded-lg p-12 text-center hover:border-primary transition-colors cursor-pointer">
              <label htmlFor="csv-upload" className="cursor-pointer">
                <Upload className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                <p className="text-sm text-muted-foreground mb-2">
                  Click to upload or drag and drop
                </p>
                <p className="text-xs text-muted-foreground">
                  CSV file with feedback data
                </p>
                <input
                  id="csv-upload"
                  type="file"
                  accept=".csv"
                  className="hidden"
                  onChange={handleFileUpload}
                />
              </label>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex-1 p-8 animate-fade-in">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
        <p className="text-muted-foreground">Overview of your feedback data</p>
      </div>

      <div className="mb-6">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            placeholder="Search by feedback ID..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 transition-all focus:scale-[1.02]"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <Card className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
          <CardHeader>
            <CardTitle>Feature Requests</CardTitle>
            <CardDescription>24 items</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="p-3 rounded-lg border border-border hover:bg-muted/50 transition-all cursor-pointer hover:scale-[1.02]">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium">#FR-001</span>
                  <span className="text-xs text-primary font-medium">High</span>
                </div>
                <p className="text-sm text-muted-foreground">Dark mode support</p>
              </div>
              <div className="p-3 rounded-lg border border-border hover:bg-muted/50 transition-all cursor-pointer hover:scale-[1.02]">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium">#FR-002</span>
                  <span className="text-xs text-muted-foreground font-medium">Medium</span>
                </div>
                <p className="text-sm text-muted-foreground">Bulk export feature</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
          <CardHeader>
            <CardTitle>Bug Reports</CardTitle>
            <CardDescription>12 items</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="p-3 rounded-lg border border-border hover:bg-muted/50 transition-all cursor-pointer hover:scale-[1.02]">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium">#BUG-001</span>
                  <span className="text-xs text-destructive font-medium">Critical</span>
                </div>
                <p className="text-sm text-muted-foreground">Login page crash</p>
              </div>
              <div className="p-3 rounded-lg border border-border hover:bg-muted/50 transition-all cursor-pointer hover:scale-[1.02]">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium">#BUG-002</span>
                  <span className="text-xs text-primary font-medium">High</span>
                </div>
                <p className="text-sm text-muted-foreground">Data sync issues</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
          <CardHeader>
            <CardTitle>Performance</CardTitle>
            <CardDescription>8 items</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="p-3 rounded-lg border border-border hover:bg-muted/50 transition-all cursor-pointer hover:scale-[1.02]">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium">#PERF-001</span>
                  <span className="text-xs text-primary font-medium">High</span>
                </div>
                <p className="text-sm text-muted-foreground">Slow page load</p>
              </div>
              <div className="p-3 rounded-lg border border-border hover:bg-muted/50 transition-all cursor-pointer hover:scale-[1.02]">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium">#PERF-002</span>
                  <span className="text-xs text-muted-foreground font-medium">Medium</span>
                </div>
                <p className="text-sm text-muted-foreground">API latency</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
