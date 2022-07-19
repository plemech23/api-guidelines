/* eslint-disable import/no-extraneous-dependencies */
// This is used to run the app locally
// It uses defautls from portal common
import "vue";
import "vuex";
import "vue-router";

import { createDefaultApp } from "@otto-ec/ottoapi-portal-common";
import guidelines, {
  definedTestingTopNav,
  definedTestingSideNav,
} from "@otto-ec/ottoapi-portal-guidelines";

/** This is used to add missing "/" route to the dev app" */
guidelines.routes = [...guidelines.routes, { path: "/", name: "home", redirect: "/guidelines" }];

createDefaultApp({
  modules: [guidelines],
  definedSideNav: definedTestingSideNav,
  definedTopNav: definedTestingTopNav,
});
