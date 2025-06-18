/**
 * **libmd** - BSD Mesage Digest library (mirror)
 *
 * @domain `hadrons.org/libmd`
 * @version `1.1.0` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +hadrons.org/libmd -- $SHELL -i`
 * @dependencies `gnu.org/patch`, `crates.io/semverator`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.hadronsorglibmd
 * console.log(pkg.name)        // "libmd"
 * console.log(pkg.description) // "BSD Mesage Digest library (mirror)"
 * console.log(pkg.versions[0]) // "1.1.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/hadrons-org/libmd.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const hadronsorglibmdPackage = {
  /**
   * The display name of this package.
   */
  name: 'libmd' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'hadrons.org/libmd' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'BSD Mesage Digest library (mirror)' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/hadrons.org/libmd/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install +hadrons.org/libmd -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnu.org/patch',
    'crates.io/semverator',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.1.0',
    '1.0.4',
  ] as const,
  aliases: [] as const,
}

export type HadronsorglibmdPackage = typeof hadronsorglibmdPackage
