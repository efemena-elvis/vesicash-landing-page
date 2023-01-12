import $api from "@/services/service-api";

const routes = {
  location: "https://ip2c.org/s",
  contact_url: "/auth/contact-us",
  blog_url: "https://blog.vesicash.com/wp-json/wp/v2/posts",
};

export default {
  // ==============================
  // GET CURRENT USER LOCATION
  // ==============================
  async getMyLocation() {
    return await $api.fetchRaw(routes.location);
  },

  // ==================================
  // HANDLE CONTACT FORM PROCESSING
  // ==================================
  async handleContactUs(_, payload) {
    return await $api.push(routes.contact_url, { payload });
  },

  // ==============================
  // GET ALL BLOG POST
  // ==============================
  async loadBlogPost({ commit }, { page = 1 }) {
    let response = await $api.fetchRaw(
      `${routes.blog_url}?page=${page}&_embed`,
      {
        resolve: false,
      }
    );

    let { status, data, headers } = response;

    if (status === 200) {
      commit("UPDATE_BLOG_POST", {
        data,
        paging: {
          current_page: page,
          total_pages: Number(headers["x-wp-totalpages"] ?? 1),
          total_post: Number(headers["x-wp-total"] ?? 0),
        },
      });
    }
    return data;
  },

  // ==============================
  // GET SINGLE BLOG POST
  // ==============================
  async getSingleBlogPost(_, post_id) {
    return await $api.fetchRaw(`${routes.blog_url}/${post_id}?_embed`, {
      resolve: false,
    });
  },
};
