<template></template>
<script>
import Driver from 'driver.js' // import driver.js
import 'driver.js/dist/driver.min.css' // import driver.js css
export default {
  name: 'userGuide',
  props: {
    steps: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      driver: null
    }
  },
  mounted() {
    this.driver = new Driver({
      className: 'scoped-class' // className to wrap driver.js popover
      // onDeselected: this.onDeselected, // Called when element has been deselected
      // onReset: this.onReset, // Called when overlay is about to be cleared
      // onNext: this.onNext, // Called when moving to next step on any step
      // onPrevious: this.onPrevious // Called when moving to next step on any step
    })
  },
  methods: {
    guide() {
      if (!this.steps.length) {
        throw new Error('step is not empty')
      }
      this.driver.defineSteps(this.steps)
      this.driver.start()
    },
    // driver实例的下一步、上一步、关闭的回调
    onDeselected(e) {
      // this.$emit(e)
    },
    onReset(e) {
      // this.$emit(e)
    },
    onNext(e) {
      // this.$emit(e)
    },
    onPrevious(e) {
      // this.$emit(e)
    }
  }
}
</script>
<style lang="scss">
// .scoped-class#driver-popover-item {
//   .driver-popover-title {
//     display: none;
//   }
// }
</style>
