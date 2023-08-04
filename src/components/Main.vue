<template>
    <div class="home">
        <top />
<div class="container">
    <div class="lunbo" @mouseenter="clear" @mouseleave="run">
      <div class="images">
        <img :src="require(`../image/${dataList[currentIndex]}.jpg`)" alt="">
        <div class="right turn" @click="next()">
        <i class="el-icon-arrow-right">>></i>
      </div>
      <div class="left turn" @click="up()">
        <i class="el-icon-arrow-left">&lt;&lt;</i>
      </div>

      </div>

    </div>
  </div>
<div class="jianjie">
<p class="juqing">剧情简介</p>
<div class="text">
    <div class="img6">
        <img src="../image/6.jpg">
    </div>
    <div class="transbox">
        <p>电视动画《CLANNAD》是由京都动画根据Key社同名游戏改编的TV版动画作品。动画于2007年10月4日起开始播放，全23话，其中TV未放送的特别篇收录在BD中。动画以游戏原作的古河渚线为主要剧情，期间穿插了学园篇其他女主角的相关剧情。
            电视动画第2期《CLANNAD～AFTER STORY～》于2008年10月2日开始播放。
            在某个小镇，主角冈崎朋也因家庭因素成为不良少年，一直与春原阳平为伍，在光坂高校过着潦倒的生活，但希望终有一天能够离开所在的小镇。某一天，他在学校坡道前发现了一个止步不前的女孩，在朋也认识了这个名为“古河渚”的女孩后，他的生活开始有了重大的变化。
            第一季为主角和女主角们之间所发生的事件，第二季After story为主角在中学毕业之后，与渚共同生活的日子，其中还穿插了“幻想世界”，《CLANNAD》就是由这三个要素所组成的故事。
        </p>
    </div>
    <div class="img6">
        <img src="../image/7.jpg">
    </div>
    <div class="transbox">
        <p>《CLANNAD剧场版》是由日本东映动画根据Key社同名游戏而改编制作的动画电影，于2007年9月15日在日本上映。相比于京都动画制作的TV版，剧情与人设方面也有所不同。
            和父亲之间发生问题的不良少年，刚崎朋也，在前往学校的盛满樱花的坡道上邂逅了一名少女。少女名叫古河渚。 渚对朋也说「我无论如何也登不上这个坡道」，「希望跟在你后面登上这坡道」。
            朋也向她提议，既然无法登上坡道，就争取在学校发现乐趣，只要发现乐趣，就一定可以登上。受到这番话的感化，渚开始努力重建被废部的演剧部。 然后，不知不觉朋也开始和渚共同行动，渐渐被渚努力的态度所吸引……
        </p>
    </div>
</div>

</div>
<div class="bigbox">
<div class="comtext">
    <img src="../image/c2.jpg" alt="">
    <textarea name="" id="commBox" cols="70" rows="5" placeholder="请输入评论..." v-model="inputvalue"
        @keyup.enter="add"></textarea>
    <input type="button" name="" id="" value="评  论" class="combtn" @click="add">
</div>

<div class="comment">
    <ul class="com">
        <li v-for="(list,index) in list" :key="index"><img src="../image/c2.jpg" alt=""> <span>{{message}}</span>
            <p>{{list}}</p>
            <button class="clear" @click="remove(index)">删除</button>
        </li>
    </ul>
</div>
</div>
    </div>
</template>

<script>

import Top from '../components/Top.vue'

export default {

   name: "MainIN",
   components:{
    Top
   },
   data() {
            return{
                list: ["《CL》的动画是由京都动画也就是京阿尼制作的", "clannad感动人的地方在我看来并不是那些看起来很“宏大” “雄伟” 的东西。 反而，是一些细节的感动"],
                inputvalue:'',
                dataList: [1,2,3,4,5
      ],
      currentIndex: 0, // 默认显示图片
      timer: null,
      message:''
                }
            },
            created () {
    this.run()
  },
            methods: {
                add: function () {
                    this.list.push(this.inputvalue)
                    this.inputvalue=''
                },
                remove: function (index) {
                    this.list.splice(index, 1)
                },
                setInterval:function(){

                },
                gotoPage (index) {
      this.currentIndex = index
    },
    next () {
      if (this.currentIndex === this.dataList.length - 1) {
        this.currentIndex = 0
      } else {
        this.currentIndex++
      }
    },
    up () {
      if (this.currentIndex === 0) {
        this.currentIndex = this.dataList.length - 1
      } else {
        this.currentIndex--
      }
    },
    clear () {
      clearInterval(this.timer)
    },
    // 定时器
    run () {
      this.timer = setInterval(() => {
        this.next()
      }, 2000)
    },
    ren () {
          const us = localStorage.getItem('uname')
          console.log(us);
      if (us) {
               this.message=us
              } 
     }
            },
                mounted:function () {  
              this.ren();
          }
       

}

        
</script>
<style scoped>
        * {
            margin: 0 auto;
            padding: 0 auto;
            text-decoration: none;
            list-style-type: none;
        }
        body {
            margin: 0;
            padding: 0;
            background-size: 100%;
            background-position: 30% 20%;
        }
    /*     .photo {
            width: 1000px;
            height: 550px;
            margin: 20px auto;
            overflow: hidden;
            position: relative;
        }

        .images {
            width: 5000px;
            height: 550px;
            padding: 0;
        }

        .images img {
            width: 1200px;
            height: 550px;
        }

        .images li {
            float: left;
        }

        .leftbtn {
            background-color: #666;
            width: 30px;
            height: 40px;
            color: white;
            text-align: center;
            line-height: 40px;
            position: absolute;
            left: 5px;
            top: 45%;
            cursor: pointer;
            opacity: 0.3;
        }

        .leftbtn:hover,
        .rightbtn:hover {
            opacity: 0.7;
        }

        .rightbtn {
            background-color: #666;
            width: 30px;
            height: 40px;
            color: white;
            text-align: center;
            line-height: 40px;
            position: absolute;
            right: 5px;
            top: 45%;
            cursor: pointer;
            opacity: 0.3;
        } */
        .container{
            margin: 40px;
        }
        .images {
            width: 1000px;
            height: 550px;
            padding: 0;
            position: relative;
            
            
        }

        .images img {
            width: 1000px;
            height: 550px;
        }


.turn {
  width: 20px;
  height: 20px;
  line-height: 20px;
  border-radius: 5px;
  cursor: pointer;
  background-color: #d0d0d073;
}
.left:hover,
        .right:hover {
            opacity: 0.7;
        }
.right {
/*   position: absolute;
  top: 100px;
  right: 0; */
  background-color: #666;
            width: 30px;
            height: 40px;
            color: white;
            text-align: center;
            line-height: 40px;
            position: absolute;
            right: 5px;
            top: 45%;
            cursor: pointer;
            opacity: 0.3;

}
.left {
/*   position: absolute;
  top: 100px;
  left: 0; */
  background-color: #666;
            width: 30px;
            height: 40px;
            color: white;
            text-align: center;
            line-height: 40px;
            position: absolute;
            left: 5px;
            top: 45%;
            cursor: pointer;
            opacity: 0.3;
}
.current {
  color: rgb(21, 20, 20);
}
        .jianjie {
            margin-top: 60px;
            margin-bottom: 60px;
        }

        .juqing {
            font-size: 30px;
            text-align: center;
            color: rgb(90, 237, 173);
            padding: 20px;
            border: 2px solid rgb(255, 255, 255);
            width: 150px;
            margin: 0 auto;
        }

        .text {
            margin: 60px 30px 0 30px;
            border: 2px solid rgb(122, 221, 248);
        }

        div.transbox {
            margin: 5px 5px;
            width: 1000px;
            height: 220px;
            background-color: #ffffff;
            opacity: 0.6;
            float: right;
        }

        .transbox p {
            text-align: justify;
            line-height: 35px;
        }

        div.img6 {
            display: inline-block;
            margin: 5px 5px;
        }

        .text .img6 img {
            width: 350px;
            height: 220px;
            padding: 0;
        }

        .bigbox {
            margin-left: 30px;
            margin-right: 30px;
            background-color: #dedede99;
        }

        .comment ul li {
            list-style: none;
            margin-top: 10px;
            width: 582px;
            height: 150px;
            position: relative;
            border: 1px solid #f2f2f2;
            padding: 0 10px;
        }

        .comtext img {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            position: absolute;
            left: -100px;
            top: 62px;
        }

        .comment li a {
            float: right;
            text-decoration: none;
            color: #777888;
            font-size: 14px;
            margin-top: 30px;
        }

        .comment li img {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            margin-top: 10px;
        }

        li span {
            color: #777888;
            margin-left: 45px;
            margin-top: -35px;
            display: block;
        }

        .comment li p {
            color: black;
            position: absolute;
            top: 70px;
            left: 55px;
            font-size: 16px;
            font-family: SimSun;
        }

        .time {
            color: 777888;
            font-size: 14px;
            margin-top: -17px;
            margin-left: 100px;
        }

        .comtext {
            width: 400px;
            height: 300px;
            /* border: 1px solid black; */
            text-align: center;
            position: relative;
            /* display: none; */
        }

        #commBox {
            position: absolute;
            left: -44px;
            margin: 60px auto;
            border-radius: 5px;
            resize: none;
            outline: none;
            font-size: 16px;
        }

        .combtn {
            position: absolute;
            right: -135px;
            top: 150px;
            background-color: #0090CE;
            font-size: 16px;
            color: #fff;
            border-radius: 5px;
            margin-top: 20px;
            text-align: center;
            cursor: pointer;
            outline: none;
        }

        .clear {
            position: absolute;
            right: 5px;
            top: 2px;
            cursor: pointer;
        }
</style>