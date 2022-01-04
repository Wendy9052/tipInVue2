<template>
  <div class="card_box">
    <div class="fold_text">Astro Boy</div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.card_box{
  // margin: 0;
  // padding: 0;
  .fold_text{
      text-transform: uppercase;/* 转成大写 */
      width: 1000px;
      margin: 200px auto;
      font-size: 100px;
      color: #fd79a8;
      letter-spacing: 5px;/* 设置字间距 */
      transition: all 1s;
      -webkit-text-stroke: 2px #fd79a8;/* 设置字体边框 ie浏览器不支持*/
      transform: rotate(-5deg);/* 旋转一定角度 */
  }
  .fold_text::before {
      content: 'Astro Boy';/* 阿童木 */
      position: absolute;
      top: 0;
      left: 0;
      color: white;
      clip-path: inset(0 0 50% 0);
      transform: rotate(0deg) skew(0deg);
      transition: all 1s;
  }
  .fold_text:hover::before {
      transform: rotateX(-30deg) skew(-30deg);
      color: (243,243,243);
      text-shadow: 0 0 2px black;
  }
  .fold_text::after {
      content: 'Astro Boy';
      position: absolute;
      top: 0;
      left: 0;
      color: white;
      clip-path: inset(50% 0 0 0);/* 裁剪半个矩形区域 */
      transform: rotate(0deg) skew(0deg);
      transition: all 1s;
  }
  .fold_text:hover::after {
      transform: rotateX(40deg) skew(20deg);
      color: (243,243,243);
      text-shadow: 0 0 2px black;
  }
}
</style>