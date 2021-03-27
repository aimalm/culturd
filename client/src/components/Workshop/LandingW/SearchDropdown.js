import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'

function SearchDropdown() {
    const [value,setValue]=useState('');
  const handleSelect=(e)=>{
    console.log(e);
    setValue(e)
  }
    return (

        <>
        <div className="search-dropdown">
            
        <DropdownButton
            className="dropdown-wrapper"
            alignRight
            title="Art Workshop"
            id="dropdown-menu-align-right"
            onSelect={handleSelect}
        >
              <Dropdown.Item eventKey="option-1">option-1</Dropdown.Item>
              <Dropdown.Item eventKey="option-2">option-2</Dropdown.Item>
              <Dropdown.Item eventKey="option-3">option 3</Dropdown.Item>
              <Dropdown.Divider />
        </DropdownButton>
        <DropdownButton
            className="dropdown-wrapper"
            alignRight
            title="Cooking Workshop"
            id="dropdown-menu-align-right"
            onSelect={handleSelect}
        >
              <Dropdown.Item eventKey="option-1">option-1</Dropdown.Item>
              <Dropdown.Item eventKey="option-2">option-2</Dropdown.Item>
              <Dropdown.Item eventKey="option-3">option 3</Dropdown.Item>
              <Dropdown.Divider />
        </DropdownButton>
        <DropdownButton
            className="dropdown-wrapper"
            alignRight
            title="Dance Workshop"
            id="dropdown-menu-align-right"
            onSelect={handleSelect}
        >
              <Dropdown.Item eventKey="option-1">option-1</Dropdown.Item>
              <Dropdown.Item eventKey="option-2">option-2</Dropdown.Item>
              <Dropdown.Item eventKey="option-3">option 3</Dropdown.Item>
              <Dropdown.Divider />
        </DropdownButton>
    </div>
    </>
  );
}

     

export default SearchDropdown
