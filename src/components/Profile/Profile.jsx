import PropTypes from 'prop-types';

import { ProfileStyled } from './Profile.styled';
import {
  DescriptionStyled,
  AvatarStyled,
  NameStyled,
  TagStyled,
  LocationStyled,
} from './Description/Description.styled';
import {
  StatsStyled,
  ItemStyled,
  LabelStyled,
  QuantityStyled,
} from './Stats/Stats.styled';

const Profile = ({ src, name, tag, location, followers, views, likes }) => {
  return (
    <ProfileStyled>
      <DescriptionStyled>
        <AvatarStyled src={src} alt="User avatar"></AvatarStyled>
        <NameStyled>{name}</NameStyled>
        <TagStyled>@{tag}</TagStyled>
        <LocationStyled>{location}</LocationStyled>
      </DescriptionStyled>
      <StatsStyled>
        <ItemStyled>
          <LabelStyled>Followers</LabelStyled>
          <QuantityStyled>{followers}</QuantityStyled>
        </ItemStyled>
        <ItemStyled>
          <LabelStyled>Views</LabelStyled>
          <QuantityStyled>{views}</QuantityStyled>
        </ItemStyled>
        <ItemStyled>
          <LabelStyled>Likes</LabelStyled>
          <QuantityStyled>{likes}</QuantityStyled>
        </ItemStyled>
      </StatsStyled>
    </ProfileStyled>
  );
};

Profile.propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};

export default Profile;
