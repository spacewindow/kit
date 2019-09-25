import React, { Fragment } from "react";
import Select, { components } from "react-select";
import IconSearch from "../icons/IconSearch";

const mySelect = props => {
  const customStyles = {
    container: provided => ({
      ...provided,
      marginBottom: "12px"
    }),
    // control: (provided) => ({
    //   ...provided,
    //   height: "20px"
    // }),
    indicatorSeparator: () => ({
      display: "none"
    }),
    indicatorsContainer: () => ({
      alignSelf: "flex-start"
    }),
    input: () => ({
      // boxSizing: "border-box",
      padding: 0,
      marginTop: "15px"
    }),
    multiValue: base => ({
      ...base,
      fontSize: "15px",
      border: "1px solid black",
      boxSizing: "border-box"
    }),
    option: (base, state) => ({
      ...base,
      border: state.isSelected ? "2px solid red" : "none",
      backgroundColor: state.isSelected ? "lightgrey" : "none",
      color: state.isSelected ? "inherit" : "inherit"
    }),
    dropdownIndicator: base => ({
      ...base,
      color: "black"
    })
  };

  const DropdownIndicator = props => {
    return (
      <components.DropdownIndicator {...props}>
        <IconSearch primaryColor="#333" />
      </components.DropdownIndicator>
    );
  };

  return (
    <Fragment>
      <label className="control-label">
        {props.label}
        {props.required ? (
          <span className="req" title="Required">
            <span className="readers" aria-hidden="false">
              Required
            </span>
            <i className="fa fa-asterisk"></i>
          </span>
        ) : null}
      </label>
      {props.hint ? (
        <label className="input-label-hint" style={{ marginBottom: "20px" }}>
          {props.hint}
        </label>
      ) : null}
      <Select
        onChange={props.onChange}
        components={props.isMulti ? { DropdownIndicator } : {}}
        styles={customStyles}
        options={props.options}
        name={props.name}
        defaultMenuIsOpen={props.defaultMenuIsOpen}
        defaultInputValue={props.defaultInputValue}
        defaultValue={props.defaultValue}
        value={
          props.value
            ? { label: props.value, value: props.value }
            : { label: "Select..." }
        }
        isMulti={props.isMulti}
        closeMenuOnSelect={props.closeMenuOnSelect}
        hideSelectedOptions={false}
        isClearable={false}
        theme={theme => ({
          ...theme,
          borderRadius: 0,
          borderWidth: "1px",
          colors: {
            ...theme.colors,
            primary: "rgba(0,0,0,0.3)"
          }
        })}
      />
    </Fragment>
  );
};

export default mySelect;
