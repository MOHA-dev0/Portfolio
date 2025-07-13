import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    // Append Web3Forms access key
    formData.append("access_key", "5643292f-7f62-4b38-af31-66dfdb1fe1e8");

    // Optional: from name (useful in email subject)
    formData.append("from_name", "My Portfolio Contact");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        alert("Message sent successfully!");
        e.target.reset();
      } else {
        console.error(data);
        alert("Failed to send message.");
      }
    } catch (error) {
      alert("Error sending message.");
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-purple-400 mx-auto"></div>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            Feel free to reach out to me for any inquiries, collaborations, or
            just to say hello!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden border-0 shadow-lg">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 md:grid-cols-5">
                {/* Contact Info */}
                <div className="bg-gradient-to-br from-primary to-purple-500 text-white p-8 md:col-span-2">
                  <h3 className="text-2xl font-semibold mb-6">
                    Contact Information
                  </h3>

                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <Phone className="w-5 h-5 opacity-80" />
                      <div>
                        <p className="text-sm opacity-80">Phone</p>
                        <p className="font-medium">+90 552 651 18 27</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <Mail className="w-5 h-5 opacity-80" />
                      <div>
                        <p className="text-sm opacity-80">Email</p>
                        <p className="font-medium">Mohammad.uns.02@gmail.com</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <MapPin className="w-5 h-5 opacity-80" />
                      <div>
                        <p className="text-sm opacity-80">Location</p>
                        <p className="font-medium">Istanbul, Turkey</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <Github className="w-5 h-5 opacity-80" />
                      <div>
                        <p className="text-sm opacity-80">GitHub</p>
                        <a
                          href="https://github.com/MOHA-dev0"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium hover:underline"
                        >
                          github.com/MOHA-dev0
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <div className="p-8 md:col-span-3">
                  <h3 className="text-2xl font-semibold mb-6">
                    Send a Message
                  </h3>
                  <form onSubmit={handleSubmit}>
                    <input
                      type="hidden"
                      name="from_name"
                      value="My Portfolio Contact"
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Your Name
                        </label>
                        <input
                          name="name"
                          type="text"
                          id="name"
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Your Email
                        </label>
                        <input
                          name="email"
                          type="email"
                          id="email"
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="mt-6">
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Subject
                      </label>
                      <input
                        name="subject"
                        type="text"
                        id="subject"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="How can I help you?"
                      />
                    </div>

                    <div className="mt-6">
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Your Message
                      </label>
                      <textarea
                        name="message"
                        id="message"
                        rows={4}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="Write your message here..."
                      ></textarea>
                    </div>

                    <div className="mt-6">
                      <Button
                        type="submit"
                        className="w-full bg-primary hover:bg-primary/90"
                      >
                        Send Message
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
