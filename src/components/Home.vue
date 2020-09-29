<template>
  <div class="container" :class="isMobile ? 'mobile' : 'desktop'">
    <div class="inner">
      <a id="primer" href="https://www.climatescenarios.org/primer/">
      <img :src="(isMobile ? 'mobile' : 'desktop') + '/primer.svg'" class="plan primer" />
      </a>
      <h1>This is the Finance Portal.</h1>
      <div class="text">
          <span>
            Climate change scenarios can inform financial decision making about
            the impacts of climate change on the economy and financial assets
            (physical risks) and the need to transform to climate neutral economies
            (transition risks and investment opportunities).
        </span>
      </div>
    </div>
    <div class="down_arrow">↓</div>
    <!-- <HomeMap v-if="isMobile === false"/> -->
    <img v-if="isMobile" :src="(isMobile ? 'mobile' : 'desktop') + '/home.svg'" class="plan"/>
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
  max-width: 1050px;
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
  color: #b035c9;
  font-size: 140px;
  line-height: 1.1em;
  margin-bottom: 60px;
  margin-top: 60px;

  @media screen and (max-width: 700px)  {
    font-size: 3em;
  }
}

.text {
  width: 100%;
  font-size: 25px;
  color: #720a87;
}

.senses {
  color: #5263FF;
}

.down_arrow {
  color: #720a87;
  font-size: 50px;
  margin-top: 60px;
  margin-bottom: 20px;
}

.plan {

  &.primer {
    width: 40%;
    position: absolute;
    padding-left: 20px;
    right: 5%;
    top: 10%;
  }
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
