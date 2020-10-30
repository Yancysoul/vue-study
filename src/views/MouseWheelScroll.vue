<template>
  <div>
    <div class="small-box" id="box">
      <div class="big-box" id="bigBox">1234512314234132412341234123412341234123413241324123412341234123412341234</div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        navOffset: 0
      }
    },
    mounted() {
      this.navOffset -= 10
      console.log(this.navOffset);
      const DomBox = document.getElementById('box')
      const BigBox = document.getElementById('bigBox')
      console.log(DomBox.clientWidth);
      console.log(BigBox.offsetWidth);
      const smallWidth = DomBox.clientWidth
      const bigWidth = BigBox.offsetWidth
      DomBox.addEventListener("mousewheel", e => {
        console.log(e.wheelDelta);
        //计算鼠标滚轮滚动的距离
        let v = e.wheelDelta;
        // DomBox.scrollLeft += v;
        if (v < 0) {
          this.navOffset -= 60
          if (smallWidth - this.navOffset > bigWidth) {
            this.navOffset = -(bigWidth - smallWidth)
          }
        } else {
          this.navOffset += 60
          if (this.navOffset > 0) {
            this.navOffset = 0
          }
        }
        console.log(this.navOffset);
        BigBox.style.transform = `translateX(${this.navOffset}px)`
        //阻止浏览器默认方法
        e.preventDefault();
      })
    }
  }
</script>

<style lang="scss" scoped>
.small-box {
  width: 400px;
  height: 300px;
  border: 1px solid #888;
  overflow: hidden;
  .big-box {
    width: 800px;
    height: 300px;
    background-color: #f5f5f5;
  }
}
</style>