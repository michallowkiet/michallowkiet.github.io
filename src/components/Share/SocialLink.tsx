import { ISocialLink } from '../../types/ILink';

const SocialLink = ({ Icon, href, size = 26 }: ISocialLink) => {
  return (
    <a href={href} target='_'>
      <div className='rounded-full p-4 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-110'>
        <Icon size={size} />
      </div>
    </a>
  );
};

export default SocialLink;
