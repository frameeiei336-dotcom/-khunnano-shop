(function () {
  window.khunnanoLogin = {
    async signUp(email, password) {
      const supabase = await window.khunnanoAuth.ready;

      return await supabase.auth.signUp({
        email,
        password
      });
    },

    async signIn(email, password) {
      const supabase = await window.khunnanoAuth.ready;

      return await supabase.auth.signInWithPassword({
        email,
        password
      });
    },

    async signOut() {
      const supabase = await window.khunnanoAuth.ready;

      return await supabase.auth.signOut();
    },

    async getUser() {
      const supabase = await window.khunnanoAuth.ready;

      const { data, error } = await supabase.auth.getUser();

      return { data, error };
    }
  };
})();
