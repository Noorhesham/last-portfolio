"use client";
import { cn } from "@/app/lib/utils";
import { GoSidebarCollapse } from "react-icons/go";
import gsap from "gsap";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";

const FloatingDock = ({
  items,
  desktopClassName,
  mobileClassName,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  desktopClassName?: string;
  mobileClassName?: string;
}) => {
  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} />
      <FloatingDockMobile items={items} className={mobileClassName} />
    </>
  );
};

const FloatingDockMobile = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  className?: string;
}) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const itemElements = containerRef.current.querySelectorAll(".mobile-item");

      if (open) {
        gsap.fromTo(
          itemElements,
          { opacity: 0, y: 10 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.05,
            duration: 0.2,
          }
        );
      } else {
        gsap.to(itemElements, {
          opacity: 0,
          y: 10,
          stagger: 0.05,
          duration: 0.2,
        });
      }
    }
  }, [open]);

  return (
    <div className={cn("relative block md:hidden", className)}>
      {open && (
        <div ref={containerRef} className="absolute bottom-full mb-2 inset-x-0 flex flex-col gap-2">
          {items.map((item, idx) => (
            <Link
              href={item.href}
              key={item.title}
              className="mobile-item h-10 w-10 rounded-full bg-gray-50 dark:bg-neutral-900 flex items-center justify-center"
            >
              <div className="h-4 w-4 text-white">{item.icon}</div>
            </Link>
          ))}
        </div>
      )}
      <button
        onClick={() => setOpen(!open)}
        className="h-10 w-10 rounded-full bg-gray-50 dark:bg-neutral-800 flex items-center justify-center"
      >
        <GoSidebarCollapse className="h-5 w-5 text-neutral-500 dark:text-neutral-400" />
      </button>
    </div>
  );
};

const FloatingDockDesktop = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  className?: string;
}) => {
  const dockRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const dock = dockRef.current;
    if (!dock) return;

    const handleMouseMove = (e: MouseEvent) => {
      const dockRect = dock.getBoundingClientRect();
      const mouseX = e.clientX - dockRect.left;

      itemRefs.current.forEach((itemRef) => {
        if (!itemRef) return;

        const itemRect = itemRef.getBoundingClientRect();
        const distanceFromCenter = Math.abs(mouseX - (itemRect.left - dockRect.left + itemRect.width / 2));

        const scale = gsap.utils.interpolate(1, 2, 1 - distanceFromCenter / (dockRect.width / 2));

        gsap.to(itemRef, {
          width: scale * 40,
          height: scale * 40,
          duration: 0.3,
          ease: "power1.out",
        });
      });
    };

    const handleMouseLeave = () => {
      itemRefs.current.forEach((itemRef) => {
        if (!itemRef) return;

        gsap.to(itemRef, {
          width: 40,
          height: 40,
          duration: 0.3,
          ease: "power1.out",
        });
      });
    };

    dock.addEventListener("mousemove", handleMouseMove);
    dock.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      dock.removeEventListener("mousemove", handleMouseMove);
      dock.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={dockRef}
      className={cn(
        "mx-auto hidden md:flex h-16 gap-4 items-end rounded-2xl bg-gray-50 dark:bg-neutral-900 px-4 pb-3",
        className
      )}
    >
      {items.map((item, index) => (
        <IconContainer key={item.title} {...item} ref={(el) => (itemRefs.current[index] = el)} />
      ))}
    </div>
  );
};

function IconContainer({
  title,
  icon,
  href,
  ref,
}: {
  title: string;
  icon: React.ReactNode;
  href: string;
  ref?: React.Ref<HTMLDivElement>;
}) {
  const [hovered, setHovered] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tooltip = tooltipRef.current;
    if (tooltip) {
      if (hovered) {
        gsap.fromTo(tooltip, { opacity: 0, y: 10, x: "-50%" }, { opacity: 1, y: 0, x: "-50%", duration: 0.2 });
      } else {
        gsap.to(tooltip, { opacity: 0, y: 2, x: "-50%", duration: 0.2 });
      }
    }
  }, [hovered]);

  return (
    <Link href={href}>
      <div
        ref={ref}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="w-10 h-10 aspect-square rounded-full bg-gray-200 dark:bg-neutral-800 flex items-center justify-center relative"
      >
        {hovered && (
          <div
            ref={tooltipRef}
            className="px-2 py-0.5 whitespace-pre rounded-md bg-gray-100 border dark:bg-neutral-800 dark:border-neutral-900 dark:text-white border-gray-200 text-neutral-700 absolute left-1/2 -translate-x-1/2 -top-8 w-fit text-xs"
          >
            {title}
          </div>
        )}
        <div className="flex items-center justify-center">{icon}</div>
      </div>
    </Link>
  );
}

export default FloatingDock;
