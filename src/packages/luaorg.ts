/**
 * **lua.org** - Package from pantry: lua.org
 *
 * @domain `lua.org`
 *
 * @install `launchpad install lua.org`
 * @dependencies `gnu.org/readline`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.luaorg
 * console.log(pkg.name)        // "lua.org"
 * console.log(pkg.description) // "Package from pantry: lua.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/lua-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const luaorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'lua.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'lua.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: lua.org' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install lua.org' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +lua.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install lua.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnu.org/readline',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/lua.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type LuaorgPackage = typeof luaorgPackage
