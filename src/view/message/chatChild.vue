<template>
  <div id="chatchild">
    <!-- <div class="photo">
      <img :src="imgsrc" alt />
    </div>
    <div class="content">
      <div>
          <span class="content_nickname">{{nickname}}</span>
          <span class="content_time">{{time}}</span>
      </div>
      <span class="content_word">{{word}}</span>
    </div> -->
  </div>
</template>

<script>
// export default {
//   name: "ChatChild",
//   props:{
//     'imgsrc':String,
//     'nickname':String,
//     'time':String,
//     'word':String
//   }
// };
</script>

<style lang="scss" scope>
#chatchild {
  width: 100%;
  height: 5rem;
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  .photo {
    flex: 1;
    height: 5rem;
    img{
        object-fit: cover;
        width: 4rem;
        height: 4rem;
        border-radius: 5px;
        display: block;
        margin: 0 auto;
        margin-top: 0.5rem;
        margin-left: 1rem;
    }
  }
  .content {
    flex: 4;
    height: 5rem;
    border-bottom: 0.5px solid rgb(240, 240, 240);
    padding-left: 0.5rem;
    padding-top: 0.5rem;
    box-sizing: border-box;
    div{
      .content_nickname{
        display: inline-block;
        font-size: 1.1rem;
        margin-top: 0.3rem;
      }
      .content_time{
        float: right;
        margin-right: 1rem;
        color: rgb(209, 206, 206);
        font-size: 0.8rem;
      }
    }
    .content_word{
      color: rgb(209, 206, 206);
      font-size: 0.8rem;
      display: block;
      margin-top: 0.5rem;
    }
  }
}
</style>
