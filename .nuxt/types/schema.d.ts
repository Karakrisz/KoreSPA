import { NuxtModule, RuntimeConfig } from '@nuxt/schema'
declare module '@nuxt/schema' {
  interface NuxtOptions {
    /**
     * Configuration for `@nuxt/image`
     */
    ["image"]: typeof import("@nuxt/image").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `/Applications/XAMPP/xamppfiles/htdocs/KoreSPA/node_modules/nuxt-site-config/dist/module`
     */
    ["site"]: typeof import("/Applications/XAMPP/xamppfiles/htdocs/KoreSPA/node_modules/nuxt-site-config/dist/module").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/sitemap`
     */
    ["sitemap"]: typeof import("@nuxtjs/sitemap").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-phosphor-icons`
     */
    ["phosphor"]: typeof import("nuxt-phosphor-icons").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@formkit/auto-animate/nuxt`
     */
    ["autoAnimate"]: typeof import("@formkit/auto-animate/nuxt").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/google-fonts`
     */
    ["googleFonts"]: typeof import("@nuxtjs/google-fonts").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/telemetry`
     */
    ["telemetry"]: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? O : Record<string, any>
  }
  interface NuxtConfig {
    /**
     * Configuration for `@nuxt/image`
     */
    ["image"]?: typeof import("@nuxt/image").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `/Applications/XAMPP/xamppfiles/htdocs/KoreSPA/node_modules/nuxt-site-config/dist/module`
     */
    ["site"]?: typeof import("/Applications/XAMPP/xamppfiles/htdocs/KoreSPA/node_modules/nuxt-site-config/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/sitemap`
     */
    ["sitemap"]?: typeof import("@nuxtjs/sitemap").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-phosphor-icons`
     */
    ["phosphor"]?: typeof import("nuxt-phosphor-icons").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@formkit/auto-animate/nuxt`
     */
    ["autoAnimate"]?: typeof import("@formkit/auto-animate/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/google-fonts`
     */
    ["googleFonts"]?: typeof import("@nuxtjs/google-fonts").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/telemetry`
     */
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    modules?: (undefined | null | false | NuxtModule<any> | string | [NuxtModule | string, Record<string, any>] | ["@nuxt/image", Exclude<NuxtConfig["image"], boolean>] | ["/Applications/XAMPP/xamppfiles/htdocs/KoreSPA/node_modules/nuxt-site-config/dist/module", Exclude<NuxtConfig["site"], boolean>] | ["@nuxtjs/sitemap", Exclude<NuxtConfig["sitemap"], boolean>] | ["nuxt-phosphor-icons", Exclude<NuxtConfig["phosphor"], boolean>] | ["@formkit/auto-animate/nuxt", Exclude<NuxtConfig["autoAnimate"], boolean>] | ["@nuxtjs/google-fonts", Exclude<NuxtConfig["googleFonts"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
}
declare module 'nuxt/schema' {
  interface NuxtOptions {
    /**
     * Configuration for `@nuxt/image`
     * @see https://www.npmjs.com/package/@nuxt/image
     */
    ["image"]: typeof import("@nuxt/image").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `/Applications/XAMPP/xamppfiles/htdocs/KoreSPA/node_modules/nuxt-site-config/dist/module`
     * @see https://www.npmjs.com/package//Applications/XAMPP/xamppfiles/htdocs/KoreSPA/node_modules/nuxt-site-config/dist/module
     */
    ["site"]: typeof import("/Applications/XAMPP/xamppfiles/htdocs/KoreSPA/node_modules/nuxt-site-config/dist/module").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/sitemap`
     * @see https://www.npmjs.com/package/@nuxtjs/sitemap
     */
    ["sitemap"]: typeof import("@nuxtjs/sitemap").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-phosphor-icons`
     * @see https://www.npmjs.com/package/nuxt-phosphor-icons
     */
    ["phosphor"]: typeof import("nuxt-phosphor-icons").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@formkit/auto-animate/nuxt`
     * @see https://www.npmjs.com/package/@formkit/auto-animate/nuxt
     */
    ["autoAnimate"]: typeof import("@formkit/auto-animate/nuxt").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/google-fonts`
     * @see https://www.npmjs.com/package/@nuxtjs/google-fonts
     */
    ["googleFonts"]: typeof import("@nuxtjs/google-fonts").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/telemetry`
     * @see https://www.npmjs.com/package/@nuxt/telemetry
     */
    ["telemetry"]: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? O : Record<string, any>
  }
  interface NuxtConfig {
    /**
     * Configuration for `@nuxt/image`
     * @see https://www.npmjs.com/package/@nuxt/image
     */
    ["image"]?: typeof import("@nuxt/image").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `/Applications/XAMPP/xamppfiles/htdocs/KoreSPA/node_modules/nuxt-site-config/dist/module`
     * @see https://www.npmjs.com/package//Applications/XAMPP/xamppfiles/htdocs/KoreSPA/node_modules/nuxt-site-config/dist/module
     */
    ["site"]?: typeof import("/Applications/XAMPP/xamppfiles/htdocs/KoreSPA/node_modules/nuxt-site-config/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/sitemap`
     * @see https://www.npmjs.com/package/@nuxtjs/sitemap
     */
    ["sitemap"]?: typeof import("@nuxtjs/sitemap").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-phosphor-icons`
     * @see https://www.npmjs.com/package/nuxt-phosphor-icons
     */
    ["phosphor"]?: typeof import("nuxt-phosphor-icons").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@formkit/auto-animate/nuxt`
     * @see https://www.npmjs.com/package/@formkit/auto-animate/nuxt
     */
    ["autoAnimate"]?: typeof import("@formkit/auto-animate/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/google-fonts`
     * @see https://www.npmjs.com/package/@nuxtjs/google-fonts
     */
    ["googleFonts"]?: typeof import("@nuxtjs/google-fonts").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/telemetry`
     * @see https://www.npmjs.com/package/@nuxt/telemetry
     */
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    modules?: (undefined | null | false | NuxtModule<any> | string | [NuxtModule | string, Record<string, any>] | ["@nuxt/image", Exclude<NuxtConfig["image"], boolean>] | ["/Applications/XAMPP/xamppfiles/htdocs/KoreSPA/node_modules/nuxt-site-config/dist/module", Exclude<NuxtConfig["site"], boolean>] | ["@nuxtjs/sitemap", Exclude<NuxtConfig["sitemap"], boolean>] | ["nuxt-phosphor-icons", Exclude<NuxtConfig["phosphor"], boolean>] | ["@formkit/auto-animate/nuxt", Exclude<NuxtConfig["autoAnimate"], boolean>] | ["@nuxtjs/google-fonts", Exclude<NuxtConfig["googleFonts"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
  interface RuntimeConfig {
   app: {
      buildId: string,

      baseURL: string,

      buildAssetsDir: string,

      cdnURL: string,
   },

   nitro: {
      envPrefix: string,
   },

   sitemap: {
      isI18nMapped: boolean,

      sitemapName: string,

      isMultiSitemap: boolean,

      excludeAppSources: Array<any>,

      cacheMaxAgeSeconds: number,

      autoLastmod: boolean,

      defaultSitemapsChunkSize: number,

      minify: boolean,

      sortEntries: boolean,

      debug: boolean,

      discoverImages: boolean,

      discoverVideos: boolean,

      sitemapsPathPrefix: string,

      isNuxtContentDocumentDriven: boolean,

      xsl: string,

      xslTips: boolean,

      xslColumns: Array<{

      }>,

      credits: boolean,

      version: string,

      sitemaps: {
         "sitemap.xml": {
            sitemapName: string,

            route: string,

            defaults: any,

            include: Array<any>,

            exclude: Array<string>,

            includeAppSources: boolean,
         },
      },
   },

   "nuxt-site-config": {
      stack: Array<{

      }>,

      version: string,

      debug: boolean,
   },
  }
  interface PublicRuntimeConfig {

  }
}
declare module 'vue' {
        interface ComponentCustomProperties {
          $config: RuntimeConfig
        }
      }