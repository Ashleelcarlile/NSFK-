import { Link } from "wouter";
import { SiInstagram, SiYoutube, SiTiktok } from "react-icons/si";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Not Safe For Kids</h3>
            <p className="text-sm text-muted-foreground">
              Four Mums. No Filter. The (almost) weekly podcast about life & parenting.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/hosts" className="text-muted-foreground hover:text-foreground">
                  Hosts
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="https://instagram.com/notsafeforkidspod" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground flex items-center gap-2"
                  data-testid="link-footer-instagram"
                >
                  <SiInstagram className="h-4 w-4" />
                  Instagram
                </a>
              </li>
              <li>
                <a 
                  href="https://www.youtube.com/@notsafeforkidspod" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground flex items-center gap-2"
                  data-testid="link-footer-youtube"
                >
                  <SiYoutube className="h-4 w-4" />
                  YouTube
                </a>
              </li>
              <li>
                <a 
                  href="https://www.tiktok.com/@notsafeforkidspodcast" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground flex items-center gap-2"
                  data-testid="link-footer-tiktok"
                >
                  <SiTiktok className="h-4 w-4" />
                  TikTok
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Get in touch with us
            </p>
            <Link href="/contact">
              <button
                className="relative flex items-center justify-center gap-4 bg-black text-white px-6 py-3 rounded-full text-sm font-semibold overflow-hidden group w-full"
                data-testid="button-contact-footer"
                style={{ paddingRight: '3.5rem' }}
              >
                <span className="relative z-10">Contact Us</span>
                <div className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <ArrowUpRight className="h-5 w-5 text-black" />
                </div>
              </button>
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Not Safe For Kids Podcast. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
