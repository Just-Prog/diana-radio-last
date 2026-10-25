import { mkdirSync } from "node:fs";
import path from "node:path";

const projectRoot = path.join(import.meta.dir, "..");
const localStateDir = path.join(projectRoot, ".wrangler", "local");

// Wrangler writes its registry/logs under %APPDATA%\xdg.config and Miniflare
// creates its temp dirs under the system temp dir. Sandboxed shells only allow
// writes inside the workspace, so keep all of that state in .wrangler/local.
const redirectedEnv = {
  TEMP: path.join(localStateDir, "tmp"),
  TMP: path.join(localStateDir, "tmp"),
  TMPDIR: path.join(localStateDir, "tmp"),
  XDG_CACHE_HOME: path.join(localStateDir, "cache"),
  XDG_CONFIG_HOME: path.join(localStateDir, "config"),
} as const;

for (const dir of Object.values(redirectedEnv)) {
  mkdirSync(dir, { recursive: true });
}

const devProcess = Bun.spawn(
  [process.execPath, "run", "--parallel", "dev:web", "dev:worker"],
  {
    cwd: projectRoot,
    env: { ...process.env, ...redirectedEnv },
    stdio: ["inherit", "inherit", "inherit"],
  }
);

process.exit(await devProcess.exited);
