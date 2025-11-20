import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import pregnantBelly from '@assets/pregnant-Illustrations-assets-mellow-yellow_1763639850234.png';
import flower from '@assets/flower-Illustrations-assets-mellow-yellow_1763571379874.png';
import planet from '@assets/space-Illustrations-assets-mellow-yellow_1763571606086.png';
import cloud from '@assets/cloud-Illustrations-assets-mellow-yellow_1763639854371.png';
import doodle from '@assets/doodle-Illustrations-assets-mellow-yellow_1763571629355.png';
import teamPhoto from '@assets/Not Safe For Kids _Media Campaign Photoshoot _October 5, 2025_ BMURPHYFile 1_1763639707825.jpg';

export default function About() {
  return (
    <div className="bg-white relative overflow-hidden min-h-screen">
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center relative z-10">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 items-start">
            {/* Left Column - Title with doodle behind */}
            <div className="relative">
              {/* Doodle behind About Us */}
              <img
                src={doodle}
                alt=""
                className="absolute -top-16 -left-16 w-48 h-48 opacity-40 z-0 hidden sm:block"
              />
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight text-gray-900 relative z-10 mb-8 sm:mb-0">
                About Us
              </h1>
              
              {/* Photo below About Us, offset to the left */}
              <div className="mt-0 sm:mt-12 sm:-ml-8 relative">
                {/* Yellow portrait box behind photo */}
                <div 
                  className="absolute -top-4 left-4 sm:left-8 right-8 sm:right-16 bottom-0 bg-[#DADF7D] rounded-lg -z-10"
                  style={{ height: 'calc(100% + 6rem)' }}
                ></div>
                <img
                  src={teamPhoto}
                  alt="Not Safe For Kids Podcast Team"
                  className="w-full max-w-md rounded-lg shadow-lg relative z-10"
                  data-testid="img-about-team"
                />
              </div>
            </div>

            {/* Right Column - About Text with line */}
            <div className="relative mt-20 lg:mt-0">
              {/* Short thick vertical line */}
              <div className="hidden lg:block absolute -left-8 top-0 w-1 h-32 bg-gray-800"></div>
              
              <div className="space-y-4 sm:space-y-6 text-gray-900">
                <p className="text-base sm:text-lg leading-relaxed">
                  Meet Keisha, Hollie, Kate & Ashlee - hosts of Not Safe For Kids, the (almost) weekly podcast about life & parenting. We chew the fat on all things kid-related and generally 'av a laff whilst we do it. Each show we catch up on the glamour of things like award-show after parties and the mundane everyday, like scooping sh*t out of your kids bath. Catch us every Tuesday wherever you get your podcasts and on Youtube!
                </p>
              </div>
              
              {/* Decorative illustrations below text */}
              <div className="relative mt-12 sm:mt-16 h-40 sm:h-48">
                <img
                  src={pregnantBelly}
                  alt=""
                  className="absolute top-0 right-8 w-24 sm:w-32 opacity-60"
                />
                <img
                  src={cloud}
                  alt=""
                  className="absolute bottom-0 left-4 w-40 sm:w-52 opacity-60"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Community Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-6 text-gray-900">Join Our Community</h2>
          <p className="text-base sm:text-xl text-gray-700 mb-6 sm:mb-8">
            Subscribe to get the latest episodes and exclusive content
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-md border border-gray-300 bg-white text-gray-900"
              data-testid="input-newsletter"
            />
            <Button size="lg" className="bg-black text-white hover:bg-black/90" data-testid="button-subscribe-about">
              Subscribe
            </Button>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            Join 10,000+ listeners already subscribed
          </p>
        </div>
      </section>
    </div>
  );
}
