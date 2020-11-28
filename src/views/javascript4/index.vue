<template>
  <div class="container">
    <h3>迭代器和生成器</h3>
    {{ templateStr }}
    <el-input type="textarea" :value="valueStr" @input="valueChange" />
    {{ str }}
  </div>
</template>

<script>
export default {
  name: 'JavascriptStudy',
  icon: 'el-icon-odometer',
  data() {
    return {
      templateStr: 'http://www.baidu.com\t百度\n',
      valueStr: ''
    }
  },
  computed: {
    str() {
      return JSON.stringify(this.valueStr)
    }
  },
  created() {
    // const num = 3;
    // const obj = {};
    // const arr = [1, 2, 3, 4];
    // const str = 'abc';
    // const map = new Map().set('a', 1).set('b', 2);
    // // console.log(num[Symbol.iterator]);
    // // console.log(obj[Symbol.iterator]);
    // // console.log(arr[Symbol.iterator]);
    // // console.log(map[Symbol.iterator]());
    // // 自定义迭代器
    // class Countor {
    //   constructor(limit) {
    //     this.count = 1;
    //     this.limit = limit;
    //   }
    //   next() {
    //     if (this.count <= this.limit) {
    //       return {
    //         done: false,
    //         value: this.count++,
    //       };
    //     } else {
    //       return {
    //         done: true,
    //         value: undefined,
    //       };
    //     }
    //   }
    //   [Symbol.iterator]() {
    //     console.log(this);
    //     return this;
    //   }
    // }
    // let counter = new Countor(3);
    // for (let i of counter) {
    //   console.log(i);
    // }
    // // 生成器 * function
    // function* test() {
    //   yield setTimeout(() => {
    //     console.log('我是定时器');
    //   }, 1000);
    //   console.log('我是同步代码');
    // }
    // let testTemp = test();
    // for (let i of testTemp) {
    //   console.log(i);
    // }
    // testTemp.next()
    // testTemp.next()
  },
  methods: {
    valueChange(value) {
      const str = value.replace(/(\t)(\1)/g, '$1').replace(/\n$/, '')
      console.log(JSON.stringify(str))
      this.valueStr = str
    }
  }
}
</script>

<style scoped>
.container {
  padding-left: 30px;
}
</style>
