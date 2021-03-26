import { fetch } from "../../store/csrf";

const UploadPictureForm = () => {
  return (
    <>
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <input
        type="file"
        onChange={async (e) => {
          const rawInputElement = e.target;
          const theFileToUpload = rawInputElement.files[0];
          const formData = new FormData();

          formData.append("bubblebop", theFileToUpload);

          await fetch("/temp", {
            method: "POST",
            body: formData,
          });
        }}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default UploadPictureForm;
