import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { IoClose } from "react-icons/io5";

function Header() {
  const [isOpen, setOpen] = useState(false);

  return (
    <header className="md:px-10  bg-nav sticky top-0 w-full p-3 z-10  ">
      <div className="flex items-center justify-between p-3 ">
        <div className="hidden md:block">
          <h1 className="">Movie Database</h1>
        </div>
        <button
          className="block md:hidden text-IconColor"
          onClick={() => setOpen(!isOpen)}
        >
          <GiHamburgerMenu />
        </button>
        <div className="z-50">
          <Transition.Root show={isOpen}>
            <Dialog onClose={setOpen}>
              <Transition.Child
                as={Fragment}
                enter="transition-opacity ease-linear duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity ease-linear duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-gray-900/80" />
              </Transition.Child>

              <div className="fixed inset-0 flex">
                <Transition.Child
                  as={Fragment}
                  enter="transition ease-in-out duration-300 transform"
                  enterFrom="-translate-x-full"
                  enterTo="translate-x-0"
                  leave="transition ease-in-out duration-300 transform"
                  leaveFrom="translate-x-0"
                  leaveTo="-translate-x-full"
                >
                  <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-in-out duration-300"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in-out duration-300"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                        <button
                          type="button"
                          className="mt-10  p-2.5 text-IconColor"
                          onClick={() => setOpen(false)}
                        >
                          <IoClose size={"20px"} />
                        </button>
                      </div>
                    </Transition.Child>
                    <div className="bg-nav md:w-[320px] w-[250px] pt-20  md:px-10 px-5  flex flex-col gap-7">
                      <h1 className="">Movie Database</h1>
                      <nav>
                        <ul className="flex flex-col gap-10 ">
                          <li>
                            <Link to="/">Movies</Link>
                          </li>
                          <li>
                            <Link to="/tv-shows">Tv Shows</Link>
                          </li>
                          <li>
                            <Link to="/wishlist">Wishlist</Link>
                          </li>
                          <li>
                            <Link to="/login">Logout</Link>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </Dialog>
          </Transition.Root>
        </div>

        <div className="flex items-center ">
          <div>
            <input type="search" />
          </div>
          <nav className="hidden md:block px-2">
            <ul className="flex items-center  justify-between gap-4">
              <li>
                <Link to="/">Movies</Link>
              </li>
              <li>
                <Link to="/tv-shows">Tv Shows</Link>
              </li>
              <li>
                <Link to="/wishlist">Wishlist</Link>
              </li>
              <li>
                <Link
                  to="/login"
                  className="bg-buttonBackgroundColor p-2 rounded-[15px] text-[14px] "
                >
                  Logout
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
