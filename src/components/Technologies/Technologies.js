import React from 'react';
import { DiFirebase, DiReact, DiZend, DiSwift, DiPython, DiAndroid, DiGit,DiAngularSimple } from 'react-icons/di';
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
            Experience in develop <br/>
            React.js and React Native
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
      <ListItem>
        <DiAngularSimple size="3rem"/>
        <ListContainer>
          <ListTitle>Angular</ListTitle>
          <ListParagraph>
            Experience in develop <br/>
            Smartfren Kiosk App Admin
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
