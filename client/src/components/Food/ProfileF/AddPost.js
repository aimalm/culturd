import React, { useState } from "react";

import {
  Button,
  Form,
  TextBox,
  Telephone,
  TextArea,
  UrlInput,
  RadioGroup,
  DateTime,
  DropDown,
  Option,
  OptionGroup,
} from "react-form-elements";
import { CgArrowLongUp } from "react-icons/cg";

function AddPost({userData,createFood}) {
  const [addingPosting, setAddingPost] = useState(false);

  return (
    <div className="addpost-popup">
      {addingPosting ? (
        <div className="alert add-post-alert">
          <p>
            The dish is available in the LIST!
            <CgArrowLongUp /> <CgArrowLongUp />
          </p>
        </div>
      ) : (
        ""
      )}

      <h3>A new post</h3>
      <Form
        className="form-add-post"
        name="add post form"
        onSubmit={(values) => {
          //console.log("add post form", values);
          createFood(values);
          setAddingPost(true);

          setTimeout(() => {
            setAddingPost(false);
          }, 3000);
        }}
      >
        <TextBox name="dishName" label="Dish Name" initialValue="" />
        <TextBox
          name="ingredient1"
          label="Ingredients (Please put one ingredient in one column)"
          initialValue=""
          required
        />
        <TextBox name="ingredient2" label="" initialValue="" />
        <TextBox name="ingredient3" label="" initialValue="" />
        <TextBox name="ingredient4" label="" initialValue="" />
        <TextBox
          name="keyword1"
          label="Keywords for searching (Please put one keyword in one column)"
          initialValue=""
          required
        />
        <TextBox name="keyword2" label="" initialValue="" />
        <TextBox name="keyword3" label="" initialValue="" />
        <TextBox name="keyword4" label="" initialValue="" />

        <TextArea label="Dish description" name="dishDescription" required />

        <DropDown
          label="Category"
          initialValue=""
          data-testid=""
          name="category"
          required
        >
          <OptionGroup label="">
            <Option initialValue="main">Main Dish</Option>
            <Option initialValue="side">Side Dish</Option>
            <Option initialValue="dessert">Dessert</Option>
          </OptionGroup>
        </DropDown>

        <UrlInput
          name="imageUrl"
          label="Food image url"
          initialValue=""
          placeholder="https://www.example.com"
          required
        />

        <RadioGroup
          name="vegetarian"
          label=""
          initialChecked="false"
          options={[{ value: "true", label: "vegetarian" }]}
        />
        <Telephone name="Price" label="price" initialValue="" required />
        <DateTime
          label="Pick up date and time"
          type="datetime-local"
          name="pickupdate"
          required
        />
        <TextBox
          name="address"
          label="Pick Up Address"
          initialValue={userData.address}
          required
        />

        <Button className="profile-order-button">Add new home food</Button>
      </Form>
    </div>
  );
}

export default AddPost;
