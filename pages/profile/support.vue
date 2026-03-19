<template>
  <div class="min-h-screen bg-[#efeff4] pb-28">
    <div class="relative bg-[#403D91] px-4 pt-3 pb-14">
      <div class="mx-auto w-full max-w-[430px]">
        <div class="mb-5 flex items-center justify-between">
          <button
            @click="navigateBack"
            class="flex h-10 w-10 items-center justify-center rounded-full border border-[#9fa2b8] bg-[#e6e8ef] shadow-sm"
          >
            <Icon name="mdi:chevron-left" class="text-[34px] text-[#161616]" />
          </button>

          <h1 class="top-title">Help &amp; Support</h1>

          <div class="h-[36px] w-[36px] overflow-hidden rounded-full border-2 border-Border/medium-border bg-[#424242] shadow-sm">
            <img src="/op-icons/temp/profilepic.png" alt="Profile" class="h-[32px] w-[32px] ">
          </div>
        </div>

        <div class="rounded-[18px] border border-[#9999b3] bg-[#ececf1] p-[5px] shadow-[0_8px_18px_rgba(64,61,145,0.32)]">
          <div class="grid grid-cols-2 gap-2">
            <button
              @click="activeTab = 'faqs'"
              :class="[
                'flex items-center justify-center gap-2 rounded-[14px] px-3 py-[11px] text-[15px] transition',
                activeTab === 'faqs'
                  ? 'border-2 border-[#403D91] bg-[#ececf1] font-semibold text-[#171717]'
                  : 'border border-[#c8c9d6] bg-[#ececf1] text-[#212121]'
              ]"
            >
              <img src="/op-icons/temp/read.svg" alt="Read" class="h-[21px] w-[21px]" >
              <span>FAQs &amp; Support</span>
            </button>

            <button
              @click="activeTab = 'feedback'"
              :class="[
                'flex items-center justify-center gap-2 rounded-[14px] px-3 py-[11px] text-[15px] transition',
                activeTab === 'feedback'
                  ? 'border-2 border-[#403D91] bg-[#ececf1] font-semibold text-[#171717]'
                  : 'border border-[#c8c9d6] bg-[#ececf1] text-[#212121]'
              ]"
            >
              <img src="/op-icons/temp/send.svg" alt="Send" class="h-[21px] w-[21px]" >
              <span>Send feedback</span>
            </button>
          </div>
        </div>
      </div>

      <svg class="pointer-events-none absolute -bottom-[1px] left-0 h-10 w-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,18 C280,78 560,88 820,58 C980,40 1110,14 1200,10 L1200,120 L0,120 Z" fill="#efeff4" />
      </svg>
    </div>

    <div class="mx-auto w-full max-w-[430px] px-4 pt-5">
      <div v-if="activeTab === 'faqs'">
        <section class="mb-8">
          <h2 class="mb-2 text-[22px] font-Plus Jakarta Sans text-[#1A1A1A]">Common Issues</h2>
          <div class="border-b border-[#cfd1d8]">
            <div
              v-for="(faq, index) in commonIssues"
              :key="index"
              class="border-t border-[#cfd1d8]"
            >
              <button
                @click="toggleFAQ(index)"
                class="flex w-full items-center justify-between py-3 text-left"
              >
                <span class="pr-4 text-[14px] leading-[1.25] text-[#191a1f]">{{ faq.question }}</span>
                <Icon
                  name="mdi:chevron-down"
                  :class="[
                    'shrink-0 text-[#9a9da8] transition-transform',
                    expandedFAQ === index ? 'rotate-180' : ''
                  ]"
                  size="22"
                />
              </button>
              <transition name="expand">
                <div
                  v-if="expandedFAQ === index"
                  class="pb-3 pr-7 text-[13px] leading-[1.35] text-[#5e6069]"
                >
                  {{ faq.answer }}
                </div>
              </transition>
            </div>
          </div>
        </section>

        <section class="mb-8">
          <h2 class="mb-2 text-[22px] font-Plus Jakarta Sans text-[#1A1A1A]">Category name two</h2>
          <div class="border-b border-[#cfd1d8]">
            <div
              v-for="(category, index) in categoryIssues"
              :key="index"
              class="border-t border-[#cfd1d8]"
            >
              <button
                @click="toggleCategory(index)"
                class="flex w-full items-center justify-between py-3 text-left"
              >
                <span class="pr-4 text-[14px] leading-[1.25] text-[#191a1f]">{{ category.question }}</span>
                <Icon
                  name="mdi:chevron-down"
                  :class="[
                    'shrink-0 text-[#9a9da8] transition-transform',
                    expandedCategory === index ? 'rotate-180' : ''
                  ]"
                  size="22"
                />
              </button>
              <transition name="expand">
                <div
                  v-if="expandedCategory === index"
                  class="pb-3 pr-7 text-[13px] leading-[1.35] text-[#5e6069]"
                >
                  {{ category.answer }}
                </div>
              </transition>
            </div>
          </div>
        </section>

        <button
          @click="openSupportModal"
          class="mb-4 w-full rounded-[16px] border border-[#d0d2d9] bg-[#f6f6f7] px-5 py-5 shadow-[0_1px_2px_rgba(17,24,39,0.08)]"
        >
          <div class="mb-2 flex justify-center">
            <img src="/op-icons/temp/request.svg" alt="Request" class="h-[36px] w-[36px]" >
          </div>
          <div class="mx-auto mb-2 w-full max-w-[320px] rounded-full bg-[#12a7aa] py-2.5 text-center text-[16px] font-Plus Jakarta Sans font-medium text-white">
            Send us a support request
          </div>
          <div class="text-center text-[13px] text-[#33353d]">
            We&rsquo;ll get back to you as soon as we can
          </div>
        </button>

        <button
          @click="openLearnLibrary"
          class="mb-6 w-full rounded-[16px] border border-[#d0d2d9] bg-[#f6f6f7] px-5 py-5 shadow-[0_1px_2px_rgba(17,24,39,0.08)]"
        >
          <div class="mb-2 flex justify-center">
            <img src="/op-icons/temp/library.svg" alt="Library" class="h-[36px] w-[36px]" >
          </div>
          <div class="mx-auto mb-2 w-full max-w-[320px] rounded-full bg-[#403D91] py-2.5 text-center text-[16px] font-Plus Jakarta Sans font-medium text-white">
            Search our learn library
          </div>
          <div class="text-center text-[13px] text-[#33353d]">
            For tips on app features and more
          </div>
        </button>
      </div>

      <div v-if="activeTab === 'feedback'" class="space-y-4">
        <div class="rounded-2xl border border-[#d7d9e1] bg-white p-5 shadow-sm">
          <label class="mb-3 block text-sm font-semibold text-gray-900">
            What can we improve?
          </label>
          <textarea
            v-model="feedbackForm.message"
            placeholder="Share your feedback with us..."
            class="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-[#403D91] focus:ring-2 focus:ring-[#403D91]/20"
            rows="5"
          ></textarea>
        </div>

        <div class="rounded-2xl border border-[#d7d9e1] bg-white p-5 shadow-sm">
          <label class="mb-3 block text-sm font-semibold text-gray-900">
            Category
          </label>
          <select
            v-model="feedbackForm.category"
            class="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-[#403D91] focus:ring-2 focus:ring-[#403D91]/20"
          >
            <option value="">Select a category</option>
            <option value="bug">Bug Report</option>
            <option value="feature">Feature Request</option>
            <option value="performance">Performance Issue</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div class="rounded-2xl border border-[#d7d9e1] bg-white p-5 shadow-sm">
          <label class="mb-3 block text-sm font-semibold text-gray-900">
            Email Address
          </label>
          <input
            v-model="feedbackForm.email"
            type="email"
            placeholder="your@email.com"
            class="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-[#403D91] focus:ring-2 focus:ring-[#403D91]/20"
          >
        </div>

        <button
          @click="submitFeedback"
          class="w-full rounded-full bg-[#12a7aa] py-3 text-base font-semibold text-white shadow-md transition hover:bg-[#0f999c]"
        >
          Submit Feedback
        </button>
      </div>
    </div>

    <nav class="fixed bottom-4 left-1/2 z-40 w-[calc(100%-28px)] max-w-[430px] -translate-x-1/2 rounded-[18px] border border-[#d6d8df] bg-[#f7f7f9] px-4 py-2.5 shadow-[0_6px_20px_rgba(17,24,39,0.14)]">
      <ul class="grid grid-cols-5 gap-1">
        <li v-for="item in bottomNavItems" :key="item.label" class="text-center">
          <button class="flex w-full flex-col items-center justify-center gap-0.5 rounded-xl py-1 text-[#18191c]">
            <img :src="item.icon" :alt="item.label" class="h-[22px] w-[22px]" >
            <span class="text-[11px] leading-none" :class="item.label === 'More' ? 'font-semibold' : 'font-normal'">{{ item.label }}</span>
          </button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const activeTab = ref('faqs')
const expandedFAQ = ref(null)
const expandedCategory = ref(null)

const feedbackForm = ref({
  message: '',
  category: '',
  email: ''
})

const bottomNavItems = [
  { label: 'Explore', icon: '/op-icons/temp/explore.svg' },
  { label: 'My Home', icon: '/op-icons/temp/myhome.svg' },
  { label: 'Marketplace', icon: '/op-icons/temp/market.svg' },
  { label: 'Calendar', icon: '/op-icons/temp/calender1.svg' },
  { label: 'More', icon: '/op-icons/temp/more.svg' }
]

const commonIssues = [
  {
    question: 'How can I reset my password?',
    answer: 'Go to the login page and click "Forgot Password". Enter your email address and follow the instructions sent to your email to reset your password.'
  },
  {
    question: 'Why am I not seeing any properties in my search results?',
    answer: 'This could happen if your search filters are too restrictive. Try expanding your location, price range, or property type filters. You can also clear all filters and try again.'
  },
  {
    question: 'How can I tell if a property is still available?',
    answer: 'Each property listing shows its availability status. Active listings show recent updates and available tags. Contact the property owner directly for the most current status.'
  },
  {
    question: 'How do I save a property?',
    answer: 'You can save properties by tapping the heart icon on any property card. Your saved properties will be added to your collection for easy access later.'
  },
  {
    question: 'Where can I find my saved properties?',
    answer: 'Navigate to "My Home" in the bottom menu and select "Saved Properties". Here you can view, organize, and manage all your saved properties.'
  },
  {
    question: 'Can I favourite properties without creating an account?',
    answer: 'You need to create an account or log in to save properties. This helps us personalize your experience and send you relevant property updates.'
  }
]

const categoryIssues = [
  {
    question: 'How do I update my notification preferences?',
    answer: 'Go to Settings in your profile and scroll to Notifications. You can toggle notifications on/off for property updates, messages, and other alerts.'
  },
  {
    question: 'Can I use the app offline?',
    answer: 'Some features work offline, but you need an internet connection to browse properties, send messages, and make updates.'
  },
  {
    question: 'The app is crashing-what can I do?',
    answer: 'Try clearing the app cache, updating to the latest version, or reinstalling the app. If the issue persists, contact our support team.'
  },
  {
    question: 'I\'m seeing an error message. What should I do?',
    answer: 'Note the error message and contact our support team with details. Screenshot the error if possible to help us troubleshoot faster.'
  },
  {
    question: 'How can I report a bug or issue?',
    answer: 'Use the "Send us a support request" button below or go to the Feedback tab to report any bugs or issues you encounter.'
  },
  {
    question: 'There is an issue with listed data.',
    answer: 'If you notice incorrect information in a property listing, please use the report feature on that property card or contact our support team with details.'
  }
]

const toggleFAQ = (index) => {
  expandedFAQ.value = expandedFAQ.value === index ? null : index
}

const toggleCategory = (index) => {
  expandedCategory.value = expandedCategory.value === index ? null : index
}

const navigateBack = () => {
  router.back()
}

const openSupportModal = () => {
  console.log('Open support modal')
}

const openLearnLibrary = () => {
  console.log('Open learn library')
}

const submitFeedback = () => {
  if (!feedbackForm.value.message || !feedbackForm.value.category || !feedbackForm.value.email) {
    alert('Please fill in all fields')
    return
  }

  console.log('Feedback submitted:', feedbackForm.value)
  alert('Thank you for your feedback!')
  feedbackForm.value = { message: '', category: '', email: '' }
}
</script>

<style scoped>
.expand-enter-active,
.expand-leave-active {
  transition: all 0.3s ease;
}
.top-title {
  font-size: 24px;
  font-weight: 500;
  color: #ffffff;
  font-family: 'Plus Jakarta Sans', sans-serif;
  line-height: 100%;
  letter-spacing: -3%;
}

.expand-enter-from {
  opacity: 0;
  max-height: 0;
}

.expand-leave-to {
  opacity: 0;
  max-height: 0;
}

.expand-enter-to,
.expand-leave-from {
  opacity: 1;
  max-height: 500px;
}
</style>
