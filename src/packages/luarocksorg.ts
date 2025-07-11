/**
 * **luarocks.org** - Package from pantry: luarocks.org
 *
 * @domain `luarocks.org`
 *
 * @install `launchpad install luarocks.org`
 * @dependencies `lua.org`, `info-zip.org/unzip`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.luarocksorg
 * console.log(pkg.name)        // "luarocks.org"
 * console.log(pkg.description) // "Package from pantry: luarocks.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/luarocks-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const luarocksorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'luarocks.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'luarocks.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: luarocks.org' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install luarocks.org' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +luarocks.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install luarocks.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'lua.org',
    'info-zip.org/unzip',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/luarocks.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type LuarocksorgPackage = typeof luarocksorgPackage
