import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteConfig } from "@/config/siteConfig";

const ContactPage = () => (
  <>
    <Helmet>
      <title>Contact Us | {siteConfig.siteName}</title>
      <meta name="description" content={`Get in touch with the ${siteConfig.siteName} team for game requests, broken links, DMCA claims, or business inquiries.`} />
      <link rel="canonical" href={`${siteConfig.siteUrl}/contact`} />
    </Helmet>
    <Header />
    <main className="container mx-auto max-w-3xl px-4 py-12">
      <h1 className="mb-6 text-3xl font-bold">Contact Us</h1>
      <div className="prose-blog space-y-4 text-foreground/85">
        <p>We'd love to hear from you! Whether you have a game request, found a broken download link, or have a business inquiry, don't hesitate to reach out.</p>

        <h2>Game Requests</h2>
        <p>Want us to add a specific game to our library? Send us the game name, developer, and any relevant links. We'll review it and add it if it meets our criteria.</p>
        <p>Email: <strong>games@pcgamearchive.com</strong></p>

        <h2>Report Broken Links</h2>
        <p>If you find a download link that's not working or a game page with incorrect information, please let us know so we can fix it as quickly as possible.</p>
        <p>Email: <strong>support@pcgamearchive.com</strong></p>

        <h2>DMCA &amp; Copyright Claims</h2>
        <p>If you are a rights holder and believe your content is being used without authorization, please contact us with the following details:</p>
        <ul>
          <li>Identification of the copyrighted work</li>
          <li>The specific URL on our site</li>
          <li>Your contact information</li>
          <li>A statement of good faith</li>
        </ul>
        <p>Email: <strong>dmca@pcgamearchive.com</strong></p>

        <h2>Business &amp; Advertising</h2>
        <p>For advertising partnerships, sponsored listings, or press inquiries, please contact us at <strong>partnerships@pcgamearchive.com</strong>.</p>

        <h2>General Inquiries</h2>
        <p>For anything else, reach out at <strong>hello@pcgamearchive.com</strong> and we'll get back to you within 48 hours.</p>
      </div>
    </main>
    <Footer />
  </>
);

export default ContactPage;
