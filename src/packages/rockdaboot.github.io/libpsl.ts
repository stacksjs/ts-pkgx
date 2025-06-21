/**
 * **libpsl** - Package from pantry: rockdaboot.github.io/libpsl
 *
 * @domain `rockdaboot.github.io/libpsl`
 *
 * @install `launchpad install rockdaboot.github.io/libpsl`
 * @dependencies `unicode.org^71`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.rockdabootgithubiolibpsl
 * console.log(pkg.name)        // "libpsl"
 * console.log(pkg.description) // "Package from pantry: rockdaboot.github.io/libpsl"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/rockdaboot-github-io/libpsl.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const rockdabootgithubiolibpslPackage = {
  /**
   * The display name of this package.
   */
  name: 'libpsl' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'rockdaboot.github.io/libpsl' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: rockdaboot.github.io/libpsl' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install rockdaboot.github.io/libpsl' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'unicode.org^71',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/rockdaboot.github.io/libpsl/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type RockdabootgithubiolibpslPackage = typeof rockdabootgithubiolibpslPackage
