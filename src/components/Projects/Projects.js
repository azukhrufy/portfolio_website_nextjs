import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects,personalProjects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id='projects'>
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map(({id, image, title, description, tags, source, visit}) =>(
        <BlogCard key={id}>
          <Img src={image} />
          <TitleContent >
            <HeaderThree title>{title}</HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo>
            {description}
          </CardInfo>
          <br/>
          <div>
            <TitleContent>
              <HeaderThree size="3rem">Stack</HeaderThree>
            </TitleContent>
            <Hr/>
            <TagList>
              {tags.map((tag, i) => (
                <Tag key={i}>{tag}</Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
            {visit ? (<ExternalLinks href={visit} target="_blank" rel="noopener noreferrer">Visit</ExternalLinks>) : (<></>)}
            {source ? (<ExternalLinks href={source} target="_blank" rel="noopener noreferrer">Source</ExternalLinks>) : (<></>)}
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
    <SectionDivider />
    <SectionTitle main>Personal Projects</SectionTitle>
    <GridContainer>
      {personalProjects.map(({id, image, title, description, tags, source, visit}) =>(
        <BlogCard key={id}>
          <Img src={image} />
          <TitleContent >
            <HeaderThree title>{title}</HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo>
            {description}
          </CardInfo>
          <br/>
          <div>
            <TitleContent>
              <HeaderThree size="3rem">Stack</HeaderThree>
            </TitleContent>
            <Hr/>
            <TagList>
              {tags.map((tag, i) => (
                <Tag key={i}>{tag}</Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
            {visit ? (<ExternalLinks href={visit} target="_blank" rel="noopener noreferrer">Visit</ExternalLinks>) : (<></>)}
            {source ? (<ExternalLinks href={source} target="_blank" rel="noopener noreferrer">Source</ExternalLinks>) : (<></>)}
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;