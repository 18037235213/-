<template>
  <div >
     <div id="ex1" class="page1">
         <div id="ex1-layer" class="box">
           <img src="../../assets/liu1.jpeg" alt="">
         </div>
     </div>
     <div class="page3">
       <div class="box1">
         <div class="img"> <img src="../../assets/liu.jpeg" alt=""></div>
       </div>
       <div class="box2">
         <div class="img"> <img src="../../assets/liu1.jpeg" alt=""></div>
       </div>
        <div class="box1">
         <div class="img"> <img src="../../assets/liu.jpeg" alt=""></div>
       </div>
       <div class="box2">
         <div class="img"> <img src="../../assets/liu1.jpeg" alt=""></div>

       </div>
        <div class="box1">
         <div class="img"> <img src="../../assets/liu.jpeg" alt=""></div>
       </div>
       <div class="box2">
         <div class="img"> <img src="../../assets/liu1.jpeg" alt=""></div>

       </div>
     </div>
  </div>
</template>
<script type="text/javascript" src="./index.js"></script>
<style lang="less" scoped>
  @import './index.less';
  .page1{
    height: 100vh;
    width: 100vw;
      display: flex;
  align-items: center;
  justify-content: center;
    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .box{
      height: 100px;
      width: 100px;
      position: absolute;
      img{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    }
  }
  .page2{
    width: 100%;
    height: 600px;
    .box{
      width: 600px;
      height: 400px;
      background-color: aqua;
      margin: 150px auto;
    }
  }
  .page3{
    width: 100%;
    height: 600px;
    .box1{
      display: flex;
      justify-content: flex-start;
      width: 1200px;
      margin: 20px auto;

    }
   .box2{
      display: flex;
      justify-content: flex-end;
      width: 1200px;
      margin: 20px auto;

    }
    .img{
        width: 400px;
        height: 300px;
        img{
          width: 100%;
          height: 100%;
        }
    }
  }

</style>
