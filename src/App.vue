<!-- <template>
  <div id="app">
  <div class="menu">
    <div class='top'>
        <div class="lefttop">
            <router-link to="/main">CLANNAD</router-link>
        </div>
        <div class="righttop">
            <ul class="topul">
                <li><router-link to="/main">首页</router-link></li>
                <li><router-link to="/photo">图片精选</router-link></li>
                <li><router-link to="/character">人物介绍</router-link></li>
                <li ><router-link to="/login" ref="text">{{message}}</router-link></li>
            </ul>
        </div>

    </div>
  </div>
<div class="content">
<router-view></router-view>
</div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return{
        message:'登录'
    }

  },


  methods:{
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

<style>
     * {
            margin: 0 auto;
            padding: 0 auto;
            text-decoration: none;
            list-style-type: none;
        }

        body {
            margin: 0;
            padding: 0;
            background-image: url(../src/image/main.jpg);
          background-repeat: no-repeat;
            background-attachment: fixed;
            background-size: 100%;
            
            background-position: 30% 20%;
        }

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
</style>
 -->
 <template>
    <div id="app">
<router-view></router-view>
    </div>
  </template>

  <style>
  * {
    padding: 0;
    margin: 0;
  }
  body {
    background-color: #f7fafc;
    color: #555;
  }
  </style>
<!--   <template>
    <div id="app">
        <top />
        <router-view></router-view>
    </div>
   </template>
   
   <script>
   import Top from '../src/components/Top.vue'
   export default {
     name: 'app',
     components: {
       Top
     }
   }
   </script>
   
   <style>
     * {
       margin: 0;
       padding: 0;
       box-sizing: border-box;
     }
     header {
       background: dimgrey;
       width: auto;
       height: 80px;
     }
   </style> -->
   