import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Selection,
} from '@nextui-org/react';
import { useEffect, useState } from 'react';
import { LanguageIcon } from '../../assets';

const languages = [
  {
    name: 'English',
    uid: 'English',
  },
  {
    name: 'Español',
    uid: 'Español',
  },
];

type LanguageDropdownProps = {
  setLocale: (value: string) => void;
  locale: string;
};

export const LanguageDropdown: React.FC<LanguageDropdownProps> = ({
  setLocale,
  locale,
}) => {
  const [filterValue, setFilterValue] = useState<Selection>(
    new Set(['English'])
  );

  const handleChangeLocale = (newLocale: string) => {
    const lo = newLocale.slice(0, 2).toLowerCase();
    setLocale(lo);
  };

  useEffect(() => {
    const firstLocale = locale === 'es' ? 'Español' : 'English';

    setFilterValue(new Set([firstLocale]));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Dropdown>
      <DropdownTrigger className="hidden sm:flex">
        <Button
          startContent={<LanguageIcon />}
          variant="light"
          className="capitalize"
          color="primary"
        >
          {filterValue}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        closeOnSelect
        selectionMode="single"
        onSelectionChange={setFilterValue}
        selectedKeys={filterValue}
        aria-label="Language menu"
      >
        {languages.map((state) => (
          <DropdownItem
            key={state.uid}
            className="capitalize"
            onClick={() => handleChangeLocale(state.name)}
          >
            {state.name}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};
