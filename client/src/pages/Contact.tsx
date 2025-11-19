import ContactForm from "@/components/ContactForm";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Clock, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a question, suggestion, or want to be a guest? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <ContactForm />
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Email</h3>
                    <p className="text-muted-foreground">hello@podcasthub.com</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      We typically respond within 24-48 hours
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Office Hours</h3>
                    <p className="text-muted-foreground">Monday - Friday</p>
                    <p className="text-muted-foreground">9:00 AM - 5:00 PM PST</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Location</h3>
                    <p className="text-muted-foreground">San Francisco, CA</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Remote-friendly team
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4">Connect With Us</h3>
                <div className="flex flex-wrap gap-4">
                  <button className="px-4 py-2 bg-secondary rounded-md hover-elevate active-elevate-2">
                    Twitter
                  </button>
                  <button className="px-4 py-2 bg-secondary rounded-md hover-elevate active-elevate-2">
                    Instagram
                  </button>
                  <button className="px-4 py-2 bg-secondary rounded-md hover-elevate active-elevate-2">
                    YouTube
                  </button>
                  <button className="px-4 py-2 bg-secondary rounded-md hover-elevate active-elevate-2">
                    Spotify
                  </button>
                </div>
              </CardContent>
            </Card>

            <div className="bg-muted/50 p-6 rounded-lg">
              <h3 className="font-semibold mb-2">Privacy Assurance</h3>
              <p className="text-sm text-muted-foreground">
                Your information is safe with us. We never share your contact details with third
                parties and only use them to respond to your inquiry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
