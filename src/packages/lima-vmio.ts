/**
 * **lima-vm.io** - Package from pantry: lima-vm.io
 *
 * @domain `lima-vm.io`
 *
 * @install `launchpad install lima-vm.io`
 * @dependencies `qemu.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.limavmio
 * console.log(pkg.name)        // "lima-vm.io"
 * console.log(pkg.description) // "Package from pantry: lima-vm.io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/lima-vm-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const limavmioPackage = {
  /**
   * The display name of this package.
   */
  name: 'lima-vm.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'lima-vm.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: lima-vm.io' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install lima-vm.io' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +lima-vm.io -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install lima-vm.io' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'qemu.org',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/lima-vm.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type LimavmioPackage = typeof limavmioPackage
