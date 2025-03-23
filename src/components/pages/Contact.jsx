import Section from "../common/Section";
import Heading from "../common/Heading";
import Button from "../common/Button";

const Contact = () => {
  return (
    <Section id="contact">
      <div className="container">
        <Heading className="md:max-w-md lg:max-w-2xl" title="Get In Touch" />

        <div className="flex flex-wrap gap-10">
          <div className="w-full lg:w-1/2">
            <form className="space-y-6">
              <div>
                <label className="block text-n-4 mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-n-7 rounded-lg p-4 text-n-1"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-n-4 mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-n-7 rounded-lg p-4 text-n-1"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label className="block text-n-4 mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full bg-n-7 rounded-lg p-4 text-n-1"
                  placeholder="Your message"
                ></textarea>
              </div>
              <Button>Send Message</Button>
            </form>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="space-y-6">
              <div>
                <h3 className="h3 mb-4">Contact Information</h3>
                <p className="body-2 text-n-4">
                  Feel free to reach out to me through:
                </p>
              </div>
              <div className="space-y-4">
                <p className="text-n-1">📧 your.email@example.com</p>
                <p className="text-n-1">📱 Your Phone Number</p>
                <p className="text-n-1">📍 Your Location</p>
              </div>
              <div className="flex gap-4">
                {/* Add your social media links */}
                <a
                  href="https://github.com/yourusername"
                  className="text-n-1 hover:text-color-1"
                >
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/yourusername"
                  className="text-n-1 hover:text-color-1"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
