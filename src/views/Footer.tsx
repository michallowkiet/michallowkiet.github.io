import logo from '../assets/logo.svg';
const Footer = () => {
  return (
    <footer>
      <div className='mx-auto flex h-20 max-w-[1240px] flex-col gap-4 py-20 justify-center items-center px-8 md:px-16'>
        <p className='font-playfair tracking-widest text-md'>
          Michał Łowkiet &copy;2023.
        </p>
        <img className='w-12' src={logo} alt='logo' />
      </div>
    </footer>
  );
};

export default Footer;
