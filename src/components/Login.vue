<template>
    <div class="home">
        <top />
      <div class="bigbox">
        <div class="photo">
        </div>
        <div class="denglu">
            <form action="" class="login" method="get">
                <h1>账号登录</h1>
                <div> <input type="text" placeholder="用户名" class="form" id="logUN" v-model="username"></div>
                <div> <input type="password" placeholder="密码" class="form" id="logPW" v-model="password"></div>
                <div class="cbtn"><button @click="log" type="submit" calss="sbtn">登录</button></div>
            </form>
            <div class="change">
                <router-link to="/sign">没有账号，点击注册</router-link>
            </div>
        </div>

    </div>
    </div>
  </template>
  <script>
  import Top from '../components/Top.vue'
  export default {
    name: 'LoginIn',
    components:{
    Top
   },
    data(){
        return{
            username:'',
            password:'',
        }

    },
    methods:{
        log:function() {
            let logUN=this.username
            let logPW=this.password
            if(logUN === "" && logPW === "") {
                alert("亲！请输入用户名或密码")
                return
            }
            if(logUN in localStorage){
                let pass=localStorage[logUN];
                if(logPW!=pass){
                    alert('密码错误')
                    return
                }
                else{
                    alert('登录成功')
                    window.event.returnValue=false;
                    localStorage.setItem('uname',logUN);
                    this.$router.push('/Main');
                }
            }else{
                alert("用户不存在，请先注册！")
                return
            }
        }
    }
  }

  </script>
 <style scoped>
          .bigbox {
            position: absolute;
            width: 800px;
            height: 500px;
            background-color: #ede5e586;
            top: 50%;
            margin-top: -250px;
            left: 50%;
            margin-left: -400px;
            text-align: center;
            border-radius: 20px;
        }

        .photo {
            width: 300px;
            height: 500px;
            background-image: url(../image/8.1.jpg);
            background-position: 50% 20%;
            background-size: 160%;
            float: left;
            opacity: 0.8;
        }

        .denglu {
            display: inline-block;
            text-align: center;

        }

        .denglu h1 {
            color: rgb(84, 244, 180);
        }

        .form {
            width: 200px;
            line-height: 10px;
            margin: 30px;
            height: 30px;
            border-radius: 10px;
            border: 0;
        }

        .cbox {
            margin: 30px;
        }

        .cbtn {
            margin: 40px;
        }

        .cbtn button {
            display: block;
            width: 100%;
            color: white;
            font-size: 20px;
            margin: 0;
            padding: 14px 40px;
            border: 0;
            background-color: plum;
            border-radius: 25px;
            line-height: 1;
            cursor: pointer;
        }

        .change a {
            color: rgb(255, 255, 255);
            background-color: aqua;
            border: 0;
            padding: 14px 20px;
            border-radius: 25px;
            cursor: pointer;
            line-height: 55px;
            text-decoration:none;
        }
  </style>


