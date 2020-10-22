<template>
  <div>
    <div class="content">
      <div class="arrow left" @click="handleLeftClick">左箭头</div>
      <div class="box">
        <ul>
          <li
            v-for="(item, index) in lists"
            :key="index"
            :class="setClass(index)"
            @click="itemClick(index)"
          >
            <img :src="item.src" alt="" />
          </li>
        </ul>
      </div>
      <div class="arrow right" @click="handleRightClick">右箭头</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RollDemo2",
  data() {
    return {
      currentIndex: 0,
      lists: [
        {
          src:
            "https://img.mukewang.com/szimg/5ac2dfe100014a9005400300-360-202.jpg",
        },
        {
          src:
            "https://img.mukewang.com/szimg/5c62a4dc0812e84106000338-360-202.jpg",
        },
        {
          src:
            "https://img.mukewang.com/szimg/5c7c82630820acf806000338-360-202.jpg",
        },
        {
          src:
            "https://img.mukewang.com/szimg/5c62a4dc0812e84106000338-360-202.jpg"
        }
      ],
    };
  },
  computed: {},
  methods: {
    setClass(i) {
      let next =
        this.currentIndex === this.lists.length - 1 ? 0 : this.currentIndex + 1;
      let prev =
        this.currentIndex === 0 ? this.lists.length - 1 : this.currentIndex - 1;
      switch (i) {
        case this.currentIndex:
          return "active";
        case next:
          return "next";
        case prev:
          return "prev";
        default:
          return "";
      }
    },
    handleLeftClick() {
      this.currentIndex =
        this.currentIndex === 0 ? this.lists.length - 1 : this.currentIndex - 1;
    },
    handleRightClick() {
      this.currentIndex = ++this.currentIndex % this.lists.length;
    },
  },
};
</script>

<style lang="scss" scoped>
// .content {
//   width: 1200px;
//   margin: 100px auto;
//   height: 200px;
//   display: flex;
//   justify-content: space-between;
//   .arrow {
//     width: 50px;
//     background: rgba(0, 0, 0, 0.6);
//     flex-shrink: 0;
//     color: #fff;
//     display: flex;
//     align-items: center;
//     cursor: pointer;
//   }
//   .box {
//     height: 100%;
//     width: 100%;
//     ul {
//       position: relative;
//       top: 0;
//       padding: 0;
//       margin: 0;
//       display: flex;
//       transition: all 0.3s;
//       transform-style: preserve-3d;
//       perspective: 1800px;
//       position: relative;
//       height: 100%;
//       width: 100%;
//       li {
//         position: absolute;
//         left: 0;
//         top: 0;
//         list-style: none;
//         transition: 500ms all ease-in-out;
//         transform: translate3d(100%, 0, 0);
//         z-index: 1;
//         &.active {
//           transform: translate3d(100%, 0, -80px) translateZ(-120px);
//           z-index: 16;
//         }
//         &.prev {
//           transform: translate3d(0%, 0, -100px) rotateY(30deg);
//           z-index: 17;
//         }
//         &.next {
//           transform: translate3d(200%, 0, -100px) rotateY(-30deg);
//           z-index: 15;
//         }
//       }
//     }
//   }
// }
.content {
  width: 1200px;
  margin: 100px auto;
  height: 200px;
  display: flex;
  justify-content: space-between;
}
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
  height: 100%;
  width: 100%;
}
ul {
  position: relative;
  top: 0;
  padding: 0;
  margin: 0;
  display: flex;
  transition: all 0.3s;
  transform-style: preserve-3d;
  perspective: 1800px;
  position: relative;
  height: 100%;
  width: 100%;
}
li {
  position: absolute;
  left: 0;
  top: 0;
  list-style: none;
  transition: 500ms all ease-in-out;
  transform: translate3d(100%, 0, -400px);
  z-index: 1;
}
li.active {
  transform: translate3d(100%, 0, -120px) translateZ(-80px);
  z-index: 16;
}
li.prev {
  transform: translate3d(0%, 0, -100px) rotateY(30deg);
  z-index: 17;
}
li.next {
  transform: translate3d(200%, 0, -100px) rotateY(-30deg);
  z-index: 15;
}
</style>