import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
const faqs = [
    {
      category: "GENERAL QUESTION",
      items: [
        { question: "What tools do you use?", answer: "I use a variety of tools including Figma, Java, React, and Tailwind CSS." },
        { question: "How long does it take to complete a project?", answer: "Project timelines vary, but typically range from 1-4 weeks depending on complexity." },
        { question: "Do you work with clients outside of Kashmir?", answer: "Yes! I work with clients globally, no matter where they are located." },
      ],
    },
    {
      category: "SERVICES",
      items: [
        { question: "What is included in the Figma to Code service?", answer: "I transform your Figma design into a high-quality, fully responsive website with smooth animations and optimized code." },
        { question: "Can you create a multipage website in Code?", answer: "Yes! I can build multipage websites with Pure Good old Fashioned Code with seamless navigation and interactions." },
        { question: "Do you offer revisions after the website is completed?", answer: "Yes, I offer a limited number of revisions to ensure you’re satisfied with the final product." },
      ],
    },
  ];


export default function Questions() {
    const [openIndex, setOpenIndex] = useState(null);
    return (
      <div className="flex flex-col justify-center items-center h-fit bg-gray-100 dark:bg-primary ">
        <div className="text-center max-w-2xl mt-8 text-black dark:text-white">
          <h2 className="text-3xl font-bold  mb-4">Got Questions?</h2>
          <p className="text-gray-400 text-lg">
            Explore the most common questions about my services and workflow. If you don’t find what you’re looking for, feel free to reach out!
          </p>
        </div>


{/* FAQ */}


        <div className="flex justify-center items-center h-screen  bg-gray-100 dark:bg-primary ">
      <div className="max-w-2xl w-screen bg-accent text-black dark:bg-secondary p-6 rounded-xl shadow-lg">

        {faqs.map((section, sectionIdx) => (
          <div key={sectionIdx} className="mb-4 text-black dark:text-white dark:bg-secondary">
            <h3 className="text-xl font-semibold  mb-2">{section.category}</h3>
            {section.items.map((faq, index) => {
              const isOpen = openIndex === `${sectionIdx}-${index}`;
              return (
                <div key={index} className="mb-2 text-black dark:bg-secondary">
                  <button
                    className="w-full flex justify-between items-center p-4 bg-neutral dark:bg-primary rounded-lg text-black dark:text-white"
                    onClick={() => setOpenIndex(isOpen ? null : `${sectionIdx}-${index}`)}
                  >
                    <span>{faq.question}</span>
                    {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </button>
                  
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="p-4 text-gray-500 dark:text-gray-300 bg-neutral dark:bg-primary rounded-lg mt-1">{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>

      </div>
    );
  }
  