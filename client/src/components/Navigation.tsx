import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import logoIcon from "@assets/mouth-2-grunge_1763561433908.png";
import stripedBg from '@assets/stripe-2_1763569878970.png';

export default function Navigation() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/hosts", label: "Hosts" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => location === path;

  return (
    <nav className="sticky top-0 z-50 backdrop-blur" style={{ backgroundColor: '#DADF7D' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center space-x-2">
            <motion.img
              src={logoIcon}
              alt="PodcastHub"
              className="h-20 w-auto"
              animate={{
                y: [0, -8, 0],
                rotate: [-3, 3, -3],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <div className="relative">
                  {isActive(item.path) && (
                    <img
                      src={stripedBg}
                      alt=""
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-10 object-cover opacity-50 pointer-events-none"
                    />
                  )}
                  <Button
                    variant="ghost"
                    className="relative z-10 text-lg font-semibold"
                    data-testid={`link-${item.label.toLowerCase().replace(" ", "-")}`}
                  >
                    {item.label}
                  </Button>
                </div>
              </Link>
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden" style={{ backgroundColor: '#DADF7D' }}>
          <div className="px-4 py-2 space-y-1">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <div className="relative">
                  {isActive(item.path) && (
                    <img
                      src={stripedBg}
                      alt=""
                      className="absolute top-1/2 left-8 -translate-y-1/2 w-32 h-10 object-cover opacity-50 pointer-events-none"
                    />
                  )}
                  <Button
                    variant="ghost"
                    className="w-full justify-start relative z-10 text-lg font-semibold"
                    onClick={() => setMobileMenuOpen(false)}
                    data-testid={`link-mobile-${item.label.toLowerCase().replace(" ", "-")}`}
                  >
                    {item.label}
                  </Button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
