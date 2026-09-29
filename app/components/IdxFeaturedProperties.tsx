"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Prefer mid-size Spark CDN variants over multi-MB originals (-o.jpg).
 * Falls back to the original URL if the CDN does not serve -c.
 */
function optimizeSparkPhotoUrl(url: string): string {
  if (!url || !url.includes("cdn.photos.sparkplatform.com")) return url;
  return url.replace(/-o\.(jpe?g)(\?.*)?$/i, "-c.$1$2");
}

export function IdxFeaturedProperties() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const loadedRef = useRef(false);

  // Defer IDX widget until the featured section approaches the viewport
  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    if (!("IntersectionObserver" in window)) {
      setShouldLoad(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!shouldLoad || !containerRef.current || loadedRef.current) return;
    loadedRef.current = true;

    const script = document.createElement("script");
    script.charset = "UTF-8";
    script.type = "text/javascript";
    script.id = "idxwidgetsrc-65985";
    script.async = true;
    script.defer = true;
    script.src =
      "//mlspalmbeach.lindaolsson.com/idx/customshowcasejs.php?widgetid=65985";
    containerRef.current.appendChild(script);

    const customContainer = document.createElement("div");
    customContainer.id = "custom-property-container";
    customContainer.className = "flex overflow-x-auto space-x-4 py-2 w-full";
    customContainer.style.scrollbarWidth = "none";
    (customContainer.style as CSSStyleDeclaration & { msOverflowStyle?: string }).msOverflowStyle =
      "none";

    const hideScrollbarStyle = document.createElement("style");
    hideScrollbarStyle.textContent = `
      #custom-property-container::-webkit-scrollbar {
        display: none;
      }
    `;
    document.head.appendChild(hideScrollbarStyle);

    if (containerRef.current) {
      containerRef.current.appendChild(customContainer);
    }

    const style = document.createElement("style");
    style.textContent = `
      #IDX-showcaseGallery-65985 {
        position: absolute !important;
        left: -9999px !important;
        top: -9999px !important;
        visibility: hidden !important;
        pointer-events: none !important;
        display: none !important;
        height: 0 !important;
        width: 0 !important;
        overflow: hidden !important;
        opacity: 0 !important;
      }
      
      .idx-featured-properties {
        height: 0 !important;
        overflow: hidden !important;
        margin: 0 !important;
        padding: 0 !important;
      }
      
      .custom-property-card {
        width: 380px;
        flex: 0 0 auto;
        border-radius: 8px;
        overflow: hidden;
        background-color: white;
        transition: transform 0.2s;
      }
      
      .custom-property-card:hover {
        transform: translateY(-5px);
      }
      
      .custom-property-img {
        width: 100%;
        aspect-ratio: 3/2;
        object-fit: cover;
        border-radius: 8px 8px 0 0;
        background-color: #f3f4f6;
      }
      
      .custom-property-info {
        padding: 1rem;
      }
      
      .custom-property-address {
        font-size: 1.25rem;
        font-weight: 600;
        color: #1b4e1f;
        margin: 0 0 0.5rem 0;
        line-height: 1.2;
      }
      
      .custom-property-price {
        font-size: 1.5rem;
        font-weight: 700;
        color: #333;
        margin: 0 0 0.5rem 0;
        line-height: 1.2;
      }
      
      .custom-property-location {
        font-size: 1rem;
        color: #666;
        margin: 0;
        line-height: 1.2;
      }
      
      .idx-nav-button {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 40px;
        height: 40px;
        background: rgba(255, 255, 255, 0.9);
        border: none;
        border-radius: 50%;
        cursor: pointer;
        z-index: 100;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 24px;
        color: #1b4e1f;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      }
      
      .idx-prev {
        left: 10px;
      }
      
      .idx-next {
        right: 10px;
      }
      
      .idx-nav-button:hover {
        background: rgba(255, 255, 255, 1);
      }
    `;
    document.head.appendChild(style);

    const extractPropertiesAndCreateLayout = () => {
      const idxWidget = document.getElementById("IDX-showcaseGallery-65985");
      const customContainerEl = document.getElementById(
        "custom-property-container"
      );

      if (!idxWidget || !customContainerEl) return;

      customContainerEl.innerHTML = "";

      const cells = idxWidget.querySelectorAll(".IDX-showcaseCell");
      if (cells.length === 0) return;

      cells.forEach((cell, index) => {
        const imgElement = cell.querySelector(
          ".IDX-showcasePhoto"
        ) as HTMLImageElement | null;
        const addressElement = cell.querySelector(".IDX-showcaseAddress");
        const priceElement = cell.querySelector(".IDX-showcasePrice");
        const locationElement = cell.querySelector(".IDX-showcaseCityStateZip");
        const linkElement = cell.querySelector("a") as HTMLAnchorElement | null;

        if (!imgElement || !addressElement || !priceElement || !linkElement)
          return;

        const card = document.createElement("a");
        card.href = linkElement.href;
        card.className = "custom-property-card";
        card.target = "_blank";
        card.rel = "noopener noreferrer";

        const img = document.createElement("img");
        const originalSrc = imgElement.src;
        const optimizedSrc = optimizeSparkPhotoUrl(originalSrc);
        img.src = optimizedSrc;
        img.alt = addressElement.textContent || "Property";
        img.className = "custom-property-img";
        img.width = 380;
        img.height = 253;
        img.decoding = "async";
        // First two cards eager for carousel UX; rest lazy
        img.loading = index < 2 ? "eager" : "lazy";
        if (optimizedSrc !== originalSrc) {
          img.onerror = () => {
            img.onerror = null;
            img.src = originalSrc;
          };
        }
        card.appendChild(img);

        const info = document.createElement("div");
        info.className = "custom-property-info";

        const address = document.createElement("h3");
        address.className = "custom-property-address";
        address.textContent = addressElement.textContent || "";
        info.appendChild(address);

        const price = document.createElement("p");
        price.className = "custom-property-price";
        price.textContent = priceElement.textContent || "";
        info.appendChild(price);

        if (locationElement) {
          const location = document.createElement("p");
          location.className = "custom-property-location";
          location.textContent = locationElement.textContent || "";
          info.appendChild(location);
        }

        card.appendChild(info);
        customContainerEl.appendChild(card);
      });

      const wrapper = customContainerEl.parentElement;
      if (!wrapper) return;

      const existingButtons = wrapper.querySelectorAll(".idx-nav-button");
      existingButtons.forEach((button) => button.remove());

      const prevButton = document.createElement("button");
      prevButton.className = "idx-nav-button idx-prev";
      prevButton.type = "button";
      prevButton.setAttribute("aria-label", "Previous properties");
      prevButton.innerHTML = "←";
      prevButton.onclick = () => {
        const cards = Array.from(
          customContainerEl.querySelectorAll(".custom-property-card")
        );
        if (cards.length > 0) {
          const scrollPosition = customContainerEl.scrollLeft;
          const containerLeft = customContainerEl.getBoundingClientRect().left;

          let targetCard: Element | null = null;
          let closestDistance = Infinity;

          for (let i = cards.length - 1; i >= 0; i--) {
            const cardEl = cards[i];
            const cardLeft =
              cardEl.getBoundingClientRect().left -
              containerLeft +
              customContainerEl.scrollLeft;
            if (cardLeft < scrollPosition - 10) {
              if (scrollPosition - cardLeft < closestDistance) {
                closestDistance = scrollPosition - cardLeft;
                targetCard = cardEl;
              }
            }
          }

          if (targetCard) {
            const targetPosition =
              targetCard.getBoundingClientRect().left -
              containerLeft +
              customContainerEl.scrollLeft;
            customContainerEl.scrollTo({
              left: targetPosition,
              behavior: "smooth",
            });
          } else {
            const firstCard = cards[0];
            const firstCardPosition =
              firstCard.getBoundingClientRect().left -
              containerLeft +
              customContainerEl.scrollLeft;
            customContainerEl.scrollTo({
              left: firstCardPosition,
              behavior: "smooth",
            });
          }
        }
      };

      const nextButton = document.createElement("button");
      nextButton.className = "idx-nav-button idx-next";
      nextButton.type = "button";
      nextButton.setAttribute("aria-label", "Next properties");
      nextButton.innerHTML = "→";
      nextButton.onclick = () => {
        const cards = Array.from(
          customContainerEl.querySelectorAll(".custom-property-card")
        );
        if (cards.length > 0) {
          const scrollPosition = customContainerEl.scrollLeft;
          const containerLeft = customContainerEl.getBoundingClientRect().left;

          let targetCard: Element | null = null;
          let closestDistance = Infinity;

          for (let i = 0; i < cards.length; i++) {
            const cardEl = cards[i];
            const cardLeft =
              cardEl.getBoundingClientRect().left -
              containerLeft +
              customContainerEl.scrollLeft;
            if (cardLeft > scrollPosition + 10) {
              if (cardLeft - scrollPosition < closestDistance) {
                closestDistance = cardLeft - scrollPosition;
                targetCard = cardEl;
              }
            }
          }

          if (targetCard) {
            const targetPosition =
              targetCard.getBoundingClientRect().left -
              containerLeft +
              customContainerEl.scrollLeft;
            customContainerEl.scrollTo({
              left: targetPosition,
              behavior: "smooth",
            });
          } else {
            const lastCard = cards[cards.length - 1];
            const lastCardPosition =
              lastCard.getBoundingClientRect().left -
              containerLeft +
              customContainerEl.scrollLeft;
            customContainerEl.scrollTo({
              left: lastCardPosition,
              behavior: "smooth",
            });
          }
        }
      };

      wrapper.appendChild(prevButton);
      wrapper.appendChild(nextButton);

      wrapper.style.position = "relative";
      wrapper.style.paddingLeft = "20px";
      wrapper.style.paddingRight = "20px";

      const originalWidget = document.querySelector(".idx-featured-properties");
      if (originalWidget && originalWidget.parentNode) {
        originalWidget.innerHTML = "";
        (originalWidget as HTMLElement).style.display = "none";
        (originalWidget as HTMLElement).style.height = "0";
      }
    };

    let checkCount = 0;
    const maxChecks = 20;

    const checkInterval = setInterval(() => {
      const idxWidget = document.getElementById("IDX-showcaseGallery-65985");
      const cells = idxWidget?.querySelectorAll(".IDX-showcaseCell");

      if (cells && cells.length > 0) {
        extractPropertiesAndCreateLayout();
        clearInterval(checkInterval);
      } else if (++checkCount >= maxChecks) {
        clearInterval(checkInterval);
      }
    }, 1000);

    const observer = new MutationObserver(() => {
      setTimeout(extractPropertiesAndCreateLayout, 300);
    });

    setTimeout(() => {
      const idxWidget = document.getElementById("IDX-showcaseGallery-65985");
      if (idxWidget) {
        observer.observe(idxWidget, {
          childList: true,
          subtree: true,
          attributes: true,
        });
        extractPropertiesAndCreateLayout();
      }
    }, 2000);

    return () => {
      clearInterval(checkInterval);
      observer.disconnect();

      const existingScript = document.getElementById("idxwidgetsrc-65985");
      if (existingScript) {
        existingScript.remove();
      }

      if (style.parentNode) {
        style.remove();
      }

      if (hideScrollbarStyle.parentNode) {
        hideScrollbarStyle.remove();
      }
    };
  }, [shouldLoad]);

  return (
    <div className="w-full" ref={containerRef}>
      {!shouldLoad && (
        <div
          className="w-full min-h-[280px] rounded-lg bg-gray-100"
          aria-hidden="true"
        />
      )}
      <div className="w-full relative">
        <div
          id="idx-featured-widget"
          className="idx-featured-properties"
          style={{ height: 0, overflow: "hidden" }}
        />
      </div>
    </div>
  );
}
