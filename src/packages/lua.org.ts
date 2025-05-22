/**
 * Generated from pkgx.dev data
 */
export const luaorgPackage = {
  programs: [
    "lua",
    "luac",
  ] as const,
  companions: [
    "luarocks.org",
  ] as const,
  dependencies: [
    "gnu.org/readline",
  ] as const,
  versions: [
    "5.4.7",
    "5.4.6",
    "5.4.4",
  ] as const,
  name: "lua.org" as const,
  domain: "lua.org" as const,
  description: "Package information for lua.org" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/lua.org/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +lua.org -- $SHELL -i" as const,
}

export type LuaorgPackage = typeof luaorgPackage
