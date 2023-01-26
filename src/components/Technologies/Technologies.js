import React from "react";
import {
  DiFirebase,
  DiReact,
  DiZend,
  DiSwift,
  DiPython,
  DiAndroid,
  DiGit,
  DiAngularSimple,
} from "react-icons/di";
import { TbApi } from "react-icons/tb";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const techData = [
  {
    icon: <DiGit size="3rem" />,
    title: "Git",
    desc: (
      <>
        Experience in develop
        <br />
        multiple project using Git.
      </>
    ),
  },
  {
    icon: <DiReact size="3rem" />,
    title: "Front - End",
    desc: (
      <>
        Experience in develop Web
        <br />
        Application using multiple Front End Framework.
      </>
    ),
  },
  {
    icon: <DiPython size="3rem" />,
    title: "Python",
    desc: (
      <>
        Experience in develop
        <br />
        Odoo using Python.
      </>
    ),
  },
  {
    icon: <DiSwift size="3rem" />,
    title: "iOS Swift",
    desc: (
      <>
        Experience in develop
        <br />
        iOS applications with Swift.
      </>
    ),
  },
  {
    icon: <TbApi size="3rem" />,
    title: "API Integration",
    desc: (
      <>
        Experience in integrate
        <br />
        API for Web and Mobile App.
      </>
    ),
  },
];

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle main>Technologies</SectionTitle>
    <SectionText></SectionText>
    <List>
      {techData.map((i, key) => (
        <ListItem key={key}>
          {i.icon}
          <ListContainer>
            <ListTitle>{i.title}</ListTitle>
            <ListParagraph>{i.desc}</ListParagraph>
          </ListContainer>
        </ListItem>
      ))}
    </List>
  </Section>
);

export default Technologies;
