import IDefaultProps from './IDefaultProps';

interface IMobileMenu extends IDefaultProps {
  isToggleMenu: boolean;
  setIsToggleMenu: (isToggleMenu: boolean) => void;
  pages: string[];
}

export default IMobileMenu;
