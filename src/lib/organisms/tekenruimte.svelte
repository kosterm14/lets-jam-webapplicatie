<script>
import Inputtekenruimte from "$lib/atoms/inputtekenruimte.svelte";
import { onMount } from "svelte";
  
    onMount(() => {
        const canvas = document.getElementById("drawing-board");
        const toolbar = document.getElementById("toolbar");
        const ctx = canvas.getContext("2d");
        const canvasOffsetX = canvas.offsetLeft;
        const canvasOffsetY = canvas.offsetTop;
        canvas.width = window.innerWidth - canvasOffsetX;
        canvas.height = window.innerHeight - canvasOffsetY;
        let isPainting = false;
        let lineWidth = 5;
        let startX;
        let startY;
        toolbar.addEventListener("click", (e) => {
            if (e.target.id === "clear") {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
            }
        });
        toolbar.addEventListener("change", (e) => {
            if (e.target.id === "stroke") {
                ctx.strokeStyle = e.target.value;
            }
            if (e.target.id === "lineWidth") {
                lineWidth = e.target.value;
            }
        });
        const draw = (e) => {
            if (!isPainting) {
                return;
            }

            const x = (e.clientX || e.touches[0].clientX) - canvas.getBoundingClientRect().left;
            const y = (e.clientY || e.touches[0].clientY) - canvas.getBoundingClientRect().top;

            ctx.lineWidth = lineWidth;
            ctx.lineCap = "round";
            ctx.lineTo(x, y);
            ctx.stroke();
        };
        const start = (e) => {
            isPainting = true;
            startX = e.clientX || e.touches[0].clientX;
            startY = e.clientY || e.touches[0].clientY;
        };
        const end = (e) => {
            isPainting = false;
            ctx.stroke();
            ctx.beginPath();
        };
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
    <!-- <img src="/assets/highlighter_7931172.png" width="32" height="32"> -->
    <div class="labeltekst"><h2>Teken hier!</h2></div>
    <section class="container">
        <div id="toolbar">
            <h3>Kleurenpalet</h3>
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
		font-size: 20px;

		/* Visual Thinking: Primary Colors:
    Zie kleuren styleguide of eventueel Figma designs voor gebruik! 
    */
		--vtDarkBlue: #090940;
		--vtLightBlue: #67c5d1;
		--vtYellow: #feb51e;
		--vtRed: #f96c4f;
		--vtWhite: #ffffff;

		/* Visual Thinking: Primary Colors Lichtere versies, ongeveer 80%, 50%, 30% en 10% opacity van de originele kleuren ^
    Zie kleuren styleguide of eventueel Figma designs voor gebruik! 
    */
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

		/* Visual Thinking: Grijstinten:
    Zie kleuren styleguide of eventueel Figma designs voor gebruik!
     Word vaak gebruikt voor backgrounds en borders. 
    */

		--vtGrey-80: #c0beb9;
		--vtGrey-50: #e0dedc;
		--vtGrey-10: #f9f8f8;

		/* Visual Thinking: Secondary colors,
    Zie kleuren styleguide of eventueel Figma designs voor gebruik! 
    Word gebruikt als steunkleuren bv: kleurcoderen van categorieën
    */

		--vtSec-Red: #af1301;
		--vtSec-Red-30: #fbc5b4;
		--vtSec-Green: #169861;
		--vtSec-Green-30: #63c09f;
		--vtSec-LightBlue: #4fbbc2;
		--vtSec-DarkBlue: #31439c;
		/* <--- deze kleur is de blauwe balk van de tekenmethodes detailpagina */
		--vtSec-Brown: #8b3a00;
		--vtSec-Orange: #fe6f07;

		/* Visual Thinking: Fonts,
    */

		--vtPrimaryFont: "rigid-square", sans-serif;
		--vtSecondaryFont: "yrsa", serif;
	}

    * {
        margin: 0;
        padding: 0;
    }

    .line {
    text-transform: uppercase;
    background-color: var(--vtDarkBlue);
    color: var(--vtWhite);
    font-family: var(--vtPrimaryFont);
    font-size: 0.9rem;
    padding-left: 7rem;
    padding-top: 0.3em;
    margin-top: 0%;
    display: flex;
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
        /* width: 100vw; */
    }
    .container {
      /* display: flex;  */
      font-family: var(--vtPrimaryFont);
      /* align-items: center; */
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
    
    .container:hover {
        cursor: url('/assets/highlighter_7931172.png'), auto;
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



  /* desktop */
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
        /* max-width: 30em; */
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

     /* tablet */
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


    /* ---MOBILE--- */
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
