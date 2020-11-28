<template>
  <div class="app-container">
    <aside style="margin-bottom:15px">
      The guide page is useful for some people who entered the project for the first time. You can
      briefly introduce the features of the project. Demo is based on
      <a href="https://github.com/kamranahmedse/driver.js" target="_blank">driver.js.</a>
    </aside>
    <el-button type="success" @click="openGuide">打开引导</el-button>
    <el-button id="step1" type="success">步骤1</el-button>
    <el-button id="step2" type="success">步骤2</el-button>
    <userGuide v-if="showGuide" ref="guide" :steps="steps" />
  </div>
</template>

<script>
import userGuide from '../../components/userGuide'
export default {
  name: 'Guide',
  icon: 'el-icon-help',
  components: {
    userGuide
  },
  data() {
    return {
      showGuide: false,
      steps: [
        {
          element: '#step1',
          popover: {
            title: '步骤一',
            description: 'Indicate the current page location',
            position: 'bottom'
          }
        },
        {
          element: '#step2',
          popover: {
            title: '步骤二',
            description: 'Indicate the current page location',
            position: 'bottom'
          }
        }
      ]
    }
  },
  methods: {
    openGuide() {
      this.showGuide = true
      setTimeout(() => {
        this.$refs['guide'].guide()
      }, 0)
    }
  }
}
</script>
<style lang="scss"></style>
