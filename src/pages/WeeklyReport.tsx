import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { TrendingUp, TrendingDown } from "lucide-react";

const dailyTrendData = [
  { day: "Mon", count: 18 },
  { day: "Tue", count: 24 },
  { day: "Wed", count: 20 },
  { day: "Thu", count: 28 },
  { day: "Fri", count: 26 },
  { day: "Sat", count: 22 },
  { day: "Sun", count: 18 },
];

const categoryData = [
  { name: "Feature Request", value: 38, color: "#FF5733" },
  { name: "Bug", value: 25, color: "#C70039" },
  { name: "Performance", value: 17, color: "#900C3F" },
  { name: "UX", value: 12, color: "#581845" },
  { name: "Other", value: 8, color: "#FFC300" },
];

const WeeklyReport = () => {
  return (
    <div className="flex-1 p-8 animate-fade-in">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Weekly Report</h1>
        <p className="text-muted-foreground">Week of Jan 1 - Jan 7, 2025</p>
      </div>

      <div className="grid md:grid-cols-4 gap-6 mb-8">
        <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
          <CardHeader className="pb-3">
            <CardDescription>Total Feedback</CardDescription>
            <CardTitle className="text-3xl">156</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2 text-xs text-green-600">
              <TrendingUp className="w-4 h-4" />
              <span>+12% from last week</span>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
          <CardHeader className="pb-3">
            <CardDescription>Urgent Issues</CardDescription>
            <CardTitle className="text-3xl text-destructive">23</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2 text-xs text-red-600">
              <TrendingUp className="w-4 h-4" />
              <span>+5 new this week</span>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
          <CardHeader className="pb-3">
            <CardDescription>Completed</CardDescription>
            <CardTitle className="text-3xl text-primary">47</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2 text-xs text-green-600">
              <TrendingUp className="w-4 h-4" />
              <span>30% completion rate</span>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
          <CardHeader className="pb-3">
            <CardDescription>Avg Response Time</CardDescription>
            <CardTitle className="text-3xl">2.4d</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2 text-xs text-green-600">
              <TrendingDown className="w-4 h-4" />
              <span>-0.3d improvement</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="hover:shadow-lg transition-all duration-300">
          <CardHeader>
            <CardTitle>Daily Feedback Trend</CardTitle>
            <CardDescription>Submissions per day</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={dailyTrendData}>
                <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="count"
                  stroke="#FF5733"
                  strokeWidth={3}
                  dot={{ fill: "#FF5733", r: 6 }}
                  animationDuration={1000}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-all duration-300">
          <CardHeader>
            <CardTitle>Category Breakdown</CardTitle>
            <CardDescription>This week's distribution</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  animationDuration={1000}
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <Card className="hover:shadow-lg transition-all duration-300">
        <CardHeader>
          <CardTitle>Top Priority Issues</CardTitle>
          <CardDescription>Items requiring immediate attention</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-muted/50 transition-all cursor-pointer animate-fade-in">
              <div className="flex-1">
                <h4 className="font-medium mb-1">#BUG-001: Login page crash</h4>
                <p className="text-sm text-muted-foreground">Critical bug affecting authentication</p>
              </div>
              <span className="text-xs bg-destructive/10 text-destructive px-3 py-1 rounded-full animate-pulse-glow">
                Critical
              </span>
            </div>
            <div className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-muted/50 transition-all cursor-pointer animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="flex-1">
                <h4 className="font-medium mb-1">#PERF-001: Slow page load</h4>
                <p className="text-sm text-muted-foreground">Performance issues reported by users</p>
              </div>
              <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
                High
              </span>
            </div>
            <div className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-muted/50 transition-all cursor-pointer animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="flex-1">
                <h4 className="font-medium mb-1">#FR-001: Dark mode support</h4>
                <p className="text-sm text-muted-foreground">Most requested feature</p>
              </div>
              <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
                High
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WeeklyReport;
