<header>
  <section>
    <h4 class="line">Artikelen</h4>
  </section>
</header>

<style>
  /* MOBILE - STYLING */
  .line {
    text-transform: uppercase;
    background-color: var(--vtDarkBlue);
    color: var(--vtWhite);
    font-family: var(--vtPrimaryFont);
    font-size: 0.9rem;
    padding-left: 9%;
    padding-top: 0.2rem;
    padding-bottom: 0.2rem;
    margin-top: 0%;
    width: 100vw;
    display: flex;
    align-items: center;
  }

  /* tablet */
  @media (min-width: 31em) and (max-width: 55em) {
    .line {
      padding-left: 20%;
    }
  }

  /* mobile */
  @media (max-width: 31em) {
    .line {
      padding-left: 11%;
    }
  }
</style>
