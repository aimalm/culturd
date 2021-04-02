import React from "react";

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

function AddPost() {
  return (
    <div className="addpost-popup">
      <h3>A new post</h3>
      <Form
        className="profile-info-form"
        name="add post form"

        onSubmit={(values) => {
          console.log("formValues", values);
        }}
      >
        <TextBox name="dishName" label="Dish Name" initialValue="" />
        <TextBox name="ingredient1" label="Ingredients" initialValue="" />
        <TextBox name="ingredient2" label="" initialValue="" />
        <TextBox name="ingredient3" label="" initialValue="" />
        <TextBox name="ingredient4" label="" initialValue="" />

        <TextBox name="keyword1" label="Keywords" initialValue="" />
        <TextBox name="keyword2" label="" initialValue="" />
        <TextBox name="keyword3" label="" initialValue="" />
        <TextBox name="keyword4" label="" initialValue="" />

        <TextArea label="Dish description" name="dishDescription" />

        <DropDown
          label="Category"
          initialValue=""
          data-testid=""
          name="category"
        >
          <OptionGroup label="">
            <Option initialValue="main">Main Dish</Option>
            <Option initialValue="side">Side Dish</Option>
            <Option initialValue="dessert">Dessert</Option>
          </OptionGroup>
        </DropDown>

        <UrlInput
          name="imageUrl"
          label="Image url"
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
        <Telephone name="Price" label="price" initialValue="" />
        <DateTime
          label="Pick up date and time"
          type="datetime-local"
          name="pickupdate"
        />
        <TextBox name="Pick up Address" label="address" initialValue="" />

        <Button className="profile-order-button">Save Changes</Button>
      </Form>
    </div>
  );
}

export default AddPost;
