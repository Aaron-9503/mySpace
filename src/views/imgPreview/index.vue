<template>
  <div class="container">
    <div class="img-list">
      <div
        v-for="(url, index) in images.slice(0, 4)"
        :key="index"
        class="img-item"
        @click="show(index)"
      >
        <img v-if="index < 3" :src="url" />
        <div v-else class="over-length">
          <span>+{{ images.length - 3 }}</span>
          <img :src="url" />
        </div>
      </div>
    </div>
    <imgViewer ref="imgViewer">
        <i class="el-icon-arrow-left" slot="left"></i>
        <i class="el-icon-arrow-right" slot="right"></i>
    </imgViewer>
  </div>
</template>

<script>
import imgViewer from '../../components/imgViewer';
export default {
  name: 'imgPreview',
  icon: 'el-icon-picture',
  data() {
    return {
      images: [
        'https://picsum.photos/id/55/600/400',
        'https://picsum.photos/id/56/600/400',
        'https://picsum.photos/id/57/600/400',
        'https://picsum.photos/id/58/600/400',
        'https://picsum.photos/id/59/600/400',
        'https://picsum.photos/id/60/600/400',
        'https://picsum.photos/id/61/600/400',
        'https://picsum.photos/id/62/600/400',
        'https://picsum.photos/id/63/600/400',
      ],
    };
  },
  components: {
    imgViewer,
  },
  methods: {
    show(index) {
        const images = this.images.map((url) => {
        return {
          thumbnail: url,
          source: url,
        };
      });
      this.$refs.imgViewer.show(images, index);
    },
  },
};
</script>

<style lang="scss" scoped>
.img-list {
  display: flex;
  flex-wrap: nowrap;
  padding: 30px;
  .img-item {
    width: 100px;
    height: 100px;
    flex: 0 0 auto;
    cursor: pointer;
    margin-right: 5px;
    border-radius: 5px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
    .over-length {
      position: relative;
      width: 100%;
      height: 100%;
      span {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        font-size: 25px;
        color: #ffffff;
        text-align: center;
        line-height: 100px;
        background-color: rgba(0, 0, 0, 0.5);
      }
    }
  }
}
</style>
