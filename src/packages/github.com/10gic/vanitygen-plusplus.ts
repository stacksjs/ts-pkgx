/**
 * **vanitygen-plusplus** - A vanity address generator for BTC, ETH, LTC, TRX and 100+ more crypto currencies.
 *
 * @domain `github.com/10gic/vanitygen-plusplus`
 * @programs `vanitygen++`, `keyconv`, `oclvanitygen++`, `oclvanityminer`
 * @version `0.2.0` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +github.com/10gic/vanitygen-plusplus -- $SHELL -i`
 * @dependencies `openssl.org^1.1`, `curl.se^8`, `pcre.org^8`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcom10gicvanitygenplusplus
 * console.log(pkg.name)        // "vanitygen-plusplus"
 * console.log(pkg.description) // "A vanity address generator for BTC, ETH, LTC, T..."
 * console.log(pkg.programs)    // ["vanitygen++", "keyconv", ...]
 * console.log(pkg.versions[0]) // "0.2.0" (latest)
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
  description: 'A vanity address generator for BTC, ETH, LTC, TRX and 100+ more crypto currencies.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/10gic/vanitygen-plusplus/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install +github.com/10gic/vanitygen-plusplus -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'vanitygen++',
    'keyconv',
    'oclvanitygen++',
    'oclvanityminer',
  ] as const,
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
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.2.0',
  ] as const,
  aliases: [] as const,
}

export type Githubcom10gicvanitygenplusplusPackage = typeof githubcom10gicvanitygenplusplusPackage
