'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

const serviceItems = [
  { label: 'Shopfitting', slug: 'shopfitting' },
  { label: 'Commercial Fitout', slug: 'commercial-fitout' },
  { label: 'Joinery Manufacturing', slug: 'joinery-manufacturing' },
  { label: 'Cafe & Restaurant Fitout', slug: 'cafe-restaurant-fitout' },
  { label: 'Retail Fitout', slug: 'retail-fitout' },
  { label: 'Medical & Dental Fitout', slug: 'medical-dental-fitout' },
  { label: 'Office Fitout', slug: 'office-fitout' },
];

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Guides', href: '/guides' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const servicesTriggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (!servicesOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setServicesOpen(false);
        servicesTriggerRef.current?.focus();
      }
    }
    function handleFocusOut(event: FocusEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.relatedTarget as Node)) {
        setServicesOpen(false);
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    const node = dropdownRef.current;
    node?.addEventListener('focusout', handleFocusOut);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      node?.removeEventListener('focusout', handleFocusOut);
    };
  }, [servicesOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileOpen(false);
        setMobileServicesOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <nav className="container mx-auto flex items-center justify-between h-16 lg:h-18">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 flex-shrink-0"
          onClick={() => setMobileOpen(false)}
        >
          <span className="text-xl font-extrabold text-charcoal tracking-widest uppercase">
            Fix It Up
          </span>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden lg:flex items-center gap-1">
          <Link
            href="/"
            className="px-4 py-2 text-sm font-medium text-charcoal/70 hover:text-charcoal hover:bg-gray-50 rounded transition-colors"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="px-4 py-2 text-sm font-medium text-charcoal/70 hover:text-charcoal hover:bg-gray-50 rounded transition-colors"
          >
            About
          </Link>

          {/* Services dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              ref={servicesTriggerRef}
              onClick={() => setServicesOpen((prev) => !prev)}
              className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-charcoal/70 hover:text-charcoal hover:bg-gray-50 rounded transition-colors"
              aria-expanded={servicesOpen}
              aria-controls="services-dropdown"
            >
              Services
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {servicesOpen && (
              <div
                id="services-dropdown"
                className="absolute top-full left-0 mt-1 w-64 bg-white border border-gray-100 rounded-lg shadow-lg py-1 z-50"
              >
                {serviceItems.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/services/${item.slug}`}
                    className="block px-4 py-2.5 text-sm text-charcoal/70 hover:text-charcoal hover:bg-gray-50 transition-colors"
                    onClick={() => setServicesOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/projects"
            className="px-4 py-2 text-sm font-medium text-charcoal/70 hover:text-charcoal hover:bg-gray-50 rounded transition-colors"
          >
            Projects
          </Link>
          <Link
            href="/guides"
            className="px-4 py-2 text-sm font-medium text-charcoal/70 hover:text-charcoal hover:bg-gray-50 rounded transition-colors"
          >
            Guides
          </Link>
          <Link
            href="/contact"
            className="px-4 py-2 text-sm font-medium text-charcoal/70 hover:text-charcoal hover:bg-gray-50 rounded transition-colors"
          >
            Contact
          </Link>
        </div>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-3">
          <Link
            href="/get-a-quote"
            className="hidden lg:inline-flex items-center min-h-[44px] px-5 py-2 text-sm font-semibold text-white bg-copper-600 rounded-lg hover:bg-copper-700 transition-colors shadow-copper-glow"
          >
            Get a Free Quote
          </Link>

          {/* Hamburger button */}
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            className="lg:hidden flex flex-col justify-center items-center w-11 h-11 gap-1.5 rounded focus:outline-none focus:ring-2 focus:ring-copper-600"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            <span
              className={`block w-6 h-0.5 bg-charcoal transition-all duration-300 ${
                mobileOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-charcoal transition-all duration-300 ${
                mobileOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-charcoal transition-all duration-300 ${
                mobileOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          <div className="container mx-auto py-4 flex flex-col gap-1">
            {navLinks.slice(0, 2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-3 text-sm font-medium text-charcoal/70 hover:text-charcoal hover:bg-gray-50 rounded transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Services accordion */}
            <div>
              <button
                onClick={() => setMobileServicesOpen((prev) => !prev)}
                className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium text-charcoal/70 hover:text-charcoal hover:bg-gray-50 rounded transition-colors"
                aria-expanded={mobileServicesOpen}
              >
                Services
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {mobileServicesOpen && (
                <div className="pl-4 mt-1 flex flex-col gap-1">
                  {serviceItems.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/services/${item.slug}`}
                      className="block px-4 py-2.5 text-sm text-charcoal/60 hover:text-charcoal hover:bg-gray-50 rounded transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navLinks.slice(2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-3 text-sm font-medium text-charcoal/70 hover:text-charcoal hover:bg-gray-50 rounded transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <div className="pt-3 pb-1 px-4">
              <Link
                href="/get-a-quote"
                className="block text-center w-full px-5 py-3 text-sm font-semibold text-white bg-copper-600 rounded-lg hover:bg-copper-700 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
