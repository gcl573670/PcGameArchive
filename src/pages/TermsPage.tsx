import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteConfig } from "@/config/siteConfig";

const TermsPage = () => (
  <>
    <Helmet>
      <title>Terms & Conditions | {siteConfig.siteName}</title>
      <meta name="description" content={`Terms and Conditions for ${siteConfig.siteName} — rules for using our free PC game download service.`} />
      <link rel="canonical" href={`${siteConfig.siteUrl}/terms`} />
    </Helmet>
    <Header />
    <main className="container mx-auto max-w-3xl px-4 py-12">
      <h1 className="mb-6 text-3xl font-bold">Terms &amp; Conditions</h1>
      <div className="prose-blog space-y-4 text-foreground/85">
        <p>Last updated: March 28, 2026</p>

        <h2>Acceptance of Terms</h2>
        <p>By accessing {siteConfig.siteName} and downloading any games from our site, you agree to be bound by these terms and conditions. If you do not agree, please do not use our services.</p>

        <h2>Game Downloads &amp; Content</h2>
        <p>{siteConfig.siteName} provides links to free PC game downloads. We do not host game files directly. All games featured on our site are either free-to-play, freeware, or publicly available demos. We are not affiliated with the game developers or publishers unless explicitly stated.</p>

        <h2>User Responsibility</h2>
        <p>You are solely responsible for ensuring that downloading and using any game complies with the laws of your jurisdiction. You agree to scan all downloaded files with antivirus software before installation. {siteConfig.siteName} is not responsible for any damage to your system resulting from downloaded content.</p>

        <h2>Intellectual Property</h2>
        <p>Game trademarks, logos, and media belong to their respective developers and publishers. Original content on {siteConfig.siteName}, including reviews, descriptions, and graphics, is our property and protected by copyright law. You may not reproduce or distribute our original content without written permission.</p>

        <h2>Advertisements &amp; Redirect Pages</h2>
        <p>Our site displays advertisements and uses intermediate redirect pages before downloads. These pages may contain ads from third-party networks. By using our download service, you acknowledge and accept the presence of these advertisements.</p>

        <h2>Affiliate Links</h2>
        <p>Some links on this site may be affiliate links. We may earn a commission if you purchase a product through these links, at no additional cost to you.</p>

        <h2>Disclaimer of Warranties</h2>
        <p>All games and content are provided "as is" without warranty of any kind. We do not guarantee that download links will always be functional, that games will be compatible with your system, or that file sizes and system requirements listed are accurate at all times.</p>

        <h2>Limitation of Liability</h2>
        <p>{siteConfig.siteName} shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use of this website, downloading of games, or reliance on any information provided. Game availability, prices, and features may change without notice.</p>

        <h2>DMCA &amp; Copyright Claims</h2>
        <p>If you believe any content on our site infringes your copyright, please contact us via our <a href="/contact" className="text-primary hover:underline">Contact page</a> with details of the alleged infringement. We will respond promptly to valid takedown requests.</p>

        <h2>Changes to These Terms</h2>
        <p>We reserve the right to update these terms at any time. Continued use of the site after changes constitutes acceptance of the modified terms.</p>
      </div>
    </main>
    <Footer />
  </>
);

export default TermsPage;
