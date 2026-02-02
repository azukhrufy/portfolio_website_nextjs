import Head from 'next/head';
import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import AlternateTimeline from '../components/MuiTimeline/AlternateTimeline';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

const Home = () => {
  return (
    <>
      <Head>
        <title>Ananda Zukhruf Awalwi - Software Engineer | Frontend Engineer | Programmer</title>
        <meta name="description" content="Ananda Zukhruf Awalwi is a Software Engineer and Frontend Engineer with 5+ years of experience in building scalable web applications. Currently working at MySkill.id, previously at Neural Technologies Indonesia (NTI). Based in Bandung, Indonesia." />
        <meta name="keywords" content="software engineer, frontend engineer, programmer, Ananda Zukhruf, Ananda Zukhruf Awalwi, MySkill.id, NTI, Neural Technologies Indonesia, Bandung, Indonesia, web developer, React, Next.js, Node.js" />
        <meta name="author" content="Ananda Zukhruf Awalwi" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://azukhrufy.vercel.app" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://azukhrufy.vercel.app" />
        <meta property="og:title" content="Ananda Zukhruf Awalwi - Software Engineer | Frontend Engineer" />
        <meta property="og:description" content="Software Engineer and Frontend Engineer from Bandung, Indonesia with 5+ years of experience. Working at MySkill.id, building scalable web applications with React and Next.js." />
        <meta property="og:image" content="https://azukhrufy.vercel.app/images/profile.jpg" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Ananda Zukhruf Awalwi Portfolio" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://azukhrufy.vercel.app" />
        <meta property="twitter:title" content="Ananda Zukhruf Awalwi - Software Engineer | Frontend Engineer" />
        <meta property="twitter:description" content="Software Engineer and Frontend Engineer from Bandung, Indonesia. Building scalable web applications with React and Next.js." />
        <meta property="twitter:image" content="https://azukhrufy.vercel.app/images/profile.jpg" />
        
        {/* Additional SEO */}
        <meta name="geo.region" content="ID-JB" />
        <meta name="geo.placename" content="Bandung" />
        <meta name="geo.position" content="-6.914744;107.609810" />
        <meta name="ICBM" content="-6.914744, 107.609810" />
        
        {/* Structured Data - JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Ananda Zukhruf Awalwi",
              "alternateName": "Ananda Zukhruf",
              "url": "https://azukhrufy.vercel.app",
              "image": "https://azukhrufy.vercel.app/images/profile.jpg",
              "jobTitle": ["Software Engineer", "Frontend Engineer", "Programmer"],
              "worksFor": [
                {
                  "@type": "Organization",
                  "name": "MySkill.id"
                },
                {
                  "@type": "Organization",
                  "name": "Neural Technologies Indonesia",
                  "alternateName": "NTI"
                }
              ],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Bandung",
                "addressRegion": "West Java",
                "addressCountry": "Indonesia"
              },
              "email": "anandazukhruf@gmail.com",
              "sameAs": [
                "https://www.linkedin.com/in/azukhrufy/",
                "https://github.com/azukhrufy",
                "https://gitlab.com/azukhrufy"
              ],
              "knowsAbout": [
                "Software Engineering",
                "Frontend Development",
                "Web Development",
                "React",
                "Next.js",
                "Node.js",
                "JavaScript",
                "TypeScript"
              ],
              "alumniOf": {
                "@type": "EducationalOrganization",
                "name": "Politeknik Negeri Bandung",
                "alternateName": "POLBAN"
              }
            })
          }}
        />
      </Head>
      <Layout>
        <Section grid>
          <Hero />
          <BgAnimation />
        </Section>
        <Projects />
        <Technologies />
        <AlternateTimeline />
        <Acomplishments />
      </Layout>
    </>
  );
};

export default Home;
