/**
 * **kubectl-krew** - 📦 Find and install kubectl plugins
 *
 * @domain `krew.sigs.k8s.io`
 * @programs `kubectl-krew`
 * @version `0.4.5` (2 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/krew-sigs-k8s-io.md
 *
 * @install `sh <(curl https://pkgx.sh) kubectl-krew`
 * @aliases `kubectl-krew`
 * @dependencies `git-scm.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.kubectlkrew
 * // Or access via domain
 * const samePkg = pantry.krewsigsk8sio
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "kubectl-krew"
 * console.log(pkg.description) // "📦 Find and install kubectl plugins"
 * console.log(pkg.programs)    // ["kubectl-krew"]
 * console.log(pkg.versions[0]) // "0.4.5" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/krew-sigs-k8s-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const kubectlkrewPackage = {
  /**
   * The display name of this package.
   */
  name: 'kubectl-krew' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'krew.sigs.k8s.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: '📦 Find and install kubectl plugins' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/krew.sigs.k8s.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) kubectl-krew' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'kubectl-krew',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'git-scm.org',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.4.5',
    '0.4.4',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'kubectl-krew',
  ] as const,
  fullPath: 'krew.sigs.k8s.io' as const,
}

export type KubectlkrewPackage = typeof kubectlkrewPackage
