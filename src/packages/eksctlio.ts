/**
 * **eksctl.io** - Package from pantry: eksctl.io
 *
 * @domain `eksctl.io`
 *
 * @install `launchpad install eksctl.io`
 * @dependencies `github.com/kubernetes-sigs/aws-iam-authenticator`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.eksctlio
 * console.log(pkg.name)        // "eksctl.io"
 * console.log(pkg.description) // "Package from pantry: eksctl.io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/eksctl-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const eksctlioPackage = {
  /**
   * The display name of this package.
   */
  name: 'eksctl.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'eksctl.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: eksctl.io' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install eksctl.io' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +eksctl.io -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install eksctl.io' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'github.com/kubernetes-sigs/aws-iam-authenticator',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/eksctl.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type EksctlioPackage = typeof eksctlioPackage
