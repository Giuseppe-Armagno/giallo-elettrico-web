
interface TestimonialCardProps {
  name: string;
  role: string;
  quote: string;
  image: string;
}

export function TestimonialCard({ name, role, quote, image }: TestimonialCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md transition-all hover:shadow-lg border border-gray-100">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-electric-yellow">
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover" 
          />
        </div>
        <div>
          <h4 className="font-bold text-electric-black">{name}</h4>
          <p className="text-sm text-gray-600">{role}</p>
        </div>
      </div>
      
      <blockquote className="relative">
        <span className="text-electric-yellow text-5xl absolute top-0 left-0 leading-none">"</span>
        <p className="text-gray-700 italic pl-6 pt-3">
          {quote}
        </p>
      </blockquote>
    </div>
  );
}
