<template>
  <div class="mobile-container min-h-screen page-bg text-[#101319] overflow-x-hidden">
    <main class="pb-24">
      <section class="relative h-[570px] overflow-hidden">
        <img
          src="/op-icons/temp/bg.svg"
          alt="Featured learning video"
          class="h-full w-full object-cover"
        />
        <div class="absolute inset-0 hero-overlay" />

        <div class="absolute inset-0 px-5 pt-5 pb-5 flex flex-col">
         

          <div class="flex items-center justify-between">
            <div class="hero-logo-wrap">
              <OPIcon name="logo" class="hero-logo" />
            </div>

            <div class="flex items-center gap-2.5">
              <img
                src="/op-icons/temp/profilepic.png"
                alt="Profile"
                class="hero-avatar"
              />
              <button
                type="button"
                aria-label="Open menu"
                class="hero-menu"
              >
                <Icon name="i-heroicons-ellipsis-horizontal" class="w-5 h-5 text-[#1f2328]" />
              </button>
            </div>
          </div>

          <div class="mt-auto text-center text-white">
            <span class="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full pill-text bg-black/45 backdrop-blur-[2px]">
              <Icon name="i-heroicons-trophy" class="w-4 h-4" />
              15 Points
            </span>

            <h1 class="mt-5 hero-title font-semibold px-4">
              Overview of the Property Journey
            </h1>
            <p class="mt-2 hero-meta font-normal text-white/95">
              3:15 mins · Property · Getting Started
            </p>

            <button
              type="button"
              class="mt-5 px-14 rounded-full bg-[#00A19A] text-white play-label font-normal"
              @click="openPlayer"
            >
              Play
            </button>

            <div class="mt-4 flex justify-center gap-2.5">
              <span class="h-2.5 w-2.5 rounded-full bg-white/90" />
              <span class="h-2.5 w-2.5 rounded-full bg-white/40" />
              <span class="h-2.5 w-2.5 rounded-full bg-white/40" />
              <span class="h-2.5 w-2.5 rounded-full bg-white/40" />
            </div>
          </div>
        </div>
      </section>

      <section class="bg-white px-5 pt-6 pb-8">
        <h2 class="section-title">Continue Watching</h2>

        <div class="mt-4 flex gap-4 overflow-x-auto pb-2 content-scroll">
          <article
            v-for="item in continueWatching"
            :key="item.title"
            class="w-[325px] shrink-0"
          >
            <div class="relative h-[176px] rounded-[18px] overflow-hidden">
              <img src="/op-icons/temp/focus.png" :alt="item.title" class="h-full w-full object-cover" />
              <div class="absolute inset-0 card-overlay" />

              <div class="absolute left-4 bottom-9 text-white card-caption uppercase font-normal">
                {{ item.remaining }}
              </div>

              <div class="absolute right-4 bottom-8 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/45 text-white pill-text font-[590]">
                <Icon name="i-heroicons-trophy" class="w-4 h-4" />
                {{ item.points }} Points
              </div>

              <div class="absolute left-4 right-4 bottom-3 h-1 rounded-full bg-white/35">
                <div class="h-[6px] rounded-full bg-white" :style="{ width: item.progress }" />
              </div>
            </div>

            <h3 class="mt-3 card-title font-normal text-[#17181A]">
              {{ item.title }}
            </h3>
            <p class="mt-1 card-meta text-[#6D727A]">
              {{ item.time }}
            </p>
          </article>
        </div>
      </section>

      <section class="section-soft px-5 pt-7 pb-8 border-y border-[#e5eaec]">
        <h2 class="section-title">Start with the basics courses</h2>
        <p class="section-sub mt-2">
          Learn how to evaluate a property, understand market trends,
          and avoid common mistakes.
        </p>

        <div class="mt-5 flex gap-4 overflow-x-auto pb-2 content-scroll">
          <article
            v-for="item in basics"
            :key="item.title"
            class="w-[325px] shrink-0"
          >
            <div class="relative h-[176px] rounded-[18px] overflow-hidden">
              <img src="/op-icons/temp/property.svg" :alt="item.title" class="h-full w-full object-cover" />
              <div class="absolute inset-0 card-overlay" />

              <div class="absolute left-4 bottom-8 text-white card-caption uppercase font-normal">
                {{ item.remaining }}
              </div>

              <div class="absolute right-4 bottom-8 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/45 text-white pill-text font-[590]">
                <Icon name="i-heroicons-trophy" class="w-4 h-4" />
                {{ item.points }} Points
              </div>
            </div>

            <h3 class="mt-3 card-title font-normal text-[#17181A]">
              {{ item.title }}
            </h3>
            <p class="mt-1 card-meta text-[#6D727A]">
              {{ item.meta }}
            </p>
          </article>
        </div>
      </section>

      <section class="bg-white px-5 pt-7 pb-8 border-b border-[#e5eaec] overflow-hidden">
        <h2 class="section-title">Learn with curated playlists</h2>
        <p class="section-sub mt-2">
          Complete learning paths designed by property experts to
          guide you through each step.
        </p>

        <div class="mt-5 flex flex-col gap-3">
          <div
            v-for="row in playlistRows"
            :key="row.left.number"
            class="grid grid-cols-[1fr_44px_1fr] gap-x-4 items-start"
          >
            <div class="flex items-start gap-3 min-w-0">
              <span class="mt-0.5 text-[#a8adb4] text-[22px] h-[28px] leading-none tracking-[-0.26px] font-semibold text-center">
                {{ row.left.number }}
              </span>
              <div class="min-w-0">
                <h3 class="playlist-title line-clamp-1">{{ row.left.title }}</h3>
                <p class="playlist-sub line-clamp-2">{{ row.left.subtitle }}</p>
              </div>
            </div>

            <div class="pt-1 flex justify-center">
              <button
                type="button"
                aria-label="Play playlist"
                class="w-[20px] h-[20px] rounded-full border border-[#d9dee3] bg-white text-[#00A19A] flex items-center justify-center"
                @click="navigateToThankYou"
              >
                <Icon name="i-heroicons-play-solid" class="w-4 h-4 ml-0.5" />
              </button>
            </div>

            <div class="flex items-start gap-3 min-w-0">
              <span class="mt-0.5 text-[#a8adb4] text-[22px] h-[28px] leading-none tracking-[-0.26px] font-semibold text-center">
                {{ row.right.number }}
              </span>
              <div class="min-w-0">
                <h3 class="playlist-title line-clamp-1">{{ row.right.title }}</h3>
                <p class="playlist-sub line-clamp-2">{{ row.right.subtitle }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section-soft px-5 pt-7 pb-12">
        <h2 class="section-title">Go deeper with expert insights</h2>
        <p class="section-sub mt-2">
          Advanced content covering legal steps, renovation ROI,
          negotiation tactics, and more - straight from industry pros.
        </p>

        <div class="mt-5 flex gap-4 overflow-x-auto pb-2 content-scroll">
          <article
            v-for="item in experts"
            :key="item.title"
            class="w-[325px] shrink-0"
          >
            <div class="relative h-[176px] rounded-[18px] overflow-hidden bg-[#788088]">
              <img :src="item.image" :alt="item.title" class="h-full w-full object-cover grayscale" />
              <div class="absolute inset-0 premium-overlay" />

              <div class="absolute left-1/2 -translate-x-1/2 top-[86px] inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/55 text-white pill-second font-[590] whitespace-nowrap">
                <Icon name="i-heroicons-lock-closed" class="w-4 h-4" />
                UNLOCK PREMIUM
              </div>
            </div>

            <h3 class="mt-3 card-title font-normal text-[#17181A]">
              {{ item.title }}
            </h3>
            <p class="mt-1 card-meta text-[#6D727A]">
              {{ item.meta }}
            </p>
          </article>
        </div>
      </section>
    </main>

    <nav class="fixed bottom-0 left-0 right-0 mx-auto w-full max-w-md bg-white border-t border-[#dfe3e7] z-20">
      <div class="grid grid-cols-5 items-end py-2.5 px-1">
        <button v-for="item in navItems" :key="item.label" type="button" class="flex flex-col items-center gap-1.5">
          <OPIcon :name="item.icon" class="w-[19px] h-[19px]" :class="item.active ? 'opacity-100' : 'opacity-55'" />
          <span class="text-[12px] leading-none" :class="item.active ? 'text-[#00A19A]' : 'text-[#8f949b]'">
            {{ item.label }}
          </span>
        </button>
      </div>
    </nav>

    <section v-if="isPlayerOpen" class="fixed inset-0 z-[60] bg-black text-white">
      <video
        autoplay
        muted
        loop
        playsinline
        class="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/op-icons/temp/house.mp4" type="video/mp4" />
      </video>
      <div class="absolute inset-0 player-overlay" />

      <div class="relative h-full flex flex-col px-6 pt-6 pb-8">
        

        <div class="flex items-center justify-between">
          <div class="inline-flex items-center gap-2 bg-black/45 rounded-full px-2 py-1">
            <button
              type="button"
              class="w-8 h-8 rounded-full bg-[#2f3c45]/90 flex items-center justify-center"
              aria-label="Close player"
              @click="closePlayer"
            >
              <Icon name="i-heroicons-x-mark" class="w-5 h-5 text-white" />
            </button>
            <button type="button" class="w-8 h-8 rounded-full bg-[#2f3c45]/90 flex items-center justify-center">
              <Icon name="i-heroicons-rectangle-stack" class="w-4 h-4 text-white" />
            </button>
            <button type="button" class="w-8 h-8 rounded-full bg-[#2f3c45]/90 flex items-center justify-center">
              <Icon name="i-heroicons-musical-note" class="w-4 h-4 text-white" />
            </button>
            <button type="button" class="w-8 h-8 rounded-full bg-[#2f3c45]/90 flex items-center justify-center">
              <Icon name="i-heroicons-arrow-up-tray" class="w-4 h-4 text-white" />
            </button>
          </div>

          <div class="inline-flex items-center gap-2">
            <button type="button" class="w-10 h-10 rounded-full bg-[#2f3c45]/90 flex items-center justify-center">
              <Icon name="i-heroicons-heart" class="w-5 h-5 text-white" />
            </button>
            <button type="button" class="w-10 h-10 rounded-full bg-[#2f3c45]/90 flex items-center justify-center">
              <Icon name="i-heroicons-speaker-wave" class="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        <div class="mt-auto mb-32 flex items-center justify-center gap-4">
          <button type="button" class="w-[50px] h-[50px] rounded-full bg-black/45 flex items-center justify-center">
            <Icon name="i-heroicons-arrow-uturn-left" class="w-6 h-6 text-white" />
          </button>
          <button type="button" class="w-[50px] h-[50px] rounded-full bg-black/45 flex items-center justify-center" @click="navigateToThankYou">
            <Icon name="i-heroicons-play-solid" class="w-10 h-10 text-white ml-1" />
          </button>
          <button type="button" class="w-[50px] h-[50px] rounded-full bg-black/45 flex items-center justify-center">
            <Icon name="i-heroicons-arrow-uturn-right" class="w-6 h-6 text-white" />
          </button>
        </div>

        <div class="mb-2">
          <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/45 text-[15px] leading-[17px] tracking-[-0.08px] font-[590]">
            <Icon name="i-heroicons-trophy" class="w-3.5 h-3.5" />
            15 Points
          </span>

          <h2 class="mt-3 text-[20px] leading-[25px] tracking-[-0.43px] font-semibold text-white">
            Overview of the Property Journey
          </h2>
          <p class="mt-1 text-[13px] leading-[18px] tracking-[-0.23px] text-white/95">
            6:05 mins · Property · Getting Started
          </p>

          <div class="mt-4">
            <div class="h-3 w-full rounded-full bg-black/45 overflow-hidden">
              <div class="h-3 bg-white rounded-full" style="width: 64%" />
            </div>
            <div class="mt-2 flex items-center justify-between text-[12px] leading-[16px] tracking-[-0.23px] text-white/95">
              <span>04:32</span>
              <span>-6 Minutes 5 Seconds</span>
            </div>
          </div>

          <div class="mt-4 flex items-center gap-3">
            <button type="button" class="px-5 h-9 rounded-full bg-black/45 text-[14px]">Related Videos</button>
            <button type="button" class="px-5 h-9 rounded-full bg-black/45 text-[14px]">Links</button>
          </div>
        </div>

       
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import OPIcon from '~/components/ui/OPIcon.vue'

const router = useRouter()
const isPlayerOpen = ref(false)

const openPlayer = () => {
  isPlayerOpen.value = true
}

const closePlayer = () => {
  isPlayerOpen.value = false
}

const navigateToThankYou = () => {
  router.push('/profile/thankyou')
}

const continueWatching = [
  {
    title: 'Becoming Focused',
    time: '3:40 Minutes',
    remaining: '2 MINUTES LEFT',
    points: 15,
    progress: '62%',
    image: '/op-icons/temp/emily chen.png',
  },
  {
    title: 'The pros and cons',
    time: '8:20 Minutes',
    remaining: '6 MINUTES LEFT',
    points: 12,
    progress: '30%',
    image: '/images/findPropertyBackground.png',
  },
]

const basics = [
  {
    title: 'Getting Started with Buying',
    meta: '2 Chapters · 14 Lessons',
    remaining: '18 MINUTES',
    points: 15,
    image: '/images/findPropertyBackground.png',
  },
  {
    title: 'Understanding Market Trends',
    meta: '3 Chapters · 11 Lessons',
    remaining: '16 MINUTES',
    points: 12,
    image: '/op-icons/temp/property.svg',
  },
]

const playlistRows = [
  {
    left: {
      number: 1,
      title: 'First-Time Buyer Bootcamp',
      subtitle: 'Complete guide from search to keys - everything beginners need to know',
    },
    right: {
      number: 4,
      title: 'Legal Checklist for Buyers',
      subtitle: 'Navigate legal documents and milestones without stress',
    },
  },
  {
    left: {
      number: 2,
      title: 'Property Investment Mastery',
      subtitle: 'Build wealth through property - from single buy-to-let to full portfolio',
    },
    right: {
      number: 5,
      title: 'Market Timing Strategies',
      subtitle: 'Learn when to buy, sell, and hold with confidence',
    },
  },
  {
    left: {
      number: 3,
      title: 'Selling Your Home Successfully',
      subtitle: 'Maximize your sale price with expert staging, pricing, and negotiation',
    },
    right: {
      number: 6,
      title: 'Professional Offer Tactics',
      subtitle: 'Make stronger offers and close deals faster',
    },
  },
]

const experts = [
  {
    title: 'Legal & Paperwork Explained',
    meta: '2 Chapters · 14 Lessons',
    image: '/op-icons/temp/unlock.png',
  },
  {
    title: 'Offer, Negotiate and Win',
    meta: '2 Chapters · 12 Lessons',
    image: '/op-icons/temp/property.svg',
  },
]

const navItems = [
  { label: 'Explore', icon: 'explore', active: false },
  { label: 'Passport', icon: 'passport', active: false },
  { label: 'Marketplace', icon: 'marketplace', active: false },
  { label: 'Rewards', icon: 'rewards', active: false },
  { label: 'Education', icon: 'learn', active: true },
]
</script>

<style scoped>
.page-bg {
  background: linear-gradient(180deg, #ffffff 0%, #eff4f4 68%, #dff3f1 100%);
}

.hero-logo-wrap {
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-logo {
  width: 38px;
  height: 38px;
  filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.25));
}

.hero-avatar {
  width: 30px;
  height: 30px;
  border-radius: 100px;
  
}

.hero-menu {
  width: 30px;
  height: 30px;
  border-radius: 100px;
  background: rgba(255, 255, 255, 0.98);
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-overlay {
  background:
    linear-gradient(180deg, rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0) 36%),
    linear-gradient(180deg, rgba(0, 0, 0, 0) 55%, rgba(0, 0, 0, 0.66) 100%);
}

.section-soft {
  background: linear-gradient(180deg, #f1f5f6 0%, #e7f3f2 100%);
}

.section-title {
  font-size: 17px;
  line-height: 22px;
  letter-spacing: -0.43px;
  font-weight: 590;
  color: #000000;
  font-family: 'SF Pro', sans-serif;
}

.section-sub {
  color: #6f757d;
  font-size: 13px;
   font-weight: 400;
  line-height: 18px;
   font-family: 'SF Pro', sans-serif;
  letter-spacing: -0.08px;
}

.playlist-title {
  color: #00a19a;
  font-size: 9px;
  font-family: 'SF Pro', sans-serif;
  line-height: 16px;
  letter-spacing: -0.08px;
  font-weight: 590;
}

.playlist-sub {
  color: #797f87;
  font-size: 10px;
  letter-spacing: -0.06px;
  font-weight: 400;
  font-family: 'SF Pro', sans-serif;
}

.hero-title {
  font-size: 20px;
  line-height: 25px;
  letter-spacing: -0.45px;
  font-weight: 590;
  font-family: 'SF Pro', sans-serif;

}

.hero-meta {
  font-size: 13px;
  line-height: 18px;
  letter-spacing: -0.08px;
   font-weight: 590;
  font-family: 'SF Pro', sans-serif;
}

.play-label {
  width: 160px;
  height: 34px;
  font-weight: 590;
  font-family: 'SF Pro', sans-serif;
  font-size: 15px;
  line-height: 20px;
}

.pill-text {
  font-size: 11px;
  padding: 4px 8px 4px 8px;
}

.pill-second {
  font-size:9px;
  padding: 4px 8px 4px 8px;
  font-family: 'SF Pro', sans-serif;
  min-height: 21px;

}


.card-caption {
  font-size:12px;
  line-height: 16px;
  font-weight: 590;
  font-family: 'SF Pro', sans-serif;
}

.card-title {
  font-size: 15px;
  line-height: 20px;
  letter-spacing: -0.23px;
  font-weight: 400;
  font-family: 'SF Pro', sans-serif;
}

.card-meta {
  font-size: 11px;
  line-height: 13px;
  letter-spacing: -0.06px;
  font-weight: 400;
  font-family: 'SF Pro', sans-serif;
}

.card-overlay {
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.04) 40%, rgba(0, 0, 0, 0.66) 100%);
}

.premium-overlay {
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.25) 35%, rgba(0, 0, 0, 0.68) 100%);
}

.dot-signal {
  width: 5px;
  height: 5px;
  border-radius: 999px;
  background: #fff;
  opacity: 0.9;
}

.dot-battery {
  width: 17px;
  height: 9px;
  border-radius: 2px;
  border: 1.5px solid rgba(255, 255, 255, 0.9);
  position: relative;
}

.dot-battery::after {
  content: '';
  position: absolute;
  right: -3px;
  top: 2px;
  width: 2px;
  height: 3px;
  border-radius: 1px;
  background: rgba(255, 255, 255, 0.9);
}

.content-scroll {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.content-scroll::-webkit-scrollbar {
  display: none;
}

.player-overlay {
  background:
    linear-gradient(180deg, rgba(0, 0, 0, 0.08) 0%, rgba(0, 0, 0, 0.14) 35%),
    linear-gradient(180deg, rgba(0, 0, 0, 0) 58%, rgba(0, 0, 0, 0.66) 100%);
}
</style>
