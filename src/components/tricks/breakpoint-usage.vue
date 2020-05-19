<template>
  <div>
    <!-- 简单使用 -->
    <div>
      <!-- 判断当前宽度为 xs -->
      <v-btn v-if="$vuetify.breakpoint.xsOnly">xsOnly</v-btn>

      <!-- 判断当前宽度为 sm -->
      <v-btn v-if="$vuetify.breakpoint.smOnly">smOnly</v-btn>

      <!-- 判断当前宽度为 sm 和 sm 宽度之下的内容，也就是 xs sm -->
      <v-btn v-if="$vuetify.breakpoint.smAndDown">smAndDown</v-btn>

      <!-- 判断当前宽度为 sm 和 sm 宽度之上的内容，也就是 sm md lg xl -->
      <v-btn v-if="$vuetify.breakpoint.smAndUp">smAndUp</v-btn>

      <!-- 判断当前宽度为 md -->
      <v-btn v-if="$vuetify.breakpoint.mdOnly">mdOnly</v-btn>

      <!-- 判断当前宽度为 md 和 md 宽度之下的内容，也就是 xs sm md -->
      <v-btn v-if="$vuetify.breakpoint.mdAndDown">mdAndDown</v-btn>

      <!-- 判断当前宽度为 md 和 md 宽度之上的内容，也就是 md lg xl -->
      <v-btn v-if="$vuetify.breakpoint.mdAndUp">mdAndUp</v-btn>

      <!-- 判断当前宽度为 lg -->
      <v-btn v-if="$vuetify.breakpoint.lgOnly">lgOnly</v-btn>

      <!-- 判断当前宽度为 lg 和 lg 宽度之下的内容，也就是 xs sm md lg -->
      <v-btn v-if="$vuetify.breakpoint.lgAndDown">lgAndDown</v-btn>

      <!-- 判断当前宽度为 lg 和 lg 宽度之上的内容，也就是 lg xl -->
      <v-btn v-if="$vuetify.breakpoint.lgAndUp">lgAndUp</v-btn>

      <!-- 判断当前宽度为 xl -->
      <v-btn v-if="$vuetify.breakpoint.xlOnly">xlOnly</v-btn>
    </div>

    <!-- 响应式布局中应用 -->
    <div>
      <v-app-bar>
        <!-- 仅在 xs 宽度下才显示该组件 -->
        <v-app-bar-nav-icon
          v-if="$vuetify.breakpoint.xsOnly"
        ></v-app-bar-nav-icon>

        <v-toolbar-title>Page title</v-toolbar-title>

        <v-spacer></v-spacer>

        <!-- md 和 md 宽度之上的才显示该组件 -->
        <v-btn icon v-if="$vuetify.breakpoint.mdAndUp">
          <v-icon>mdi-heart</v-icon>
        </v-btn>
      </v-app-bar>
    </div>
  </div>
</template>
