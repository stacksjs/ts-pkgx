/**
 * **linkerd** - Ultralight, security-first service mesh for Kubernetes. Main repo for Linkerd 2.x.
 *
 * @domain `linkerd.io/linkerd2`
 * @programs `linkerd`
 * @version `2.14.10` (9 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install linkerd`
 * @aliases `linkerd`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.linkerd
 * // Or access via domain
 * const samePkg = pantry.linkerdiolinkerd2
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "linkerd2"
 * console.log(pkg.description) // "Ultralight, security-first service mesh for Kub..."
 * console.log(pkg.programs)    // ["linkerd"]
 * console.log(pkg.versions[0]) // "2.14.10" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/linkerd-io/linkerd2.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const linkerdPackage = {
  /**
   * The display name of this package.
   */
  name: 'linkerd2' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'linkerd.io/linkerd2' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Ultralight, security-first service mesh for Kubernetes. Main repo for Linkerd 2.x.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/linkerd.io/linkerd2/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/linkerd/linkerd2' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install linkerd' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'linkerd',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.14.10',
    '2.14.9',
    '2.14.8',
    '2.14.7',
    '2.14.6',
    '2.14.5',
    '2.14.4',
    '2.14.3',
    '2.14.2',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'linkerd',
  ] as const,
}

export type LinkerdPackage = typeof linkerdPackage
