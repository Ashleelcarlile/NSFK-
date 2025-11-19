import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface HostCardProps {
  image: string;
  name: string;
  role: string;
  bio: string;
  reverse?: boolean;
}

export default function HostCard({ image, name, role, bio, reverse = false }: HostCardProps) {
  return (
    <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center`}>
      <div className="flex-shrink-0">
        <Avatar className="h-48 w-48 md:h-64 md:w-64">
          <AvatarImage src={image} alt={name} />
          <AvatarFallback>{name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex-1 text-center md:text-left">
        <h3 className="text-3xl font-bold mb-2" data-testid="text-host-name">{name}</h3>
        <p className="text-lg text-primary mb-4" data-testid="text-host-role">{role}</p>
        <p className="text-muted-foreground leading-relaxed font-serif" data-testid="text-host-bio">
          {bio}
        </p>
      </div>
    </div>
  );
}
