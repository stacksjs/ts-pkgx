/**
 * **ksops** - KSOPS - A Flexible Kustomize Plugin for SOPS Encrypted Resources
 *
 * @domain `viaduct.ai/ksops`
 * @programs `ksops`
 * @version `4.3.3` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install ksops`
 * @name `ksops`
 * @dependencies `go.dev~1.22`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.ksops
 * // Or access via domain
 * const samePkg = pantry.viaductaiksops
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "ksops"
 * console.log(pkg.description) // "KSOPS - A Flexible Kustomize Plugin for SOPS En..."
 * console.log(pkg.programs)    // ["ksops"]
 * console.log(pkg.versions[0]) // "4.3.3" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/viaduct-ai/ksops.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const ksopsPackage = {
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
  description: 'KSOPS - A Flexible Kustomize Plugin for SOPS Encrypted Resources' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/viaduct.ai/ksops/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install ksops' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'ksops',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'go.dev~1.22',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '4.3.3',
    '4.3.2',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type KsopsPackage = typeof ksopsPackage
