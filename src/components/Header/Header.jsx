import Logo from "../Logo";

function Header() {
  return (
    <header className="container-bg text-white bg-[#525AA0] rounded-[15px]">
      <section className="flex items-center xs:justify-center">
        <div className="pl-[4.865em]">
          <Logo />
        </div>
        <nav className="flex  items-center font-[500]">
          <ul className="bg-red-500 ml-[2.438em] capitalize flex flex-row justify-between text-[0.875rem] w-full">
            <li className="py-[1.375em]">find work</li>
            <li className="py-[1.375em]">find talent</li>
            <li className="py-[1.375em]">articles</li>
            <li className="py-[1.375em]">about us</li>
            <li className="py-[1.375em]">contact us</li>
          </ul>
        </nav>
      </section>
    </header>
  );
}
export default Header;
