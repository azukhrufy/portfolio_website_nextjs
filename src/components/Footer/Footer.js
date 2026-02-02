import React from 'react';
import { AiFillGithub, AiFillGitlab, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Contact</LinkTitle>
          <LinkItem href="mailto:anandazukhruf@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email Ananda Zukhruf">
            anandazukhruf@gmail.com
          </LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Location</LinkTitle>
          <LinkItem as="p">Bandung, Indonesia</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>© 2025 Ananda Zukhruf Awalwi - Software Engineer & Frontend Engineer</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/azukhrufy" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://gitlab.com/azukhrufy" target="_blank" rel="noopener noreferrer" aria-label="GitLab Profile">
            <AiFillGitlab size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/azukhrufy/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;