<template>
  <div>
    <viewer
      :images="images"
      :options="options"
      class="viewer"
      ref="viewer"
      @inited="inited"
      v-if="images && images.length"
    >
      <img
        v-for="{ source, thumbnail } in images"
        :src="thumbnail"
        :data-source="source"
        :key="source"
        class="image"
      />
    </viewer>
    <transition name="fade">
      <div v-show="showContorl">
        <div name="left" class="contorl left" @click="prev">
          <img :src="contorlLeftImgUrl" />
        </div>
        <div name="right" class="contorl rigth" @click="next">
          <img :src="contorlRightImgUrl" />
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
const contorlLeftImgUrl = require('./icon/arrow-left.png');
const contorlRightImgUrl = require('./icon/arrow-right.png');
import Vue from 'vue';
import Viewer from 'v-viewer';
import 'viewerjs/dist/viewer.css';
Vue.use(Viewer);
export default {
  data() {
    return {
      options: {
        url: 'data-source',
      },
      index: 0,
      images: [],
      isEvent: false,
      contorlLeftImgUrl,
      contorlRightImgUrl,
      showContorl: false,
    };
  },
  methods: {
    inited(viewer) {
      this.$viewer = viewer;
      this.$viewer.view(this.index);
      if (!this.isEvent) {
        this.isEvent = true;
        this.$viewer.element.addEventListener('hide', () => {
          this.showContorl = false;
        });
      }
    },
    prev() {
      this.$viewer.prev();
    },
    next() {
      this.$viewer.next();
    },
    view(index) {
      this.index = index;
      this.$viewer.view(this.index);
    },
    show(images, index = 0) {
      if (this.images === images) { 
        this.view(index);
        return;
      }
      this.images = images;
      this.index = index;
      this.showContorl = true;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.image {
  display: none;
}
.contorl {
  position: fixed;
  z-index: 99999;
  width: 50px;
  height: 100px;
  background-color: rgba(0, 0, 0, 0.4);
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.6);
  }
  img {
    width: 50px;
    margin-top: 25px;
    display: block;
    margin: 25px auto;
  }
  &.left {
    left: 10%;
  }
  &.rigth {
    right: 10%;
  }
}
</style>
<style>
.viewer-loading > img {
  display: none; /* hide big images when it is loading */
}
</style>
