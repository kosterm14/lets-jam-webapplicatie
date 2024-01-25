<!-- <script>
  import { onMount } from "svelte";
  // export let data;
  let listContent = [];

  onMount(() => {
    const list = document.querySelector("#list");

    // Clone and append each item in the list
    Array.from(list.children).forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      list.appendChild(duplicatedItem);

      // Update the reactive variable with the new list content
      listContent = Array.from(list.children);
    });
  });
</script>

<div id="container" data-animated>
  <div class="hexagon"></div>
  <ul id="list">
    <li>
      <img src="/com&pre.jpg" alt="" />
    </li>
    <li>
      <img src="/leren-over-anderen.jpg" alt="" />
    </li>
    <li>
      <img src="/leren-over-jezelf-r.jpg" alt="" />
    </li>
    <li>
      <img src="/kennisclip1.jpeg" alt="" />
    </li>
    <li>
      <img src="/kennisclip1.jpeg" alt="" />
    </li>
    <li>
      <img src="/kennisclip1.jpeg" alt="" />
    </li>
  </ul>
</div>


<style>
  :root {
    --dark-blue: #1c2739;
    --darker-blue: #141c29;
    --light-blue: #3c4759;
    --text-color: #dadada;
    --dark-blue-shadow: #111822ab;
  }
  body {
    /* display: grid; */
    place-items: center;
    align-content: center;
    min-height: 100dvh;
    margin: 0;
  }

  h1 {
    font-weight: 100;
    text-transform: uppercase;
    color: var(--text-color);
    text-shadow: 5px 5px 1px var(--dark-blue-shadow);
  }

  /* #container {
    width: 100%;
    mask: linear-gradient(
      90deg,
      transparent,
      white 40%,
      white 60%,
      transparent
    );
    -webkit-mask: linear-gradient(
      90deg,
      transparent,
      white 40%,
      white 60%,
      transparent
    );
  } */

  ul {
    display: flex;
    gap: 10px;
    list-style: none;
    padding: 0;
  }

  /* li {
    background: var(--light-blue);
    color: var(--text-color);
  } */

  /* #container[data-animated] {
    overflow: hidden;
  } */

  #container[data-animated] #list {
    width: max-content;
    animation: scroll 60s linear infinite;
    /* overflow: scroll; */
  }

  @keyframes scroll {
    to {
      translate: calc(-50% - 5px);
    }
  } 

  /* .h3-blue:hover h3 {
    color: var(--vtSec-Green);
    text-transform: uppercase;
  } */

  
  li {
    background: var(--light-blue);
object-fit: cover;
    width: 300px;
    height: 275px;
    clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
    transform: rotate(90deg);
  }

  img{
    transform: rotate(270deg);
    
  }

  .h3-blue {
    color: var(--light-blue);
    z-index: 1;
    display: grid;
    text-align: center;
    justify-items: center;
    align-content: center;
  }

  .blue,
  .h3-blue {
    grid-column-start: 2;
    grid-column-end: 4;
    grid-row-start: 2;

    margin-top: -7%;
  }

  a {
    text-decoration: none;
    cursor: pointer;
    color: var(--vtWhite);
  }

  em {
    font-family: var(--vtPrimaryFont);
    font-style: normal;

    font-size: 1rem;
  }

  /* tablet */
  @media (min-width: 31em) and (max-width: 55em) {
    .blue,
    .h3-blue {
      grid-column-start: 2;
      grid-column-end: 4;
      grid-row-start: 3;

      margin-bottom: 15%;
    }
  }

  /* mobile */
  @media (max-width: 31em) {
    .blue,
    .h3-blue {
      grid-column-start: 1;
      grid-column-end: 2;
      grid-row-start: 3;

      margin-left: 25%;
    }
  }
</style>-->

<script>
  let index = 0;

  const nextButton = () => {
    index = index + 1;
  };

  const previousButton = () => {
    index = index - 1;
  };
</script>

<div class="carousel">
  <div class="hexagon"></div>
  <button class="carousel-btn prev" on:click={previousButton}></button>
  <div class="carousel-container">
    <img src="./com&pre.jpg" alt="Image 1" />
    <img src="./leren-over-anderen.jpg" alt="Image 2" />
    <img src="image3.jpg" alt="Image 3" />
    <img src="image4.jpg" alt="Image 4" />
    <img src="image5.jpg" alt="Image 5" />
    <img src="image6.jpg" alt="Image 6" />
  </div>
  <button class="carousel-btn next" on:click={nextButton}>&#10095;</button>
</div>

<style>
  /* .hexagon {
    background: var(--light-blue);
    object-fit: cover;
    width: 300px;
    height: 275px;
    clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
    transform: rotate(90deg);
    color: red;
  } */
</style>
