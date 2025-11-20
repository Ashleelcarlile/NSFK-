import FloatingIcons from "@/components/FloatingIcons";
import { Instagram } from "lucide-react";
import doodleWhite from '@assets/doodle-Illustrations-assets-white_1763579577683.png';
import doodleNameTag from '@assets/doodle-Illustrations-assets-white_1763580432961.png';
import keishaPhoto from '@assets/DSCF2440_1763580329647.jpg';
import ashleePhoto from '@assets/DSCF2268_1763580792853.jpg';
import holliePhoto from '@assets/DSCF2301_1763580875491.jpg';
import katePhoto from '@assets/DSCF2172_1763580939921.jpg';
import stripedBg from '@assets/stripe-2_1763632826305.png';

const hosts = [
  {
    name: "Ashlee Carlile",
    photo: ashleePhoto,
    bio: "Host 1 bio goes here. Share your story about motherhood, parenting adventures, and what makes you passionate about this podcast.",
    instagram: "https://www.instagram.com/ashleecarlile?igsh=YzN2aWpueWJ6eXR0",
  },
  {
    name: "Kate Akuz",
    photo: katePhoto,
    bio: "Host 2 bio goes here. Tell us about your journey as a mum and what you bring to the Not Safe For Kids community.",
    instagram: "https://www.instagram.com/kate.akyuz?igsh=Mm8zOHJ0YmN2cGRu",
  },
  {
    name: "Keisha Forte-Hercules",
    photo: keishaPhoto,
    bio: "Host 3 bio goes here. Share your unique perspective on parenting and what inspired you to join this podcast.",
    instagram: "https://www.instagram.com/her.forte?igsh=NXZpdnU3eHBnbHpj",
  },
  {
    name: "Hollie Nwagboso",
    photo: holliePhoto,
    bio: "Host 4 bio goes here. Talk about your experiences as a parent and what makes this podcast special to you.",
    instagram: "https://www.instagram.com/hollienwagboso?igsh=MWdzNHg4YXVnOHBybg==",
  },
];

export default function Hosts() {
  return (
    <div className="bg-white min-h-screen">
      <FloatingIcons />
      
      <section className="pt-32 md:pt-40 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24 md:mb-32 relative">
            {/* Striped background behind title */}
            <img
              src={stripedBg}
              alt=""
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl opacity-90 pointer-events-none z-0"
            />
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-black relative z-10">Meet Your Hosts</h1>
            <p className="text-xl text-black relative z-10">
              The four mums behind Not Safe For Kids
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {hosts.map((host, index) => (
              <div
                key={index}
                className="rounded-lg overflow-hidden hover-elevate active-elevate-2 transition-all"
                style={{ marginTop: index % 2 === 1 ? '8rem' : '0' }}
                data-testid={`card-host-${index + 1}`}
              >
                <div className="flex">
                  {/* Photo on left - bleeds to edge */}
                  <div className="flex-shrink-0 bg-white/75 rounded-l-lg overflow-hidden">
                    <img
                      src={host.photo}
                      alt={host.name}
                      className="w-80 h-80 object-cover"
                      data-testid={`img-host-${index + 1}`}
                    />
                  </div>
                  
                  {/* Content on right - white background */}
                  <div className="flex-1 min-w-0 p-6 rounded-r-lg bg-white">
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <h2 className="text-2xl font-bold leading-tight text-black" data-testid={`text-host-name-${index + 1}`}>
                        {host.name}
                      </h2>
                      <a
                        href={host.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-shrink-0 inline-flex items-center justify-center w-10 h-10 bg-black text-white rounded-full hover-elevate active-elevate-2"
                        data-testid={`link-instagram-${index + 1}`}
                        aria-label={`${host.name} Instagram`}
                      >
                        <Instagram className="w-5 h-5" />
                      </a>
                    </div>
                    <p className="text-black leading-relaxed" data-testid={`text-bio-${index + 1}`}>
                      {host.bio}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
