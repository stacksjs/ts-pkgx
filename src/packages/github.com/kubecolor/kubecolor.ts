/**
 * **kubecolor** - Colorize your kubectl output
 *
 * @domain `github.com/kubecolor/kubecolor`
 * @programs `kubecolor`
 * @version `0.5.2` (9 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install kubecolor`
 * @name `kubecolor`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.kubecolor
 * // Or access via domain
 * const samePkg = pantry.githubcomkubecolorkubecolor
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "kubecolor"
 * console.log(pkg.description) // "Colorize your kubectl output"
 * console.log(pkg.programs)    // ["kubecolor"]
 * console.log(pkg.versions[0]) // "0.5.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/kubecolor/kubecolor.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const kubecolorPackage = {
  /**
   * The display name of this package.
   */
  name: 'kubecolor' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/kubecolor/kubecolor' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Colorize your kubectl output' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/kubecolor/kubecolor/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install kubecolor' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'kubecolor',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.5.2',
    '0.5.1',
    '0.5.0',
    '0.4.0',
    '0.3.3',
    '0.3.2',
    '0.3.1',
    '0.3.0',
    '0.2.2',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) kubecolor -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install kubecolor' as const,
}

export type KubecolorPackage = typeof kubecolorPackage
