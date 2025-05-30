/**
 * **kube** - Tool that can switch between kubectl contexts easily and create aliases
 *
 * @domain `kubectx.dev`
 * @programs `kubectx`, `kubens`
 * @version `0.9.5` (2 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/kubectx-dev.md
 *
 * @install `sh <(curl https://pkgx.sh) +kubectx.dev -- $SHELL -i`
 * @dependencies `github.com/junegunn/fzf`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.kubectxdev
 * console.log(pkg.name)        // "kube"
 * console.log(pkg.description) // "Tool that can switch between kubectl contexts e..."
 * console.log(pkg.programs)    // ["kubectx", "kubens"]
 * console.log(pkg.versions[0]) // "0.9.5" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/kubectx-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const kubectxdevPackage = {
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
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +kubectx.dev -- $SHELL -i' as const,
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
  fullPath: 'kubectx.dev' as const,
  aliases: [] as const,
}

export type KubectxdevPackage = typeof kubectxdevPackage
