<template>
    <div class="home">
        <top />
        <div class="bigbox">
        <div class="photo">
        </div>
        <div class="zhuce">
            <form action="" class="login">
                <h1>账号注册</h1>
                <div> <input type="text" placeholder="用户名" class="form" id="regUN" v-model="username"></div>
                <div> <input type="password" placeholder="密码" class="form" id="regPW" v-model="password"></div>
                <div> <input type="password" placeholder="确认密码" class="form" id="regPW1" v-model="password1"></div>
                <div class="cbtn"><button @click="check" calss="sbtn">注册</button></div>
            </form>
            <div class="change">
                <router-link to="/login">已有账号，点击登录</router-link>
            </div>
        </div>

    </div>
    </div>
  </template>
  

  <script>
  import Top from '../components/Top.vue'
  export default {
    
    name: 'SignIn',
    components:{
    Top
   },
    data(){
        return{
            username:'',
            password:'',
            password1:'',
        }
    },
    methods:{
        check:function() {
            let username = document.getElementById('regUN').value;
            let password = document.getElementById('regPW').value;
            let password1 = document.getElementById('regPW1').value;
            const reg = /^[A-z0-9-_]{6,10}$/
            if (username === "" && password === "") {
                alert("亲！请输入用户名或密码");
                return
            }
            if (!reg.test(username)) {
                alert('用户名不合法')
                return
            }
            if(!reg.test(password)){
                alert('密码不合法')
                return
            }
            if(password!=password1){
                alert('密码不一致')
                return
            }
            if (username in localStorage) {
                alert("哎呀！用户已经存在了，换一个试试吧");
                document.getElementById('regUN').value = "";
                document.getElementById('regPW').value = "";
                document.getElementById('regPW1').value = "";
                return
            }
                localStorage.setItem(username, password);
                alert("注册成功！！");
                this.$router.push('/Login');
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

        .zhuce {
            display: inline-block;
            text-align: center;

        }

        .zhuce h1 {
            color: rgb(84, 244, 180);
        }

        .form {
            width: 200px;
            line-height: 10px;
            margin: 20px;
            height: 30px;
            border-radius: 10px;
            border: 0;
        }

        .cbox {
            margin: 20px;
        }

        .cbtn {
            margin: 30px;
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

        /*         .change button {
            color: rgb(255, 255, 255);
            background-color: aqua;
            border: 0;
            padding: 14px 32px;
            border-radius: 25px;
            cursor: pointer;
        } */
        .change a {
            color: rgb(255, 255, 255);
            background-color: aqua;
            border: 0;
            padding: 14px 18px;
            border-radius: 25px;
            cursor: pointer;
            text-decoration: none;
        }
  </style>
 