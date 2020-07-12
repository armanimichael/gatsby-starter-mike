import React from 'react';

import { useSocials } from '../../queries/useSocials';
import { loadSocialImage } from '../../utils/socialsHandler';

import { Social } from '../../components';

export const DefaultSocials: React.FC = () => {
  const socialsInfo = useSocials();

  interface SocialInfo {
    link: string;
    image: string;
  }

  const generateSocialsElements = () =>
    React.Children.toArray(
      socialsInfo.map((socialInfo: SocialInfo) => (
        <Social
          href={socialInfo.link}
          image={loadSocialImage(socialInfo.image)}
        />
      ))
    );

  return <>{generateSocialsElements()}</>;
};
