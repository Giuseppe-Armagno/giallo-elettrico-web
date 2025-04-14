
import { useState } from "react";
import { cn } from "@/lib/utils";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription 
} from "@/components/ui/dialog";

interface PortfolioItemProps {
  title: string;
  category: string;
  description: string;
  image: string;
  className?: string;
}

export function PortfolioItem({ title, category, description, image, className }: PortfolioItemProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <div 
        className={cn(
          "group cursor-pointer overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-xl",
          className
        )}
        onClick={() => setIsDialogOpen(true)}
      >
        <div className="relative aspect-video overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
            <div className="text-white">
              <p className="text-sm text-electric-yellow uppercase tracking-wider">{category}</p>
              <h3 className="text-xl font-bold">{title}</h3>
            </div>
          </div>
        </div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[700px]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">{title}</DialogTitle>
            <DialogDescription className="text-sm text-electric-yellow uppercase tracking-wider">
              {category}
            </DialogDescription>
          </DialogHeader>
          
          <div className="mt-4 space-y-6">
            <img 
              src={image} 
              alt={title} 
              className="w-full h-auto rounded-lg"
            />
            
            <div>
              <h4 className="font-semibold mb-2 text-lg">Descrizione del Progetto</h4>
              <p className="text-gray-700">{description}</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
