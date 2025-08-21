<template>
  <div class="mobile-container backgound-image">
    <ProgressBar :steps="7" :currentStep="2" />
    <LogoAndSkip @onClick="onSkipClick" />
  </div>
</template>

<script setup>
import LogoAndSkip from '@/components/LogoAndSkip.vue';

const onSkipClick = () => {
  alert('skip');
}

</script>

<style>
.backgound-image{
  background-image: url('/public/images/onboarding_background.jpg');
  background-size: cover;
  background-position: center;
   position: relative; 
}
</style>