/**
 * Generated from pkgx.dev data
 */
export const luarocksorgPackage = {
  programs: [
    "luarocks",
    "luarocks-admin",
  ] as const,
  companions: [] as const,
  dependencies: [
    "lua.org",
    "info-zip.org/unzip",
  ] as const,
  versions: [
    "3.11.1",
    "3.11.0",
    "3.10.0",
    "3.9.2",
  ] as const,
  name: "luarocks.org" as const,
  domain: "luarocks.org" as const,
  description: "Package information for luarocks.org" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/luarocks.org/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +luarocks.org -- $SHELL -i" as const,
}

export type LuarocksorgPackage = typeof luarocksorgPackage
