import React, { Fragment } from "react";

function Blog({title,content , image}) {
    
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
           {content}
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </>
  );
}

export default Blog;


// function Blog(props) {
//     let {title,content , image} = props 
//     // console.log(props)
//   return (
//     <>
//       <div className="card" style={{ width: "18rem" }}>
//         <img src={image} className="card-img-top" alt="..." />
//         <div className="card-body">
//           <h5 className="card-title">{title}</h5>
//           <p className="card-text">
//            {content}
//           </p>
//           <a href="#" className="btn btn-primary">
//             Go somewhere
//           </a>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Blog;
