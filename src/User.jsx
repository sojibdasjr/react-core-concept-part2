/* eslint-disable react/prop-types */

export default function User({userProps}) {
    const { name ,email} = userProps
    const userStyle = {
        border: '2px solid red',
        margin: '5px'
    }
  return (
    <div style={userStyle}>
      <h3>Name: {name} </h3>
      <h4>Email: {email} </h4>
    </div>
  );
}


