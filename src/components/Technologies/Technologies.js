import React from 'react';
import { DiFirebase, DiReact, DiZend, DiSwift, DiPython, DiAndroid, DiGit ,DiAngularSimple, } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle main>Technologies</SectionTitle>
    <SectionText>

    </SectionText>
    <List>
    <ListItem>
        <DiGit size="3rem"/>
        <ListContainer>
          <ListTitle>Git</ListTitle>
          <ListParagraph>
            Experience in develop <br />
            multiple project using Git.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiSwift size="3rem"/>
        <ListContainer>
          <ListTitle>iOS Swift</ListTitle>
          <ListParagraph>
            Experience in develop <br />
            iOS applications with Swift
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiReact size="3rem"/>
        <ListContainer>
          <ListTitle>Front - End</ListTitle>
          <ListParagraph>
            Experience in develop Web <br/>
            Application using multiple Front End Framework
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiPython size="3rem"/>
        <ListContainer>
          <ListTitle>Python</ListTitle>
          <ListParagraph>
            Experience in develop <br/>
            Odoo using Python
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
