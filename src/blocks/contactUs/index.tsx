import { QuoteForm } from "@/components/quoteForm";
import { Phone, Mail, LocationOn } from "@mui/icons-material";

export const ContactUs = () => {
  const contactInfo = [
    {
      icon: <Phone sx={{ color: "#E52323" }} />,
      text: "(555) 123-TINT",
    },
    {
      icon: <Mail sx={{ color: "#E52323" }} />,
      text: "info@tintpro.com",
    },
    {
      icon: <LocationOn sx={{ color: "#E52323" }} />,
      text: "123 Tinting Ave, Your City, ST 12345",
    },
  ];
  return (
    <section id="contact" className="py-16 bg-[#F2F2F2]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold md:text-4xl title-primary mb-4">
            Get Your Free Quote
          </h2>
          <p className="text-lg paragraph-primary">
            Ready to transform your{" "}
            <span className="font-semibold">assets</span>? Contact us today for
            a personalized quote.
          </p>
        </div>

        <div className="grid md:grid-cols-2 pt-8 gap-10 items-start justify-center max-w-3xl mx-auto">
          {/* Left: Contact Info */}
          <div>
            <h3 className="text-2xl font-bold title-primary mb-6">
              Contact Information
            </h3>
            <div className="space-y-4 mb-8">
              {contactInfo.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center space-x-3 transition-transform duration-300 hover:translate-x-2">
                  <span>{item.icon}</span>
                  <span className="paragraph-primary">{item.text}</span>
                </div>
              ))}
            </div>

            <div>
              <h4 className="text-lg font-semibold title-primary mb-3">
                Business Hours
              </h4>
              <div className="space-y-1 paragraph-primary">
                <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                <p>Saturday: 9:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
          <QuoteForm />
        </div>
      </div>
    </section>
  );
}