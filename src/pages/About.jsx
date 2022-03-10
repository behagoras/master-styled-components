
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding:20px;
  max-width:800px;
  margin:auto;
  background:#666;
`;

const Paragraph = styled.p`
  color:#123;
  font-family:monospace;
`;

const Title = styled.h2`
  color:#136;
`;

const About = () => (
  <Container>
    <Title>About</Title>
    <Paragraph>Lorem iParagraphsum dolor sit amet consectetur adipisicing elit. Quo iusto unde doloribus molestias quia voluptate ullam explicabo dolorem omnis illo. Enim quos ex, voluptas labore sit recusandae eum nostrum aliquid!</Paragraph>
  </Container>

);
export default About;
