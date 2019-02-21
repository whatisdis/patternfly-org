/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
require('./_repos/core/src/patternfly/patternfly.scss');

/**
 * Display message when update is available, see:
 * https://www.gatsbyjs.org/docs/add-offline-support-with-a-service-worker/#displaying-a-message-when-a-service-worker-updates
 */
// exports.onServiceWorkerUpdateReady = () => {
//   const answer = window.confirm(
//     `A newer version of the site is available. ` +
//       `Reload to display the latest version?`
//   )

//   if (answer === true) {
//     window.location.reload()
//   }
// }

// const scrollTo = id => () => {	
//   const hash = id.replace('#', '');
//   const element = document.getElementById(hash);
//   if (element) {
//     const offset = element.offsetTop;
//     // Wait for the browser to finish rendering before scrolling.
//     setTimeout((function() {
//       window.scrollTo(0, offset - 16)
//     }), 0);
//   }
// };	

//  export const onRouteUpdate = ({ location }) => {	
//   const { hash } = location;
//   console.log(location);
//   if (hash) {	
//     window.setTimeout(scrollTo(hash), 10);	
//   }	
// };