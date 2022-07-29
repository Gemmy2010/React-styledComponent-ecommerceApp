import React from 'react'
import styled from 'styled-components';

const Announcement = () => {
  return (
    <AnnouncementContainer>
       50% offer offer!
    </AnnouncementContainer>
  )
}

export default Announcement;


const AnnouncementContainer = styled.div`
  height: 30px;
  background-color: #daa520;
  color: #ffffff;
  display:flex;
  align-items:center;
  justify-content:center;
  font-size: 14px;
  font-weight: 500;
`;

