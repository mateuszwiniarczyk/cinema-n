import { IMAGE_URL } from 'config';
import { Link } from 'react-router-dom';
import { Wrapper, ContentWrapper, Title, Description } from './index.styles';

interface LayoutProps {
  title: string;
  link: string;
  linkLabel: string;
  description: string;
  children: React.ReactNode;
}

export const Layout = ({ title, link, linkLabel, description, children }: LayoutProps) => (
  <Wrapper>
    <ContentWrapper>
      <Title>{title}</Title>
      <Description>
        <span>{description}</span> <Link to={link}>{linkLabel}</Link>
      </Description>
      {children}
    </ContentWrapper>
    <img src={`${IMAGE_URL}/auth_bg.png`} alt="" />
  </Wrapper>
);
