import { IconType } from 'react-icons';
import IDefaultProps from './IDefaultProps';

interface ILink extends IDefaultProps {
  page: string;
}

export interface ISocialLink {
  Icon: IconType;
  href: string;
  size?: number;
}

export default ILink;
