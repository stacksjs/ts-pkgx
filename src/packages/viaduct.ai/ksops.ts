/**
 * **ksops** - Package from pantry: viaduct.ai/ksops
 *
 * @domain `viaduct.ai/ksops`
 *
 * @install `launchpad install viaduct.ai/ksops`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.viaductaiksops
 * console.log(pkg.name)        // "ksops"
 * console.log(pkg.description) // "Package from pantry: viaduct.ai/ksops"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/viaduct-ai/ksops.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const viaductaiksopsPackage = {
  /**
   * The display name of this package.
   */
  name: 'ksops' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'viaduct.ai/ksops' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: viaduct.ai/ksops' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install viaduct.ai/ksops' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +viaduct.ai/ksops -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install viaduct.ai/ksops' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/viaduct.ai/ksops/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type ViaductaiksopsPackage = typeof viaductaiksopsPackage
