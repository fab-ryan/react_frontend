import styles from './home.module.css';
import styled from 'styled-components';
import { Card } from '../components/card';
import { Vector, Values as ValueSvg, Vision } from './svg';
import NavBar from '../components/navbar';
const Home = () => {
  return (
    <>
      <NavBar />
      <Contianer>
        {cardObject.map((item, index) => (
          <Card
            icon={item.icon}
            title={item.title}
            description={item.description}
            key={item.id}
          />
        ))}
      </Contianer>
    </>
  );
};
export { Home };
const Contianer = styled.section`
  padding: 0 10rem;
  margin: 0 auto;
  max-width: 100rem;
  display: flex;
  justify-content: space-between;
`;

const cardObject = [
  {
    id: 1,
    title: 'vision',
    icon: <Vector color='green' />,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam porta luctus fringilla. Donec in arcu lorem. Suspendisse potenti. Aenean convallis, libero non dictum sagittis, massa felis fringilla sem, ut vehicula turpis sem quis metus. Proin tempus erat metus, a viverra eros dapibus at. Nam luctus faucibus faucibus. Curabitur laoreet pulvinar ex, quis aliquam enim dictum a. Etiam ultrices, velit eu venenatis congue, arcu nulla gravida diam, vel luctus mi tortor non libero.',
  },
  {
    id: 2,
    title: 'Mission',
    icon: <Vision color='green' />,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam porta luctus fringilla. Donec in arcu lorem. Suspendisse potenti. Aenean convallis, libero non dictum sagittis, massa felis fringilla sem, ut vehicula turpis sem quis metus. Proin tempus erat metus, a viverra eros dapibus at. Nam luctus faucibus faucibus. Curabitur laoreet pulvinar ex, quis aliquam enim dictum a. Etiam ultrices, velit eu venenatis congue, arcu nulla gravida diam, vel luctus mi tortor non libero.',
  },
  {
    id: 3,
    title: 'Values',
    icon: <ValueSvg color='green' />,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam porta luctus fringilla. Donec in arcu lorem. Suspendisse potenti. Aenean convallis, libero non dictum sagittis, massa felis fringilla sem, ut vehicula turpis sem quis metus. Proin tempus erat metus, a viverra eros dapibus at. Nam luctus faucibus faucibus. Curabitur laoreet pulvinar ex, quis aliquam enim dictum a. Etiam ultrices, velit eu venenatis congue, arcu nulla gravida diam, vel luctus mi tortor non libero.',
  },
];
