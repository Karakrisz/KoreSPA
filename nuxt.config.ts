// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  css: ['~/assets/scss/main.scss', '~/assets/scss/fonts.scss'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  ssr: true,
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
    {
      path: '~/components/ui',
      prefix: '',
      global: true,
    },
  ],
  modules: [
    '@nuxt/image',
    '@nuxtjs/sitemap',
    'nuxt-phosphor-icons',
    '@formkit/auto-animate/nuxt',
    [
      'nuxt-mail',
      {
        message: {
          to: 'web@koreagro.info',
        },
        smtp: {
          host: 's56.tarhely.com',
          port: 587,
          auth: {
            user: 'web@koreagro.info',
            pass: '#+SpM_HR~QCy',
          },
        },
      },
    ],
    'nuxt-mail',
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          Montserrat: true,
        },
      },
    ],
  ],
  app: {
    head: {
      title: 'Kore Agro',
      htmlAttrs: {
        lang: 'hu',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'Nálunk a technológia találkozik a természettel. Új és használt mezőgazdasági gépek gazdag kínálatával segítjük Önt abban, hogy a legjobb teljesítményt hozza ki földjeiből.',
        },
        { name: 'format-detection', content: 'telephone=no' },
        { hid: 'robots', name: 'robots', content: 'index, follow' },
        {
          'http-equiv': 'Content-Security-Policy',
          content: `
            default-src 'self' https: data:;
            img-src 'self' https: http: data:;
            font-src 'self' https: data:;
            style-src 'self' https: 'unsafe-inline';
            script-src 'self' https: 'unsafe-inline' 'unsafe-eval';
          `,
        },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://www.koreagro.info' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap',
        },
      ],
    },
  },

  site: {
    url: 'https://www.koreagro.hu',
    trailingSlash: true,
  },
});
