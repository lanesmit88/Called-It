import { fetch } from "../../store/csrf";
import React, { Component, useState } from "react";
import { useDispatch } from "react-redux";

const UploadPictureForm = () => {
  const [data, setData] = useState();
  const dispatch = useDispatch();

  function submitForm(e) {
    e.preventDefault();
    dispatch(updatProfPhoto({data}));
  }

  return (
    <>
      <form onSubmit={submitForm}>
        <input
          type="file"
          onChange={async (e) => {
            const rawInputElement = e.target;
            const theFileToUpload = rawInputElement.files[0];
            const formData = new FormData();

            formData.append("profPhoto", theFileToUpload);
            setData(formData);
            //   await fetch("/temp", {
            //     method: "POST",
            //     body: formData,
            //   });
          }}
        />

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default UploadPictureForm;
