<template>
  <div class="container" :class="[data.path, {mobile}]">
    <div class="header">{{ data.mainTopic }}</div>
    <div class="description-par" v-if="data.portalDescription">{{ data.portalDescription }}</div>
    <a :href="data.link" class="link-title">
    <div class="circle"></div>
    <div class="text">
      <h2 :style="{ left: ratio * 30 + 'px' }">{{ data.title }}</h2>
      <div
        class="description"
        :style="!{mobile} ? { left: ratio * 10 + 'px' } : { left: 10 + 'px' }"
        v-show="ratio > 0.3"
      >{{ data.description }}</div>
      <div class="readbutton" v-show="ratio> 0.5">
        <div class="readspan">READ</div>
      </div>
    </div>
    <div class="circle"></div>
  </a>
  <div class="info">
    <div class="credits">
      <div class="icon"></div>
      <div class="content" v-if="data.authors">
        <span v-for="(author, a) in authors" :key="`${a}-author`">
          <span v-if="a !== 0">/</span> {{author}}
        </span>
      </div>
    </div>
    <div class="read">
      <div class="icon"></div>
      <div class="content">{{ data.readingTime }} minutes</div>
    </div>
    <div class="tags">
      <div class="icon"></div>
      <div class="content" v-if="data.downloadIDs"><a v-on:click="onClick">Download Extras</a></div>
      <div class="content gems" v-if="data.gems">/ <a href="https://dev.climatescenarios.org/gems/#/">Explore GEMs</a></div>
    </div>
  </div>
  <div class="otherportal" v-if="data.id === 'emissions-gap' || data.id === 'extreme-events'">
    <a href="/policy-portal/#emissions-gap">
      <p>&#10132;</p>
      <h3>Discover also in the Policy Portal</h3>
    </a>
  </div>
    <div class="background" />
    <img class="backgroundPath" :src="'desktop/background/' + data.path + '.svg'" />

    <!-- <img class="microModule" v-if="data.microModule" src="desktop/micromodule.svg" /> -->
  </div>
</template>

<script>
export default {
  props: ["data", "ratio", "mobile", "active"],
  computed: {
    authors () {
      const authors = this.data.authors
      return authors.map((a, i) => {
        if (authors !== undefined) {
          const name = a.slice(0, 1)
          const whitespace = a.indexOf(' ')
          let surname = ''
          if (a.indexOf(' ') >= 0) {
            surname = a.slice(whitespace, a.length)
          }
          return name + '.' + surname
        } else {
          return []
        }
      })
    }
  },
  methods: {
    onClick () {
      this.$store.state.downloadOpen = true
      return false;
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  position: absolute;
  width: 100%;
  height: 100vh;
  left: 0;
  top: 0;
  overflow: hidden;
}

.link-title {
    color: black;
}

.link-title:hover {
    color: #5263ff;
}

.background {
  position: absolute;
  width: 100%;
  background: #9be8c7;
  height: 60vh;
  left: 0;
  top: 20vh;
  display: none;
  .primary-energy & {
    display: block;
    background-image: linear-gradient(to right, #979797 33%, rgba(255, 255, 255, 0) 0%);
    background-position: top;
    background-size: 10px 1px;
    background-repeat: repeat-x;
  }
}

.backgroundPath {
  position: absolute;
  width: 100%;
  height: 100vh;
  left: 0;
  top: 0;
  pointer-events: none;
  vector-effect: non-scaling-stroke;

  .mobile & {
    display: none;
  }
}

.microModule {
  position: absolute;
  left: 50%;
  top: 30%;
}

.land-transitions {
  .header {
    background-image: none;
  }
}

.tags a {
  margin-right: 0.3em;
}

.header {
  top: 0px;
  position: absolute;
  font-size: 25px;
  width: 100%;
  left: 0px;
  padding-right: 20px;
  // background: #fff;
  padding-top: 5px;
  // border-bottom: 1px dashed #979797;
  background-image: linear-gradient(
    to right,
    #979797 33%,
    rgba(255, 255, 255, 0) 0%
  );
  background-position: bottom;
  background-size: 10px 1px;
  background-repeat: repeat-x;
  color: transparent;

  text-align: right;

  .power-sector &,
  .investment &,
  .fossil-risks &,
  .end-use & {
    color: #9f3bcc;
    border-bottom: 1px dotted #9f3bcc;
    background: none;
  }
}

.description-par {
  width: 500px;
  position: absolute;
  left: 20%;
  top: 100px;
  font-size: 14px;
  color: #9f3bcc;

  .end-use & {
    width: 300px;
    left: 68%;
  }

  .emissions-gap & {
    width: 400px;
    left: 26%;
    text-align: left;
  }

  .investment & {
    width: 300px;
    left: 70%;
  }
}

.container:hover {
  &.emissions-gap, &.extreme-events {
    .circle {
      background:#e6fffe;
    }
  }
}

.circle {
  position: absolute;
  border-radius: 500px;
  width: 400px;
  height: 400px;
  mix-blend-mode: multiply;
  border: 2px solid #fee6ff;
  transition: background 1s;
  pointer-events: none;
  left: calc(50% - 150px);
  top: 34%;
  cursor: pointer;
  z-index: 1;

  .container:hover & {
    background: #fee6ff;
  }

  .power-sector & {
    left: 36%;
    top: 33%;
  }

  .emissions-gap & {
    border: 2px solid #e6fffe;
    left: 47%;
    top: 43%;
  }

  .extreme-events & {
    border: 2px solid #e6fffe;
  }

  .stocktake-2 & {
    left: 20%;
    top: 22%;
  }

  .end-use & {
    left: 33%;
    top: 20%;
  }

  .transition-path-2 & {
    left: 25%;
    top: 25%;
  }

  .primary-energy & {
    left: 25%;
    top: 28%;

    width: 280px;
    height: 280px;
  }

  .transition-risk & {
    left: 60%;
    top: 40%;
  }

  .land-affected & {
    left: 35%;
    top: 25%;
  }

  .mobile & {
    width: 400px;
    height: 400px;
    left: 0%;
    top: 20%;

    background-color: #fee6ff;
  }
}

.text {
  position: absolute;
  width: 350px;
  left: 52%;
  top: 33%;
  cursor: pointer;
  z-index: 1000;

  .power-sector & {
    left: 40%;
    top: 40%;

    h2 {
      width: 500px;
    }
    .description {
      width: 500px;
    }
  }

  .emissions-gap & {
    left: 55%;
    top: 50%;
    h2 {
      width: 500px;
    }
    .description {
      width: 400px;
    }
  }

  .extreme-events & {
    h2 {
      width: 550px;
    }
  }

  .end-use & {
    left: 35%;
    top: 30%;
    h2 {
      width: 400px;
    }
    .description {
      width: 500px;
    }
  }

  .investment & {
    left: 35%;
    top: 45%;
    h2 {
      width: 600px;
    }
    .description {
      width: 450px;
    }
  }

  .primary-energy & {
    left: 25%;
    top: 30%;
    h2 {
      width: 500px;
    }
    .description {
      width: 400px;
    }
    .mobile {
      top: 20%;
    }
  }

  .transition-risk & {
    left: 55%;
    top: 40%;

    h2 {
      width: 500px;
    }
    .description {
      width: 450px;
    }
  }

  .mobile.primary-energy & {
      top: 22%;
  }

  .mobile & {
    width: 85%;
    top: 20%;
    left: 0;
    margin: 0 2em;
    .description {
      width: 100%;
    }
    h2 {
      width: 100%;
      font-size: 25px;
    }
  }

  h2 {
    font-size: 40px;
    font-family: "IBM Plex Mono", serif;
    line-height: 1.1em;
    width: 300px;
    position: relative;

    .container:hover & {
      font-style: italic;
      font-weight: 700;
    }
  }

  .description {
    font-size: 14px;
    line-height: 1.2em;
    position: relative;
    margin-top: 20px;
    .mobile & {
      width: 90%;
      padding: 8px;
      text-shadow: 0px 0px 20px white;
    }
  }

  .readbutton:hover {
    background-color: #5263ff;
      color: white;
  }

  .readbutton {
    font-family: "IBM Plex Mono", serif;
    transition: background 1s;
    border-radius: 500px;
    width: 75px;
    height: 75px;
    border: 0.5px solid #5263ff;
    font-weight: bold;
    font-size: 18px;
    letter-spacing: 0.5px;
    color: #5263ff;
    margin-top: 40px;
    line-height: 73px;
    -webkit-transform: rotate(-10deg);
    text-align: center;
    & a{
      color: #5263ff;
      background: none !important;
    }

    .mobile & {
        margin-left: 38%;
        margin-top: 70px;
        background-color: #5263ff;
        color: white;
    }
  }
}

.otherportal {
  position: absolute;
  // width: 400px;
  top: 30%;
  left: 26%;

  a {
    display: flex;
    color: #0bbfb0;

    p {
      margin-right: 10px;
      transform: rotate(180deg);
    }
  }
}

.info {
  position: absolute;
  left: 5%;
  font-size: 12px;
  text-transform: uppercase;
  bottom: 50px;
  z-index: 1000;

  // .power-sector & {
  //   left: 65%;
  // }

  .primary-energy & {
    top: 65%;
  }

  .mobile.primary-energy & {
      top: 72%;
      bottom: auto;
  }

  > div {
    clear: both;
    float: left;
    border-radius: 10px;
    // background: #9be8c7;
    margin: 5px 0 0 0;

    .content {
      padding: 0 5px 0 10px;
      float: left;
    }

    .gems {
      padding: 0;
    }

  }

  .mobile & {
    left: 0;
    bottom: 30px;
    top: auto;
    font-size: 10px;
    display: grid;
    width: 100%;

    .icon {
      display: none;
    }

    > div {
      clear:none;

      .content {
        width: 100%;
        padding: 0;
        text-align: center;
        margin: 0;
      }
    }
  }

  .icon {
    border-radius: 10px;
    border: 1px solid #9f3bcc;
    width: 15px;
    height: 15px;
    float: left;
  }

}
</style>
