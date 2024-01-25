<script>
    import Inputtekenruimte from "$lib/atoms/inputtekenruimte.svelte";
  
    import { onMount } from "svelte";
  
    // Voer code uit na het renderen van de component
    onMount(() => {
      // Haal het canvas, de toolbar en de 2D-context op
      const canvas = document.getElementById("drawing-board");
      const toolbar = document.getElementById("toolbar");
      const ctx = canvas.getContext("2d");
  
      // Bepaal de offset van het canvas ten opzichte van het document
      const canvasOffsetX = canvas.offsetLeft;
      const canvasOffsetY = canvas.offsetTop;
  
      // Stel de breedte en hoogte van het canvas in op het vensterformaat
      canvas.width = window.innerWidth - canvasOffsetX;
      canvas.height = window.innerHeight - canvasOffsetY;
  
      // Initialiseer variabelen voor schilderen
      let isPainting = false;
      let lineWidth = 5;
      let startX;
      let startY;
  
      // Voeg een click eventlistener toe aan de toolbar voor wissen
      toolbar.addEventListener("click", (e) => {
        if (e.target.id === "clear") {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
      });
  
      // Voeg een change eventlistener toe aan de toolbar voor kleur en lijnbreedte
      toolbar.addEventListener("change", (e) => {
        if (e.target.id === "stroke") {
          // Stel de lijnkleur in op de geselecteerde waarde
          ctx.strokeStyle = e.target.value;
        }
        if (e.target.id === "lineWidth") {
          // Stel de lijnbreedte in op de geselecteerde waarde
          lineWidth = e.target.value;
        }
      });
  
      // Functie om tekenen te implementeren
      const draw = (e) => {
        if (!isPainting) {
          return;
        }
  
        // Bepaal de x- en y-positie op het canvas
        const x = (e.clientX || e.touches[0].clientX) - canvas.getBoundingClientRect().left;
        const y = (e.clientY || e.touches[0].clientY) - canvas.getBoundingClientRect().top;
  
        // Configureer de lijnparameters en teken de lijn
        ctx.lineWidth = lineWidth;
        ctx.lineCap = "round";
        ctx.lineTo(x, y);
        ctx.stroke();
      };
  
      // Functie om tekenen te starten
      const start = (e) => {
        isPainting = true;
        startX = e.clientX || e.touches[0].clientX;
        startY = e.clientY || e.touches[0].clientY;
      };
  
      // Functie om tekenen te beëindigen
      const end = (e) => {
        isPainting = false;
        ctx.stroke();
        ctx.beginPath();
      };
  
      // Voeg eventlisteners toe voor mousedown, mouseup, mousemove, touchstart, touchend en touchmove
      canvas.addEventListener("mousedown", start);
      canvas.addEventListener("touchstart", start);
      canvas.addEventListener("mouseup", end);
      canvas.addEventListener("touchend", end);
      canvas.addEventListener("mousemove", draw);
      canvas.addEventListener("touchmove", draw);
    });
  </script>
  

<section>
    <h4 class="line">Tekenruimte</h4>
  </section>

<main>
    <div class="labeltekst"><h2>Teken hier!</h2></div>
    <section class="container">
        <div id="toolbar">
            <h3>Tekentools</h3>
            <label for="stroke">Kleur</label>
            <input id="stroke" name="stroke" type="color" />
            <label for="lineWidth">Pen dikte:</label>
            <input id="lineWidth" name="lineWidth" type="number" value="5" />
            <button id="clear">Wissen</button>
        </div>
        <div class="drawing-board" >
            <canvas id="drawing-board"  />
        </div>
    <div class="inputComponent"><Inputtekenruimte /></div> 
        
    </section>
</main>


<style>

:root {
    --vtDarkBlue: #090940;
    --vtLightBlue: #67c5d1;
    --vtYellow: #feb51e;
    --vtRed: #f96c4f;
    --vtWhite: #ffffff;
    
    --vtDarkBlue-80: #3a3a66;
    --vtDarkBlue-50: #6b6b8c;
    --vtDarkBlue-30: #9d9db3;
    --vtDarkBlue-10: #ceced9;

    --vtLightBlue-80: #85d1da;
    --vtLightBlue-50: #a4dce3;
    --vtLightBlue-30: #c2e8ed;
    --vtLightBlue-10: #e1f3f6;

    --vtYellow-80: #fec44b;
    --vtYellow-50: #fed378;
    --vtYellow-30: #ffe1a5;
    --vtYellow-10: #fff0d2;

    --vtRed-80: #fa8972;
    --vtRed-50: #fba795;
    --vtRed-30: #fdc4b9;
    --vtRed-10: #fee2dc;

    --vtGrey-80: #c0beb9;
    --vtGrey-50: #e0dedc;
    --vtGrey-10: #f9f8f8;

    --vtSec-Red: #af1301;
    --vtSec-Red-30: #fbc5b4;
    --vtSec-Green: #169861;
    --vtSec-Green-30: #63c09f;
    --vtSec-LightBlue: #4fbbc2;
    --vtSec-DarkBlue: #31439c;
    --vtSec-Brown: #8b3a00;
    --vtSec-Orange: #fe6f07;

    --vtPrimaryFont: "rigid-square", sans-serif;
    --vtSecondaryFont: "yrsa", serif;
  }

    * {
        margin: 0;
        padding: 0;
    }

    .line {
    text-transform: uppercase;
    background-color: var(--vtGrey-80);
    color: var(--vtWhite);
    font-family: var(--vtPrimaryFont);
    font-size: 0.9rem;
    padding-left: 9%;
    /* padding-top: 0.3em; */
    margin-top: 0%;
    display: flex;
    align-items: center;
    height: 30px;
    }

    h2 {
        font-size: 2.369rem;
    }

    .inputComponent {
        position: absolute;
        margin-left: 2em;
        margin-top: 1em;
    }

    .labeltekst {
        font-family: var(--vtPrimaryFont);
        margin: auto 0;
        margin-top: 2em;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .container {
      font-family: var(--vtPrimaryFont);
      justify-items: center;
      padding-bottom: 2em;
      width: 100vw; 
    }

    .drawing-board{
        border-radius: 25px;
        border: none;
        background-color: var(--vtGrey-10);
        box-shadow: var(--vtGrey-80) 1px 1px 20px 1px;
        margin: 2em;
        cursor: pointer;
    }
    
#toolbar {
        font-weight: 800;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 1.5em;
        width: 15%;
        height: 30%;
        border: none;
        background-color: var(--vtGrey-50);
        box-shadow: var(--vtGrey-50) 1px 1px 20px 1px;
        border-radius: 25px;
        gap: 0.3em;
        margin: 3em;
    } 

    input {
        width: 25%;
        border-radius: 4px;
        margin: 0em;
    }

    input:active{
        transform: translateY(1px);
        
    }

    #stroke{
        border: none;
        background: none;
        border-radius: 4px;
    }

    #lineWidth{
        border: none;
        border-radius: 4px;
    }
    
    #clear {
        background-color: #090940;
        border: none;
        border-radius: 4px;
        color: white;
        padding: 2px;
        margin-top: 0.5em;
        margin-bottom: 0.5em;
        width: 25%;
    }

    #clear:hover{
        color: var(--vtYellow);

    }

    #clear:active{
        transform: translateY(1px);

    }

    h3 {
        margin: 0.5em;
    }



  /*---DESKTOP---*/
  @media (min-width: 55em) {
    .container {
        display: flex;
        width: 100vw;
        margin-top: 3em;
    }

      #toolbar {
        display: none;
        position: absolute;
        max-width: 8em;
        max-height: 20em;
        margin-left: 2em;
        margin-top: 2em;
    }

      .drawing-board{
        border-radius: 25px;
        border: none;
        background-color: var(--vtGrey-10);
        box-shadow: var(--vtGrey-50) 1px 1px 20px 1px;
        margin: 2em;
        margin-left: 4em;
        height: 25em;
        width: 90%;
        cursor: url('cursor-img.jpg');
    }

    #toolbar input {
        width: 50%;
        height: 3em;
        border-radius: 4px;
        margin: 0em;
    }

    #clear {
        background-color: #090940;
        border: none;
        border-radius: 4px;
        color: white;
        padding: 2px;
        margin-top: 0.5em;
        margin-bottom: 0.5em;
        width: 25%;
    }

    #clear:hover{
        color: var(--vtYellow);

    }

    #clear:active{
        transform: translateY(1px);

    }
  }

     /*---TABLET---*/
     @media (min-width: 31em) and (max-width: 55em) {
        
        .line {
        padding-left: 20%;
        }

        .inputComponent {
        display: none;
        }

        .labeltekst {
        font-family: var(--vtPrimaryFont);
        margin: auto 0;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100vw;
        margin-top: 2em;
    }

      .container {
        display: grid;
        grid-template-columns: 1fr;
        width: 100vw;
        margin-top: 2em;
    }

      #toolbar {
        width: 50%;
        max-width: 15em;
        height: 60%;
    }

      .drawing-board{
        border-radius: 25px;
        border: none;
        background-color: var(--vtGrey-10);
        box-shadow: var(--vtGrey-50) 1px 1px 20px 1px;
        margin: 2em;
        max-width: 22em;
        height: 35em;
        width: 90%;
        cursor: url('cursor-img.jpg');
    }

    #toolbar input {
        width: 50%;
        height: 3em;
        border-radius: 4px;
        margin: 0em;
    }
    }


    /*---MOBILE---*/
    @media (max-width: 31em) {

        .line {
        padding-left: 11%;
        }

      .inputComponent {
        display: none;
        }

      .labeltekst {
        font-family: var(--vtPrimaryFont);
        margin: auto 0;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 2em;
        margin-left: 0em;
    }

      .container {
        width: 100vw;
        margin-top: 3em;
    }

      #toolbar {
        margin-left: 2.5em;
        margin-right: 1em;
        width: 60%;
        height: 12em;
    }

      .drawing-board{
        border-radius: 25px;
        border: none;
        background-color: var(--vtGrey-10);
        box-shadow: var(--vtGrey-50) 1px 1px 20px 1px;
        margin: 1em;
        height: 30em;
        width: 90%;
    }

      #toolbar input {
        width: 50%;
        height: 3em;
        border-radius: 4px;
        margin: 0em;
    }

    .drawing-board #drawing-board {
      /* width: 100%;
      height: 100%; */
    }
    }



</style>
