/**
 * **eks-node-viewer** - EKS Node Viewer
 *
 * @domain `github.com/awslabs/eks-node-viewer`
 * @programs `eks-node-viewer`
 * @version `0.7.4` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install eks-node-viewer`
 * @name `eks-node-viewer`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.eksnodeviewer
 * // Or access via domain
 * const samePkg = pantry.githubcomawslabseksnodeviewer
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "eks-node-viewer"
 * console.log(pkg.description) // "EKS Node Viewer"
 * console.log(pkg.programs)    // ["eks-node-viewer"]
 * console.log(pkg.versions[0]) // "0.7.4" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/awslabs/eks-node-viewer.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const eksnodeviewerPackage = {
  /**
   * The display name of this package.
   */
  name: 'eks-node-viewer' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/awslabs/eks-node-viewer' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'EKS Node Viewer' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/awslabs/eks-node-viewer/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install eks-node-viewer' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'eks-node-viewer',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.7.4',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) eks-node-viewer -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install eks-node-viewer' as const,
}

export type EksnodeviewerPackage = typeof eksnodeviewerPackage
