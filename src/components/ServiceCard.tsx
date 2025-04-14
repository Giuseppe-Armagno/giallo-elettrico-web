
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  link: string;
  className?: string;
}

export function ServiceCard({ title, description, icon: Icon, link, className }: ServiceCardProps) {
  return (
    <div className={cn(
      "bg-white rounded-lg shadow-md p-6 transition-all hover:shadow-xl border-t-4 border-electric-yellow",
      className
    )}>
      <div className="bg-electric-yellow/20 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
        <Icon className="h-8 w-8 text-electric-black" />
      </div>
      <h3 className="text-xl font-bold mb-3 text-electric-black">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link
        to={link}
        className="text-electric-black font-medium hover:text-electric-yellow transition-colors inline-flex items-center"
      >
        Scopri di più
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 ml-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </Link>
    </div>
  );
}
