import styled from "styled-components";
import Loading from "src/components/Loading";
import useAllChannels from "src/hooks/useAllChannels";
import useChannelImage from "src/hooks/useChannelImage";
import Title from "src/components/Title";
import { NavLink } from "react-router-dom";

const Wrapper = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  list-style-type: none;
  margin: 0;
  padding: 0;
  gap: 15px;
  a {
    transition: all 0.1s;
    display: block;
  }
  a:hover {
    text-decoration: none;
    transform: scale(1.04);
  }
  @media (min-width: 776px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1333px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const Channel = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
  width: 100%;
  margin: 0;
  padding: 20px;
  background: rgba(0, 0, 0, 0.32);
  border-radius: 8px;
  border: 1px solid white;
  color: white;
  font-size: 20px;
  word-break: break-word;
  height: 100%;
  img {
    max-width: 100px;
    height: auto;
    border-radius: 50%;
  }
`;

const Channels = () => {
  const { data, status } = useAllChannels();
  if (data && data.length > 0 && status === "success") {
    return (
      <>
        <Title>All Channels</Title>
        <Wrapper>
          {data.map(
            (elem: { id: number; channel_title: string }, index: number) => (
              <NavLink to={`/channel/${elem.id}`}>
                <Channel key={index}>
                  <img
                    src={useChannelImage(elem.id)}
                    alt={elem.channel_title}
                  />
                  <p>{elem.channel_title}</p>
                </Channel>
              </NavLink>
            )
          )}
        </Wrapper>
      </>
    );
  }
  return <Loading />;
};

export default Channels;
