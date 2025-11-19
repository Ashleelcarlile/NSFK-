import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { SiInstagram, SiYoutube, SiTiktok } from "react-icons/si";
import { Mail } from "lucide-react";
import contactPhoto from "@assets/contact-photo.jpg";

const guestFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const sponsorFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().min(1, "Company name is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type GuestFormData = z.infer<typeof guestFormSchema>;
type SponsorFormData = z.infer<typeof sponsorFormSchema>;

export default function Contact() {
  const [formType, setFormType] = useState<"guests" | "sponsors">("guests");
  const { toast } = useToast();

  const guestForm = useForm<GuestFormData>({
    resolver: zodResolver(guestFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const sponsorForm = useForm<SponsorFormData>({
    resolver: zodResolver(sponsorFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  const onSubmitGuest = (data: GuestFormData) => {
    console.log("Guest form:", data);
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out! We'll get back to you soon.",
    });
    guestForm.reset();
  };

  const onSubmitSponsor = (data: SponsorFormData) => {
    console.log("Sponsor form:", data);
    toast({
      title: "Message Sent!",
      description: "Thanks for your interest in sponsoring! We'll be in touch soon.",
    });
    sponsorForm.reset();
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left side - Photo */}
          <div className="relative">
            <img
              src={contactPhoto}
              alt="Not Safe For Kids Podcast"
              className="w-full h-full object-cover rounded-lg"
              style={{ minHeight: "600px", maxHeight: "800px" }}
              data-testid="img-contact-photo"
            />
          </div>

          {/* Right side - Contact Form */}
          <div className="space-y-6">
            <Card className="p-8" style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }}>
              <h2 className="text-3xl font-bold mb-6 text-black">Get in Touch</h2>

              {/* Toggle between Guests and Sponsors */}
              <div className="flex gap-4 mb-6">
                <Button
                  type="button"
                  variant={formType === "guests" ? "default" : "outline"}
                  onClick={() => setFormType("guests")}
                  className="flex-1"
                  data-testid="button-toggle-guests"
                >
                  Guests
                </Button>
                <Button
                  type="button"
                  variant={formType === "sponsors" ? "default" : "outline"}
                  onClick={() => setFormType("sponsors")}
                  className="flex-1"
                  data-testid="button-toggle-sponsors"
                >
                  Sponsors
                </Button>
              </div>

              {/* Guest Form */}
              {formType === "guests" && (
                <Form {...guestForm}>
                  <form onSubmit={guestForm.handleSubmit(onSubmitGuest)} className="space-y-4" data-testid="form-guests">
                    <FormField
                      control={guestForm.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-black">Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your name" {...field} data-testid="input-name" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={guestForm.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-black">Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="your.email@example.com" {...field} data-testid="input-email" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={guestForm.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-black">Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell us why you'd be a great guest..."
                              className="min-h-[120px]"
                              {...field}
                              data-testid="textarea-message"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" className="w-full" data-testid="button-submit">
                      Send Message
                    </Button>
                  </form>
                </Form>
              )}

              {/* Sponsor Form */}
              {formType === "sponsors" && (
                <Form {...sponsorForm}>
                  <form onSubmit={sponsorForm.handleSubmit(onSubmitSponsor)} className="space-y-4" data-testid="form-sponsors">
                    <FormField
                      control={sponsorForm.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-black">Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your name" {...field} data-testid="input-name" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={sponsorForm.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-black">Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="your.email@example.com" {...field} data-testid="input-email" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={sponsorForm.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-black">Company</FormLabel>
                          <FormControl>
                            <Input placeholder="Your company name" {...field} data-testid="input-company" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={sponsorForm.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-black">Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell us about your sponsorship interest..."
                              className="min-h-[120px]"
                              {...field}
                              data-testid="textarea-message"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" className="w-full" data-testid="button-submit">
                      Send Message
                    </Button>
                  </form>
                </Form>
              )}
            </Card>

            {/* Contact Email */}
            <Card className="p-6" style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }}>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-black" />
                <div>
                  <p className="text-sm font-semibold text-black">Contact us at</p>
                  <a
                    href="mailto:NSFK@gmail.com"
                    className="text-black hover:underline"
                    data-testid="link-email"
                  >
                    NSFK@gmail.com
                  </a>
                </div>
              </div>
            </Card>

            {/* Social Media Links */}
            <Card className="p-6" style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }}>
              <h3 className="text-lg font-semibold mb-4 text-black">Follow Us</h3>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/notsafeforkidspod"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-md hover-elevate active-elevate-2"
                  data-testid="link-instagram"
                >
                  <SiInstagram className="h-5 w-5" />
                  <span>Instagram</span>
                </a>
                <a
                  href="https://www.youtube.com/@notsafeforkidspod"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-md hover-elevate active-elevate-2"
                  data-testid="link-youtube"
                >
                  <SiYoutube className="h-5 w-5" />
                  <span>YouTube</span>
                </a>
                <a
                  href="https://www.tiktok.com/@notsafeforkidspod"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-md hover-elevate active-elevate-2"
                  data-testid="link-tiktok"
                >
                  <SiTiktok className="h-5 w-5" />
                  <span>TikTok</span>
                </a>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
