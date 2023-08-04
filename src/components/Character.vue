<template>
    <div class="home">
        <top />
      <div class="bigbox">
        <div class="wrap">
            <div class="box">
                <div class="left"><img src="../image/c1.1.jpg"> </div>
                <div class="center"><span>
                    冈崎朋也
                    </span></div>
                <div class="right">
                    <p>冈崎朋也，《CLANNAD》及其衍生作品中的男主角。过去曾是个因家庭而丧失了生活在这个小镇上的希望，每天在光坂高校过着潦倒的生活，盼望终有一天能够离开所在的小镇的不良少年。在遇到古河渚后，生活发生了改变，并在与渚相处中渐渐懂得了“家族”的美好，同时也理解了一直深爱着自己的家人。</p>
                </div>
            </div>

            <div class="box">
                <div class="left">
                    <p>古河渚，《CLANNAD》中的女主角。小时候的一次意外后变得体弱多病，因此留级过一年。性格积极，有着复活演剧部的梦想，但由于缺乏自信，通常容易被周围的人们所忽视。在留级第一年后与男主角冈崎朋也邂逅，与朋也的相处令她得到了勇气，决心开始向着创立演剧部的梦想迈进。之后与朋也交往并结婚，生下女儿冈崎汐。</p>
                </div>
                <div class="center"><span>
                    古河渚
                    </span></div>
                <div class="right"><img src="../image/c2.2.jpg"></div>
            </div>

            <div class="box">
                <div class="left"><img src="../image/c3.2.jpg"></div>
                <div class="center"><span>
                    藤林杏
                    </span></div>
                <div class="right">
                    <p>《CLANNAD》学园篇中的女主角之一。紫瞳紫长直的一位傲娇美少女，是男主角冈崎朋也隔壁班的班长，也是藤林椋的双胞胎姐姐。和椋一样喜欢着朋也，却一直以椋为优先，在撮合朋也与椋的过程中，一直不敢面对自己真实的心意。</p>
                </div>
            </div>

            <div class="box">
                <div class="left">
                    <p>坂上智代，《CLANNAD》学园篇中的女主角之一，外传游戏作品《智代after～It's a wonderful
                    life～》的主人公。光坂高校学生会会长，男主角冈崎朋也的学妹。天然强气，具有领导才能和超强战斗力。曾经是打遍小镇无敌手的不良少女，因弟弟坂上鹰文而觉醒后于二年级时转至光坂高校，以加入学生会为目标而保护鹰文喜爱的樱花林，这却成为了她与朋也之间的鸿沟。</p>
                </div>
                <div class="center"><span>
                    坂上智代
                    </span></div>
                <div class="right"><img src="../image/c4.2.jpg"></div>
            </div>

            <div class="box">
                <div class="left"><img src="../image/c5.2.jpg"></div>
                <div class="center"><span>
                    一之濑琴美
                    </span></div>
                <div class="right">
                    <p>一之濑琴美，Key社制作的游戏《CLANNAD》学园篇中的女主角之一。总是独自在图书室里读书，仅靠自学便能在全国考试中名列前茅的天才少女，童年时与男主角冈崎朋也曾是玩伴。有着天然呆的性格，不擅长与人交流。喜欢演奏小提琴，但琴声具有毁灭性攻势，因此常常被吐槽。</p>
                </div>
            </div>
        </div>
    </div>
    </div>
  </template>
  
  <script>
  import Top from '../components/Top.vue'
  export default {
    name: 'CharacterIn',
    components:{
    Top
   },
  }
  </script>
  <style scoped>
          .top {
            height: 60px;
            background-color: rgb(72, 250, 170);
        }

        .lefttop {
            width: 30%;
            float: left;
        }

        a {
            text-decoration: none;
        }

        .lefttop a {
            color: white;
            font-size: 20px;
            letter-spacing: 2px;
            line-height: 60px;
            margin: 0 60px;
        }

        .righttop {
            width: 70%;
            display: inline;
            float: left;
        }

        .topul {
            margin: 0;
            padding: 0;
            list-style-type: none;
            overflow: hidden;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
        }

        .topul li {
            float: left;
        }

        .topul li a {
            display: block;
            color: aliceblue;
            text-decoration: none;
            line-height: 60px;
            font-size: 20px;
            margin: 0 25px;
            transition: all 0.5s ease-in-out;
        }

        .topul li a:hover {
            transform: scale(1.5, 1.5);
        }

        .wrap {
            width: 80%;
            position: relative;
            top: 100px;
            margin: 0 auto;
        }

        .wrap::after {
            content: '';
            position: absolute;
            top: -100px;
            left: 50%;
            width: 2px;
            z-index: -999;
            height: 1600px;
            background-color: rgba(255, 255, 255, .5);
        }

        .box {
            position: relative;
            width: 100%;
            height: 250px;
            margin-bottom: 50px;
            display: flex;
            justify-content: space-between;
        }

        .left,
        .right {
            position: relative;
            width: 40%;
            height: 250px;
            border-radius: 15px;
            text-align: center;
            color: rgb(90, 90, 90);
        }
        .left p,.right p{
            color: black;
            text-align: justify;
            line-height: 40px;
        }
        .left img {
            width: 400px;
            height: 250px;
            float: right;
            object-fit: cover;
            
        }

        .right img {
            width: 400px;
            height: 250px;
            float: left;
            object-fit: cover;
        }

        .box:nth-child(even) .left {
            background-color: rgba(255, 255, 255, .4);
            box-shadow: 0 0 10px rgba(0, 0, 0, .3);
        }

        .box:nth-child(odd) .right {
            background-color: rgba(255, 255, 255, .4);
            box-shadow: 0 0 10px rgba(0, 0, 0, .3);
        }

        .center {
            width: 15%;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .center span {
            width: 120px;
            border-radius: 10px;
            text-align: center;
            font: 900 24px '';
            line-height: 50px;
            background-color: #fff;
        }
  </style>