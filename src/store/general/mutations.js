export default {
  UPDATE_BLOG_POST: (state, { data, paging }) => {
    state.blog_post_data = data;
    state.blog_post_paging = { ...state.blog_post_paging, ...paging };
  },
};
