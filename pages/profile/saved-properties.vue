<template>
  <div class="mobile-container saved-properties-page">
    <AppHeader :showBack="true" :backTo="'/profile'" right="dots" />

    <section class="saved-properties-hero">
      <img src="/op-icons/temp/home2.svg" alt="Saved properties" class="saved-properties-hero-image" />

      <h1 class="saved-properties-title">Saved Properties</h1>
      <p class="saved-properties-subtitle">Organize and browse your favorited properties</p>

      <div class="saved-properties-search-row">
        <div class="saved-properties-search-input">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="11" cy="11" r="8" stroke="#ccc" stroke-width="2"/>
            <path d="M20 20.5L15.5 16" stroke="#ccc" stroke-width="2" stroke-linecap="round"/>
          </svg>
          <input class="search-favorites" v-model="search" type="text" placeholder="Search Favorites" />
        </div>

        <button class="saved-properties-filter-btn" aria-label="Filter properties">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 7H20" stroke="white" stroke-width="2" stroke-linecap="round"/>
            <path d="M7 12H17" stroke="white" stroke-width="2" stroke-linecap="round"/>
            <path d="M10 17H14" stroke="white" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </button>
      </div>
    </section>

    <section class="saved-properties-list-wrap">
      <h2 class="saved-properties-list-title">All Favorites</h2>

      <div class="saved-properties-list">
        <button
          v-for="item in filteredProperties"
          :key="item.address"
          class="saved-properties-card"
          type="button"
        >
          <div class="saved-properties-card-content">
            <h3 class="saved-properties-card-title">{{ item.address }}</h3>
            <p class="saved-properties-card-city">{{ item.city }}</p>
            <p class="saved-properties-card-region" v-if="item.region">{{ item.region }}</p>
            <p class="saved-properties-card-postcode">{{ item.postcode }}</p>
            <p class="saved-properties-card-date">Added: {{ item.added }}</p>
          </div>

          <svg class="saved-properties-card-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 5L16 12L9 19" stroke="#c6c7cc" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import AppHeader from '~/components/core/AppHeader.vue'

definePageMeta({ middleware: 'auth' })

const router = useRouter()
const search = ref('')

const properties = [
  {
    address: '12, London Road',
    city: 'Kingston-upon-Thames',
    region: 'Surrey',
    postcode: 'KN51 78J',
    added: 'August 3, 2023',
  },
  {
    address: '34, Maple Avenue',
    city: 'Bristol',
    region: '',
    postcode: 'BS1 5TJ',
    added: 'August 5, 2023',
  },
  {
    address: '56, Oak Street',
    city: 'Manchester',
    region: '',
    postcode: 'M1 1AE',
    added: 'August 7, 2023',
  },
  {
    address: '78, Pine Way',
    city: 'Liverpool',
    region: '',
    postcode: 'L1 4AB',
    added: 'August 10, 2023',
  },
]

const filteredProperties = computed(() => {
  const q = search.value.trim().toLowerCase()
  if (!q) return properties

  return properties.filter((item) =>
    [item.address, item.city, item.region, item.postcode].join(' ').toLowerCase().includes(q),
  )
})
</script>

<style scoped>
.saved-properties-page {
  background: linear-gradient(180deg, #f5f5f7 0%, #e8f2f3 100%);
}

.saved-properties-hero {
  padding: 12px 14px 16px;
}

.saved-properties-hero-image {
  width: 144px;
  display: block;
  margin: 0 auto 16px;
  object-fit: contain;
}

.saved-properties-title {
  margin: 0;
  text-align: center;
  font-family: sf-pro;
  font-size: 20px;
  line-height: 25px;
  letter-spacing: -0.45px;
  font-weight: 590;
  color: #000000;
  margin-bottom: 4px;
}

.saved-properties-subtitle {
  margin: 0 auto 21px;
  text-align: center;
  font-family: sf-pro;
  font-size: 15px;
  line-height: 20px;
  letter-spacing: -0.23px;
  color: #3c3c4399;
}
.saved-properties-search-row {
  display: flex;
  align-items: center;
  gap: 8px;
}

.saved-properties-search-input {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 8px;
  background: white;
  border: 0.33px solid var(--Labels-Quaternary, #3C3C432E);
  border-radius: 20px;
  height: 44px;
  padding: 0 21px;
}

.saved-properties-search-input input {
  width: 100%;
  border: 0;
  outline: 0;
  background: transparent;
  font-family: sf-pro, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-size: 14px;
  color: #000;
}

.saved-properties-search-input input::placeholder {
  color: #c7c7cc;
}

.saved-properties-filter-btn {
  width: 38px;
  height: 38px;
  border-radius: 13px;
  border: 0;
  background: #17aaa0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex-shrink: 0;
  padding: 6px 12px 6px 12px;
}
.search-favorites{
    font-family: sf-pro;
    font-size: 17px;
    line-height: 22px;
    letter-spacing: -0.43px;
    color: #3c3c4399;
    font-weight: 400;
}

.saved-properties-list-wrap {
  padding: 16px 14px 40px;
}

.saved-properties-list-title {
  margin: 0 4px 12px;
  font-family: sf-pro;
  font-size: 15px;
  line-height: 20px;
  font-weight: 590;
  letter-spacing: -0.23px;
  color: #000000;
}

.saved-properties-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.saved-properties-card {
  width: 100%;
  text-align: left;
  border:0.33px solid var(--Labels-Quaternary, #3C3C432E);
  border-radius: 16px;
  gap: 8px;
  background: white;
  padding: 14px 12px 14px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: background 0.15s;
}

.saved-properties-card:active {
  background: #f9f9f9;
}

.saved-properties-card-content {
  min-width: 0;
  flex: 1;
}

.saved-properties-card-title {
  margin: 0 0 2px;
  font-family: sf-pro;
  font-size: 15px;
  line-height: 20px;
  letter-spacing: -0.23px;
  font-weight: 400;
  color: #000000;
}

.saved-properties-card-city {
  margin: 0;
  font-family: sf-pro;
  font-size: 13px;
  line-height: 18px;
  font-weight: 400;
  letter-spacing: -0.08px;
  color: #3c3c4399;
}

.saved-properties-card-region {
  margin: 0;
   font-family: sf-pro;
  font-size: 13px;
  line-height: 18px;
  font-weight: 400;
  letter-spacing: -0.08px;
  color: #3c3c4399;
}

.saved-properties-card-postcode {
  margin: 0 0 6px;
  font-family: sf-pro;
  font-size: 13px;
  line-height: 18px;
  font-weight: 400;
  letter-spacing: -0.08px;
  color: #3c3c4399;
}

.saved-properties-card-date {
  margin: 0;
  font-family: sf-pro;
  font-size: 12px;
  line-height: 13px;
  color: #00a19a;
  font-weight: 400;
  letter-spacing: 0.06px;
}

.saved-properties-card-arrow {
  flex-shrink: 0;
  margin-left: 8px;
}
</style>
