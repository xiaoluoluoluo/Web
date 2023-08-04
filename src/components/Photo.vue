<template>
  <div class="home">
    <top />
    <div class="search">
    <input v-model="keyword" type="text" class="searchInput" placeholder="输入图片标签">
      <button @click="btn" class="button">搜索</button>
    </div>
    <div class="bigbox"  v-for="(row,index) in slicelist(list,5)" :key="index" >
      <div class="box" v-for="(item,i) in row" :key="i" v-show="item.isshow">
                    <img v-bind:src="item.src" alt=""/>
                    <span>{{item.text}}</span>
                </div>
            </div>
  </div>
</template>

<script>
import Top from '../components/Top.vue'
export default {
  name: 'PhotoIn',
  components:{
    Top
   },
   data(){
    return{
      keyword:'',

      list:[
        {
        src:require('../assets/9.jpg'),
        text:"clannad1" ,
        isshow:true,
      },
      {
        src:require('../image/10.jpg'),
        text:"clannad1" ,
        isshow:true,
      },
      {
        src:require('../image/11.jpg'),
        text:"clannad1" ,
        isshow:true,
      },
      {
        src:require('../image/12.jpg'),
        text:"clannad1" ,
        isshow:true,
      },
      {
        src:require('../image/13.jpg'),
        text:"clannad1" ,
        isshow:true,
      },

      {
        src:require('../image/14.jpg'),
        text:"clannad2" ,
        isshow:true,
      },
    {
        src:require('../image/15.jpg'),
        text:"clannad2" ,
        isshow:true,
      }, 
      {
        src:require('../image/16.jpg'),
        text:"clannad2" ,
        isshow:true,
      },       
      {
        src:require('../image/17.jpg'),
        text:"clannad2" ,
        isshow:true,
      }, 
      {
        src:require('../image/18.jpg'),
        text:"clannad2" ,
        isshow:true,
      },  
    ]
    }
  },
  computed: {
  slicelist() {
    return function (data,count) {
      if (data != undefined) {
        let index = 0;
        let arrTemp = [];
        for (let i = 0; i < data.length; i++) {
          index = parseInt(i / count);
          if (arrTemp.length <= index) {
            arrTemp.push([]);
          }
          arrTemp[index].push(data[i])
        }
        return arrTemp
      }
    }
  }
  },
  methods:{
    btn:function(){
      for(let i=0;i<this.list.length;i++){
          this.list[i].isshow=true
      }
      let l=this.keyword;
      for(let i=0;i<this.list.length;i++){
        if(this.list[i].text!=l){
          this.list[i].isshow=false
        }
      }
      }
    },
}
</script>
<style scoped>
   * {
            margin: 0 auto;
            padding: 0 auto;

        }  
        .search{
            margin-top: 40px;
            margin-right: 60px;
            float:right;
        }
        .searchInput{
            width: 200px;
            height: 30px;
            border-radius: 10px;
            border: 0;
        }
        .button{
            height: 33px;
            width: 50px;
            border-radius: 10px;
            border: 0;
        }
     .bigbox{
            margin: 0 auto;
            width: 95%;
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;
        }
        .box{
            flex: 1;
            overflow: hidden;
            transition: 0.5s;
            margin: 20px 20px;
            box-shadow: 10px 10px 20px rgb(0, 0, 0,0.5);
            border-radius: 20px;
            border: 10px solid white;
            background-color: white;
        }
        .box img{
            width: 350px;
            height: 250px;
            object-fit: cover;
            transition: 0.5s;
        }
        .box span{
             font: 200 45px;
             text-align: center;

             display: flex;
             justify-content: center;
             align-items: center;
        }
        .box:hover{
            flex-basis: 40%;
        }
        .box:hover span{
          height: 15%;
        }
        .box:hover img{
            width: 100%;
            height: 85%;
        }
.css-button-gradient--1 {
  min-width: 130px;
  height: 40px;
  color: #fff;
  padding: 5px 10px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  outline: none;
  border-radius: 5px;
  border: none;
  background-size: 120% auto;
  background-image: linear-gradient(315deg, #4ecdc4 0%, #c797eb 75%);
}
.css-button-gradient--1:hover {
  background-position: right center;
}
.css-button-gradient--1:active {
  top: 2px;
}

</style>