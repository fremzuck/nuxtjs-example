<template>
  <b-container class="bv-example-row mb-3">
    <div class="football">
      <b-row cols="4">
        <b-col v-for="photo in photos" :key="photo.id">
          <b-img :src="photo.download_url" fluid :alt="photo.author"></b-img>
          <div class="underimg">{{ photo.author }}</div>
        </b-col>
      </b-row>
    </div>
  </b-container>
</template>

<script>
export default {
  head(){
    return{
      title : 'Nuxtjs by FREMZUCK'
    }
  },
  async asyncData({ $axios }) {
    const photos = await $axios.$get('https://picsum.photos/v2/list?limit=24')
    return { photos }
  },
};
</script>