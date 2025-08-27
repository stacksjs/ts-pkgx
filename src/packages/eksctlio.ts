/**
 * **eksctl** - Simple command-line tool for creating clusters on Amazon EKS
 *
 * @domain `eksctl.io`
 * @programs `eksctl`
 * @version `0.214.0` (61 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install eksctl`
 * @name `eksctl`
 * @dependencies `github.com/kubernetes-sigs/aws-iam-authenticator`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.eksctl
 * // Or access via domain
 * const samePkg = pantry.eksctlio
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "eksctl"
 * console.log(pkg.description) // "Simple command-line tool for creating clusters ..."
 * console.log(pkg.programs)    // ["eksctl"]
 * console.log(pkg.versions[0]) // "0.214.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/eksctl-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const eksctlPackage = {
  /**
   * The display name of this package.
   */
  name: 'eksctl' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'eksctl.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Simple command-line tool for creating clusters on Amazon EKS' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/eksctl.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install eksctl' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'eksctl',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'github.com/kubernetes-sigs/aws-iam-authenticator',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.214.0',
    '0.213.0',
    '0.212.0',
    '0.211.0',
    '0.210.0',
    '0.209.0',
    '0.208.0',
    '0.207.0',
    '0.206.0',
    '0.205.0',
    '0.204.0',
    '0.203.0',
    '0.202.0',
    '0.201.0',
    '0.200.0',
    '0.199.0',
    '0.198.0',
    '0.197.0',
    '0.196.0',
    '0.195.0',
    '0.194.0',
    '0.193.0',
    '0.192.0',
    '0.191.0',
    '0.190.0',
    '0.189.0',
    '0.188.0',
    '0.187.0',
    '0.186.0',
    '0.185.0',
    '0.184.0',
    '0.183.0',
    '0.182.0',
    '0.181.0',
    '0.180.0',
    '0.179.0',
    '0.178.0',
    '0.177.0',
    '0.176.0',
    '0.175.0',
    '0.174.0',
    '0.173.0',
    '0.172.0',
    '0.171.0',
    '0.170.0',
    '0.169.0',
    '0.168.0',
    '0.167.0',
    '0.166.0',
    '0.165.0',
    '0.164.0',
    '0.163.0',
    '0.162.0',
    '0.161.0',
    '0.160.0',
    '0.159.0',
    '0.158.0',
    '0.157.0',
    '0.156.0',
    '0.155.0',
    '0.154.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) eksctl -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install eksctl' as const,
}

export type EksctlPackage = typeof eksctlPackage
