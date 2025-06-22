/**
 * **cavif** - Package from pantry: crates.io/cavif
 *
 * @domain `crates.io/cavif`
 *
 * @install `launchpad install crates.io/cavif`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesiocavif
 * console.log(pkg.name)        // "cavif"
 * console.log(pkg.description) // "Package from pantry: crates.io/cavif"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/cavif.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesiocavifPackage = {
  /**
   * The display name of this package.
   */
  name: 'cavif' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/cavif' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: crates.io/cavif' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install crates.io/cavif' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +crates.io/cavif -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install crates.io/cavif' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/cavif/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CratesiocavifPackage = typeof cratesiocavifPackage
