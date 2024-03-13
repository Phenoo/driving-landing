import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Questions() {
  const faqs = [
    {
      question: "What are the requirements to enroll in your driving school?",
      answer:
        "To enroll in our driving school, you must have a valid learner's permit or driver's license issued by the state. Additionally, you must meet any age requirements set by the state for driving instruction.",
    },
    {
      question: "How do I schedule my driving lessons?",
      answer:
        "You can schedule your driving lessons by contacting our office directly via phone or email. Our friendly staff will assist you in finding convenient lesson times that fit your schedule.",
    },
    {
      question: "What types of driving lessons do you offer?",
      answer:
        "We offer a variety of driving lessons, including beginner's courses, defensive driving courses, highway driving lessons, and parallel parking practice, among others. We also provide refresher courses for experienced drivers.",
    },
    {
      question: "How much does it cost to enroll in your driving school?",
      answer:
        "Our pricing varies depending on the type of lesson package you choose and any additional services required. Please contact us directly for a personalized quote.",
    },
    {
      question:
        "Do you provide vehicles for driving lessons, or do I need to use my own?",
      answer:
        "We provide well-maintained, dual-controlled vehicles for all driving lessons. However, if you prefer to use your own vehicle for instruction, please let us know, and we can accommodate your request.",
    },
    {
      question: "Can I choose my instructor?",
      answer:
        "Yes, you can request a specific instructor when scheduling your driving lessons. We have a team of experienced and certified instructors, and we'll do our best to match you with your preferred instructor.",
    },
    {
      question: "How many driving lessons are included in your programs?",
      answer:
        "The number of driving lessons included in our programs varies depending on the package you choose. We offer both comprehensive packages with multiple lessons and individual lesson options for greater flexibility.",
    },
    {
      question: "What is the duration of each driving lesson?",
      answer:
        "Each driving lesson typically lasts for about one hour. However, we can adjust the duration based on your preferences and learning needs.",
    },
    {
      question:
        "Is there a minimum age requirement to enroll in your driving school?",
      answer:
        "Yes, the minimum age requirement for enrollment in our driving school is determined by state regulations. Please check with our office or your local DMV for specific age requirements in your area.",
    },
    {
      question: "Do you offer discounts or promotions for students?",
      answer:
        "Yes, we occasionally offer discounts and promotions for students. Be sure to check our website or contact our office for information on any current deals or special offers.",
    },
  ];

  return (
    <Accordion
      type="single"
      collapsible
      className="w-full grid grid-cols-1 md:grid-cols-2 gap-8"
    >
      {faqs.map((item, i) => (
        <AccordionItem className="text-left" key={i} value={`item-${i}`}>
          <AccordionTrigger>{item.question}</AccordionTrigger>
          <AccordionContent>{item.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
