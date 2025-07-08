/**
 * **kube** - Tool that can switch between kubectl contexts easily and create aliases
 *
 * @domain `kubectx.dev`
 * @programs `kubectx`, `kubens`
 * @version `0.9.5` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install kube`
 * @name `kube`
 * @dependencies `github.com/junegunn/fzf`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.kube
 * // Or access via domain
 * const samePkg = pantry.kubectxdev
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "kube"
 * console.log(pkg.description) // "Tool that can switch between kubectl contexts e..."
 * console.log(pkg.programs)    // ["kubectx", "kubens"]
 * console.log(pkg.versions[0]) // "0.9.5" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/kubectx-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const kubePackage = {
  /**
   * The display name of this package.
   */
  name: 'kube' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'kubectx.dev' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Tool that can switch between kubectl contexts easily and create aliases' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/kubectx.dev/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/ahmetb/kubectx' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install kube' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'kubectx',
    'kubens',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'github.com/junegunn/fzf',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.9.5',
    '0.9.4',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +kubectx.dev -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install kube' as const,
}

export type KubePackage = typeof kubePackage
