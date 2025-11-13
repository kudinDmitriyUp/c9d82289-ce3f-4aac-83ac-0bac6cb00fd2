"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import AboutFeature from '@/components/sections/about/AboutFeature';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Cpu, Gamepad2, Instagram, MessageSquare, Sparkles, Twitter, Users, Youtube, Zap } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="background-highlight"
      borderRadius="soft"
      contentWidth="medium"
      sizing="large"
      background="plain"
      cardStyle="glass-depth"
      primaryButtonStyle="layered-depth"
      secondaryButtonStyle="radial-glow"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="NEON BYTES"
          button={{
            text: "Reserve Table",
            href: "contact"
          }}
        />
      </div>
      
      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Enter the Future of Dining"
          description="Experience NYC's first cyberpunk-themed cafe where neon meets flavor, technology merges with taste, and every meal is a journey into tomorrow."
          tag="Welcome to 2087"
          tagIcon={Zap}
          imageSrc="https://pixabay.com/get/g5e360ab1956185241b77eb615c86fe44042e318b00f50a11d1e1c6e5f43a7b7fc33e03ba14695db240d3575077cabcdd2f7b78bf25fe1e6ae454965fc0122978_1280.jpg"
          imageAlt="Cyberpunk cafe interior with neon lighting"
          frameStyle="card"
          buttons={[
            {
              text: "Book Experience",
              href: "contact"
            },
            {
              text: "View Menu",
              href: "menu"
            }
          ]}
        />
      </div>
      
      <div id="about" data-section="about">
        <AboutFeature
          title="At Neon Bytes, we've transported a piece of Night City to the heart of Manhattan. Our cyberpunk cafe isn't just about food and drinks—it's about experiencing the future."
          features={[
            {
              icon: Cpu,
              title: "Neural Interface Dining",
              description: "Order through our AR menus and watch your meal materialize in our open cyber-kitchen with holographic displays."
            },
            {
              icon: Gamepad2,
              title: "VR Gaming Lounge",
              description: "Dive into virtual worlds while sipping our signature neon cocktails in our dedicated gaming pods."
            },
            {
              icon: Sparkles,
              title: "Molecular Gastronomy",
              description: "Every dish is crafted using cutting-edge techniques that blur the line between science and cuisine."
            },
            {
              icon: Users,
              title: "Community Hub",
              description: "Connect with fellow cyberpunks, techies, and futurists in our communal chrome-and-neon environment."
            }
          ]}
        />
      </div>
      
      <div id="feature" data-section="feature">
        <FeatureCardOne
          title="Immersive Experiences"
          description="Step into our cyberpunk world and discover what makes Neon Bytes unlike any cafe you've ever experienced"
          tag="Features"
          tagIcon={Sparkles}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          textboxLayout="default"
          features={[
            {
              title: "Neon Atmosphere",
              description: "Immerse yourself in our carefully crafted cyberpunk environment with dynamic LED installations and futuristic soundscapes.",
              imageSrc: "https://pixabay.com/get/g9b5b9b37d75c19c9a2452773a43292939f67ccfd19d77ec66d9eebef0c7597bb6e10353479408058f24f852f67448fdd65e817a6923d9659325daaf92b2c875c_1280.jpg",
              imageAlt: "Neon-lit cyberpunk cafe atmosphere"
            },
            {
              title: "Digital Menu System",
              description: "Navigate our holographic menu system and customize your order with AR visualization of every dish and drink.",
              imageSrc: "https://pixabay.com/get/g0e7b625db0e9ebc4fe91b1cd149ab1fa1e99623bf4f9f8c114cf02ed0bc9b27f272f351208ae322dd339ce8f604061a08920379354605944d6561c72b459128e_1280.jpg",
              imageAlt: "Digital menu display system"
            },
            {
              title: "VR Gaming Pods",
              description: "Enter our premium VR gaming pods for an escape into virtual worlds while enjoying our cyberpunk cuisine.",
              imageSrc: "https://pixabay.com/get/g6cd950ef4a136d78b423edaf7f7223e234ae14debbe3b64431c5c0b490fd11f81310a2d478440bcae9bed2f5deb9870cb8fbddabad2880e20b054ea0ab9093ff_1280.jpg",
              imageAlt: "VR gaming setup in cyberpunk style"
            },
            {
              title: "Molecular Cocktails",
              description: "Sip on our signature neon-glowing cocktails created with molecular mixology techniques that defy expectations.",
              imageSrc: "https://pixabay.com/get/gafa9afb7e83be31af58cd69141d52e147bea3e0c7227d5164ce96b0a3af0317a5232882582273950dbf5c5f4541168d4_1280.jpg",
              imageAlt: "Glowing neon cocktails"
            }
          ]}
        />
      </div>
      
      <div id="testimonial" data-section="testimonial">
        <TestimonialCardOne
          title="What Cyber-Citizens Say"
          description="Real experiences from our community of cyberpunk enthusiasts and futuristic food lovers"
          tag="Reviews"
          tagIcon={MessageSquare}
          gridVariant="uniform-all-items-equal"
          animationType="blur-reveal"
          textboxLayout="default"
          testimonials={[
            {
              id: "1",
              name: "Alex Chen",
              role: "Tech Entrepreneur",
              company: "Neural Systems Inc",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g3b838beffe5f6b6f634fd1fa94b9c73fbf99733d60348f17f03deb2672fa8835f83be4ebc0ce3f7e5d97d838eed1eb69ed0460fce855e85fd94d73c924f3ad02_1280.jpg",
              imageAlt: "Portrait of Alex Chen"
            },
            {
              id: "2",
              name: "Maya Rodriguez",
              role: "VR Developer",
              company: "Quantum Studios",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g5917ee209475cba6578643ff811b33c5c3b069fc59229f83d2de0726679cf2e6e06593f7207ea06cfa54566d76af2a8338d50e4836398afcd516ead9e19e0e11_1280.jpg",
              imageAlt: "Portrait of Maya Rodriguez"
            },
            {
              id: "3",
              name: "Kai Nakamura",
              role: "Cybersecurity Expert",
              company: "Ghost Protocol",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g8e163014e9e8c44d51441223fdb5e64cdd576977603f857b239cf6aadee2eb3cb3605f3995fa2397222e21a0421518c30d3ee6941a3c9ade1b82d11d1e2d6ee4_1280.jpg",
              imageAlt: "Portrait of Kai Nakamura"
            },
            {
              id: "4",
              name: "Zoe Williams",
              role: "Digital Artist",
              company: "Neon Dreams Collective",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g157a532887ee456c700d024b33728ddf0d577f1099e4a6fe3ab4adbaef179241b801efc43828849c5484b6d872f40fe109fa23ebc5f1a1b0c1645290c64bce8e_1280.jpg",
              imageAlt: "Portrait of Zoe Williams"
            }
          ]}
        />
      </div>
      
      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Experience Awaits"
          title="Ready to Jack Into the Future?"
          description="Reserve your table at NYC's premier cyberpunk dining destination. Enter your neural link coordinates and we'll sync you into our system."
          tagIcon={Zap}
          imageSrc="https://pixabay.com/get/g0782cbfece5c8c47c930f89b1de3d5919ac6205359c565756b33c019573d12a8f5daa4ed147fd91a961fbfc06560454e791d48589cd8924d77ecde1a1902ea20_1280.jpg"
          imageAlt="Cyberpunk cafe interior with purple neon lighting"
          mediaPosition="right"
          inputPlaceholder="neural.link@email.com"
          buttonText="Initialize Connection"
          termsText="By connecting, you agree to enter the future of dining. No data mining, just mind-blowing experiences."
        />
      </div>
      
      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="NEON BYTES"
          copyrightText="© 2087 Neon Bytes Cafe. All neural networks reserved."
          columns={[
            {
              title: "Experience",
              items: [
                {
                  label: "Book Table",
                  href: "contact"
                },
                {
                  label: "VR Gaming",
                  href: "gaming"
                },
                {
                  label: "Private Events",
                  href: "events"
                }
              ]
            },
            {
              title: "Menu",
              items: [
                {
                  label: "Cyber Cuisine",
                  href: "menu"
                },
                {
                  label: "Neon Cocktails",
                  href: "drinks"
                },
                {
                  label: "Neural Nutrition",
                  href: "nutrition"
                }
              ]
            },
            {
              title: "Location",
              items: [
                {
                  label: "Find Us",
                  href: "location"
                },
                {
                  label: "Hours",
                  href: "hours"
                },
                {
                  label: "Directions",
                  href: "directions"
                }
              ]
            },
            {
              title: "Connect",
              items: [
                {
                  label: "Community",
                  href: "community"
                },
                {
                  label: "Events",
                  href: "events"
                },
                {
                  label: "Newsletter",
                  href: "newsletter"
                }
              ]
            }
          ]}
          socialLinks={[
            {
              icon: Instagram,
              href: "https://instagram.com/neonbytescafe",
              ariaLabel: "Follow us on Instagram"
            },
            {
              icon: Twitter,
              href: "https://twitter.com/neonbytescafe",
              ariaLabel: "Follow us on Twitter"
            },
            {
              icon: Youtube,
              href: "https://youtube.com/@neonbytescafe",
              ariaLabel: "Subscribe to our YouTube channel"
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}