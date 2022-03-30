
import scrollReveal from 'scrollreveal';
export default {

  data () {
    return {
      scrollReveal: scrollReveal()
    }
  },

  mounted() {
    this.inte()
    this.scrollReveal.reveal('.box1', {
      // 动画的时长
      duration: 1000,
      // 动画开始的位置，'bottom', 'left', 'top', 'right'
      origin: 'left',
      // 回滚的时候是否再次触发动画
      reset: true,
      // 在移动端是否使用动画
      mobile: true,
      // 滚动的距离，单位可以用%，rem等
      distance: '400px',
      // 其他可用的动画效果
      opacity: 0.001,
      easing: 'linear',
      scale: 0.9,
    });
    this.scrollReveal.reveal('.box2', {
      // 动画的时长
      duration: 1000,
      // 动画开始的位置，'bottom', 'left', 'top', 'right'
      origin: 'right',
      // 回滚的时候是否再次触发动画
      reset: true,
      // 在移动端是否使用动画
      mobile: true,
      // 滚动的距离，单位可以用%，rem等
      distance: '400px',
      // 其他可用的动画效果
      opacity: 0.001,
      easing: 'linear',
      scale: 0.9,
    });
  },

  methods: {
   inte(){
    let constrain = 20;
    let mouseOverContainer = document.getElementById("ex1");
    let ex1Layer = document.getElementById("ex1-layer");

    function transforms(x, y, el) {
      let box = el.getBoundingClientRect();
      let calcX = -(y - box.y - (box.height / 2)) / constrain;
      let calcY = (x - box.x - (box.width / 2)) / constrain;

      return "perspective(100px) "
        + "   rotateX("+ calcX +"deg) "
        + "   rotateY("+ calcY +"deg) ";
    };

     function transformElement(el, xyEl) {
      el.style.transform  = transforms.apply(null, xyEl);
    }

    mouseOverContainer.onmousemove = function(e) {
      let xy = [e.clientX, e.clientY];
      let position = xy.concat([ex1Layer]);

      window.requestAnimationFrame(function(){
        transformElement(ex1Layer, position);
      });
    };
   }
  }
}
