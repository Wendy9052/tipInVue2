import Mock from 'mockjs'
import store from '../store';
const Random = Mock.Random;

// 校验login
// function checkLogin(params) {
//   let params_data = JSON.parse(params.body)
//   if(params.username == 'admin' && params.password == '123456') {
//     console.log("校验成功")
//     let datalist = [
//       {
//         msg: "success"
//       }
//     ]
//     return {data: datalist}
//   }else {
//     let datalist = [
//       {
//         msg: "fail",
//         data: params_data
//       }
//     ]
//     return {data: datalist}
//   }
// }

// 生成消息
function createMsg() {
  let datalist = []
  let newData = {
    "type": "other",
    "avatars_url": store.state.avatarsUrl,
    "msg": Random.title(5),
  }
  datalist.push(newData)
  return {
    data: datalist
  }
}

// 生成联系人列表
function relationList() {
  let datalist = []
  for(let i = 0; i < 20; i++) {
    let newData = {
      "id": Random.increment(),
      "name": Random.name(),
      "avatars": Random.dataImage('20x20', "Q"),
      "update_date": Random.date("yyyy-MM-dd"),
      "short_msg": Random.title(5),
    }
    datalist.push(newData)
  }
  return {
    data: datalist
  }
}

// 生成大区(area)、省份(region)、城市(city)
function getAreaRegion() {
  let datalist = []
  for(let i = 0; i < 30; i++) {
    let newData = {
      "id":Random.increment(),
      "region": Random.region(),
      "province": Random.province(),
      "city": Random.city(),
    }
    datalist.push(newData)
  }
  return {
    data: datalist
  }
}

// 获取动态信息
function getDaymaticMsg() {
  let datalist = []
  for(let i = 0; i < 10; i++) {
    let newData = {
      "id":Random.increment(),
      "nickname": Random.cname(), //随机生成中文名字
      "updateDate": Random.datetime(),//随机生成日期时间
      "imgageList": Random.image('200x100'), //图片
      "avatars": Random.image('20x20', '#ccc', '#FFF', 'png'),
      "content": Random.sentence(), //内容
    }
    datalist.push(newData)
  }
  return {
    data: datalist
  }
}


function getData(){
  let datalist= [];
  for (let i = 0; i < 10; i++) {
    let newData = {
      order: Random.natural(16),
      account:Random.name(),
      time:Random.now(),
      title: Random.csentence(4), //  Random.csentence( min, max )
      baoxiu: Random.csentence(2),
      product: Random.csentence(4,10),
      number:Random.natural(1, 100),
      price:Random.float(20, 500, 2,2),
      addrss:Random.csentence(15,30),
      name: Random.cname(),
      tel:Random.natural(11),
      state:Random.csentence(5),
      id:Random.natural(1,5),
      thumbnail_pic_s: Random.dataImage('300x250', 'mock的图片'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
      author_name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
      date: Random.date() + ' ' + Random.time() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
    }
    datalist.push(newData)
  }
  return {
    data: datalist
  }
}

function setMsg(){
  let datalist= [];
  for (let i = 0; i < 10; i++) {
    let newData = {
      order: Random.natural(16),
      account:Random.name(),
      date: Random.date() + ' ' + Random.time() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
    }
    datalist.push(newData)
  } 
  return {
    data: datalist
  }
}


const data = Mock.mock('/getDataList',getData);
const data1 = Mock.mock('/setMsg',setMsg)
const get_dynamic_msg = Mock.mock('/dynamic',getDaymaticMsg)
const area_region = Mock.mock('/area_region',getAreaRegion)
const relation_list = Mock.mock('/relation_list',relationList)
const create_msg = Mock.mock('/create_msg', createMsg)
const check_login = Mock.mock('/check_login','post',req => {
  const { username, password } = JSON.parse(req.body); //将传递进来的数据保存
  // for (let i = 0; i < userList.data.userinfo.length; i++) { 
    //判断userList中是否存在该用户并且用户密码是否正确
  if(username === store.state.registerMsg.username && password === store.state.registerMsg.password) {
    return {
      meta: {
        msg: 'success',
        status: 200
      },
      user: {
        username: username,
        password: password
      }
    }
  }else {
    return {
      meta: {
          msg: 'error',
          status: 201
      }
    }
  }
})

export default {
  data,
  data1,
  get_dynamic_msg,
  area_region,
  relation_list,
  create_msg,
  check_login
}
