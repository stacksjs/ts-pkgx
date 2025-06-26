/**
 * **modal.com** - Package from pantry: modal.com
 *
 * @domain `modal.com`
 *
 * @install `launchpad install modal.com`
 * @dependencies `pkgx.sh@1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.modalcom
 * console.log(pkg.name)        // "modal.com"
 * console.log(pkg.description) // "Package from pantry: modal.com"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/modal-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const modalcomPackage = {
  /**
   * The display name of this package.
   */
  name: 'modal.com' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'modal.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: modal.com' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install modal.com' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +modal.com -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install modal.com' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'pkgx.sh@1',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/modal.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type ModalcomPackage = typeof modalcomPackage
