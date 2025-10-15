/**
 * **libpsl** - C library for the Public Suffix List
 *
 * @domain `rockdaboot.github.io/libpsl`
 * @version `0.21.5` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install rockdaboot.github.io/libpsl`
 * @homepage https://rockdaboot.github.io/libpsl
 * @dependencies `unicode.org^71`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.rockdabootgithubiolibpsl
 * console.log(pkg.name)        // "libpsl"
 * console.log(pkg.description) // "C library for the Public Suffix List"
 * console.log(pkg.versions[0]) // "0.21.5" (latest)
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
  description: 'C library for the Public Suffix List' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/rockdaboot.github.io/libpsl/package.yml' as const,
  homepageUrl: 'https://rockdaboot.github.io/libpsl' as const,
  githubUrl: 'https://github.com/rockdaboot/libpsl' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install rockdaboot.github.io/libpsl' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +rockdaboot.github.io/libpsl -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install rockdaboot.github.io/libpsl' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'unicode.org^71',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.21.5',
    '0.21.2',
  ] as const,
  aliases: [] as const,
}

export type RockdabootgithubiolibpslPackage = typeof rockdabootgithubiolibpslPackage
