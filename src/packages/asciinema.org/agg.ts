/**
 * **agg** - Package from pantry: asciinema.org/agg
 *
 * @domain `asciinema.org/agg`
 *
 * @install `launchpad install asciinema.org/agg`
 * @dependencies `rust-lang.org^1.56`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.asciinemaorgagg
 * console.log(pkg.name)        // "agg"
 * console.log(pkg.description) // "Package from pantry: asciinema.org/agg"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/asciinema-org/agg.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const asciinemaorgaggPackage = {
  /**
   * The display name of this package.
   */
  name: 'agg' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'asciinema.org/agg' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: asciinema.org/agg' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install asciinema.org/agg' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +asciinema.org/agg -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install asciinema.org/agg' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'rust-lang.org^1.56',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/asciinema.org/agg/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type AsciinemaorgaggPackage = typeof asciinemaorgaggPackage
