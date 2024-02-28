import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="cat_dog">
      <div className="dog">
        <h1>Dog</h1>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIaG2VS1dnCkqocTQ1ie3Ja_bwAG_ZphP2Mg&usqp=CAU" />
        The dog is a domesticated descendant of the wolf. Also called the
        domestic dog, it is derived from extinct Pleistocene wolves, and the
        modern wolf is the dog's nearest living relative. Dogs were the first
        species to be domesticated by hunter-gatherers over 15,000 years ago
        before the development of agriculture.
      </div>
      <div className="dog">
        <h1> Cat </h1>
        <img className="cat"  src="https://wallpaperaccess.com/full/32048.jpg" />
        The cat is a domestic species of small carnivorous mammal. It is the
        only domesticated species in the family Felidae and is commonly referred
        to as the domestic cat or house cat to distinguish it from the wild
        members of the family. Wikipedia
      </div>
    </div>
  );
};

export default About;
