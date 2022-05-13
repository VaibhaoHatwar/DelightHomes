import { FaLocationArrow } from "react-icons/fa"

const Footer = () => {
  return (
    <div
      className="container-fluid bg-dark text-white mt-5 bg-gradient"
      style={{ minHeight: "12rem" }}
    >
      <div className="row pt-4 text-center">
        {/* Creates 3 sections each 0f 4 cols for lg and md device but for small device creates 1 section of 12 cols */}
        <div className="col-lg-4 col-md-4 col-sm-12 mb-3">
          <h5>Quick Links</h5>
          <div className="d-flex flex-column">
            <a className="text-white p-1" href="#">
              About us
            </a>
            <a className="text-white p-1" href="#">
              Our Posts
            </a>
            <a className="text-white p-1" href="#">
              Our Team
            </a>
            <a className="text-white p-1" href="#">
              Contact us
            </a>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12 mb-3">
          <h5>Newsletter</h5>
          <div
            style={{ minHeight: "8rem" }}
            className="d-flex flex-column justify-content-around"
          >
            <input
              type="text"
              className="form-control"
              placeholder="Subscribe to the newslater"
            />
            <button className="btn btn-warning">Subscribe</button>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <h5>Contact Address</h5>
          <div className="d-flex flex-column">
            <p>
              <span className="px-1">
                <FaLocationArrow />
              </span>
              36 China Town
            </p>
            <p>Mumbai City</p>
            <p>Maharashtra - 546566</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
