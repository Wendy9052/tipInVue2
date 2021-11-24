import Mock from 'mockjs'
const Random = Mock.Random;

// 生成大区(area)、省份(region)
function getAreaRegion() {
  let datalist = []
  for(let i = 0; i < 30; i++) {
    let newData = {
      // "area":Random.area(),
      // "area": Random.area(),
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
      // id|+1: 1,
      // order: Random.natural(16),
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

export default {
  data,
  data1,
  get_dynamic_msg,
  area_region,
}
