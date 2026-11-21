"use client";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Download, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle Escape key to close mobile menu and restore focus to toggle button
  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMobileMenuOpen]);

  const menuItems = [
    { label: "About", href: "/#about" },
    { label: "Skills", href: "/#skills" },
    { label: "Projects", href: "/#projects" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-b" : ""
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link
            href={"/"}
            className="text-xl font-bold text-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded-sm"
          >
            Akhtar Raza
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            {menuItems.map((item) => (
              <Link
                href={item.href}
                key={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded-sm px-1 py-0.5"
              >
                {item.label}
              </Link>
            ))}
            <Button variant={"default"} size={"sm"} className="gap-2" asChild>
              <a
                href="/Akhtar_Raza_Resume.pdf"
                download="Akhtar_Raza_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download Resume PDF (opens in new tab)"
              >
                <Download className="w-4 h-4" />
                Resume
              </a>
            </Button>
          </nav>

          {/*MOBILE MENU BUTTON  */}
          <Button
            ref={menuButtonRef}
            variant={"ghost"}
            size={"icon"}
            className="md:hidden"
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu (Disclosure navigation) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t bg-background"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-2" aria-label="Mobile Navigation">
              {menuItems.map((item) => (
                <Link
                  href={item.href}
                  key={item.href}
                  className="flex items-center min-h-[44px] text-sm font-medium text-muted-foreground hover:text-primary transition-colors px-3 rounded-md hover:bg-secondary/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    menuButtonRef.current?.focus();
                  }}
                >
                  {item.label}
                </Link>
              ))}
              <Button variant={"default"} size={"sm"} className="gap-2 mt-2 h-11 min-h-[44px]" asChild>
                <a
                  href="/Akhtar_Raza_Resume.pdf"
                  download="Akhtar_Raza_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Download Resume PDF (opens in new tab)"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    menuButtonRef.current?.focus();
                  }}
                >
                  <Download className="w-4 h-4" />
                  Resume
                </a>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
