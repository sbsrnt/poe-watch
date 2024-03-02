import React, {useEffect, useState} from 'react';
import Results from './Results/Results'
import {Combobox, InputBase, useCombobox, Loader, useMediaQuery} from "@exile-watch/writ-react";
import {IconSearch} from '@tabler/icons-react'

const InputWithResults = ({isOpen, toggle}) => {
  const {isMobile} = useMediaQuery()
  const [firstTimeClicked, setFirstTimeClicked] = useState(false)
  const [indexedSearch, setIndexedSearch] = useState([])
  const [isDataLoading, setIsDataLoading] = useState(false)
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });
  const [search, setSearch] = useState('');

  const loadData = async () => {
    setIsDataLoading(true)
    const indexedSearch = await import((`@exile-watch/encounter-data/dist/extracted-data/indexed-search.esm` as string));
    setIndexedSearch(indexedSearch.default)
    setIsDataLoading(false)
  }

  useEffect(() => {
    if(firstTimeClicked){
      void loadData()
    }
  }, [firstTimeClicked]);

  return (
    <Combobox
      store={combobox}
      onOptionSubmit={(val) => {
        setSearch(val);
        combobox.closeDropdown();
        isOpen && toggle()
      }}
    >
      <Combobox.Target>
        <InputBase
          pointer
          leftSection={<IconSearch size={14} />}
          rightSection={isDataLoading ? <Loader size="xs" color="sand.2" /> : <Combobox.Chevron />}
          rightSectionPointerEvents="none"
          placeholder="Arcade, Eradicator, Storm..."
          value={search}
          onChange={(event) => {
            combobox.updateSelectedOptionIndex();
            setSearch(event.currentTarget.value);
          }}
          onClick={() => {
            setFirstTimeClicked(true)
            combobox.toggleDropdown()
          }}
          p={isMobile ? 8 : 0}
          w={isMobile ? "100%" : "350px"}
        />
      </Combobox.Target>
      {!isDataLoading && <Results inputValue={search} indexedSearch={indexedSearch} />}

    </Combobox>
  )
};

export { InputWithResults };
export default InputWithResults