/**
 * **docuum** - Package from pantry: crates.io/docuum
 *
 * @domain `crates.io/docuum`
 *
 * @install `launchpad install crates.io/docuum`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesiodocuum
 * console.log(pkg.name)        // "docuum"
 * console.log(pkg.description) // "Package from pantry: crates.io/docuum"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/docuum.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesiodocuumPackage = {
  /**
   * The display name of this package.
   */
  name: 'docuum' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/docuum' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: crates.io/docuum' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install crates.io/docuum' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +crates.io/docuum -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install crates.io/docuum' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/docuum/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CratesiodocuumPackage = typeof cratesiodocuumPackage
