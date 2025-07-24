/**
 * **asciinema.org** - Package from pantry: asciinema.org
 *
 * @domain `asciinema.org`
 *
 * @install `launchpad install asciinema.org`
 * @dependencies `python.org^3.12`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.asciinemaorg
 * console.log(pkg.name)        // "asciinema.org"
 * console.log(pkg.description) // "Package from pantry: asciinema.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/asciinema-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const asciinemaorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'asciinema.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'asciinema.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: asciinema.org' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install asciinema.org' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +asciinema.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install asciinema.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org^3.12',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/asciinema.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type AsciinemaorgPackage = typeof asciinemaorgPackage
