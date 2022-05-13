import { IoLocationSharp } from "react-icons/io5"
import "./Home.css"

const Home = () => {
  return (
    <div>
      <section className="hero-section">
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>
                  Some representative placeholder content for the second slide.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>
                  Some representative placeholder content for the third slide.
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
      <section className="featured-posts container">
        <h3 className="text-center text-uppercase py-4">Featured posts</h3>
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="card mb-3">
              <img
                src="https://images.pexels.com/photos/1571450/pexels-photo-1571450.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <div className="d-grid">
                  <a href="#" className="btn btn-warning">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="card mb-3">
              <img
                src="https://images.pexels.com/photos/534151/pexels-photo-534151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <div className="d-grid">
                  <a href="#" className="btn btn-warning">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="card">
              <img
                src="https://images.pexels.com/photos/1910472/pexels-photo-1910472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <div className="d-grid">
                  <a href="#" className="btn btn-warning">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="latest-posts container">
        <h3 className="text-center text-uppercase py-4">Latest Posts</h3>
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="card mb-3">
              <img
                src="https://images.pexels.com/photos/1571450/pexels-photo-1571450.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <div className="d-grid">
                  <a href="#" className="btn btn-warning">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="card mb-3">
              <img
                src="https://images.pexels.com/photos/534151/pexels-photo-534151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <div className="d-grid">
                  <a href="#" className="btn btn-warning">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="card">
              <img
                src="https://images.pexels.com/photos/1910472/pexels-photo-1910472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <div className="d-grid">
                  <a href="#" className="btn btn-warning">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="container-fluid bg-dark bg-gradient mt-4 text-center"
        style={{ minHeight: "180px" }}
      >
        <div className="py-3">
          <IoLocationSharp className="fs-1 text-warning" />
        </div>
        <h3 className="text-white text-uppercase">
          We have wide variety of posts
        </h3>
        <button className="fw-bold btn btn-warning text-uppercase my-2">
          View All Posts
        </button>
      </section>
      <section className="our-portfolio container">
        <h3 className="text-center text-uppercase py-4">Our Portfolio</h3>
        <div className="container">
          <div className="row g-2">
            <div className="col-6">
              <div className="p-1 border bg-light">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  className="card-img-top"
                  alt="..."
                />
              </div>
            </div>
            <div className="col-6">
              <div className="p-1 border bg-light">
                <img
                  src="https://images.pexels.com/photos/259751/pexels-photo-259751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  className="card-img-top"
                  alt="..."
                />
              </div>
            </div>
            <div className="col-6">
              <div className="p-1 border bg-light">
                <img
                  src="https://images.pexels.com/photos/259685/pexels-photo-259685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  className="card-img-top"
                  alt="..."
                />
              </div>
            </div>
            <div className="col-6">
              <div className="p-1 border bg-light">
                <img
                  src="https://images.pexels.com/photos/323781/pexels-photo-323781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  className="card-img-top"
                  alt="..."
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
