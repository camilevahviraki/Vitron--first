import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addStoreTypes } from "../../../redux/stores/createStoreReducer";

const CreateStoreCategories = (props) => {
  const [selected, setSelected] = useState([]);

  const dispatch = useDispatch();

  const categories = [
    { id: 0, name: "Chemical" },
    { id: 1, name: "Pharmacie" },
    { id: 2, name: "Electronic" },
    { id: 3, name: "Mechanic" },
    { id: 4, name: "Clothes" },
    { id: 5, name: "Construction" },
    { id: 6, name: "Food" },
    { id: 7, name: "Restaurent" },
    { id: 8, name: "Hotel" },
    { id: 9, name: "Banks" },
    { id: 10, name: "Telecom" },
    { id: 11, name: "Others" },
  ];

  const addCategory = (category) => {
    if(selected.includes(category)){
        const newSelected =  selected.filter((item) => item !== category);
        setSelected(newSelected);
    }else{
        setSelected([...selected, category]);
    }
    
  };

  const SubmitCategories = () => {
    dispatch(addStoreTypes(selected));
  };

  return (
    <div 
      className="create-store-categories" 
      style={props.progress === 2? {display: 'grid'}: {display: 'none'}}
    >
      {categories.map((category, index) => (
        <div key={category.id} onClick={() => addCategory(category.name)}>
          <h4
            className={
              selected.includes(category.name)
                ? "store-type selected-type"
                : "store-type"
            }
          >
            {category.name}
          </h4>
        </div>
      ))}
      <div>
        <button type="button" onClick={SubmitCategories}>
          Next{">"}
        </button>
      </div>
    </div>
  );
};

export default CreateStoreCategories;
