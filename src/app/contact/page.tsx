import ContactForm from "./ContactForm";

export const metadata = {
  title: "Contact - Heimdal Portal",
  description: "Get in touch with us for LARP hosting inquiries",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-neutral-900 text-white">
      <ContactForm />
    </div>
  );
}