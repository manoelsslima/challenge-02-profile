import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

function App() {
  const [skillState, setSkillState] = useState();
  return (
    <div className="card">
      <Avatar imageName="profile.jpeg" />
      <div className="data">
        <Intro
          name="Manoel Lima"
          bio="Software Engineer with over 13 years of experience
          specializing in Java, REST APIs, and Spring Boot."
        />
        <SkillList
          state={skillState}
          parentCallback={setSkillState}
          skillList={skills}
        />
      </div>
    </div>
  );
}

function Avatar(props) {
  return (
    <div>
      <img src={props.imageName} alt={props.imageName} className="avatar" />
    </div>
  );
}

function Intro(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <div>{props.bio}</div>
    </div>
  );
}

/* should have one Skill component for each
web dev skill that you have, customized
with props */
function SkillList({ state, skillList, parentCallback }) {
  skillList.map((skill) => (
    <Skill state={state} skill={skill} parentCallback={parentCallback} />
  ));
}

// each skill must have a name, a color and an emoji
function Skill({ state, skill, parentCallback }) {
  return (
    <div className="skill" style={{ backgroundColor: skill.color }}>
      {state} {skill} {parentCallback}
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
