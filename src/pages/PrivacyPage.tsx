import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteConfig } from "@/config/siteConfig";

const PrivacyPage = () => (
  <>
    <Helmet>
      <title>Privacy Policy | {siteConfig.siteName}</title>
      <meta name="description" content={`Privacy Policy for ${siteConfig.siteName} — how we handle your data when you download free PC games.`} />
      <link rel="canonical" href={`${siteConfig.siteUrl}/privacy`} />
    </Helmet>
    <Header />
    <main className="container mx-auto max-w-3xl px-4 py-12">
      <h1 className="mb-6 text-3xl font-bold">Privacy Policy</h1>
      <div className="prose-blog space-y-4 text-foreground/85">
        <p>Last updated: March 28, 2026</p>

        <h2>Information We Collect</h2>
        <p>{siteConfig.siteName} provides free PC game downloads. We collect minimal information necessary to operate the site, including standard web server logs (IP address, browser type, pages visited, download activity) and any information you voluntarily submit through our contact form.</p>

        <h2>Download Tracking</h2>
        <p>When you download a game from our site, we may log basic download statistics such as which games are downloaded and general geographic region. This data is anonymized and used solely to improve our content and recommend popular titles.</p>

        <h2>Cookies &amp; Tracking</h2>
        <p>We use essential cookies for theme preferences (dark/light mode) and language selection. We may also use analytics cookies (such as Google Analytics) to understand how visitors interact with our site. You can disable cookies in your browser settings at any time.</p>

        <h2>Third-Party Services &amp; Advertisements</h2>
        <p>We display advertisements through ad networks such as Google AdSense, which use cookies to serve ads based on your browsing history. Game download links may redirect through intermediate pages that contain advertisements. You can opt out of personalized advertising at <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Ads Settings</a>.</p>

        <h2>External Download Links</h2>
        <p>Some download links on {siteConfig.siteName} may direct you to third-party hosting services. We are not responsible for the privacy practices of these external sites. We recommend reviewing their privacy policies before providing any personal information.</p>

        <h2>Data Retention</h2>
        <p>Server logs are retained for 30 days. Download statistics are kept in aggregate form indefinitely. We do not sell, trade, or transfer your personally identifiable information to outside parties.</p>

        <h2>Children's Privacy</h2>
        <p>Our site is not intended for children under 13. We do not knowingly collect personal information from children. Some games featured on our site may contain mature content — please check game ratings before downloading.</p>

        <h2>Contact</h2>
        <p>If you have questions about this privacy policy, please reach out via our <a href="/contact" className="text-primary hover:underline">Contact page</a>.</p>
      </div>
    </main>
    <Footer />
  </>
);

export default PrivacyPage;
