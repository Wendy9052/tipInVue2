<template>
  <div class="kaka_page">
    <div v-if="showList" class="list_box">
      <!-- 背景图 -->
      <div class="bg_part">
        <div class="camera_box" @click="toPublish()">
          <van-icon name="photograph" size="30" color="#fff"/>
        </div>
        <div class="avatars_box">
            <img :src="avatars_url" alt="">
        </div>
      </div>
      <!-- 动态列表 -->
      <div class="dynamic_list">
        <div class="dynamic_item" v-for="(item) in dynamicList" :key="item.id">
          <div class="avatars_box">
            <img :src="item.avatars" alt="">
          </div>
          <div class="right_part">
            <div class="nickname_text">{{item.nickname}}</div>
            <div class="content_box">
              <div class="content_text">{{item.content}}</div>
              <div v-if="have_img" class="content_img">
                <van-grid :gutter="5" :column-num="2">
                  <van-grid-item>
                    <template #default>
                      <div class="">
                        <img :src="item.imgageList" alt="">
                      </div>  
                    </template>
                  </van-grid-item>
                </van-grid>
              </div>
            </div>
            <div class="update_box">
              <div class="update_text">{{item.updateDate}}</div>
              <div class="btn_box">
                <div :class="(showBtn && (item.id == click_index))?'show_btn':'hide_btn'" class="btn">
                  <div v-show="(showBtn && (item.id == click_index))"><van-icon name="like-o" /><span>  赞</span></div>
                  <div v-show="(showBtn && (item.id == click_index))"><van-icon name="chat-o" /><span>  评论</span></div>
                </div>
                <div class="icon_box" @click="onShowBtn(item.id)">
                  <van-icon name="ellipsis" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 动态发表页 -->
    <div :class="showList?'right_dynamic':'dynamic_to_left'">
      <div>
        <van-nav-bar
          title="发表文字"
          left-arrow
          @click-left="onClickBack"
          @click-right="onClickPublish"
        >
        <template #right>
          <van-button type="default" size="mini" class="publis_btn">发表</van-button>
        </template>
        </van-nav-bar>
        <van-field
          v-model="message"
          rows="5"
          autosize
          type="textarea"
          maxlength="250"
          placeholder="这一刻的想法..."
          show-word-limit
          class="publish_text"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { DynamicMsg } from '@/api/api'
export default {
  data() {
    return {
      have_img: true, //如果有图片就显示图片
      avatars_url: "https://avatars.githubusercontent.com/u/71574611?s=40&v=4",
      showBtn: false, //if show like and store button
      dynamicList: [],
      click_index: null,
      showList: true,
      message: "",
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    // 发表动态
    onClickPublish() {
      console.log("发表动态")
      this.showList = true
    },
    // 返回动态列表
    onClickBack() {
      this.showList = true
    },
    toPublish() {
      this.showList = false
    },
    async init() {
      await DynamicMsg().then(res => {
        this.dynamicList = res.data.data
        console.log("动态信息",this.dynamicList)
      }).then(err => {
        console.log("err",err)
      })
    },
    onShowBtn(id) {
      this.click_index = id
      this.showBtn = !this.showBtn
    }
  }
}
</script>

<style lang="scss" scoped>
.kaka_page{
  position: relative;
  .publish_text{
    width: 100vw;
    margin-top: 10px;
  }
  .publis_btn{
    color: #ccc;
  }
  .right_dynamic{
    position: absolute;
    left: 100vw;
    transition: 0.3s;
  }
  .dynamic_to_left{
    position: absolute;
    left: 0;
    transition: .3s;
  }
  .list_box{
    // position: relative;
    .dynamic_list{
      padding: 60px 15px;
      .dynamic_item{
        display: flex;
        margin-bottom: 20px;
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
          align-items: center;

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
            height: 20px;
            opacity:1;
          }
          .hide_btn {
            width: 0;
            transition: 0.3s;
            display: 0;
            opacity:0;
            height: 20px;
            background: #fff;
          }
        }
        .avatars_box{
          margin-right: 15px;
          img{
            width: 30px;
            height: 30px;
            border-radius: 5px;
          }
        }
      }
      
    }
    .bg_part{
      background: #ccc;
      height: 30vh;
      position: relative;
      .camera_box{
        position: absolute;
        right: 5px;
        top: 5px;
      }
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
  
}
</style>