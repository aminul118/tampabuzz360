interface IFaqs {
  id: string;
  question: string;
  answer: string;
}

const faqs:IFaqs[] = [
  {
    id: "item-1",
    question: "Uplifting",
    answer:
      "We have a commitment to the positive growth and betterment of the communities.",
  },
  {
    id: "item-2",
    question: "Problem Solvers",
    answer:
      "We use our creativity and resources as individuals and as a collaborative team to provide solutions and produce efficiently for team growth.",
  },
  {
    id: "item-3",
    question: "Nimble Entrepreneurs",
    answer:
      "Our strength lies in our ability to do more with less and able to adapt seamlessly to changes in our work environment; We take initiative as entrepreneurs to make sure we are maximizing our work for the greatest mileage.",
  },
  {
    id: "item-4",
    question: "Accountable",
    answer:
      "We take responsibility for our work as individuals and as a team and act with our values in mind.",
  },
  {
    id: "item-5",
    question: "Industry Leaders",
    answer:
      "We take pride in the quality of work we produce for our team and our community and aim for excellence in our industry.",
  },
  {
    id: "item-6",
    question: "Kind",
    answer:
      "We always strive to lead with kindness and respect in dealing with each other, the people we interact with and the community we serve.",
  },
];

export default faqs;
