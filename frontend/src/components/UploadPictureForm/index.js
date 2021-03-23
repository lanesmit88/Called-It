import { fetch } from "../../store/csrf";

const UploadPictureForm = () => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        fetch("/temp", { method: "POST" });
      }}
    >
      <button type="submit">Submit</button>
    </form>
  );
};

export default UploadPictureForm;
