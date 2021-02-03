function Interaction({
  interactionId,
  agree,
  userId,
  postId,
  createdAt,
  updatedAt,
}) {

  return (
    <div>
    {agree && <h1>yes</h1>}
    {!agree && <h1>no</h1>}
    </div>
  )


}
export default Interaction;
