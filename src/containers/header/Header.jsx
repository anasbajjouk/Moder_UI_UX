import React from "react";
import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Let's Build Something amazing with GPT-3 OpenAI
        </h1>
        <p className="">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam,
          mollitia ipsam maxime eius tempore consectetur rerum nisi pariatur
          fuga commodi non ex eum aliquid tenetur ducimus molestias itaque,
          labore eaque!
        </p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your email address" />
          <button type="button">Get started</button>
        </div>

        <div className="gpt3__header-content__people">
          <img src={people} alt="people" />
          <p className="">
            1600 people requested access a visit in the last 24 hours.
          </p>
        </div>
      </div>
      <div className="gpt3__header-image">
        <img src={ai} alt="ai" />
      </div>
    </div>
  );
};

export default Header;
