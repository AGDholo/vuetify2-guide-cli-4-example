import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  // 添加主题配置
  theme: {
    dark: false, // 如果指定为 true，那么整个页面主题将为下面的 dark 配色
    themes: {
      light: {
        primary: "#3f51b5",
        secondary: "#424242",
        accent: "#82B1FF",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FFC107",
      },
      dark: {
        primary: "#0000",
      },
    },
  },
});
