import styled from 'styled-components';


export const Card = (props) => {
  let color = 'green';

  return (
    <Content>
      <ImageContainer setcolor={color}>{props.icon}</ImageContainer>

      <h1 className='title'>{props.title}</h1>
      <p>{props.description}</p>
    </Content>
  );
};

const Content = styled.div`
.title {
    line-height: 10px;
    letter-spacing: 4px;
  }
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
  box-shadow: 0 0rem 2rem #00800042;
  margin-top: 2rem;
  border-radius: 0.5rem;
  p {
    margin: 0;
    padding: 15px 10px;
    color: gray;
  }
  &:hover {
    border: 0.5px solid green;
    cursor: pointer;
    box-shadow: none;
    transition: ease-in 0.5s;
    animation: FadeOut 5s;
  }
  @keyframes FadeOut {
    0% {
      opacity: 0.4;
    }
    50% {
      opacity: 0.8;
    }
    100% {
      opacity: 1;
    }
  }
  &:hover > span {
    background: orange;
  }
  }
`;

const ImageContainer = styled.span`
  border-radius: 50%;
  border: 0.5px solid green;
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 1rem;
  margin-top: 10px;
`;
