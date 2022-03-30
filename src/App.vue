<template>
  <div id="app">
    <!-- 路由的出口 -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
   created() {
    setTimeout(() => {
      window.L2Dwidget.init({
        pluginRootPath: "live2dw/",
        pluginJsPath: "lib/",
        pluginModelPath: "live2d-widget-model-miku/assets/",//模型路径
        tagMode: false,
        debug: false,
        model: {
          jsonPath:
            "../live2dw/live2d-widget-model-miku/assets/miku.model.json"
        },
        display: { position: "right", width: 200, height: 300 },
        mobile: { show: true },
        log: false
      });
    }, 1000);
  }
}
</script>

<style lang="less"></style>
