import { useState } from 'react';
import { Link } from 'react-scroll';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from '@nextui-org/react';
import { LanguageDropdown } from './LanguageDropdown.component';
import { FormattedMessage } from 'react-intl';

type HomeNavbarProps = {
  setLocale: (value: string) => void;
  locale: string;
};

export const HomeNavbar: React.FC<HomeNavbarProps> = ({
  setLocale,
  locale,
}) => {
  const menuItems = ['Home', 'Projects', 'Services'];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      className="bg-black bg-opacity-5"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        <NavbarMenuToggle className="sm:hidden text-white" />
        <NavbarBrand>
          <Link
            to="sectionHome"
            className="cursor-pointer"
            spy={true}
            smooth={true}
            offset={-115}
            duration={500}
          >
            <p className="font-bold text-white text-lg">
              GP <small className="text-[#1b1b1b]">Software</small>
            </p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem className="hover:scale-105">
          <Link
            activeClass="text-base font-bold underline"
            className="text-white cursor-pointer"
            to="sectionHome"
            spy={true}
            smooth={true}
            offset={-115}
            duration={500}
          >
            <FormattedMessage id="navbar_home" />
          </Link>
        </NavbarItem>
        <NavbarItem className="hover:scale-105">
          <Link
            activeClass="text-base font-bold underline"
            className="text-white cursor-pointer"
            to="sectionProjects"
            spy={true}
            smooth={true}
            offset={-40}
            duration={500}
          >
            <FormattedMessage id="navbar_projects" />
          </Link>
        </NavbarItem>
        <NavbarItem className="hover:scale-105">
          <Link
            activeClass="text-base font-bold underline"
            className="text-white cursor-pointer"
            to="sectionServices"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <FormattedMessage id="navbar_services" />
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <LanguageDropdown setLocale={setLocale} locale={locale} />
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              activeClass="active"
              className="text-[#23A6F0] cursor-pointer"
              to={`section${item}`}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => setIsMenuOpen(false)}
            >
              <FormattedMessage id={`navbar_${item.toLowerCase()}`} />
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};
