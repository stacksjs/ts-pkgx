/**
 * **libuv.org** - Package from pantry: libuv.org
 *
 * @domain `libuv.org`
 *
 * @install `launchpad install libuv.org`
 * @dependencies `curl.se`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.libuvorg
 * console.log(pkg.name)        // "libuv.org"
 * console.log(pkg.description) // "Package from pantry: libuv.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/libuv-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const libuvorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'libuv.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'libuv.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: libuv.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install libuv.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'curl.se',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/libuv.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type LibuvorgPackage = typeof libuvorgPackage
