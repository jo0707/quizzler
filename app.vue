<template>
  <div class="relative min-h-screen w-screen overflow-hidden dark:bg-gray-900 font-['DM_Sans']">
    <div class="absolute w-screen h-screen opacity-20 z-0 bg-[url('/img/background.svg')]"></div>

    <NuxtLayout>
      <NuxtPage></NuxtPage>
    </NuxtLayout>

    <UNotifications />
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.scale-enter-active,
.scale-leave-active {
  transition: all 0.3s ease;
}

.scale-enter-from,
.scale-leave-to {
  scale: 0.6;
}
</style>