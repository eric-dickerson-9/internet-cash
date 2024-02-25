import React, { useState } from 'react';
import Select, { components } from 'react-select';

const styles = {
    control: (base) => ({
        ...base,
        borderColor: '#19B03F59',
        boxShadow: '3px 4px 16px 3px #4425A708'
    }),
    option: (base, state) => ({
        ...base,
        backgroundColor: state.isSelected ? 'white' : '',
        color: 'black'

    }),
    menuList: (base) => ({
        ...base,
        "::-webkit-scrollbar": {
            width: "5px",
            height: "0px",
            background: '#F5F5F5'
        },
        "::-webkit-scrollbar-track": {
            background: "#f1f1f1"
        },
        "::-webkit-scrollbar-thumb": {
            borderRadius: '10px',
            background: '#00C851'
        },
        "::-webkit-scrollbar-thumb:hover": {
            background: "#555"
        }
    })
}

const Option = (props) => {
    return (
        <div>
            <components.Option {...props}>
                <div className="d-flex justify-content-start gap-3">
                    <div className="text-center">
                        <div className="checkbox">
                            <input
                                type="checkbox"
                                checked={props.isSelected}
                                onChange={() => null} />
                            <label>&nbsp;{props.label}</label>
                        </div>
                    </div>
                </div>
            </components.Option>
        </div>
    );
};

const MultiSelectCheckbox = ({ onSelect }) => {
    const [selectedOptions, setSelectedOptions] = useState(null);

    const options = [
        { value: 'option1', label: 'Henry Paul' },
        { value: 'option2', label: 'Oliver Wilson' },
        { value: 'option3', label: 'Noah Harris' },
        { value: 'option4', label: 'Lucas Buron' },
        { value: 'option5', label: 'Levi Lewis' },
        { value: 'option6', label: 'Jacksie Owe' },
        { value: 'option7', label: 'Ethan Jane' },
        { value: 'option8', label: 'Ezra Baker' },
        { value: 'option9', label: 'Allen Foster' },
        { value: 'option10', label: 'Angel Webb' },
        { value: 'option11', label: 'Levi Lewis' },
    ];
    const handleChange = (selectedOptions) => {
        setSelectedOptions(selectedOptions);
        onSelect(selectedOptions)
    };

    return (
        <div>
            <Select
                className='text-start h6'
                value={selectedOptions}
                onChange={handleChange}
                options={options}
                components={{ Option }}
                styles={styles}
            />
        </div>
    );
};

export default MultiSelectCheckbox;
