import { Link } from "react-router-dom"
function Curosal()
{
    return(
        <div id="cursol">
            <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <Link to="/mobiles">
    <div class="carousel-item active">
      <img src="../../../curosal images/mobilecur.jpg"  id="curimg" class="d-block w-100" alt="..."/>
    </div>
    </Link>
    <Link to="/computer">
    <div class="carousel-item">
      <img src="../../curosal images/LAPTOPCU.jpg"  id="curimg"  class="d-block w-100" alt="..."/>
    </div>
    </Link>
        <Link to="/men">
    <div class="carousel-item">
      <img src="../../../curosal images/Grey.jpg"  id="curimg"  class="d-block w-100" alt="..."/>
    </div>
    </Link>
    <Link to="/watch">
      <div class="carousel-item">
      <img src="../../../curosal images/watchc.jpg"  id="curimg"  class="d-block w-100" alt="..."/>
    </div>
    </Link>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </div>
    )
}
export default Curosal