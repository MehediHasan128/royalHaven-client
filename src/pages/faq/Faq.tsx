import { Divider, Typography } from "@mui/material";
import QuestionAccordion from "../../components/ui/QuestionAccordion";

const Faq = () => {
  return (
    <div className="min-h-screen py-16 px-5 lg:p-20">
      <div>
        <div className="text-center">
          <Typography variant="h2">
            <span className="font-medium">Frequently asked question</span>
          </Typography>
          <div className="my-5">
            <Typography variant="body1">
              <span className="text-gray-700 font-medium">
                These are the most commonly asked questions about Royal Haven{" "}
                <br />
                Can't find what you're looking for?{" "}
                <span className="cursor-pointer underline">
                  Chat to our friendly team!
                </span>
              </span>
            </Typography>
          </div>
        </div>
        <div className="lg:w-[50%] mx-auto mt-10">
          <div className="my-5">
            <Typography variant="h4">
              <span className="font-medium">General Question</span>
            </Typography>
            <div className="mt-5">
              <QuestionAccordion
                panel="1"
                question="What is Royal Haven?"
                answer="Royal Haven is a platform that connects property buyers and sellers, making real estate transactions easy, secure, and hassle-free."
              />
              <QuestionAccordion
                panel="2"
                question="How does Royal Haven work?"
                answer="Sellers can list their properties with details and images, while buyers can browse listings, contact sellers, and finalize deals through our platform."
              />
              <QuestionAccordion
                panel="3"
                question="Is Royal Haven available in all locations?"
                answer="We operate in multiple locations and are constantly expanding. Check our website to see if we cover your area."
              />
              <QuestionAccordion
                panel="4"
                question="Do I need to create an account to use Royal Haven?"
                answer="While you can browse properties without an account, you need to register to list properties, contact sellers, or save favorite listings."
              />
            </div>
          </div>
          <Divider />
          <div className="my-5">
          <Typography variant="h4">
              <span className="font-medium">For Buyers</span>
            </Typography>
            <div className="mt-5">
              <QuestionAccordion
                panel="5"
                question="How can I find properties on Royal Haven?"
                answer="Use our search feature to filter properties based on location, price, type, size, and other preferences. You can also save listings and get notified of new properties matching your interests."
              />
              <QuestionAccordion
                panel="6"
                question="Is buying through Royal Haven safe?"
                answer="We verify listings and provide a secure communication channel between buyers and sellers. However, we recommend conducting your own research and consulting legal experts before making a purchase."
              />
              <QuestionAccordion
                panel="7"
                question="Can I schedule a visit to a property?"
                answer="Yes, you can request a visit by contacting the seller directly through our platform. Most sellers are open to scheduling property viewings before finalizing a deal."
              />
              <QuestionAccordion
                panel="8"
                question="What if I have questions about a listing?"
                answer='Each property listing has a "Contact Seller" option, allowing you to ask questions and request additional details directly from the property owner or agent.'
              />
            </div>
          </div>
          <Divider />
          <div className="my-5">
          <Typography variant="h4">
              <span className="font-medium">For Buyers</span>
            </Typography>
            <div className="mt-5">
              <QuestionAccordion
                panel="5"
                question="How can I find properties on Royal Haven?"
                answer="Use our search feature to filter properties based on location, price, type, size, and other preferences. You can also save listings and get notified of new properties matching your interests."
              />
              <QuestionAccordion
                panel="6"
                question="Is buying through Royal Haven safe?"
                answer="We verify listings and provide a secure communication channel between buyers and sellers. However, we recommend conducting your own research and consulting legal experts before making a purchase."
              />
              <QuestionAccordion
                panel="7"
                question="Can I schedule a visit to a property?"
                answer="Yes, you can request a visit by contacting the seller directly through our platform. Most sellers are open to scheduling property viewings before finalizing a deal."
              />
              <QuestionAccordion
                panel="8"
                question="What if I have questions about a listing?"
                answer='Each property listing has a "Contact Seller" option, allowing you to ask questions and request additional details directly from the property owner or agent.'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
