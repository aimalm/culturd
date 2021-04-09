import { ImCross } from "react-icons/im";

const addInfo = `Public transportation options are available nearby.
Face masks provided for travelers. 
Hand sanitizer available to travelers and staff. 
Gear/equipment sanitized between use.
Guestes required to regularly wash hands.`;

const impDet = () => {
  return (
    <div className="impDetails">
      <h5>Not included</h5>
      <div className="cross-icon-wrapper">
        <p>
          <span className="cross-icon">
            <ImCross />
          </span>{" "}
          Soda
        </p>
        <p>
          <span className="cross-icon">
            <ImCross />
          </span>{" "}
          Coffee and/or Tea
        </p>
      </div>
      <br />
      <br />
      <h5>Additional Info</h5>
      <p className="multiline">{addInfo}</p>
      <br />
      <h5>Meeting Point</h5>
      <p className="lastline">
        Please ring the bell at Ganzendries 176, 9000 Ghent and we'll welcome
        you.
      </p>
    </div>
  );
};

const AfghanWorkshopInfo = [
  {
    title: "What We Offer",
    content: `We offer 3 activities in a 3-hour workshop. Guests will be 
        introduced to authentic food, dance and art. They will get to taste, 
        dance and learn more about a culture of choice.
        The workshops will take place in small groups of up to 15 people
        to ensure everybody gets the maximum out of the workshops. 
        Corona measurements will be respected. The workshops will be held in big enough 
        rooms so social distancing can be ensured.
        We have put thought into these workshops and we are open for questions and dialogue.
        Feel free to leave a review in case you have followed one of our workshops.`,
  },
  {
    title: "Important Details",
    content: impDet(),
  },
  {
    title: "Cancellation Policy",
    content:
      "For a full refund, cancel at least 24 hours before the start of the workshop.",
  },
];

const CongoWorkshopInfo = [
  {
    title: "What We Offer",
    content: `We offer 3 activities in a 3-hour workshop. Guests will be 
        introduced to authentic food, dance and art. They will get to taste, 
        dance and learn more about a culture of choice.
        The workshops will take place in small groups of up to 15 people
        to ensure everybody gets the maximum out of the workshops. 
        Corona measurements will be respected. The workshops will be held in big enough 
        rooms so social distancing can be ensured.
        We have put thought into these workshops and we are open for questions and dialogue.
        Feel free to leave a review in case you have followed one of our workshops.`,
  },
  {
    title: "Important Details",
    content: impDet(),
  },
  {
    title: "Cancellation Policy",
    content:
      "For a full refund, cancel at least 24 hours before the start of the workshop.",
  },
];

const HongWorkshopInfo = [
  {
    title: "What We Offer",
    content: `We offer 3 activities in a 3-hour workshop. Guests will be 
        introduced to authentic food, dance and art. They will get to taste, 
        dance and learn more about a culture of choice.
        The workshops will take place in small groups of up to 15 people
        to ensure everybody gets the maximum out of the workshops. 
        Corona measurements will be respected. The workshops will be held in big enough 
        rooms so social distancing can be ensured.
        We have put thought into these workshops and we are open for questions and dialogue.
        Feel free to leave a review in case you have followed one of our workshops.`,
  },
  {
    title: "Important Details",
    content: impDet(),
  },
  {
    title: "Cancellation Policy",
    content:
      "For a full refund, cancel at least 24 hours before the start of the workshop.",
  },
];

const IndoWorkshopInfo = [
  {
    title: "What We Offer",
    content: `We offer 3 activities in a 3-hour workshop. Guests will be 
        introduced to authentic food, dance and art. They will get to taste, 
        dance and learn more about a culture of choice.
        The workshops will take place in small groups of up to 15 people
        to ensure everybody gets the maximum out of the workshops. 
        Corona measurements will be respected. The workshops will be held in big enough 
        rooms so social distancing can be ensured.
        We have put thought into these workshops and we are open for questions and dialogue.
        Feel free to leave a review in case you have followed one of our workshops.`,
  },
  {
    title: "Important Details",
    content: impDet(),
  },
  {
    title: "Cancellation Policy",
    content:
      "For a full refund, cancel at least 24 hours before the start of the workshop.",
  },
];

export {
  AfghanWorkshopInfo,
  CongoWorkshopInfo,
  HongWorkshopInfo,
  IndoWorkshopInfo,
};
