<template>
  <div id="carouselExampleCaptions" class="carousel slide mt-5">
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="0"
        class="active"
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
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img
          src="../assets/307702636_395910819411914_1810997350726902382_n.jpg"
          width="230"
          height="400"
          class="d-block w-100"
          alt="..."
        />
      </div>
      <div class="carousel-item">
        <img
          src="../assets/852.jpg"
          width="230"
          height="400"
          class="d-block w-100"
          alt="..."
        />
      </div>
      <div class="carousel-item">
        <img
          src="../assets/999.jpg"
          width="230"
          height="400"
          class="d-block w-100"
          alt="..."
        />
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>

  <div class="container ">
    <div class="row mt-3">
      <h1>ข่าว</h1>
    </div>
    <div class="row mt-3">
      <div class="col d-flex justify-content-center">
        <div class="card" style="width: 18rem">
          <img
            src="https://pbs.twimg.com/profile_images/1108430392267280389/ufmFwzIn_400x400.png"
            alt=""
          />
          <div class="card-body">
            <p class="card-text">
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </p>
          </div>
        </div>
      </div>
      <div class="col d-flex justify-content-center">
        <div class="card" style="width: 18rem">
          <img
            src="https://pbs.twimg.com/profile_images/1108430392267280389/ufmFwzIn_400x400.png"
            alt=""
          />
          <div class="card-body">
            <p class="card-text">
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </p>
          </div>
        </div>
      </div>
      <div class="col d-flex justify-content-center">
        <div class="card" style="width: 18rem">
          <img
            src="https://pbs.twimg.com/profile_images/1108430392267280389/ufmFwzIn_400x400.png"
            alt=""
          />
          <div class="card-body">
            <p class="card-text">
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
