// // _document.js
// import { Html, Head, Main, NextScript } from 'next/document'

// export default function Document() {

//   return (
//     <Html lang="en">
//       <Head>
//         {/* Global Site Tag (gtag.js) - Google Analytics */}
//         <script
//           async
//           src={`https://www.googletagmanager.com/gtag/js?id=G-B71N5R0MH5`}
//         />
//         <script
//           dangerouslySetInnerHTML={{
//             __html: `
//               window.dataLayer = window.dataLayer || [];
//               function gtag(){dataLayer.push(arguments);}
//               gtag('js', new Date());
//               gtag('consent', 'default', {
//                 'ad_storage': 'denied',
//                 'ad_user_data': 'denied',
//                 'ad_personalization': 'denied',
//                 'analytics_storage': 'denied'
//               });
//               gtag('config', 'G-B71N5R0MH5', {
//                 page_path: window.location.pathname,
//               });
//             `,
//           }}
//         />
//       </Head>
//       <body>
//         <Main />
//         <NextScript />
//       </body>
//     </Html>
//   )
// }

// _document.js
// _document.js
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {

  return (
    <Html lang="en">
      <Head>
        {/* Set the default consent state without loading the GA script */}
        {/* <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('consent', 'default', {
                'ad_storage': 'denied',
                'analytics_storage': 'denied',
                'functionality_storage': 'denied',
                'personalization_storage': 'denied',
              });
            `,
          }}
          5de3ee48-7d5d-4dee-8845-a8f7adcbf1e1
        /> */}
        <script async id="Cookiebot" src="https://consent.cookiebot.com/uc.js" data-cbid="5de3ee48-7d5d-4dee-8845-a8f7adcbf1e1" data-blockingmode="auto" type="text/javascript"></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
