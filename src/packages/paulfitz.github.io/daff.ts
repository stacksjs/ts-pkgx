/**
 * **daff** - Package from pantry: paulfitz.github.io/daff
 *
 * @domain `paulfitz.github.io/daff`
 *
 * @install `launchpad install paulfitz.github.io/daff`
 * @dependencies `pkgx.sh^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.paulfitzgithubiodaff
 * console.log(pkg.name)        // "daff"
 * console.log(pkg.description) // "Package from pantry: paulfitz.github.io/daff"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/paulfitz-github-io/daff.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const paulfitzgithubiodaffPackage = {
  /**
   * The display name of this package.
   */
  name: 'daff' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'paulfitz.github.io/daff' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: paulfitz.github.io/daff' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install paulfitz.github.io/daff' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +paulfitz.github.io/daff -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install paulfitz.github.io/daff' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'pkgx.sh^1',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/paulfitz.github.io/daff/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type PaulfitzgithubiodaffPackage = typeof paulfitzgithubiodaffPackage
