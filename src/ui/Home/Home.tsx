import React from 'react';
import { HomeBodyContainer } from './Home.styles';
import ActionCard from './ActionCard/ActionCard';
import { useNavigate } from 'react-router-dom';
import { IHomeCardProps } from './Home.types';
import { PATHS } from 'lib/routing/paths/paths';

const ACTION_CARD_LIST: IHomeCardProps[] = [
  {
    title: 'Submit Feedback',
    info: 'Fill in the form to submit feedback.',
    path: PATHS.ADD_SUBMISSION.path,
    code: 'AS'
  },
  {
    title: 'Check Submission',
    info: 'Check feedback status by filling in email and contact number.',
    path: PATHS.CHECK_SUBMISSION.path,
    code: 'CS'
  }
];

const Home = () => {
  const navigate = useNavigate();

  const onClickActionCard = (path: string) => {
    navigate(path);
  };

  return (
    <HomeBodyContainer>
      {ACTION_CARD_LIST.map(({ code, path, ...props }) => (
        <ActionCard key={code} {...props} onClick={() => onClickActionCard(path)}></ActionCard>
      ))}
    </HomeBodyContainer>
  );
};

export default Home;