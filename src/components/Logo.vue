<script lang="ts" setup></script>

<template>
  <section class="flex-shrink-0 logo-container">
    <a
      href="/"
      class="flex flex-col"
      title="“不积跬步，无以至千里；不积小流，无以成江海。”——荀子"
    >
      <div class="flex flex-row gap-2">
        <div class="logo">
          <Icon name="logos:waypoint-icon" class="size-8 -scale-y-100" />
        </div>
        <h1 class="site-title">
          <strong class="text-2xl text-[#14C6CB]">VVLL</strong
          ><span class="text-sm">.net</span>
        </h1>
      </div>
      <!-- <div>
        <p class="text-sm site-description">
          <span><strong class="light">V</strong>ite</span>
          <span> <strong class="light">V</strong>ue</span>
          <span><strong class="light">L</strong>ink</span>
          <span><strong class="light">L</strong>ab</span>
          <span class="hidden">
            “不积跬步，无以至千里；不积小流，无以成江海。”——荀子</span
          >
        </p>
      </div> -->
    </a>
  </section>
</template>

<style scoped>
.logo-container {
  display: flex;
  --logo-color: rgb(0, 227, 144);
}
.logo-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  display: flex;
  padding: 0;
  margin: 0;
  font-size: 24px;
  /* color: var(--logo-color); */
  gap: 4px;
}
.site-title {
  display: flex;
  align-items: last baseline;
  font-size: 24px;
  padding: 0;
  margin: 0;
}
.site-description {
  display: flex;
  font-size: 12px;
  color: #375749;
  padding: 0;
  margin: 0;
  gap: 4px;
}
.light {
  color: var(--logo-color);
  opacity: 0.8;
}
</style>
