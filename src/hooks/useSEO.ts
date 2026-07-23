import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  image?: string;
  noIndex?: boolean;
  jsonLd?: Record<string, any>;
}

export const useSEO = ({
  title,
  description,
  canonicalUrl,
  image = 'https://teleiocraft.com/teleiocraft-preview.jpg',
  noIndex = false,
  jsonLd,
}: SEOProps) => {
  useEffect(() => {
    const fullTitle = `${title} | Teleiocraft Solutions`;
    const currentUrl = canonicalUrl || window.location.href;

    // Title
    document.title = fullTitle;

    // Helper function to set or create meta tag
    const setMetaTag = (attrName: string, attrValue: string, content: string) => {
      let element = document.querySelector(`meta[${attrName}="${attrValue}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attrName, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Helper function to set or create link tag
    const setLinkTag = (rel: string, href: string) => {
      let element = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        document.head.appendChild(element);
      }
      element.setAttribute('href', href);
    };

    // Standard Meta Tags
    setMetaTag('name', 'description', description);
    setMetaTag('name', 'robots', noIndex ? 'noindex, nofollow' : 'index, follow');

    // Open Graph Tags
    setMetaTag('property', 'og:title', fullTitle);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:url', currentUrl);
    setMetaTag('property', 'og:image', image);
    setMetaTag('property', 'og:type', 'website');
    setMetaTag('property', 'og:site_name', 'Teleiocraft Solutions');

    // Twitter Card Tags
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:site', '@teleiocraft');
    setMetaTag('name', 'twitter:title', fullTitle);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', image);

    // Canonical Tag
    setLinkTag('canonical', currentUrl);

    // Structured Data (JSON-LD)
    let scriptElement: HTMLScriptElement | null = document.querySelector('script[type="application/ld+json"]#dynamic-seo-jsonld');
    if (jsonLd) {
      if (!scriptElement) {
        scriptElement = document.createElement('script');
        scriptElement.setAttribute('type', 'application/ld+json');
        scriptElement.setAttribute('id', 'dynamic-seo-jsonld');
        document.head.appendChild(scriptElement);
      }
      scriptElement.textContent = JSON.stringify(jsonLd);
    } else if (scriptElement) {
      scriptElement.remove();
    }

  }, [title, description, canonicalUrl, image, noIndex, jsonLd]);
};

export default useSEO;
