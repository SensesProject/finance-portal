<template>
  <div class="container" :class="isMobile ? 'mobile' : 'desktop'">
    <div class="inner">
      <h1>Welcome to the Finance Portal.</h1>
      <!-- <div class="text">
      </div> -->
    </div>
    <div class="down_arrow">↓</div>
    <HomeMap v-if="isMobile === false"/>
    <img v-if="isMobile" :src="(isMobile ? 'mobile' : 'desktop') + '/home.svg'" class="plan"/>
    <a id="primer" href="https://www.climatescenarios.org/primer/">
    <img :src="(isMobile ? 'mobile' : 'desktop') + '/primer.svg'" class="plan" />
    </a>
  </div>
</template>

<script>
import { mapState } from "vuex";
import HomeMap from "./HomeMap.vue";

export default {
  components: {
    HomeMap
  },
  computed: {
    ...mapState(["isMobile"])
  }
};
</script>

<style scoped lang="scss">
.container {
  justify-content: center;
  align-items: center;
  display: flex;
  /* height: 100vh; */
  flex-flow: column;
  margin-bottom: 100px;
  max-width: 815px;
  margin: 0 4em;
  margin-bottom: 7em;
}

#primer {
  background: none;
}

.inner {

}

img {
  max-width: 100%;
}

h1 {
  font-weight: 700;
  /* text-shadow: -1px 0 #003733, 0 1px #003733, 1px 0 #003733, 0 -1px #003733; */
  color: #870bbf;
  font-size: 100px;
  /* -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #003733; */
  line-height: 1em;
  margin-bottom: 60px;
  margin-top: 60px;

  @media screen and (max-width: 700px)  {
    font-size: 3em;
  }
}

.senses {
  color: #5263FF;
}

.down_arrow {
  color: #870bbf;
  font-size: 50px;
  margin-top: 55px;
  margin-bottom: 20px;
}

.plan {
  margin-top: 40px;
}

.mobile {

  h1 {
    font-size: 40px;
  }

  .plan & {
    visibility: none;
  }
}
</style>
