<template>
  <div
    class="container"
    @click="click"
    :class="[{open}, activePortal && activePortal.path]"
  >
    <div class="info">{{activePortal && activePortal.mainTopic}}</div>
    <div class="content">
      <div class="title">Policy Portal</div>
      <div class="position">
        <div class="portal">{{activePortal && activePortal.mainTopic}}</div>
        <div class="circle"></div>
      </div>
      <div class="link">
        <a class="intro" href="#/intro"></a>
        <a class="emissions-gap" href="#/emissions-gap"></a>
        <a class="transition-risk" href="#/transition-risk"></a>
        <a class="power-sector" href="#/power-sector"></a>
        <a class="end-use" href="#/end-use"></a>
        <a class="investment-opportunities" href="#/investment-opportunities"></a>
        <!-- <a class="land-use" href="#/land-use"></a>
        <a class="extreme-events" href="#/extreme-events"></a> -->
        <a class="earth" href="#/earth"></a>
        <a class="end" href="#/end"></a>
      </div>
      <img src="desktop/navigation.svg" class="naviImage" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";

export default {
  computed: {
    ...mapGetters(["activePortal"]),
    ...mapState(["navigationOpen", "reflowTime"]),
    open: function() {
      return this.activePortal && this.activePortal.path !== "intro";
    }
  },
  // watch: {
  //   activePortal: function(n,o){
  //     if(o.path === "intro" && n.path === "stocktake-1") {
  //       this.$store.state.navigationOpen = true;
  //     } else if(n.path === "intro") {
  //       this.$store.state.navigationOpen = false;
  //     }
  //   }
  // },
  methods: {
    click: function() {
      //this.$store.state.navigationOpen = !this.navigationOpen;
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  position: fixed;
  top: 131px;
  padding: 20px;
  padding-left: 40px;
  border: 1px solid #870bbf;
  border-radius: 20px;
  left: -20px;
  color: #870bbf;
  text-transform: uppercase;
  font-size: 12px;

  width: 110px;
  overflow: hidden;
  background: #fff;
  z-index: 100;

  &.open {
    height: 450px;
    width: 190px;
  }
}

.title {
  font-size: 9px;
}

.content {
  display: none;

  .open & {
    display: block;
  }
}

.info {
  display: block;

  .navigationOpen & {
    display: none;
  }
}

.naviImage {
  position: absolute;
  top:70px;
  left: 10px;
  pointer-events: none;
}

.link {
  position: absolute;
  margin:0;
  padding:0;
  top: 33px;
  left: 10px;

  a {
    cursor: pointer;
    pointer-events: all;
    margin:0;
    padding:0;
    list-style: none;
    width: 20px;
    height: 20px;
    text-decoration: none;
    position: absolute;
    background: none;
    &.intro {
      top: 50px;
      left: 50px;
    }

    &.earth {
      top: 90px;
      left: 61px;
    }

    &.emissions-gap {
      top: 130px;
      left: 61px;
    }

    &.transition-risk {
      top: 190px;
      left: 95px;
    }

    &.power-sector {
      top: 205px;
      left: 70px;
    }

    &.end-use {
      top: 205px;
      left: 45px;
    }

    &.investment-opportunities {
      top: 260px;
      left: 61px;
    }

    &.extreme-events {
      top: 260px;
      left: 81px;
    }

    &.end {
      top: 355px;
      left: 35px;
    }

  }
}

.position {
  position: absolute;
  top: 60px;
  left: 67px;
  transition: top 1s, left 1s;

  .earth & {
    top: 90px;
    left: 61px;
  }

  .emissions-gap & {
    top: 130px;
    left: 61px;
  }

  .transition-risk & {
    top: 190px;
    left: 95px;
  }

  .power-sector & {
    top: 205px;
    left: 70px;
  }

  .end-use & {
    top: 205px;
    left: 45px;
  }

  .investment-opportunities & {
    top: 260px;
    left: 61px;
  }

  .extreme-events & {
    top: 260px;
    left: 81px;
  }

  .end & {
    top: 355px;
    left: 35px;
  }
}

.portal {
  position: absolute;
  left: 27px;
  transform: rotate(-45deg);
  width: 100px;
  font-size: 0.7em;
  top: -16px;

  .end & {
    color: #b035c9;
  }
}

.circle {
  background: #f9dcff;
  opacity: 0.5;
  width: 40px;
  height: 40px;
  border-radius: 50px;
  top: 22px;
  left: 0;
  position: absolute;

  .end & {
    background: #f3baff;
  }
}
</style>
