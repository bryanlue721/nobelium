const BLOG = {
  title: 'Bryan Lue',
  author: 'Bryan Lue',
  email: 'hello@bryanlue.me',
  link: 'https://bryanlue.vercel.app',
  description: 'Hello! I am Bryan, a student based in Kuala Lumpur. On this site I will be sharing my opinions on world events, technology related tips, and various ideas. ',
  lang: 'en-US', // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES']
  appearance: 'auto', // ['light', 'dark', 'auto'],
  font: 'sans-serif', // ['sans-serif', 'serif']
  lightBackground: '#ffffff', // use hex value, don't forget '#' e.g #fffefc
  darkBackground: '#18181B', // use hex value, don't forget '#'
  path: '', // leave this empty unless you want to deploy Nobelium in a folder
  since: 2020, // If leave this empty, current year will be used.
  postsPerPage: 7,
  sortByDate: false,
  showAbout: true,
  showArchive: true,
  autoCollapsedNavBar: false, // The automatically collapsed navigation bar
  ogImageGenerateURL: '', // The link to generate OG image, don't end with a slash
  socialLink: 'https://twitter.com/bryanlue721',
  seo: {
    keywords: ['Bryan Lue', 'Political Science', 'International Relations', 'Technology', 'Computer Hardware', 'Kuala Lumpur'],
    googleSiteVerification: '' // Remove the value or replace it with your own google site verification code
  },
  notionPageId: process.env.NOTION_PAGE_ID, // DO NOT CHANGE THIS！！！
  notionAccessToken: process.env.NOTION_ACCESS_TOKEN, // Useful if you prefer not to make your database public
  analytics: {
    provider: 'ackee', // Currently we support Google Analytics and Ackee, please fill with 'ga' or 'ackee', leave it empty to disable it.
    ackeeConfig: {
      tracker: 'https://ackee.bryanlue.me/tracker.js', // e.g 'https://ackee.craigary.net/tracker.js'
      dataAckeeServer: 'https://ackee.bryanlue.me', // e.g https://ackee.craigary.net , don't end with a slash
      domainId: 'e49f3454-d19a-4f36-8b8d-9ba7fe6c27c7' // e.g '0e2257a8-54d4-4847-91a1-0311ea48cc7b'
    },
    gaConfig: {
      measurementId: '' // e.g: G-XXXXXXXXXX
    }
  },
  comment: {
    // support provider: gitalk, utterances, cusdis
    provider: 'utterances', // leave it empty if you don't need any comment plugin
    gitalkConfig: {
      repo: '', // The repository of store comments
      owner: '',
      admin: [],
      clientID: '',
      clientSecret: '',
      distractionFreeMode: false
    },
    utterancesConfig: {
      repo: 'bryanlue721/utterances'
    },
    cusdisConfig: {
      appId: '', // data-app-id
      host: 'https://cusdis.com', // data-host, change this if you're using self-hosted version
      scriptSrc: 'https://cusdis.com/js/cusdis.es.js' // change this if you're using self-hosted version
    }
  },
  isProd: process.env.VERCEL_ENV === 'production' // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}
// export default BLOG
module.exports = BLOG
