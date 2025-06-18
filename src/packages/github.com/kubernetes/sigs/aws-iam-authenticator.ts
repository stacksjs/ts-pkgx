/**
 * **github.com/kubernetes-sigs/aws-iam-authenticator** - pkgx package
 *
 * @domain `github.com/kubernetes/sigs/aws-iam-authenticator`
 *
 * @install `pkgx github.com/kubernetes-sigs/aws-iam-authenticator`
 * @aliases `github.com/kubernetes-sigs/aws-iam-authenticator`, `kubernetes-sigs/aws-iam-authenticator`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.githubcomkubernetessigsawsiamauthenticator
 * // Or access via domain
 * const samePkg = pantry.githubcomkubernetessigsawsiamauthenticator
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "kubernetes-sigs"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/kubernetes/sigs/aws-iam-authenticator.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomkubernetessigsawsiamauthenticatorPackage = {
  /**
   * The display name of this package.
   */
  name: 'kubernetes-sigs' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/kubernetes/sigs/aws-iam-authenticator' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/kubernetes-sigs/aws-iam-authenticator' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'github.com/kubernetes-sigs/aws-iam-authenticator',
    'kubernetes-sigs/aws-iam-authenticator',
  ] as const,
  fullPath: 'github.com/kubernetes-sigs/aws-iam-authenticator' as const,
}

export type GithubcomkubernetessigsawsiamauthenticatorPackage = typeof githubcomkubernetessigsawsiamauthenticatorPackage
