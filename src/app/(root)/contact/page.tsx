import ContactForm from "@/components/Contact/ContactForm";
import ContactInfo from "@/components/Contact/ContactInfo";
import Container from "@/components/ui/Container";
import { Metadata } from "next";

const image = "https://tampabuzz360.com/images/features/thumbnails.png";
const title =
  "Contact -Tampabuzz360 Digital news destination for everything happening in Tampa";
const description =
  "Get in touch with TampaBuzz360 for news tips, advertising inquiries, partnerships, or general questions. We’re here to connect, collaborate, and respond to your media needs. Reach out today!";
export const metadata: Metadata = {
  title,
  description,
  keywords:
    "Contact TampaBuzz360, Tampa news contact, media inquiries Tampa, news tip TampaBuzz360, TampaBuzz360 advertising, connect with TampaBuzz360, news partnership Tampa, Tampa journalism contact",
  openGraph: {
    type: "website",
    url: "https://www.tampabuzz360.com/contact",
    title,
    description,
    images: [{ url: image }],
  },

};

const ContactPage = () => {
  return (
    <Container className="flex min-h-[calc(100vh-424px)] justify-center items-center ">
      {/* Contact Info */}
      <div className="w-1/2 h-[500px]">
        <ContactInfo />
      </div>
      {/* Contact Form */}
      <div className="w-1/2 h-[500px]">
        <ContactForm />
      </div>
    </Container>
  );
};

export default ContactPage;
