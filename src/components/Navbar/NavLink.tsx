import ILink from '../../types/ILink';

const NavLink = ({ page, selectedPage, setSelectedPage }: ILink) => {
  const pageLowerCase = page.toLowerCase();

  const isSelected = selectedPage === pageLowerCase ? 'text-yellow-600' : '';

  return (
    <a
      className={`${isSelected}`}
      href={`#${pageLowerCase}`}
      onClick={() => setSelectedPage(pageLowerCase)}
    >
      {page}
    </a>
  );
};

export default NavLink;
