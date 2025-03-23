import { defineConfig } from "vite";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

// https://vite.dev/config/
export default defineConfig({
  plugins: [],
  build: {
    // 빌드 출력 디렉토리
    outDir: "dist",
    // 라이브러리 모드로 빌드
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      formats: ["es"],
      fileName: "code",
    },
    // 피그마 플러그인 엔트리포인트를 위한 설정
    rollupOptions: {},
    // 소스맵 생성
    sourcemap: true,
    // 빌드시 콘솔 로그 지우지 않음
    minify: false,
  },
});
