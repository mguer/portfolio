<template>
  <div>
    <div class="background">
      <div class="d-flex justify-center mt-5">
        <img class="lignes" src="../assets/background/lignes.svg" />
      </div>
    </div>

    <div class="texteFront">
      <h1>
        Marianne <br />
        Guerrero <br />
        Dev Web
      </h1>
      <h2>Hello !</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>

<style lang="scss">
.background {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-image: url("../assets/background/diagonale.svg");
  animation: animatedBackground 7s linear infinite alternate;
}

.texteFront {
  position: absolute;
  font-weight: bold;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) rotate(-25deg);
}
.texteFront h1 {
  font-size: 4rem !important;
}

@keyframes animatedBackground {
  from {
    background-position: 25% 75%;
  }
  to {
    background-position: right 35% bottom 45%;
  }
}

.lignes {
  animation: shine 3s linear infinite alternate;
  height: 60vh;
  width: 80vw;
}

@-webkit-keyframes shine {
  0% {
    transform: translatey(50px) translatex(-30px);
  }
}
</style>
