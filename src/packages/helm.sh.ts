/**
 * **helm** - The Kubernetes Package Manager
 *
 * @domain `helm.sh`
 * @programs `helm`
 * @version `3.18.2` (33 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/helm-sh.md
 *
 * @install `sh <(curl https://pkgx.sh) helm`
 * @name `helm`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.helm
 * // Or access via domain
 * const samePkg = pantry.helmsh
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "helm"
 * console.log(pkg.description) // "The Kubernetes Package Manager"
 * console.log(pkg.programs)    // ["helm"]
 * console.log(pkg.versions[0]) // "3.18.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/helm-sh.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const helmPackage = {
  /**
   * The display name of this package.
   */
  name: 'helm' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'helm.sh' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'The Kubernetes Package Manager' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/helm.sh/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) helm' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'helm',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '3.18.2',
    '3.18.1',
    '3.18.0',
    '3.17.3',
    '3.17.2',
    '3.17.1',
    '3.17.0',
    '3.16.4',
    '3.16.3',
    '3.16.2',
    '3.16.1',
    '3.16.0',
    '3.15.4',
    '3.15.3',
    '3.15.2',
    '3.15.1',
    '3.15.0',
    '3.14.4',
    '3.14.3',
    '3.14.2',
    '3.14.1',
    '3.14.0',
    '3.13.3',
    '3.13.2',
    '3.13.1',
    '3.13.0',
    '3.12.3',
    '3.12.2',
    '3.12.1',
    '3.12.0',
    '3.11.3',
    '3.11.2',
    '3.11.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'helm.sh' as const,
}

export type HelmPackage = typeof helmPackage
