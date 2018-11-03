<template>
  <div class="page">
    <div class="access">
      <h2>Location</h2>
      <div class="link-to-google-maps">
        <p class="address">
          〒894-0004 鹿児島県奄美市名瀬鳩浜町208-2
        </p>
        <a href="https://goo.gl/maps/AzfRieQzMTz" class="button button-access">
          <span class="icon">
            <svg 
              width="20"
              height="30"
              aria-hidden="true" 
              role="img" 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 384 512">
              <path fill="currentColor" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
            </svg>
          </span>
          <span class="label">グーゲルマップへ</span>
        </a>
        <a href="https://goo.gl/maps/GDdTMuxhWZA2" class="button button-access">
          <span class="icon">          
            <svg 
              width="30"
              height="30"
              aria-hidden="true" 
              data-icon="street-view" 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 512 512"><path fill="currentColor" d="M367.9 329.76c-4.62 5.3-9.78 10.1-15.9 13.65v22.94c66.52 9.34 112 28.05 112 49.65 0 30.93-93.12 56-208 56S48 446.93 48 416c0-21.6 45.48-40.3 112-49.65v-22.94c-6.12-3.55-11.28-8.35-15.9-13.65C58.87 345.34 0 378.05 0 416c0 53.02 114.62 96 256 96s256-42.98 256-96c0-37.95-58.87-70.66-144.1-86.24zM256 128c35.35 0 64-28.65 64-64S291.35 0 256 0s-64 28.65-64 64 28.65 64 64 64zm-64 192v96c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-96c17.67 0 32-14.33 32-32v-96c0-26.51-21.49-48-48-48h-11.8c-11.07 5.03-23.26 8-36.2 8s-25.13-2.97-36.2-8H208c-26.51 0-48 21.49-48 48v96c0 17.67 14.33 32 32 32z"></path></svg>
          </span>
          <span class="label">グーゲルマップへ</span>
        </a>
      </div>
      <iframe         
        width="100%" 
        height="450" 
        frameborder="0" 
        style="border:0"
        src="https://www.google.com/maps/embed/v1/place?q=%E3%83%9E%E3%83%BC%E3%82%AB%E3%82%B9%E3%81%AE%E8%8B%B1%E4%BC%9A%E8%A9%B1%E6%95%99%E5%AE%A4&key=AIzaSyAD5hRwxGG97IJddSwQXQwWZd_MlAng6uM&language=ja" 
        allowfullscreen></iframe>
      <div class="street-view-images">
        <img src="https://maps.googleapis.com/maps/api/streetview?size=800x400&location=28.3990164,129.5208716&fov=100&heading=10&pitch=0&key=AIzaSyAD5hRwxGG97IJddSwQXQwWZd_MlAng6uM" alt="">
        <img src="https://maps.googleapis.com/maps/api/streetview?size=800x400&location=28.3990164,129.5208716&fov=45&heading=0&pitch=0&key=AIzaSyAD5hRwxGG97IJddSwQXQwWZd_MlAng6uM" alt="">       
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'Access',

  components: {},
  data: () => ({

  })}

</script>