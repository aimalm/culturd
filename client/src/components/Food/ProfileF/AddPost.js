import React, { useState } from "react";

import {
  Button,
  Form,
  TextBox,
  Telephone,
  UrlInput,
  RadioGroup,
  DateTime,
  DropDown,
  Option,
  OptionGroup,
} from "react-form-elements";
import { CgArrowLongUp } from "react-icons/cg";
import {createFood} from "../../Axois/Axois"

function AddPost({userData,getAllFood}) {
  const [addingPosting, setAddingPost] = useState(false);

  return (
    <div className="addpost-container">
    
      {addingPosting ? (
        <div className="alert-button add-post-alert">
          <p>
            The dish is available in the LIST!
            <CgArrowLongUp /> <CgArrowLongUp />
          </p>
        </div>
      ) : (
        ""
      )}

      <h3 className="profile-info-title">Ready to sell your next home dish?</h3>
      <Form
        className="add-post-form"
        name="add post form"
        onSubmit={(values) => {
          //console.log("add post form", values);
          createFood(userData, values);
          setAddingPost(true);

          setTimeout(() => {
            setAddingPost(false);
            getAllFood()
          }, 3000);
        }}
      >
        <TextBox name="dishName" label="Dish Name" initialValue="" className="add-post-form"/>
        <TextBox
          name="ingredient1"
          label="Ingredients (one ingredient per column)"
          initialValue=""
          className="add-post-form"
          required
        />
        <TextBox name="ingredient2" label="" initialValue="" className="add-post-form"/>
        <TextBox name="ingredient3" label="" initialValue=""className="add-post-form" />
        <TextBox name="ingredient4" label="" initialValue="" className="add-post-form"/>
        <TextBox
          name="keyword1"
          label="Keywords (one keyword per column)"
          initialValue=""
          className="add-post-form"
          required
        />
        <TextBox name="keyword2" label="" initialValue="" className="add-post-form"/>
        <TextBox name="keyword3" label="" initialValue="" className="add-post-form"/>
        <TextBox name="keyword4" label="" initialValue="" className="add-post-form"/>

        <TextBox label="Dish description" name="dishDescription" className="add-post-form" required />

        <DropDown
          label="Category"
          initialValue=""
          data-testid=""
          name="category"
          className="add-post-form"
          required
        >
          <OptionGroup label="" className="add-post-form">
            <Option initialValue="main" className="add-post-form">Main Dish</Option>
            <Option initialValue="side" className="add-post-form">Side Dish</Option>
            <Option initialValue="dessert" className="add-post-form">Dessert</Option>
          </OptionGroup>
        </DropDown>

        <UrlInput
          name="imageUrl"
          label="Food image url"
          initialValue=""
          placeholder="https://www.example.com"
          className="add-post-form"
          required
        />

        <RadioGroup
          name="vegetarian"
          label=""
          initialChecked="false"
          options={[{ value: "true", label: "Vegetarian" }]}
          className="add-post-form"
        />
        <Telephone name="Price" label="Price" initialValue="" className="add-post-form" required />
        <DateTime
          label="Pick up date and time"
          type="datetime-local"
          name="pickupdate"
          className="add-post-form"
          required
        />
        <TextBox
          name="address"
          label="Pick Up Address"
          className="add-post-form"
          initialValue={userData.address}
          required
        />

        <Button className="profile-order-button">Add new home food</Button>
      </Form>
    </div>
  );
}

export default AddPost;
