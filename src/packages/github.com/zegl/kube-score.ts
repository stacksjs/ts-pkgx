/**
 * **kube-score** - Kubernetes object analysis with recommendations for improved reliability and security. kube-score actively prevents downtime and bugs in your Kubernetes YAML and Charts. Static code analysis for Kubernetes.
 *
 * @domain `github.com/zegl/kube-score`
 * @programs `kube-score`
 * @version `1.20.0` (6 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install kube-score`
 * @name `kube-score`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.kubescore
 * // Or access via domain
 * const samePkg = pantry.githubcomzeglkubescore
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "kube-score"
 * console.log(pkg.description) // "Kubernetes object analysis with recommendations..."
 * console.log(pkg.programs)    // ["kube-score"]
 * console.log(pkg.versions[0]) // "1.20.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/zegl/kube-score.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const kubescorePackage = {
  /**
   * The display name of this package.
   */
  name: 'kube-score' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/zegl/kube-score' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Kubernetes object analysis with recommendations for improved reliability and security. kube-score actively prevents downtime and bugs in your Kubernetes YAML and Charts. Static code analysis for Kubernetes.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/zegl/kube-score/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install kube-score' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'kube-score',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.20.0',
    '1.19.0',
    '1.18.0',
    '1.17.0',
    '1.15.0',
    '1.14.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type KubescorePackage = typeof kubescorePackage
