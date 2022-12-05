import styled from "styled-components";
import VideoTile from "src/components/molecules/VideoTile/VideoTile";
import { Video } from "src/types/Video";
import { Link } from "react-router-dom";
import React from "react";

const VideoListWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  gap: 10px;
  @media (min-width: 776px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1333px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const Title = styled.h2`
  color: white;
  text-align: center;
  font-size: 36px;
  font-weight: 100;
  margin-top: 0;
`;

const Bait = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 1px solid white;
  background: rgba(0, 0, 0, 0.7);
  transition: all 0.3s;
  font-size: 26px;
  padding: 32px 16px;
  &:hover {
    text-decoration: none;
    transform: scale(1.014);
    background: rgba(0, 0, 0, 1);
  }
  p {
    color: white;
    text-align: center;
  }
  @media (min-width: 776px) {
    font-size: 20px;
  }
  @media (min-width: 1333px) {
    grid-column-start: span 2;
    padding: 10px;
  }
`;

const VideoList = ({ data, title }: { data: Video[]; title?: string }) => {
  const parsedData = data.filter((elem) => !elem.hide && !elem.deleted);

  return (
    <>
      {title && <Title>{title}</Title>}
      <VideoListWrapper>
        {parsedData.map((elem, index) => (
          <React.Fragment key={index}>
            <VideoTile data={elem} />
          </React.Fragment>
        ))}
        <Bait to="channels">
          <p>Nothing interesing? Take a look at our channels list!</p>
        </Bait>
      </VideoListWrapper>
    </>
  );
};

export default VideoList;
