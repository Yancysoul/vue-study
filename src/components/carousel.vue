<template>
  <div class="box">
    <div class="content">
      <ul>
        <li
          v-for="(item, index) in lists"
          :key="item"
          :class="setClass(index)"
        >
          <div>{{ item }}</div>
        </li>
      </ul>
    </div>
    <div class="button">
      <button @click="leftClick">左</button>
      <button @click="rightClick">右</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'carousel',
    data() {
      return {
        li1: '',
        lists: [1, 2, 3, 4, 5, 6]
      }
    },
    methods: {
      setClass(index) {
        switch (index) {
          case 0:
            return 'li1'
          case 1:
            return 'li2'
          case 2:
            return 'li3'
          case 3:
            return 'li4'
          default:
            break;
        }
      },
      leftClick() {},
      rightClick() {}
    }
  }
</script>

<style lang="scss" scoped>
div.box {
  width: 1000px;
  height: 400px;
  border: 1px solid #ccc;
  margin: 100px auto;
  position: relative;
  .content {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .button {
    position: absolute;
    bottom: -40px;
    left: 20px;
    button {
      margin-left: 30px;
    }
  }
  ul {
    display: flex;
    height: 100%;
    margin: 0;
    padding: 0;
    list-style: none;
    position: relative;
    li {
      flex-shrink: 0;
      width: 300px;
      height: 100%;
      padding: 10px;
      box-sizing: border-box;
      position: absolute;
      left: -300px;
      top: 0;
      transition: all 0.5s;
      &.li1 {
        transform: translateX(300px);
      }
      &.li2 {
        transform: translateX(600px);
      }
      &.li3 {
        transform: translateX(900px);
      }
      &.li4 {
        transform: translateX(1200px);
      }
      div {
        height: 100%;
        background-color: #ccc;
      }
    }
  }
}
</style>