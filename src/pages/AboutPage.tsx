import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteConfig } from "@/config/siteConfig";

const AboutPage = () => (
  <>
    <Helmet>
      <title>About Us | {siteConfig.siteName}</title>
      <meta name="description" content={`Learn about ${siteConfig.siteName} — your trusted source for free PC game downloads across all genres.`} />
      <link rel="canonical" href={`${siteConfig.siteUrl}/about`} />
    </Helmet>
    <Header />
    <main className="container mx-auto max-w-3xl px-4 py-12">
      <h1 className="mb-6 text-3xl font-bold">About {siteConfig.siteName}</h1>
      <div className="prose-blog space-y-4 text-foreground/85">
        <p>{siteConfig.siteName} is a dedicated platform for PC gamers who want to discover and download the latest free games. We curate titles across every genre — from action-packed shooters to immersive RPGs, horror experiences, indie gems, and grand strategy epics.</p>

        <h2>Our Mission</h2>
        <p>We believe great gaming should be accessible to everyone. Our mission is to provide a clean, safe, and easy-to-navigate platform where gamers can find free PC games, read detailed descriptions, check system requirements, and download with confidence.</p>

        <h2>What We Offer</h2>
        <ul>
          <li><strong>Curated Game Library</strong> — We hand-pick games across 9+ categories including Action, Adventure, Horror, Indie, Open World, Simulation, Sports, Shooter, and Strategy.</li>
          <li><strong>Detailed Game Pages</strong> — Every game listing includes screenshots, system requirements, trailers, and comprehensive descriptions to help you decide before downloading.</li>
          <li><strong>Multi-Language Support</strong> — Our site is available in English, German, French, Spanish, and Arabic to serve gamers worldwide.</li>
          <li><strong>Regular Updates</strong> — We continuously add new games and update existing listings to keep our library fresh.</li>
        </ul>

        <h2>Our Standards</h2>
        <p>Every game featured on {siteConfig.siteName} is verified for quality. We check download links, verify system requirements, and ensure game descriptions are accurate. We only feature games that are legitimately free or have free versions available.</p>

        <h2>Community</h2>
        <p>We're building a community of PC gaming enthusiasts. Follow us on our social media channels to stay updated on the latest game additions and gaming news.</p>
      </div>
    </main>
    <Footer />
  </>
);

export default AboutPage;
