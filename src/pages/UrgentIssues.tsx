import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { AlertCircle } from "lucide-react";

const UrgentIssues = () => {
  return (
    <div className="flex-1 p-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2 flex items-center gap-2">
            <AlertCircle className="w-8 h-8 text-destructive" />
            Urgent Issues
          </h1>
          <p className="text-muted-foreground">High priority items requiring immediate attention</p>
        </div>
        <Button>Mark selected as complete</Button>
      </div>

      <div className="space-y-4">
        <Card className="border-l-4 border-l-destructive">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-3">
                <Checkbox className="mt-1" />
                <div>
                  <CardTitle className="text-lg">#BUG-001: Login page crash</CardTitle>
                  <CardDescription className="mt-1">
                    Critical bug affecting user authentication
                  </CardDescription>
                </div>
              </div>
              <span className="text-xs bg-destructive/10 text-destructive px-3 py-1 rounded-full font-medium">
                Critical
              </span>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div>
                <span className="text-muted-foreground">Category:</span>
                <span className="ml-2 font-medium">Bug</span>
              </div>
              <div>
                <span className="text-muted-foreground">Impact:</span>
                <span className="ml-2 font-medium">High</span>
              </div>
              <div>
                <span className="text-muted-foreground">Status:</span>
                <span className="ml-2 font-medium">Not Started</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-primary">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-3">
                <Checkbox className="mt-1" />
                <div>
                  <CardTitle className="text-lg">#FR-001: Dark mode support</CardTitle>
                  <CardDescription className="mt-1">
                    Frequently requested feature by users
                  </CardDescription>
                </div>
              </div>
              <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
                High
              </span>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div>
                <span className="text-muted-foreground">Category:</span>
                <span className="ml-2 font-medium">Feature Request</span>
              </div>
              <div>
                <span className="text-muted-foreground">Impact:</span>
                <span className="ml-2 font-medium">Medium</span>
              </div>
              <div>
                <span className="text-muted-foreground">Status:</span>
                <span className="ml-2 font-medium">Ongoing</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-primary">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-3">
                <Checkbox className="mt-1" />
                <div>
                  <CardTitle className="text-lg">#PERF-001: Slow page load times</CardTitle>
                  <CardDescription className="mt-1">
                    Performance degradation reported by multiple users
                  </CardDescription>
                </div>
              </div>
              <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
                High
              </span>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div>
                <span className="text-muted-foreground">Category:</span>
                <span className="ml-2 font-medium">Performance</span>
              </div>
              <div>
                <span className="text-muted-foreground">Impact:</span>
                <span className="ml-2 font-medium">High</span>
              </div>
              <div>
                <span className="text-muted-foreground">Status:</span>
                <span className="ml-2 font-medium">Not Started</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UrgentIssues;
