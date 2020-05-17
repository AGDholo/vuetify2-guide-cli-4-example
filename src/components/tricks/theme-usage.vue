<template>
  <div>
    <!-- 使用 color 属性添加颜色 -->
    <v-btn color="primary">
      primary color
    </v-btn>

    <!-- 使用 background-color 属性添加颜色 -->
    <v-tabs background-color="primary" color="accent">
      <v-tab>Item One</v-tab>
      <v-tab>Item Two</v-tab>
      <v-tab>Item Three</v-tab>
    </v-tabs>

    <!-- 类名方法设置颜色 -->
    <v-btn class="primary">
      primary color
    </v-btn>

    <!-- 设置文字颜色 -->
    <v-btn class="primary accent--text">
      text color
    </v-btn>

    <!-- 设置颜色亮度 -->
    <v-btn class="primary darken-4">
      primary color
    </v-btn>

    <!-- 设置文字颜色亮度 -->
    <v-btn class="primary accent--text text--darken-4">
      text color
    </v-btn>
  </div>
</template>
