import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/i18n/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdSlot from "@/components/AdSlot";
import { Download, Shield, Clock, ExternalLink } from "lucide-react";

const COUNTDOWN_SECONDS = 15;

const DownloadRedirectPage = () => {
  const [searchParams] = useSearchParams();
  const { t, langPrefix } = useLanguage();
  const url = searchParams.get("url") || "#";
  const gameName = searchParams.get("game") || "Game";

  const [countdown, setCountdown] = useState(COUNTDOWN_SECONDS);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (countdown <= 0) {
      setReady(true);
      return;
    }
    const timer = setTimeout(() => setCountdown((c) => c - 1), 1000);
    return () => clearTimeout(timer);
  }, [countdown]);

  // Auto-redirect fallback after countdown
  useEffect(() => {
    if (ready && url !== "#") {
      const fallback = setTimeout(() => {
        window.location.href = url;
      }, 5000);
      return () => clearTimeout(fallback);
    }
  }, [ready, url]);

  const progress = ((COUNTDOWN_SECONDS - countdown) / COUNTDOWN_SECONDS) * 100;

  return (
    <>
      <Helmet>
        <title>{`Download ${gameName} - TempoBet`}</title>
        <meta name="description" content={`Download ${gameName} for free. Your download will begin shortly.`} />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <Header />
      <main className="min-h-[70vh] flex flex-col items-center justify-center px-4 py-12">
        {/* Top Ad - Responsive: Leaderboard on desktop, Rectangle on mobile */}
        <div className="w-full max-w-3xl mb-8 flex justify-center">
          <div className="hidden md:block">
            <AdSlot type="leaderboard" />
          </div>
          <div className="block md:hidden">
            <AdSlot type="rectangle" />
          </div>
        </div>

        {/* Main Card */}
        <div className="w-full max-w-lg rounded-2xl border border-border bg-card p-8 text-center shadow-2xl">
          <div className="mb-6 flex justify-center">
            <div className="rounded-full bg-primary/10 p-4">
              <Download className="h-10 w-10 text-primary animate-bounce" />
            </div>
          </div>

          <h1 className="mb-2 text-2xl font-bold text-foreground">
            {gameName}
          </h1>
          <p className="mb-6 text-muted-foreground">
            Your download is being prepared…
          </p>

          {/* Progress bar */}
          <div className="mb-4 h-3 w-full overflow-hidden rounded-full bg-muted">
            <div
              className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-1000 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>

          {!ready ? (
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>Please wait <strong className="text-foreground">{countdown}s</strong></span>
            </div>
          ) : (
            <a
              href={url}
              className="btn-download mt-4 inline-flex text-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="h-5 w-5" />
              Continue to Download
            </a>
          )}

          <div className="mt-6 flex items-center justify-center gap-2 text-xs text-muted-foreground">
            <Shield className="h-3.5 w-3.5" />
            <span>Scanned & verified — Safe to download</span>
          </div>
        </div>

        {/* Middle Ad - Responsive: Leaderboard on desktop, Rectangle on mobile */}
        <div className="w-full max-w-3xl my-8 flex justify-center">
          <div className="hidden md:block">
            <AdSlot type="leaderboard" />
          </div>
          <div className="block md:hidden">
            <AdSlot type="rectangle" />
          </div>
        </div>

        {/* Bottom Ad - Responsive: Leaderboard on desktop, Rectangle on mobile */}
        <div className="w-full max-w-3xl flex justify-center">
          <div className="hidden md:block">
            <AdSlot type="leaderboard" />
          </div>
          <div className="block md:hidden">
            <AdSlot type="rectangle" />
          </div>
        </div>

        <Link to={langPrefix} className="mt-8 text-sm text-primary hover:underline">
          ← {t.common.backToHome}
        </Link>
      </main>
      <Footer />
    </>
  );
};

export default DownloadRedirectPage;