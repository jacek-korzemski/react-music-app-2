import { Link } from "react-router-dom";
import { Video } from "src/types/Video";
import styled from "styled-components";

const VideTileWrapper = styled(Link)`
  border-radius: 8px;
  border: 1px solid white;
  width: 100%;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto auto;
  overflow: hidden;
  transition: all 0.1s;
  &:hover {
    text-decoration: none;
    transform: scale(1.04);
    background: rgba(0, 0, 0, 1);
  }
  @media (min-width: 776px) {
    grid-template-columns: 120px 1fr;
    grid-template-rows: 1fr auto;
  }
  @media (min-width: 1333px) {
    grid-template-columns: 200px 1fr;
    grid-template-rows: 1fr;
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    max-width: 100%;
  }
`;

const Right = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  p {
    margin: 0;
    word-break: break-word;
  }
  .title {
    margin-bottom: 16px;
  }
  .channel {
    font-weight: 100;
  }
  .date {
    font-weight: 100;
    font-size: 14px;
  }
`;

const VideoTile = ({ data }: { data: Video }) => {
  return (
    <VideTileWrapper
      to={`/video/${data.id.toString()}`}
      data-testid={"video-tile"}
    >
      <Left>
        <img src={data.high_thumbnail} alt={data.title} />
      </Left>
      <Right>
        <p className="title">{data.title}</p>
        <div>
          <p className="channel">{data.channel_title}</p>
          <p className="date">{data.published_at}</p>
        </div>
      </Right>
    </VideTileWrapper>
  );
};

export default VideoTile;
