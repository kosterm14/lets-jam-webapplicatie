<script>
  let heenEnWeerP;
  let heenEnWeerButton;
  let heen = false; // Initialize heen as a boolean variable
  let weer = false; // Initialize weer as a boolean variable

  function handleHeenEnWeer() {
    if (!heen) {
      heen = true;
      weer = false;
      heenAnimation(); // Call the 'heenAnimation' function when heen is true
    } else {
      heen = false;
      weer = true;
      weerAnimation(); // Call the 'weerAnimation' function when weer is true
    }
  }

  function handleKeydown(e) {
    if (e.code === "Escape") {
      weerAnimation();
    }
  }

  function heenAnimation() {
    setTimeout(() => {
      heenEnWeerButton.textContent = "x";
      heenEnWeerP.style.height = `${heenEnWeerP.scrollHeight}px`;
    }, 100);

    heenEnWeerP.classList.add("heenAnimation");
  }

  function weerAnimation() {
    setTimeout(() => {
      heenEnWeerP.style.height = `2.5em`;
    }, 100);

    heenEnWeerP.classList.remove("heenAnimation");
    heenEnWeerP.style.height = `${heenEnWeerP.scrollHeight}px`;
    void heenEnWeerP.offsetWidth;
    heenEnWeerP.style.height = `0px`;
  }

  import { onMount, onDestroy } from "svelte";

  onMount(() => {
    heenEnWeerP = document.querySelector('li[aria-label="heen en weer"] div');
    heenEnWeerButton = document.querySelector(
      'li[aria-label="heen en weer"] button',
    );

    heenEnWeerButton.addEventListener("click", handleHeenEnWeer);
    window.addEventListener("keydown", handleKeydown);
  });

  // onDestroy(() => {
  //   heenEnWeerButton.removeEventListener("click", handleHeenEnWeer);
  //   window.removeEventListener("keydown", handleKeydown);
  // });
</script>

<main>
  <ul>
    <li aria-label="heen en weer">
      <div class:heen class:weer>
        <h5>Kleurenpalet</h5>
        <br />
        <label for="stroke">Kleur</label>
        <input id="stroke" name="stroke" type="color" />
        <label for="lineWidth">Pen dikte:</label>
        <input id="lineWidth" name="lineWidth" type="number" value="5" />
        <button id="clear">Wissen</button>
        <button on:click={handleHeenEnWeer}>✏️</button>
        <!-- <button id="clear" class:heen class:weer on:click={handleHeenEnWeer}>✏️</button> -->
      </div>
    </li>
  </ul>
</main>

<style>
  :root {
    --vtDarkBlue: #090940;
    --vtLightBlue-10: #e1f3f6;

    --vtPrimaryFont: "rigid-square", sans-serif;
    --vtSecondaryFont: "yrsa", serif;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  h5 {
    font-size: 20px;
  }

  label {
    font-size: 20px;
  }

  input {
    width: 40%;
    border-style: none;
  }

  li {
    display: grid;
    place-content: center;
    place-items: center;
    gap: 1em;
  }

  button {
    width: 7.5em;
    height: 2.5em;
    appearance: none;
    border: none;
    border-radius: 1.25em;
    background-color: var(--vtDarkBlue);
    color: white;
    font: inherit;
  }

  button:hover {
    cursor: pointer;
  }

  button:focus-visible {
    outline: dotted 0.125rem white;
    outline-offset: -0.25rem;
  }

  button:active {
    translate: 0 1px;
    transition-delay: 0.15s;
  }

  div {
    margin: 0;
  }

  .heenAnimation {
    animation-name: heenP;
    animation-duration: 1s;
    animation-fill-mode: forwards;
  }

  .weerAnimation {
    animation-name: weerP;
    animation-duration: 1s;
    animation-fill-mode: forwards;
  }

  @keyframes heenP {
    0% {
      width: 2.5em;
      height: 2.5em;
      color: transparent;
    }
    50% {
      width: 11em;
      height: 2.5em;
      color: transparent;
    }
    100% {
      width: 11em;
      height: 15em;
      color: var(--vtDarkBlue);
    }
  }

  @keyframes weerP {
    0% {
      width: 11em;
      height: 15em;
      color: var(--vtDarkBlue);
    }
    50% {
      width: 11em;
      height: 2.5em;
      color: transparent;
    }
    100% {
      width: 2.5em;
      height: 2.5em;
      color: transparent;
    }
  }

  li[aria-label="heen en weer"] div {
    position: relative;
    overflow: hidden;
    /* width: 2.5em; */
    /* height: 2.5em; */
    padding: 0 1.25em;
    display: grid;
    place-items: center;
    place-content: center;
    border-radius: 1.25em;
    background-color: var(--vtDarkBlue-10);
    box-shadow: inset 0 0 0 0.1em var(--vtDarkBlue);
    color: transparent;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
    animation-timing-function: ease-in-out;
    overflow: hidden;
    transition: height 0.5s ease-in-out; /* Animatie voor de hoogteverandering */
  }

  li[aria-label="heen en weer"] div.heen {
    animation-name: heenP;
    animation-duration: 1s;
    animation-fill-mode: forwards;
  }

  li[aria-label="heen en weer"] div.weer {
    animation-name: weerP;
    animation-duration: 1s;
  }

  @keyframes heenButton {
    0% {
      border-radius: 1.25em;
    }
    50% {
      border-radius: 0 1.25em 1.25em;
    }
    100% {
      border-radius: 0 1.25em;
    }
  }

  @keyframes weerButton {
    0% {
      border-radius: 0 1.25em;
    }
    50% {
      border-radius: 0 1.25em 1.25em;
    }
    100% {
      border-radius: 1.25em;
    }
  }

  li[aria-label="heen en weer"] button {
    position: absolute;
    width: 2.5em;
    place-self: start end;
  }

  li[aria-label="heen en weer"] div.heen button {
    animation-name: heenButton;
    animation-duration: 1s;
    animation-fill-mode: forwards;
  }

  li[aria-label="heen en weer"] div.weer button {
    animation-name: weerButton;
    animation-duration: 1s;
  }
</style>
