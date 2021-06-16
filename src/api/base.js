export const isDeveloping = NODE_ENV !== 'production';
export const isTesting =
  NODE_ENV === 'production' && WEBPACK_BUILD_TYPE === 'test';
export const isReleasing =
  NODE_ENV === 'production' && WEBPACK_BUILD_TYPE === 'release';

// let BASEURL;

// if (isDeveloping) {
//   BASEURL = DEV_BASEURL;
//   //   mockRequest();
// } else if (isTesting) {
//   BASEURL = TEST_BASEURL;
// } else {
//   BASEURL = RELEASE_BASEURL;
// }
