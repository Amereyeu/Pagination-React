import React from "react";
import Spinner from "./Spinner";

function Photos({ posts, isLoading }) {
  return (
    <>
      <h2 className="mt-4">Photo list</h2>

      {isLoading ? (
        <div>
          <Spinner />
        </div>
      ) : (
        <>
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="box">
                  {posts.map(post => (
                    <div key={post.id}>
                      <div className="box__item d-flex align-items-center">
                        <div className="col-1 pr-0">
                          <img
                            src={post.thumbnailUrl}
                            alt={post.title}
                            className="box__item__image img-fluid"
                          />
                        </div>
                        <div className="col-11 ">
                          <h3>{post.title}</h3>
                        </div>
                      </div>
                      <hr className="col-12" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Photos;
