import React from 'react';
import Select from 'react-select';
import { useLanguage } from '../Context/LanguageContext'; // Replace with the actual path


const LanguageDropdown = () => {
  const { toggleLanguage } = useLanguage();

  const languageOptions = [
    { value: 'en', label: 'English', flag: 'gb' },
    { value: 'zh', label: 'Chinese', flag: 'cn' },
    // Add more languages as needed
  ];

  const customStyles = {
    control: (provided) => ({
      ...provided,
      borderRadius: '5px',
      border: '1px solid #ccc',
      padding: '5px',
      cursor: 'pointer',
    }),
  };

  return (
    <Select
      options={languageOptions}
      isSearchable={false}
      onChange={(selectedOption) => toggleLanguage(selectedOption.value)}
      styles={customStyles}
      components={{
        IndicatorSeparator: () => null,
        SingleValue: ({ data }) => (
          <div>
            <span className={`flag-icon flag-icon-${data.flag}`} style={{ marginRight: '5px' }}></span>
            {data.label}
          </div>
        ),
      }}
    />
  );
};

export default LanguageDropdown;
