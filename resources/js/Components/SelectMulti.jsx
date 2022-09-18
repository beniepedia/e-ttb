import React from 'react'
import Select from 'react-select'
import makeAnimated from 'react-select/animated'


export default function SelectMulti({
    value,
    name,
    option,
    isMulti,
    closeMenuOnSelect = false,
    onHandleChange,
}) {
    const animatedComponents = makeAnimated();

    const customStyles = {

        control: (preventDefault) => ({
            ...preventDefault,
            borderRadius: 9,
            padding: 6,

        }),

        option: (provided, state) => ({
            ...provided,
            borderRadius: 5,
            overflow: "hidden"
        }),
    }

    return (
        <Select
            name={name}
            value={value}
            styles={customStyles}
            options={option}
            components={animatedComponents}
            isMulti={isMulti}
            placeholder="Pilih ..."
            noOptionsMessage={() => "Tidak ada opsi lain"}
            closeMenuOnSelect={closeMenuOnSelect}
            delimiter=','
            // onInputChange={onInputChange}
            onChange={onHandleChange}
            theme={(theme) => ({
                ...theme,
                borderRadius: 10,
                colors: {
                    ...theme.colors,
                    primary25: '#86EFAC',
                    primary: '#94A3B8',
                },
            })}

        ></Select>
    )
}
