import React, { PropTypes } from 'react';

const ItemRow = () => {
    return (
        <tr>
            <td><label>item name</label></td>
            <td><input type="number" value="quanity" /></td>
            <td><input type="button" className="btn btn-sm btn-danger" value="remove" /></td>
            <td><label>Final amount2</label></td>
        </tr>
    );
};

export default ItemRow;
// const TextInput = ({ name, label, onChange, placeholder, value, error }) => {
//     let wrapperClass = 'form-group';
//     if (error && error.length > 0) {
//         wrapperClass += " " + 'has-error';
//     }
//     return (
//         <div className={wrapperClass}>
//             <label htmlFor={name}>{label}</label>
//             <div className="field">
//                 <input type="text" name={name} className="form-control"
//                     placeholder={placeholder}
//                     value={value}
//                     onChange={onChange} />
//                 {error && <div className="alert alert-danger">{error}</div>}
//             </div>
//         </div>
//     );
// };

// TextInput.PropTypes = {
//     name: PropTypes.string.isRequired,
//     label: PropTypes.string.isRequired,
//     onChange: PropTypes.func.isRequired,
//     placeholder: PropTypes.string,
//     value: PropTypes.string,
//     error: PropTypes.string
// };

// export default TextInput;