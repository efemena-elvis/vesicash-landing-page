import { app } from "../../main";
import * as prismicH from '@prismicio/helpers'

export default {
  async fetchAboutPage({commit}) {

    window?.NProgress.start();
    const about = await app.$prismic.client.getSingle("about_page");
    window?.NProgress.done();

    // const page = {
    //    title:prismicH.asHTML(about.data.title)
    // }
    console.log("ABOUT PAGE HERE", about);
    // commit('SAVE_ABOUT_PAGE', page)

    return about;
  },
};
