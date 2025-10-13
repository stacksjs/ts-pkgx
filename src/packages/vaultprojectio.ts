/**
 * **vaultproject.io** - Package from pantry: vaultproject.io
 *
 * @domain `vaultproject.io`
 *
 * @install `launchpad install vaultproject.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.vaultprojectio
 * console.log(pkg.name)        // "vaultproject.io"
 * console.log(pkg.description) // "Package from pantry: vaultproject.io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/vaultproject-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const vaultprojectioPackage = {
  /**
   * The display name of this package.
   */
  name: 'vaultproject.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'vaultproject.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: vaultproject.io' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install vaultproject.io' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +vaultproject.io -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install vaultproject.io' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/vaultproject.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type VaultprojectioPackage = typeof vaultprojectioPackage
