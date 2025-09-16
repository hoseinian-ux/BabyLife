// components/SEO.jsx
"use client";

import { useEffect } from "react";

export default function SEO({
  title,
  description,
  keywords,
  url,
  image,
  type = "website",
}) {
  useEffect(() => {
    // Title
    if (title) document.title = title;

    // Meta Description
    if (description) {
      let descTag = document.querySelector("meta[name='description']");
      if (!descTag) {
        descTag = document.createElement("meta");
        descTag.setAttribute("name", "description");
        document.head.appendChild(descTag);
      }
      descTag.setAttribute("content", description);
    }

    // Meta Keywords
    if (keywords) {
      let keywordsTag = document.querySelector("meta[name='keywords']");
      if (!keywordsTag) {
        keywordsTag = document.createElement("meta");
        keywordsTag.setAttribute("name", "keywords");
        document.head.appendChild(keywordsTag);
      }
      keywordsTag.setAttribute("content", keywords);
    }

    // Open Graph Tags
    const ogTags = {
      "og:title": title,
      "og:description": description,
      "og:type": type,
      "og:url": url,
      "og:image": image,
    };

    Object.entries(ogTags).forEach(([property, content]) => {
      if (!content) return;
      let tag = document.querySelector(`meta[property='${property}']`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("property", property);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    });

    // Twitter Card
    const twitterTags = {
      "twitter:card": image ? "summary_large_image" : "summary",
      "twitter:title": title,
      "twitter:description": description,
      "twitter:image": image,
    };

    Object.entries(twitterTags).forEach(([name, content]) => {
      if (!content) return;
      let tag = document.querySelector(`meta[name='${name}']`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    });
  }, [title, description, keywords, url, image, type]);

  return null;
}
