/**
 * **vanitygen-plusplus** - Package from pantry: github.com/10gic/vanitygen-plusplus
 *
 * @domain `github.com/10gic/vanitygen-plusplus`
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
 * console.log(pkg.description) // "Package from pantry: github.com/10gic/vanitygen..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/10gic/vanitygen-plusplus.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcom10gicvanitygenplusplusPackage = {
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
  description: 'Package from pantry: github.com/10gic/vanitygen-plusplus' as const,
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
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openssl.org^1.1',
    'curl.se^8',
    'pcre.org^8',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/10gic/vanitygen-plusplus/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type Githubcom10gicvanitygenplusplusPackage = typeof githubcom10gicvanitygenplusplusPackage
