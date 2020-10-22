<template>
  <div class="images">
    <button @click="show = !show">show or hide</button>
    <transition name="show">
      <img v-show="show" :src="require('@/assets/images/1.jpg')" alt srcset />
    </transition>
    <button @click="changeList">change list</button>
    <br />
    <div class="box">
      <transition-group name="brea">
        <span v-for="(val, index) in lists" :key="val">
          <span v-if="index > -1">{{ val }} /</span>
        </span>
      </transition-group>
      <br>
      <button @click="addTodo">添加一个todo</button>
      <button @click="delTodo(2)">删除一个todo</button>
      <transition-group name="todo" tag="p">
        <div v-for="(item, index) in todoList" :key="item" @click="delTodo(index)">{{ item }}</div>
      </transition-group>
    </div>
    <div id="list-demo">
      <button v-on:click="add">Add</button>
      <button v-on:click="remove">Remove</button>
      <transition-group name="list" tag="p">
        <span v-for="item in items" v-bind:key="item" class="list-item">{{ item }}</span>
      </transition-group>
    </div>
    <div class="garden">
        <div class="flower" @click="garClick">
          <transition name="gar" @before-enter="garBeforeEnter" @enter="garEnter" @after-enter="garAfterEnter" :css="false">
            <div class="wer" v-if="garShow"></div>
          </transition>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
      lists: ["首页", "基础管理", "页面配置"],
      todoList: [
        '今天星期一',
        '今天星期5',
        '今天星期4',
        '今天星期3',
        '今天星期2',
        '今天星期1',
      ],
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      nextNum: 10,
      garShow: false
    };
  },
  methods: {
    showHide() {},
    changeList() {
      if (this.lists[2] === "页面配置") {
        this.$set(this.lists, 2, "角色管理");
      } else {
        this.$set(this.lists, 2, "页面配置");
      }
      // this.lists.push('nihao ')
    },
    addTodo() {
      this.todoList.push('今天星期' + parseInt(Math.random() * 100));
    },
    delTodo(index) {
      this.todoList.splice(index, 1);
    },
    randomIndex: function () {
      return Math.floor(Math.random() * this.items.length);
    },
    add: function () {
      this.items.splice(this.randomIndex(), 0, this.nextNum++);
    },
    remove: function () {
      this.items.splice(this.randomIndex(), 1);
    },
    garClick() {
      this.garShow = !this.garShow
    },
    garBeforeEnter(el) {
      el.style.left = 0
      el.style.top = 0
      console.log(el)
    },
    garEnter(el, done) {
      console.log(el)
      el.offsetTop
      el.style.left = '400px'
      el.style.top = '-200px'
      el.style.position = 'absolute'
      el.style.transition = 'all 3s'
      done()
    },
    garAfterEnter(el) {
      console.log(el)
      el.style.position = 'absolute'
      el.style.left = '400px'
      el.style.top = '-200px'
    }
  },
};
</script>

<style scoped lang="scss">
.images {
  width: 200px;
  height: 200px;
  img {
    width: 100%;
  }
  /* 出现时候的过渡效果 */
  /* 最开始的转态 */
  // .v-enter {
  //   opacity: 0.5;
  //   width: 300px;
  // }
  // /* 整个执行过程 */
  // .v-enter-active {
  //   transition: all 1s ease;
  // }
  // /* 最后的样子 */
  // .v-enter-to {
  //   width: 200px;
  //   opacity: 1;
  // }
  // /* 消失的时候的过渡效果 */
  // // .v-leave {
  // //   width: 200px;
  // //   opacity: 1;
  // // }
  // /* 整个过程中 */
  // .v-leave-active {
  //   transition: all 1s ease;
  // }
  // /* 最后的样子 */
  // .v-leave-to {
  //   opacity: 0.5;
  //   width: 300px;
  // }
  .show-enter-active {
    animation: aniae 2s ease;
  }
  .show-leave-active {
    animation: anial 2s ease;
  }
  @keyframes aniae {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes anial {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 0;
    }
  }
  .box {
    width: 500px;
  }

  .brea-enter-active,
  .brea-leave-active {
    transition: all 0.5s;
  }

  .brea-enter {
    opacity: 0;
    transform: translateX(40px);
  }
  .brea-leave-to {
    opacity: 0;
    transform: translateX(-20px);
  }

  // .brea-move {
  //   transition: all 0.5s;
  // }

  .brea-leave-active {
    position: absolute;
  }

  .todo-enter-active,
  .todo-leave-active {
    transition: all 1s;
  }

  // .todo-enter {
  //   // opacity: 0;
  //   // transform: translateX(20px);
  // }
  // // .todo-leave-active {
  // //   transform: translateX(0px);
  // // }
  .todo-enter,
  .todo-leave-to {
    opacity: 0;
    transform: translateX(20px);
  }
  .list-item {
    display: inline-block;
    margin-right: 10px;
  }
  .list-enter-active,
  .list-leave-active {
    transition: all 1s ease;
  }
  .list-enter,
  .list-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }
  .garden {
    .flower {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background-color: red;
      position: relative;
      .wer {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background-color: blue;
      }
    }
  }
  // .gar-enter {
  //   left: 0;
  //   top: 0;
  // }
  // .gar-enter-active {
  //   position: absolute;
  //   transition: all 3s;
  // }
  // .gar-enter-to {
  //   left: 400px;
  //   top: -200px;
  // }
  // .gar-leave-active {
  //   transition: all 3s;
  //   position: absolute;
  // }
  // .gar-leave-to {
  //   right: 10px;
  //   top: 200px;
  // }
}
</style>