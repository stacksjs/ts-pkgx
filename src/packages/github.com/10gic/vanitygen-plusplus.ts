/**
 * **vanitygen-plusplus** - pkgx package
 *
 * @domain `github.com/10gic/vanitygen-plusplus`
 * @version `0.2.0` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install github.com/10gic/vanitygen-plusplus`
 * @dependencies `openssl.org^1.1`, `curl.se^8`, `pcre.org^8`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcom10gicvanitygenplusplus
 * console.log(pkg.name)        // "vanitygen-plusplus"
 * console.log(pkg.versions[0]) // "0.2.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/10gic/vanitygen-plusplus.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const vanitygenplusplusPackage = {
  /**
   * The display name of this package.
   */
  name: 'vanitygen-plusplus' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/10gic/vanitygen-plusplus' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/10gic/vanitygen-plusplus/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/10gic/vanitygen-plusplus' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/10gic/vanitygen-plusplus -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/10gic/vanitygen-plusplus' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Runtime dependencies for this package.
   * These are required when running the package.
   */
  dependencies: [
    'openssl.org^1.1',
    'curl.se^8',
    'pcre.org^8',
  ] as const,
  buildDependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.2.0',
  ] as const,
  aliases: [] as const,
}

export type VanitygenplusplusPackage = typeof vanitygenplusplusPackage
