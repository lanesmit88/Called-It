import "./index.css";

function Follow(followStatus) {
    console.log(followStatus.followStatus)
  return (
    <>{followStatus.followStatus ? (<button>unfollow</button>) : (<button>follow</button>)}</>
  );
}

export default Follow;
