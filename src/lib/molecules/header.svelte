<script>
  export let loading = false;
  let active = false;

  function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
      active = false;
    } else {
      x.style.display = "block";
      active = true;
    }
  }
</script>

<section>
  <body>
    <nav class={loading ? "animate" : ""}>
      <ul>
        <a href="/tekenmethodes"><li>Tekenmethodes</li></a>
        <a href="/over"><li>Over</li></a>
        <a href="/minicursussen"> <li>Minicursussen</li></a>
        <a href="/"
          ><li>
            <img
              src="/vtHBO-v1.0-Logo_1.svg"
              class="visual-thinking-logo"
              alt="visual-thinking-logo"
            />
          </li></a
        >
        <a href="/kennisclips"><li>Kennisclips</li></a>
        <a href="/artikelen"><li>Artikelen</li></a>
        <a href="/tekenruimte"><li>Tekenruimte</li></a>
      </ul>
    </nav>
  </body>
</section>

<div class="mobile-container">
  <div class="topnav">
    <a
      href="/"
      class={active ? "active rotate" : "active"}
      on:click|preventDefault={myFunction}>Navigatie</a
    >
    <div id="myLinks">
      <a href="/over">Over</a>
      <a href="/tekenmethodes">Tekenmethodes</a>
      <a href="/minicursussen">Minicursussen</a>
      <a href="/kennisclips">Kennisclips</a>
      <a href="/artikelen">Artikelen</a>
      <a href="/tekenruimte">Tekenruimte</a>
    </div>
  </div>
</div>

<style>
  .animate {
    animation: appear 3s forwards;
  }

  @keyframes appear {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  body {
    margin: 0;
    padding: 0;
    box-shadow: 0px 7px 6px -2px rgba(0, 0, 0, 0.1);
  }

  a {
    color: var(--vtDarkBlue);
    text-decoration: none;
    cursor: pointer;
  }

  a:link {
    text-decoration: none;
  }

  nav {
    padding-top: 1em;
    padding-bottom: 1em;
    display: flex;
    justify-content: center;
    width: 100vw;
  }

  ul {
    list-style-type: none;
    display: flex;
    color: var(--vtDarkBlue);
    font-family: var(--vtPrimaryFont);
    font-weight: 700;
    padding: 0;
    margin: 0;
    align-items: center;
  }

  li {
    width: 7.7rem;
    display: flex;
    justify-content: center;
  }

  .visual-thinking-logo {
    max-width: 100px;
    height: auto;
  }

  .mobile-container {
    display: none;
  }

  /* tablet */
  @media (min-width: 31em) and (max-width: 55em) {
    *,
    *:before,
    *:after {
      box-sizing: border-box;
    }

    body {
      font-size: 1em;
      line-height: 1.6;
      overflow-x: hidden;
      background-color: rgb(255, 255, 255);
    }

    li {
      width: 6.7rem;
    }

    .animate {
      animation: none;
    }

    .mobile-container {
      display: inherit;
      position: relative;
      z-index: 9999;
    }

    .mobile-container {
      background-color: #555;
      color: white;
      border-radius: 10px;
    }

    .topnav {
      overflow: hidden;
      background-color: #333;
      position: relative;
    }

    .topnav #myLinks {
      display: none;
    }

    .topnav a {
      color: white;
      padding: 14px 16px;
      text-decoration: none;
      font-size: 17px;
      display: block;
    }

    .topnav a:nth-child(1),
    .topnav a:nth-child(2),
    .topnav a:nth-child(3),
    .topnav a:nth-child(4),
    .topnav a:nth-child(5),
    .topnav a:nth-child(6) {
      text-transform: uppercase;
      color: var(--vtWhite);
      font-family: var(--vtPrimaryFont);
      font-size: 0.9rem;
      padding-top: 0.2rem;
      padding-bottom: 0.2rem;
      margin-top: 0%;
      width: 100vw;
      display: flex;
      align-items: center;
      font-weight: bold;
    }

    .topnav > a:nth-child(1) {
      background-color: var(--vtGrey-50);
      color: var(--vtDarkBlue);
      padding-left: 20%;
    }

    #myLinks a:nth-child(1) {
      background-color: var(--vtSec-DarkBlue);
      animation: slide1 1s forwards cubic-bezier(0.165, 0.84, 0.44, 1);
    }

    .topnav a:nth-child(2) {
      background-color: var(--vtYellow);
      animation: slide2 1s forwards cubic-bezier(0.165, 0.84, 0.44, 1);
    }

    .topnav a:nth-child(3) {
      background-color: var(--vtRed);
      animation: slide3 1s forwards cubic-bezier(0.165, 0.84, 0.44, 1);
    }

    .topnav a:nth-child(4) {
      background-color: var(--vtLightBlue);
      animation: slide4 1s forwards cubic-bezier(0.165, 0.84, 0.44, 1);
    }

    .topnav a:nth-child(5) {
      background-color: var(--vtDarkBlue);
      color: var(--vtWhite);
      animation: slide5 1s forwards cubic-bezier(0.165, 0.84, 0.44, 1);
    }

    .topnav a:nth-child(6) {
      background-color: var(--vtGrey-80);
      color: var(--vtWhite);
      animation: slide6 1s forwards cubic-bezier(0.165, 0.84, 0.44, 1);
    }

    nav ul a:nth-child(1),
    nav ul a:nth-child(2),
    nav ul a:nth-child(3),
    nav ul a:nth-child(5),
    nav ul a:nth-child(6),
    nav ul a:nth-child(7) {
      display: none;
    }

    nav {
      padding-top: 1rem;
      padding-bottom: 1rem;
    }

    .active::before {
      content: ">";
      transition: 600ms;
    }

    .active.rotate::before {
      content: ">";
      transform: rotate(90deg);
    }

    @keyframes slide1 {
      0% {
        padding-left: 0%;
      }

      100% {
        padding-left: 26%;
      }
    }

    @keyframes slide2 {
      0% {
        padding-left: 0%;
      }

      100% {
        padding-left: 32%;
      }
    }

    @keyframes slide3 {
      0% {
        padding-left: 0%;
      }

      100% {
        padding-left: 38%;
      }
    }

    @keyframes slide4 {
      0% {
        padding-left: 0%;
      }

      100% {
        padding-left: 44%;
      }
    }

    @keyframes slide5 {
      0% {
        padding-left: 0%;
      }

      100% {
        padding-left: 50%;
      }
    }

    @keyframes slide6 {
      0% {
        padding-left: 0%;
      }

      100% {
        padding-left: 56%;
      }
    }
  }

  /* mobile */
  @media (max-width: 31em) {
    .animate {
      animation: none;
    }

    a:link {
      text-decoration: none;
      font-family: var(--vtPrimaryFont), sans-serif;
      font-weight: 700;
    }

    nav {
      background-color: rgb(255, 252, 249);
      padding-top: 2em;
      padding-bottom: 2em;
      width: 100%;
    }

    li {
      width: 3rem;
    }

    ul {
      flex-direction: column;
    }

    .mobile-container {
      display: inherit;
      position: relative;
      z-index: 9999;
    }

    .mobile-container {
      max-width: 480px;
      margin: auto;
      background-color: #555;
      color: white;
      border-radius: 10px;
    }

    .topnav {
      overflow: hidden;
      background-color: #333;
      position: relative;
    }

    .topnav #myLinks {
      display: none;
    }

    .topnav a {
      color: white;
      padding: 14px 16px;
      text-decoration: none;
      font-size: 17px;
      display: block;
    }

    .topnav a:nth-child(1),
    .topnav a:nth-child(2),
    .topnav a:nth-child(3),
    .topnav a:nth-child(4),
    .topnav a:nth-child(5),
    .topnav a:nth-child(6) {
      text-transform: uppercase;
      color: var(--vtWhite);
      font-family: var(--vtPrimaryFont);
      font-size: 0.9rem;
      padding-top: 0.2rem;
      padding-bottom: 0.2rem;
      margin-top: 0%;
      width: 100vw;
      display: flex;
      align-items: center;
    }

    .topnav > a:nth-child(1) {
      background-color: var(--vtGrey-50);
      color: var(--vtDarkBlue);
      padding-left: 11%;
    }

    #myLinks a:nth-child(1) {
      background-color: var(--vtSec-DarkBlue);
      animation: slide1 1s forwards cubic-bezier(0.165, 0.84, 0.44, 1);
    }

    .topnav a:nth-child(2) {
      background-color: var(--vtYellow);
      animation: slide2 1s forwards cubic-bezier(0.165, 0.84, 0.44, 1);
    }

    .topnav a:nth-child(3) {
      background-color: var(--vtRed);
      animation: slide3 1s forwards cubic-bezier(0.165, 0.84, 0.44, 1);
    }

    .topnav a:nth-child(4) {
      background-color: var(--vtLightBlue);
      animation: slide4 1s forwards cubic-bezier(0.165, 0.84, 0.44, 1);
    }

    .topnav a:nth-child(5) {
      background-color: var(--vtDarkBlue);
      color: var(--vtWhite);
      animation: slide5 1s forwards cubic-bezier(0.165, 0.84, 0.44, 1);
    }

    .topnav a:nth-child(6) {
      background-color: var(--vtGrey-80);
      color: var(--vtWhite);
      animation: slide6 1s forwards cubic-bezier(0.165, 0.84, 0.44, 1);
    }

    nav ul a:nth-child(1),
    nav ul a:nth-child(2),
    nav ul a:nth-child(3),
    nav ul a:nth-child(5),
    nav ul a:nth-child(6),
    nav ul a:nth-child(7) {
      display: none;
    }

    nav {
      padding-top: 1rem;
      padding-bottom: 1rem;
    }

    .active::before {
      content: ">";
      transition: 600ms;
    }

    .active.rotate::before {
      content: ">";
      transform: rotate(90deg);
    }

    @keyframes slide1 {
      0% {
        padding-left: 0%;
      }

      100% {
        padding-left: 17%;
      }
    }

    @keyframes slide2 {
      0% {
        padding-left: 0%;
      }

      100% {
        padding-left: 23%;
      }
    }

    @keyframes slide3 {
      0% {
        padding-left: 0%;
      }

      100% {
        padding-left: 29%;
      }
    }

    @keyframes slide4 {
      0% {
        padding-left: 0%;
      }

      100% {
        padding-left: 35%;
      }
    }

    @keyframes slide5 {
      0% {
        padding-left: 0%;
      }

      100% {
        padding-left: 41%;
      }
    }

    @keyframes slide6 {
      0% {
        padding-left: 0%;
      }

      100% {
        padding-left: 47%;
      }
    }
  }
</style>
