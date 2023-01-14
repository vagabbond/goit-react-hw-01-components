import PropTypes from 'prop-types';

import {
  SectionStyled,
  TitleStyled,
  ListStyled,
  ItemStyled,
  LabelStyled,
  PercentageStyled,
} from './Stats.styled';
const Stats = ({ title, stats }) => {
  console.log(stats);
  return (
    <SectionStyled>
      {title && <TitleStyled>{title}</TitleStyled>}
      <ListStyled>
        {stats.map(el => {
          return (
            <ItemStyled key={el.id}>
              <LabelStyled>{el.label}</LabelStyled>
              <PercentageStyled>{el.percentage}</PercentageStyled>
            </ItemStyled>
          );
        })}
      </ListStyled>
    </SectionStyled>
  );
};
Stats.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default Stats;
