import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";

// Lazy load pages for better performance
const Home = lazy(() => import("./pages/Home"));
const Apply = lazy(() => import("./pages/Apply"));
const Faucet = lazy(() => import("./pages/Faucet"));
const Careers = lazy(() => import("./pages/Careers"));
const Partnerships = lazy(() => import("./pages/Partnerships"));
const Terms = lazy(() => import("./pages/Terms"));
const Privacy = lazy(() => import("./pages/Privacy"));
const NotFound = lazy(() => import("@/pages/NotFound"));

// Loading fallback component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen bg-background">
    <div className="flex flex-col items-center gap-4">
      <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      <p className="text-muted-foreground">Loading...</p>
    </div>
  </div>
);

function Router() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        <Route path={"/"} component={Home} />
        <Route path={"/apply"} component={Apply} />
        <Route path={"/faucet"} component={Faucet} />
        <Route path={"/careers"} component={Careers} />
        <Route path={"/partnerships"} component={Partnerships} />
        <Route path={"/terms"} component={Terms} />
        <Route path={"/privacy"} component={Privacy} />
        <Route path={"/404"} component={NotFound} />
        {/* Final fallback route */}
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="dark"
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
