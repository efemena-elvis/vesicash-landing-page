import { app } from "../../main";
import * as prismicH from '@prismicio/helpers'

export default {
  async fetchAboutPage({commit}) {
    window?.NProgress.start();
    const response = await app.$prismic.client.getSingle("about_page");
    window?.NProgress.done();
    
    if(response?.data){
      const about = {
        hero_title_1: prismicH.asText(response.data?.hero_title_1),
        hero_title_2: prismicH.asText(response.data?.hero_title_2),
        hero_description:prismicH.asText(response.data?.hero_description),
        value_title:prismicH.asText(response.data?.value_title),
        values:response.data?.values?.map(value=>({
          index:prismicH.asText(value.index),
          title:prismicH.asText(value.value_title),
          description:prismicH.asText(value.value_description)
        })),
        service_title:prismicH.asText(response.data?.service_title),
        service_description:prismicH.asText(response.data?.service_description),
        labels:{
          view_doc_cta:prismicH.asText(response.data?.view_doc_button_title),
          contact_cta:prismicH.asText(response.data?.contact_button_title)
        }
      }
      commit('SAVE_ABOUT_PAGE', about)
    }
    return response;
  },
};
