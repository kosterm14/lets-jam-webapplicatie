<script>
  // Variabelen voor heen-en-weer effect
  let heenEnWeerP; // Element voor de animatie
  let heenEnWeerButton; // Knop om heen-en-weer te schakelen
  let heen = false; // Status "heen" actief
  let weer = false; // Status "weer" actief

  // Functie om tussen "heen" en "weer" te schakelen
  function handleHeenEnWeer() {
    if (!heen) {
      // Schakel naar "heen" als niet al actief
      heen = true;
      weer = false;
      heenAnimation();
    } else {
      // Schakel naar "weer" als niet al actief
      heen = false;
      weer = true;
      weerAnimation();
    }
  }

  // Functie voor animatie bij Escape-toets
  function handleKeydown(e) {
    if (e.code === "Escape") {
      weerAnimation();
    }
  }

  // Animatie voor "heen" effect
  function heenAnimation() {
    setTimeout(() => {
      // Update inhoud en hoogte met vertraging
      heenEnWeerButton.textContent = "x";
      heenEnWeerP.style.height = `${heenEnWeerP.scrollHeight}px`;
    }, 100);

    // Voeg klasse toe voor "heen" animatie
    heenEnWeerP.classList.add("heenAnimation");
  }

  // Animatie voor "weer" effect
  function weerAnimation() {
    setTimeout(() => {
      // Vertraagd aanpassen van hoogte
      heenEnWeerP.style.height = `2.5em`;
    }, 100);

    // Verwijder klasse voor "heen" animatie
    heenEnWeerP.classList.remove("heenAnimation");
    // Forceer heropbouw voor het element
    heenEnWeerP.style.height = `${heenEnWeerP.scrollHeight}px`;
    void heenEnWeerP.offsetWidth;
    // Zet hoogte terug naar 0 voor "weer" animatie
    heenEnWeerP.style.height = `0px`;
  }

  // Importeer functies van Svelte voor mounten en vernietigen
  import { onMount, onDestroy } from "svelte";

  // Voer uit bij het mounten van het component
  onMount(() => {
    // Zoek benodigde DOM-elementen
    heenEnWeerP = document.querySelector('li[aria-label="heen en weer"] div');
    heenEnWeerButton = document.querySelector(
      'li[aria-label="heen en weer"] button',
    );

    // Voeg event listeners toe voor heen-en-weer effect
    heenEnWeerButton.addEventListener("click", handleHeenEnWeer);
    window.addEventListener("keydown", handleKeydown);
  });

  // Voer uit bij het vernietigen van het component
  onDestroy(() => {
    // Verwijder event listeners om geheugenlekken te voorkomen
    heenEnWeerButton.removeEventListener("click", handleHeenEnWeer);
    window.removeEventListener("keydown", handleKeydown);
  });
</script>


<main>
  <ul>
    <li aria-label="heen en weer">
      <div class:heen class:weer>
        <h5>Tekentools</h5>
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
