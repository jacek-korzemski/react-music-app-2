import { useState, useEffect } from "react";
import styled from "styled-components";
import VideoTile from "src/components/VideoTile";
import Title from "src/components/Title";
import { Video } from "src/types/Video";
import { Link } from "react-router-dom";
import React from "react";
import Pagination from "src/components/Pagination";

const VideoListWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  gap: 10px;
  margin-bottom: 25px;
  @media (min-width: 776px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1333px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
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

const VideoList = ({
  data,
  title,
  noBait,
  pagination,
  limit,
}: {
  data: Video[];
  title?: string;
  noBait?: boolean;
  pagination?: boolean;
  limit?: number;
}) => {
  const [currentPage, setCurrentPage] = useState(
    location.hash ? parseInt(location.hash.replace("#", "")) - 1 : 0
  );
  const parsedData = data
    .filter((elem) => !elem.hide && !elem.deleted)
    .slice(currentPage * 30, currentPage * 30 + 30)
    .slice(0, limit ? limit : 30);

  const niceScroll = () => {
    document.getElementById("content")?.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const nextPage = () => {
    niceScroll();
    setCurrentPage((prev) => prev + 1);
  };

  const prevPage = () => {
    niceScroll();
    setCurrentPage((prev) => prev - 1);
  };

  const goToPage = (number: number) => {
    niceScroll();
    setCurrentPage(number);
  };

  useEffect(() => {
    if (pagination) {
      location.hash = (currentPage + 1).toString();
    }
  }, [currentPage]);

  return (
    <>
      {title && <Title id="top">{title}</Title>}
      {pagination && (
        <Pagination
          nextPage={nextPage}
          prevPage={prevPage}
          goToPage={goToPage}
          totalCount={data.length}
          siblingCount={5}
          currentPage={currentPage + 1}
          pageSize={30}
        />
      )}
      <VideoListWrapper>
        {parsedData.map((elem, index) => (
          <React.Fragment key={index}>
            <VideoTile data={elem} />
          </React.Fragment>
        ))}
        {!noBait && (
          <Bait to="/channels">
            <p>Nothing interesing? Take a look at our channels list!</p>
          </Bait>
        )}
      </VideoListWrapper>
      {pagination && (
        <Pagination
          nextPage={nextPage}
          prevPage={prevPage}
          goToPage={goToPage}
          totalCount={data.length}
          siblingCount={5}
          currentPage={currentPage + 1}
          pageSize={30}
        />
      )}
    </>
  );
};

export default VideoList;
