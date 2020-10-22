<template>
  <div>
    <div class="content">
      <div class="arrow left" @click="handleLeftClick">左箭头</div>
      <div class="box">
        <ul :style="'left:' + left + 'px'">
          <li
            v-for="item in lists"
            :key="item.color"
          >
            <div class="item" :style="'background:' + item.color">{{ item.text }}</div>
          </li>
        </ul>
      </div>
      <div class="arrow right" @click="handleRightClick">右箭头</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'RollDemo1',
    data() {
      return {
        left: 0,
        lists: [
          {
            color: '#4DD0E1',
            text: 'a'
          }, {
            color: '#66BB6A',
            text: 'b'
          }, {
            color: '#FBC02D',
            text: 'c'
          }, {
            color: '#E64A19',
            text: 'd'
          }, {
            color: '#0D47A1',
            text: 'e'
          }, {
            color: '#5E35B1',
            text: 'f'
          }, {
            color: '#b71c1c',
            text: 'g'
          }, {
            color: '#BCAAA4',
            text: 'h'
          }, {
            color: '#FFAB91',
            text: 'i'
          }, {
            color: '#212121',
            text: 'j'
          }, {
            color: '#263238',
            text: 'k'
          }, {
            color: '#4A148C',
            text: 'l'
          }
        ]
      }
    },
    computed: {
      moveLeft() {
        return -(this.lists.length * 200 -1100)
      }
    },
    methods: {
      handleLeftClick() {
        let left = this.left
        left -= 200
        if (left <= this.moveLeft) {
          left = this.moveLeft
        }
        this.left = left
      },
      handleRightClick() {
        let left = this.left
        left += 200
        if (left >= 0) {
          left = 0
        }
        this.left = left
      }
    }
  }
</script>

<style lang="scss" scoped>
.content {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  .arrow {
    width: 50px;
    background: rgba(0, 0, 0, 0.6);
    flex-shrink: 0;
    color: #fff;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .box {
    overflow: hidden;
    position: relative;
    transition: all 0.3s;
    ul {
      position: relative;
      top: 0;
      padding: 0;
      display: flex;
      transition: all 0.3s;
      li {
        list-style: none;
        .item {
          width: 200px;
          height: 300px;
        }
      }
    }
  }
}
</style>