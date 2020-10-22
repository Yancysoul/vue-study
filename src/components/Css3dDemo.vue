<template>
  <div class="slider-container" ref='slider'
       :style="sliderStyle"
       @mouseover="pause()"
       @mouseout="play()">
    <div class="slider-content" :class="mask ? 'mask' : ''">
      <div class="slider" v-for="(item, index) in list"
        :key="index"
        :class="setClass(index)"
        @click="onClick(index)">
        <img :src="item.src" alt="">
      </div>
      <i v-show="arrow" class="iconfont icon-left" @click="prev()"></i>
      <i v-show="arrow" class="iconfont icon-right" @click="next()"></i>
    </div>
    <div class="dots" v-if="dots">
      <span v-for="(item, index) in list" :key="index"
        :style="setActiveDot(index)"></span>
    </div>
  </div>
</template>

<script>
  // import '../assets/icon.css'
  export default {
    data () {
      return {
        currentIndex: 0,
        sliderDomList: [],
        timer: null
      }
    },
    props: {
      list: {
        type: Array,
        default () {
          return [
            {
              src: 'https://img.mukewang.com/szimg/5ac2dfe100014a9005400300-360-202.jpg'
            }, {
              src: 'https://img.mukewang.com/szimg/5c62a4dc0812e84106000338-360-202.jpg'
            }, {
              src: 'https://img.mukewang.com/szimg/5c7c82630820acf806000338-360-202.jpg'
            }, {
              src: 'https://img.mukewang.com/szimg/5ac2dfe100014a9005400300-360-202.jpg'
            }, {
              src: 'https://img.mukewang.com/szimg/5c62a4dc0812e84106000338-360-202.jpg'
            }, {
              src: 'https://img.mukewang.com/szimg/5c7c82630820acf806000338-360-202.jpg'
            }
          ]
        }
      },
      width: {
        type: Number,
        default: 1200
      },
      height: {
        type: Number,
        default: 200
      },
      imgType: {
        type: String,
        default: 'percentage'
      },
      autoPlay: {
        type: Boolean,
        default: true
      },
      mask: {
        type: Boolean,
        default: true
      },
      interval: {
        type: Number,
        default: 4000
      },
      dots: {
        type: Boolean,
        default: true
      },
      arrow: {
        type: Boolean,
        default: true
      },
      color: {
        type: String,
        default: 'rgb(248, 85, 85)'
      }
    },
    computed: {
      sliderStyle () {
        return {
          width: this.width ? this.width + 'px' : '100%',
          height: this.height ? this.height + 'px' : '100%',
          perspective: this.width + 'px',
          backgroundSize: this.imgType == 'percentage' ? '100% 100%' : this.imgType
        }
      }
    },
    mounted () {
      this.sliderDomList =  this.$refs.slider.querySelectorAll('div.slider');
      this.play();
    },
    methods: {
      setClass (i) {
        console.log('---------------------');
        let next = this.currentIndex === (this.list.length - 1) ? 0 : this.currentIndex + 1;
        let prev = this.currentIndex === 0 ? this.list.length - 1 : this.currentIndex - 1;
        switch (i) {
          case this.currentIndex:
            return 'active';
          case next:
            return 'next';
          case prev:
            return 'prev';
          default:
            return '';
        }
      },
      setBGImg (src) {
        return {
          backgroundImage: `url(${src})`
        }
      },
      setActiveDot (index) {
        return index === this.currentIndex ? {
          backgroundColor: this.color
        } : {
          backgroundColor: '#ccc'
        }
      },
      play () {
        this.pause();
        if (this.autoPlay) {
          this.timer = setInterval(()=>{
            this.next();
          }, this.interval)
        }
      },
      pause () {
        clearInterval(this.timer);
      },
      next () {
        console.log('11111');
        this.currentIndex = ++this.currentIndex % this.list.length;
      },
      prev () {
        this.currentIndex = this.currentIndex === 0 ? this.list.length - 1 : this.currentIndex - 1;
      },
      onClick (i) {
        console.log(i);
        if (i === this.currentIndex){
          this.$emit('sliderClick', i);
        } else {
          let currentClickClassName = this.sliderDomList[i].className.split(' ')[1]
          console.log(currentClickClassName)
          if (currentClickClassName === 'next') {
            this.next()
          } else {
            this.prev()
          }
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
.slider-content {
  position: relative;
  width: 100%;
  height: calc(100% - 20px);
  left: 0%;
  top: 0%;
  margin: 0px;
  padding: 0px;
  background-size: inherit;
  .slider {
    position: absolute;
    margin: 0;
    padding: 0;
    top: 0;
    left: 50%;
    width: 65%;
    height: 100%;
    transition: 500ms all ease-in-out;
    background-color: #fff;
    background-repeat: no-repeat;
    background-position: center;
    background-size: inherit;
    transform: translate3d(-50%,0,-80px);
    z-index: 1;
    &:before {
      position: absolute;
      content: "";
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-color: rgba(0, 0, 0, 0);
      transition-delay: 100ms!important;
      transition: all 500ms;
      cursor: pointer;
    }
    &.active {
      transform: translate3d(-50%, 0, 0);
      z-index: 20;
    }
    &.prev {
      transform: translate3d(-75%, 0, -100px);
      z-index: 19;
    }
    &.next {
      transform: translate3d(-25%, 0, -100px);
      z-index: 18;
    }
  }
  i {
    width: 17.5%;
    display: none;
    position: absolute;
    top: 40%;
    font-size: 22px;
    color: rgba(255, 255, 255, 0.5);
    text-shadow: 0 0 24px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    z-index: 21;
    &:first-child {
      left: 0;
    }
    &:last-child {
      right: 0;
    }
  }
  &:hover {
    i {
      color: rgba(255, 255, 255, 0.8);
      display: block;
    }
  }
  &.mask {
    .slider {
      &.prev, &.next {
        &:before {
          background-color: rgba(0, 0, 0, 0.50)；
        }
      }
    }
  }
}
</style>