/**
 * **ag** - Package from pantry: geoff.greer.fm/ag
 *
 * @domain `geoff.greer.fm/ag`
 *
 * @install `launchpad install geoff.greer.fm/ag`
 * @dependencies `pcre.org^8`, `tukaani.org/xz^5.4.5`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.geoffgreerfmag
 * console.log(pkg.name)        // "ag"
 * console.log(pkg.description) // "Package from pantry: geoff.greer.fm/ag"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/geoff-greer-fm/ag.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const geoffgreerfmagPackage = {
  /**
   * The display name of this package.
   */
  name: 'ag' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'geoff.greer.fm/ag' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: geoff.greer.fm/ag' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install geoff.greer.fm/ag' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +geoff.greer.fm/ag -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install geoff.greer.fm/ag' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'pcre.org^8',
    'tukaani.org/xz^5.4.5',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/geoff.greer.fm/ag/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GeoffgreerfmagPackage = typeof geoffgreerfmagPackage
