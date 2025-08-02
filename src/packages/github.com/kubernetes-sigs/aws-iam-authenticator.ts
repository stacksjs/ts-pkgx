/**
 * **aws-iam-authenticator** - Package from pantry: github.com/kubernetes-sigs/aws-iam-authenticator
 *
 * @domain `github.com/kubernetes-sigs/aws-iam-authenticator`
 *
 * @install `launchpad install github.com/kubernetes-sigs/aws-iam-authenticator`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomkubernetessigsawsiamauthenticator
 * console.log(pkg.name)        // "aws-iam-authenticator"
 * console.log(pkg.description) // "Package from pantry: github.com/kubernetes-sigs..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/kubernetes-sigs/aws-iam-authenticator.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomkubernetessigsawsiamauthenticatorPackage = {
  /**
   * The display name of this package.
   */
  name: 'aws-iam-authenticator' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/kubernetes-sigs/aws-iam-authenticator' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/kubernetes-sigs/aws-iam-authenticator' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/kubernetes-sigs/aws-iam-authenticator' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/kubernetes-sigs/aws-iam-authenticator -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/kubernetes-sigs/aws-iam-authenticator' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/kubernetes-sigs/aws-iam-authenticator/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomkubernetessigsawsiamauthenticatorPackage = typeof githubcomkubernetessigsawsiamauthenticatorPackage
