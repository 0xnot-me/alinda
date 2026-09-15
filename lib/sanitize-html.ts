import DOMPurify from "isomorphic-dompurify";

/**
 * Sanitize untrusted HTML before rendering with dangerouslySetInnerHTML.
 * Allows common rich-text tags used in blog posts while stripping scripts/handlers.
 */
export function sanitizeHtml(dirty: string | null | undefined): string {
  if (!dirty) return "";

  return DOMPurify.sanitize(dirty, {
    USE_PROFILES: { html: true },
    ADD_ATTR: ["target", "rel", "class", "id"],
    FORBID_TAGS: ["script", "iframe", "object", "embed", "form"],
    FORBID_ATTR: ["onerror", "onload", "onclick", "onmouseover", "style"],
  });
}
