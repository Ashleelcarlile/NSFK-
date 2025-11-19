import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { SiInstagram, SiYoutube, SiTiktok } from "react-icons/si";
import { Mail, ArrowUpRight } from "lucide-react";
import contactPhoto from "@assets/contact-photo.jpg";

const listenerFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

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

type ListenerFormData = z.infer<typeof listenerFormSchema>;
type GuestFormData = z.infer<typeof guestFormSchema>;
type SponsorFormData = z.infer<typeof sponsorFormSchema>;

export default function Contact() {
  const [formType, setFormType] = useState<"listeners" | "guests" | "sponsors">("listeners");
  const { toast } = useToast();

  const listenerForm = useForm<ListenerFormData>({
    resolver: zodResolver(listenerFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

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

  const onSubmitListener = (data: ListenerFormData) => {
    console.log("Listener form:", data);
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out! We'll get back to you soon.",
    });
    listenerForm.reset();
  };

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
            <div className="p-8 rounded-lg" style={{ border: '2px solid rgba(0, 0, 0, 0.3)' }}>
              <h2 className="text-3xl font-bold mb-6 text-black">Get in Touch</h2>

              {/* Dropdown for form type */}
              <div className="mb-6">
                <Select value={formType} onValueChange={(value) => setFormType(value as "listeners" | "guests" | "sponsors")}>
                  <SelectTrigger className="border-2 border-black" data-testid="select-form-type">
                    <SelectValue placeholder="I am a..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="listeners">Listener</SelectItem>
                    <SelectItem value="guests">Guest</SelectItem>
                    <SelectItem value="sponsors">Sponsor</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Listener Form */}
              {formType === "listeners" && (
                <Form {...listenerForm}>
                  <form onSubmit={listenerForm.handleSubmit(onSubmitListener)} className="space-y-4" data-testid="form-listeners">
                    <FormField
                      control={listenerForm.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-black">Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your name" {...field} className="border-2 border-black" data-testid="input-name" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={listenerForm.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-black">Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="your.email@example.com" {...field} className="border-2 border-black" data-testid="input-email" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={listenerForm.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-black">Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell us what's on your mind..."
                              className="min-h-[120px] border-2 border-black"
                              {...field}
                              data-testid="textarea-message"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <button 
                      type="submit" 
                      className="relative flex items-center justify-center gap-4 bg-black text-white px-8 py-4 rounded-full text-lg font-semibold overflow-hidden group w-full"
                      data-testid="button-submit"
                      style={{ paddingRight: '4.5rem' }}
                    >
                      <span className="relative z-10">Send Message</span>
                      <div className="absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                        <ArrowUpRight className="h-6 w-6 text-black" />
                      </div>
                    </button>
                  </form>
                </Form>
              )}

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
                            <Input placeholder="Your name" {...field} className="border-2 border-black" data-testid="input-name" />
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
                            <Input type="email" placeholder="your.email@example.com" {...field} className="border-2 border-black" data-testid="input-email" />
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
                              className="min-h-[120px] border-2 border-black"
                              {...field}
                              data-testid="textarea-message"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <button 
                      type="submit" 
                      className="relative flex items-center justify-center gap-4 bg-black text-white px-8 py-4 rounded-full text-lg font-semibold overflow-hidden group w-full"
                      data-testid="button-submit"
                      style={{ paddingRight: '4.5rem' }}
                    >
                      <span className="relative z-10">Send Message</span>
                      <div className="absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                        <ArrowUpRight className="h-6 w-6 text-black" />
                      </div>
                    </button>
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
                            <Input placeholder="Your name" {...field} className="border-2 border-black" data-testid="input-name" />
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
                            <Input type="email" placeholder="your.email@example.com" {...field} className="border-2 border-black" data-testid="input-email" />
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
                            <Input placeholder="Your company name" {...field} className="border-2 border-black" data-testid="input-company" />
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
                              className="min-h-[120px] border-2 border-black"
                              {...field}
                              data-testid="textarea-message"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <button 
                      type="submit" 
                      className="relative flex items-center justify-center gap-4 bg-black text-white px-8 py-4 rounded-full text-lg font-semibold overflow-hidden group w-full"
                      data-testid="button-submit"
                      style={{ paddingRight: '4.5rem' }}
                    >
                      <span className="relative z-10">Send Message</span>
                      <div className="absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                        <ArrowUpRight className="h-6 w-6 text-black" />
                      </div>
                    </button>
                  </form>
                </Form>
              )}
            </div>

            {/* Contact Email */}
            <div className="p-6 rounded-lg" style={{ border: '2px solid rgba(0, 0, 0, 0.3)' }}>
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
            </div>

            {/* Social Media Links */}
            <div className="p-6 rounded-lg" style={{ border: '2px solid rgba(0, 0, 0, 0.3)' }}>
              <h3 className="text-lg font-semibold mb-4 text-black">Follow Us</h3>
              <div className="flex flex-wrap gap-4">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
