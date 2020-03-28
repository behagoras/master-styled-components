
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
  <div>
    <h2>About</h2>
  </div>

);
export default About;
