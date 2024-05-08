import { useState } from "react";
import PlusIcon from "../../assets/plus.svg";
import MinusIcon from "../../assets/minus.svg";

const questions = [
  {
    id: 1,
    question: "Do you offer freelancers?",
    answer:
      "Yes, we offer a wide range of freelancers with various skills and expertise to meet your project needs. You can browse through our talent pool and choose freelancers based on your specific requirements.",
  },
  {
    id: 2,
    question:
      "What's the guarantee that I will be satisfied with the hired talent?",
    answer:
      "We strive to ensure your satisfaction with the hired talent. However, in case you are not satisfied, we offer dispute resolution mechanisms and support to address any issues that may arise during the project.",
  },
  {
    id: 3,
    question: "Can I hire multiple talents at once?",
    answer:
      "If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution.",
  },
  {
    id: 4,
    question: "Why should I not go to an agency directly?",
    answer:
      "While agencies provide talent, they often come with higher costs and less flexibility compared to hiring freelancers directly through our platform. Additionally, you have more control over the hiring process and can find talents that best fit your specific requirements.",
  },
  {
    id: 5,
    question: "Who can help me pick a right skillset and duration for me?",
    answer:
      "Our team of experts is available to assist you in selecting the right skill set and duration for your project. Feel free to reach out to us through our support channels for personalized assistance.",
  },
];

function Questions() {
  const [selectedQuestion, setSelectedQuestion] = useState(3);

  const handleQuestionClick = (id) => {
    if (selectedQuestion === id) {
      setSelectedQuestion(null);
    } else {
      setSelectedQuestion(id);
    }
  };

  return (
    <div className="font-manrope w-[35vw]">
      {questions.map((q) => (
        <div key={q.id} className="my-10 border-b-2 pb-8 border-[#d7d7d7]">
          <div className="flex items-center justify-between">
            <p className="text-xl font-semibold w-[26rem]">{q.question}</p>
            <button onClick={() => handleQuestionClick(q.id)}>
              {selectedQuestion === q.id ? (
                <img src={MinusIcon} alt="minusIcon" className="py-2" />
              ) : (
                <img src={PlusIcon} alt="plusIcon" />
              )}
            </button>
          </div>
          {selectedQuestion === q.id && (
            <div className="mt-4">
              <p className="text-[#617275]">{q.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Questions;
