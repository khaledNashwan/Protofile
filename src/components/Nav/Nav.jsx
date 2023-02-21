

const Nav = () => {
   
  return (
    <nav className="w-max bg-black/30 block py-1 px-6 z-10 fixed left-1/2 -translate-x-2/4 bottom-5 flex rounded-full gap-3 backdrop-blur-lg ">
      <a
        href="#Home"
        className="bg-transparent p-2 rounded-full flex text-xl hover:bg-black/40"
      >
        <i class="uil uil-home"></i>
      </a>
      <a
        className="bg-transparent p-2 rounded-full flex text-xl hover:bg-black/40"
        href="#About"
      >
        <i class="uil uil-user"></i>
      </a>

      <a
        href="#skills"
        className="bg-transparent p-2 rounded-full flex text-xl hover:bg-black/40"
      >
        <i class="uil uil-book-alt"></i>
      </a>
      <a
        href="#Project"
        className="bg-transparent p-2 rounded-full flex text-xl hover:bg-black/40"
      >
        <i class="uil uil-home"></i>
      </a>

      <a
        href="#contact"
        className="bg-transparent p-2 rounded-full flex text-xl hover:bg-black/40"
      >
        <i class="uil uil-home"></i>
      </a>
    </nav>
  );
}

export default Nav