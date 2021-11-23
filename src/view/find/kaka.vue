<template>
  <div class="kaka_page">
    <!-- 背景图 -->
    <div class="bg_part">
      <div class="avatars_box">
          <img :src="avatars_url" alt="">
      </div>
    </div>
    <!-- 动态列表 -->
    <div class="dynamic_list">
      <div class="dynamic_item">
        <div class="avatars_box">
          <img :src="avatars_url" alt="">
        </div>
        <div class="right_part">
          <div class="nickname_text">nickname</div>
          <div class="content_box">
            <div class="content_text">世界灿烂盛大，欢迎回家！</div>
            <div v-if="have_img" class="content_img">
              <van-grid :gutter="5" :column-num="2">
                <van-grid-item icon="photo-o" text="文字" />
                <van-grid-item icon="photo-o" text="文字" />
                <van-grid-item icon="photo-o" text="文字" />
                <van-grid-item icon="photo-o" text="文字" />
              </van-grid>
            </div>
          </div>
          <div class="update_box">
            <div class="update_text">更新时间</div>
            <div class="btn_box">
              <div :class="showBtn?'show_btn':'hide_btn'" class="btn">
                <div v-show="showBtn" class="like_box"><van-icon name="like-o" /><span>  赞</span></div>
                <div v-show="showBtn"><van-icon name="chat-o" /><span>  评论</span></div>
              </div>
              <div class="icon_box" @click="onShowBtn">
                <van-icon name="ellipsis" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      have_img: true, //如果有图片就显示图片
      avatars_url: "https://avatars.githubusercontent.com/u/71574611?s=40&v=4",
      showBtn: false, //if show like and store button
    }
  },
  methods: {
    onShowBtn() {
      this.showBtn = !this.showBtn
    }
  }
}
</script>

<style lang="scss" scoped>
.kaka_page{
  .dynamic_list{
    padding: 60px 15px;
    .dynamic_item{
      display: flex;
      .right_part{
        width: 100%;
      }
      .nickname_text{
        font-size: 16px;
        color: #ccc;
        margin-bottom: 2px;
      }
      .content_box{
        font-size: 14px;
        width: 100%;
        margin-bottom: 20px;
      }
      .update_box{
        width: 100%;
        color: #ccc;
        font-size: 10px;
        font-weight: lighter;
        display: flex;
        justify-content: space-between;

        .btn_box{
          display: flex;
          justify-content: space-between;
          align-items: center;
          // background: #ccc;
          .btn{
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            padding: 5px 0;
            // width: 100px;
            background: gray;
            color: #fff;
            font-weight: normal;
            border-radius: 3px;
            .like_box{
              margin-right: 10px;
            }
          }
        }
        
        .icon_box{
          padding: 2px 5px;
          background: #fafafa;
          margin-left: 10px;
        }
        .show_btn{
          width: 100px;
          transition: 0.3s;
          opacity:1;
        }
        .hide_btn {
          width: 0;
          transition: 0.3s;
          display: 0;
          opacity:0;
        }
      }
      .avatars_box{
        margin-right: 15px;
        img{
          border-radius: 5px;
        }
      }
    }
    
  }
  .bg_part{
    background: #ccc;
    height: 30vh;
    position: relative;
    .avatars_box{
      position: absolute;
      right: 20px;
      bottom: -20px;
      img{
        border-radius: 5px;
      }
    }
  }
}
</style>