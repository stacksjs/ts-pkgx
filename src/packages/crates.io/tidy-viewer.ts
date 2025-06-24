/**
 * **tidy-viewer** - Package from pantry: crates.io/tidy-viewer
 *
 * @domain `crates.io/tidy-viewer`
 *
 * @install `launchpad install crates.io/tidy-viewer`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesiotidyviewer
 * console.log(pkg.name)        // "tidy-viewer"
 * console.log(pkg.description) // "Package from pantry: crates.io/tidy-viewer"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/tidy-viewer.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesiotidyviewerPackage = {
  /**
   * The display name of this package.
   */
  name: 'tidy-viewer' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/tidy-viewer' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: crates.io/tidy-viewer' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install crates.io/tidy-viewer' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +crates.io/tidy-viewer -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install crates.io/tidy-viewer' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/tidy-viewer/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CratesiotidyviewerPackage = typeof cratesiotidyviewerPackage
