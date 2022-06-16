import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { execSync } from "child_process";

const getCurrentGitCommit = () => {
  try {
    const gitCommit = execSync("git rev-parse HEAD").toString();
    return gitCommit.substring(0, 7);
  } catch (error) {
    return "";
  }
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  define: {
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version || "?"),
    __GIT_COMMIT__: JSON.stringify(getCurrentGitCommit() || "?"),
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
