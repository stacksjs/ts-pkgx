/**
 * **kube-linter** - KubeLinter is a static analysis tool that checks Kubernetes YAML files and Helm charts to ensure the applications represented in them adhere to best practices.
 *
 * @domain `kubelinter.io`
 * @programs `kube-linter`
 * @version `0.7.4` (6 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install kube-linter`
 * @name `kube-linter`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.kubelinter
 * // Or access via domain
 * const samePkg = pantry.kubelinterio
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "kube-linter"
 * console.log(pkg.description) // "KubeLinter is a static analysis tool that check..."
 * console.log(pkg.programs)    // ["kube-linter"]
 * console.log(pkg.versions[0]) // "0.7.4" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/kubelinter-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const kubelinterPackage = {
  /**
   * The display name of this package.
   */
  name: 'kube-linter' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'kubelinter.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'KubeLinter is a static analysis tool that checks Kubernetes YAML files and Helm charts to ensure the applications represented in them adhere to best practices.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/kubelinter.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install kube-linter' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'kube-linter',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.7.4',
    '0.7.3',
    '0.7.2',
    '0.7.1',
    '0.7.0',
    '0.6.8',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) kube-linter -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install kube-linter' as const,
}

export type KubelinterPackage = typeof kubelinterPackage
