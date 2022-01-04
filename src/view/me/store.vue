<template>
  <div class="store_page">
    <!--  绘制圆 -->
    <div class="face">
      <div class="eyes">
        <div class="eye">
          <div class="eyeball">
          </div>
        </div>
        <div class="eye">
          <div class="eyeball">
          </div>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
.store_page{
  .face{
    width: 100px;
    height: 100px;
    background: linear-gradient(rgb(132, 222, 247), rgb(14, 84, 175));
    // left: 50%;
    // top: 50%;
    // transform: translate(-50%,-50%);
    position: absolute;
    border-radius: 50%;
    .eyes {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-evenly;
      padding-top: 25%;
      .eye{
        width: 13%;
        height: 25%;
        background: linear-gradient(135deg, rgb(82, 83, 83), rgb(14, 15, 15));
        border-radius: 50%;
        .eyeball::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 15px;
          transform: translate(-50%, -50%);
          width: 20px;
          height: 30px;
          background-color: white;
          border-radius: 50%;
          box-shadow: 0px 0px 10px white;
        }
      }

    }
  }
}
</style>