/**
 * **sigrs** - Package from pantry: crates.io/sigrs
 *
 * @domain `crates.io/sigrs`
 *
 * @install `launchpad install crates.io/sigrs`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesiosigrs
 * console.log(pkg.name)        // "sigrs"
 * console.log(pkg.description) // "Package from pantry: crates.io/sigrs"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/sigrs.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesiosigrsPackage = {
  /**
   * The display name of this package.
   */
  name: 'sigrs' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/sigrs' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: crates.io/sigrs' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install crates.io/sigrs' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +crates.io/sigrs -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install crates.io/sigrs' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/sigrs/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CratesiosigrsPackage = typeof cratesiosigrsPackage
