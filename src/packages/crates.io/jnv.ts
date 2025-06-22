/**
 * **jnv** - Package from pantry: crates.io/jnv
 *
 * @domain `crates.io/jnv`
 *
 * @install `launchpad install crates.io/jnv`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesiojnv
 * console.log(pkg.name)        // "jnv"
 * console.log(pkg.description) // "Package from pantry: crates.io/jnv"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/jnv.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesiojnvPackage = {
  /**
   * The display name of this package.
   */
  name: 'jnv' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/jnv' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: crates.io/jnv' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install crates.io/jnv' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +crates.io/jnv -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install crates.io/jnv' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/jnv/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CratesiojnvPackage = typeof cratesiojnvPackage
