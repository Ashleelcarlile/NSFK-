import FloatingIcons from "@/components/FloatingIcons";
import { Instagram } from "lucide-react";

const hosts = [
  {
    name: "Host Name 1",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    bio: "Host 1 bio goes here. Share your story about motherhood, parenting adventures, and what makes you passionate about this podcast.",
    instagram: "https://www.instagram.com/notsafeforkidspod/",
  },
  {
    name: "Host Name 2",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    bio: "Host 2 bio goes here. Tell us about your journey as a mum and what you bring to the Not Safe For Kids community.",
    instagram: "https://www.instagram.com/notsafeforkidspod/",
  },
  {
    name: "Host Name 3",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
    bio: "Host 3 bio goes here. Share your unique perspective on parenting and what inspired you to join this podcast.",
    instagram: "https://www.instagram.com/notsafeforkidspod/",
  },
  {
    name: "Host Name 4",
    photo: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400&h=400&fit=crop",
    bio: "Host 4 bio goes here. Talk about your experiences as a parent and what makes this podcast special to you.",
    instagram: "https://www.instagram.com/notsafeforkidspod/",
  },
];

export default function Hosts() {
  return (
    <div>
      <FloatingIcons />
      
      <section className="py-20 px-4 sm:px-6 lg:px-8 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Meet Your Hosts</h1>
            <p className="text-xl text-muted-foreground">
              The four mums behind Not Safe For Kids
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {hosts.map((host, index) => (
              <div
                key={index}
                className="bg-white/75 rounded-lg overflow-hidden hover-elevate active-elevate-2 transition-all"
                data-testid={`card-host-${index + 1}`}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={host.photo}
                    alt={host.name}
                    className="w-full h-full object-cover"
                    data-testid={`img-host-${index + 1}`}
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold" data-testid={`text-host-name-${index + 1}`}>
                      {host.name}
                    </h2>
                    <a
                      href={host.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-10 h-10 bg-black text-white rounded-full hover-elevate active-elevate-2"
                      data-testid={`link-instagram-${index + 1}`}
                      aria-label={`${host.name} Instagram`}
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                  </div>
                  <p className="text-muted-foreground leading-relaxed" data-testid={`text-bio-${index + 1}`}>
                    {host.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
