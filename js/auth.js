(function () {
  window.khunnanoAuth = {
    supabase: null,

    ready: (async function () {
      try {
        const response = await fetch("/api/supabase-config");
        const config = await response.json();

        if (!config.url || !config.key) {
          throw new Error("Supabase config not found");
        }

        window.khunnanoAuth.supabase =
          window.supabase.createClient(config.url, config.key);

        return window.khunnanoAuth.supabase;
      } catch (error) {
        console.error("Supabase Auth initialization failed:", error);
        throw error;
      }
    })()
  };
})();
