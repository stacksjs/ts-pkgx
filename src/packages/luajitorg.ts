/**
 * **luajit.org** - Package from pantry: luajit.org
 *
 * @domain `luajit.org`
 *
 * @install `launchpad install luajit.org`
 * @dependencies `gnu.org/gcc`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.luajitorg
 * console.log(pkg.name)        // "luajit.org"
 * console.log(pkg.description) // "Package from pantry: luajit.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/luajit-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const luajitorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'luajit.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'luajit.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: luajit.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install luajit.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnu.org/gcc',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/luajit.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type LuajitorgPackage = typeof luajitorgPackage
