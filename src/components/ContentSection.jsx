import React from 'react';
import styled from 'styled-components';

// Styled components for the content section
const ContentSectionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap:2vw;
  padding: 20px;
`;

const CornerImage = styled.img`
  width: 10vw;
  height: 35vw;
`;

const ContentBox = styled.div`
  flex: 1;
   background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-radius: 20px;
    border:1px solid rgba(255, 255, 255, 0.18);
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
    padding: 20px;
    border-radius: 40px;
    text-align: center;
    height: 33vw;
    h2 {
    font-size: 2vw;
    font-weight: 500;
    text-decoration: underline;
    color:#FF7F3F;
  }
`;

const ContentSection = () => {
  return (
    <ContentSectionWrapper>
      <CornerImage src="assets/left.png" alt="First Image" />
      <ContentBox>
        <h2>ACHIEVEMENTS:</h2>
      </ContentBox>
      <ContentBox>
        <h2>PROGRESS:</h2>
      </ContentBox>
      <CornerImage src="assets/right.png" alt="Second Image" />
    </ContentSectionWrapper>
  );
};

export default ContentSection;
