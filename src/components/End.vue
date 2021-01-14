<template>
  <div class="container" :class="{mobile}">
    <div class="inner">
      <h1>
        <a href="/policy-portal">
        Continue on the Policy Portal. <br v-if="{mobile} === true"/>
        </a>
      </h1>
    </div>
    <img class="backgroundPath" src="desktop/background/end.svg"/>
  </div>
</template>

<script>
export default {
  props: ["mobile"]
};
</script>

<style scoped lang="scss">
.container {
  justify-content: center;
  align-items: center;
  display: flex;
  height: 100vh;
  flex-flow: column;
  text-align: right;
}
.inner {
  width: 1100px;
  z-index: 1;
  margin: 0 6em;

  .mobile & {
    width: auto;
    margin: 0 2em;
    line-height: 140px;

  }
}

.inner:hover {
  a {
    color: #0bbfb0;
  }
}

.backgroundPath {
  position: absolute;
  width: 100%;
  height: 100vh;
  left: 0;
  top: 0;
  pointer-events: none;
}

.dot {
  top: 35%;
  position: absolute;
  border-radius: 500px;
  width: 15px;
  height: 15px;
  background-color: #0bbfb0;
}

a {
  color: #fff;
  text-decoration: none;
  background:none;
  :hover & {
    color: #fff;
   text-decoration: none;
   background:none;
  }
}

h1 {
  font-weight: 700;
  /* text-shadow: -1px 0 #0bbfb0, 0 1px #0bbfb0, 1px 0 #0bbfb0, 0 -1px #0bbfb0; */
  color: #fff;
  font-size: 140px;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #0bbfb0;
  line-height: 1em;
  margin-bottom: 40px;
  margin-top: 60px;

  .mobile & {
    font-size: 30px;
    margin-top: 100px;
  }

}

.right_arrow {
  font-weight: normal;
  color: #0bbfb0;
  font-size: 50px;
  padding-left: 30px;
  transition: padding-left 1s;

  .mobile & {
    margin-left: 150px;
    transition: none;
  }

  :hover & {
    padding-left: 50px;
  }
}
</style>
