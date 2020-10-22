<template>
  <div class="div">
    <div class="div1">1</div>
    <div class="div2">2</div>
    <div class="div3">3</div>
    <div class="div4">4</div>
    <div class="div5">5</div>
    <div class="div6">6</div>
    <div class="div7">7</div>
    <div class="div8">8</div>
    <div class="div9">9</div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.div {
  width: 300px;
  height: 300px;
  border: 1px solid #bbb;
  display: grid;
  /* grid-template-columns: 33.3% 33.3% 33.3%;
  grid-template-rows: 33.3% 33.3% 33.3%; */
  /* grid-template-columns: repeat(3, 33.3%);
  grid-template-rows: repeat(3, 33.3%); */
  /* grid-template-columns: repeat(auto-fill, 70px); */
  /* grid-template-rows: 100px 1fr 3fr; */
  /* grid-template-rows: repeat(3, 1fr); */
  /* grid-template-columns: 100px 100px minmax(30px, 1fr);
  grid-template-rows: 50px auto 50px; */
  /* grid-row-gap: 10px;
  grid-column-gap: 10px; */
  /* grid-gap: 10px 20px; */
  /* gap: 10px 20px; */
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(3, 100px);
  /* grid-template-areas: 'a, b, c'
  'd, e, f'
  'g, h, i'; */
  grid-template-areas: 'a, a, a'
  'b, b, b'
  'c, c, c';
  grid-auto-flow: column;
}
.div>div {
  /* width: 100px;
  height: 100px; */
  color: #fff;
  font-size: 28px;
}
.div1 {
  background: red;
}
.div2 {
  background: green;
}
.div3 {
  background: blue;
}
.div4 {
  background: hotpink;
}
.div5 {
  background: pink;
}
.div6 {
  background: gray;
}
.div7 {
  background: blueviolet;
}
.div8 {
  background: brown;
}
.div9 {
  background: goldenrod;
}
</style>