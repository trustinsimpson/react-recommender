import React from "react";

const Content = (props) => {
  return (
    <div className='d-flex align-items-center'>
      <p className='d-flex align-items-center'>
        <button className="btn btn-primary" type="button" data-toggle="collapse" data-target={`#${props.id}`} aria-expanded="false" aria-controls={`#${props.id}`}>
          {props.text}
        </button>
      </p>
      <div className="collapse" id={props.id}>
        <div className="card card-body">
          <div className='container-fluid'>
            <div className='row'>
              <div className='col'>
                <p>
                {props.info}
                </p>
                </div>
                <div className='col-4'>
                <ul>
                  <li>{props.b1}</li>
                  <li>{props.b2}</li>
                  <li>{props.b3}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;