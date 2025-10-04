import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, Loader2 } from "lucide-react";

const mockResponses = [
  {
    summary: "Your feedback shows a strong trend toward feature requests (35%) with login and dark mode being the most requested. Critical bugs account for 28% and need immediate attention. User satisfaction is moderate at 68%, with performance concerns being the primary pain point.",
    suggestions: [
      "Prioritize fixing the critical login page crash (#BUG-001)",
      "Consider implementing dark mode in the next sprint",
      "Improve page load times to address performance concerns",
      "Set up automated responses for common feature requests"
    ],
    patterns: "Common themes: 45% of users mention 'slow performance', 32% request 'better UI/UX', 28% report 'login issues'"
  },
  {
    summary: "Analysis reveals that 67% of feedback is actionable. The most urgent category is bugs (18 critical items), followed by performance issues (23 items). Feature requests show high user engagement with an average impact score of 4.2/5. Overall sentiment is positive but declining in the performance category.",
    suggestions: [
      "Create a dedicated bug-fix sprint for the next 2 weeks",
      "Implement performance monitoring tools",
      "Bundle related feature requests into themes",
      "Send proactive updates to users who reported performance issues"
    ],
    patterns: "Trending topics: 'mobile optimization' (+40% mentions), 'export features' (+25% mentions), 'notification settings' (+18% mentions)"
  },
  {
    summary: "Your team resolved 47 items this week (30% completion rate). High-urgency items average 2.4 days to resolution. Feature requests have the longest lifecycle at 8.3 days. User experience feedback increased 22% compared to last week, indicating growing product adoption.",
    suggestions: [
      "Reduce resolution time for high-urgency items to under 2 days",
      "Implement a triage system for incoming feedback",
      "Create template responses for top 5 feedback categories",
      "Schedule weekly sync with product team on trending requests"
    ],
    patterns: "Resolution patterns: Bugs resolved fastest (1.8d avg), Feature requests slowest (8.3d avg), 85% of urgent items addressed within SLA"
  },
  {
    summary: "Feedback volume is up 12% this week with a healthy mix across categories. Your responsiveness score is 4.1/5. Critical issues decreased by 15% thanks to recent fixes. Users are most engaged with pricing feedback (92% response rate) and least engaged with general positive feedback (34% response rate).",
    suggestions: [
      "Acknowledge all positive feedback to encourage more reporting",
      "Create a public roadmap to address frequent feature requests",
      "Set up automated escalation for critical issues",
      "Implement feedback loops - notify users when their requests are implemented"
    ],
    patterns: "User behavior: 60% of feedback comes from power users, 25% from new users, 15% from churned users. Weekend feedback 40% lower than weekdays."
  }
];

const AIInsights = () => {
  const [loading, setLoading] = useState(false);
  const [currentResponse, setCurrentResponse] = useState(mockResponses[0]);
  const [notes, setNotes] = useState("");

  const generateInsights = () => {
    setLoading(true);
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * mockResponses.length);
      setCurrentResponse(mockResponses[randomIndex]);
      setLoading(false);
    }, 2000 + Math.random() * 1500);
  };

  return (
    <div className="flex-1 p-8 animate-fade-in">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2 flex items-center gap-3">
          <Sparkles className="w-8 h-8 text-primary" />
          AI Insights
        </h1>
        <p className="text-muted-foreground">AI-powered analysis of your feedback</p>
      </div>

      <div className="grid gap-6">
        <Card className="hover:shadow-lg transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-primary animate-pulse-glow" />
                Summary
              </CardTitle>
              <CardDescription>AI-generated overview of your feedback</CardDescription>
            </div>
            <Button
              onClick={generateInsights}
              disabled={loading}
              className="gap-2"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Analyzing...
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  Generate New Insights
                </>
              )}
            </Button>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="space-y-4 animate-pulse">
                <div className="h-4 bg-muted rounded w-full"></div>
                <div className="h-4 bg-muted rounded w-5/6"></div>
                <div className="h-4 bg-muted rounded w-4/6"></div>
              </div>
            ) : (
              <div className="prose prose-sm max-w-none animate-fade-in">
                <p className="text-foreground leading-relaxed">{currentResponse.summary}</p>
              </div>
            )}
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-all duration-300">
          <CardHeader>
            <CardTitle>AI Suggestions</CardTitle>
            <CardDescription>Recommended actions based on your data</CardDescription>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="space-y-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-12 bg-muted rounded animate-pulse"></div>
                ))}
              </div>
            ) : (
              <div className="space-y-3">
                {currentResponse.suggestions.map((suggestion, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-lg border border-border hover:bg-muted/50 transition-all cursor-pointer animate-fade-in hover:scale-[1.02]"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-medium text-primary">{index + 1}</span>
                      </div>
                      <p className="text-sm text-foreground">{suggestion}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-all duration-300">
          <CardHeader>
            <CardTitle>Pattern Recognition</CardTitle>
            <CardDescription>Common themes and trends identified</CardDescription>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="space-y-3">
                <div className="h-4 bg-muted rounded w-full animate-pulse"></div>
                <div className="h-4 bg-muted rounded w-4/5 animate-pulse"></div>
              </div>
            ) : (
              <div className="p-4 rounded-lg bg-primary/5 border border-primary/20 animate-fade-in">
                <p className="text-sm text-foreground leading-relaxed">{currentResponse.patterns}</p>
              </div>
            )}
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-all duration-300">
          <CardHeader>
            <CardTitle>Notes Editor</CardTitle>
            <CardDescription>Add context to your feedback items (syncs with CSV)</CardDescription>
          </CardHeader>
          <CardContent>
            <textarea
              className="w-full min-h-32 p-4 rounded-lg border border-border bg-background resize-none focus:outline-none focus:ring-2 focus:ring-ring transition-all"
              placeholder="Add notes that sync with your CSV..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
            <div className="mt-3 flex justify-end">
              <Button variant="outline" size="sm">
                Save to CSV
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AIInsights;
