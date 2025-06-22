/**
 * **eks-node-viewer** - Package from pantry: github.com/awslabs/eks-node-viewer
 *
 * @domain `github.com/awslabs/eks-node-viewer`
 *
 * @install `launchpad install github.com/awslabs/eks-node-viewer`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomawslabseksnodeviewer
 * console.log(pkg.name)        // "eks-node-viewer"
 * console.log(pkg.description) // "Package from pantry: github.com/awslabs/eks-nod..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/awslabs/eks-node-viewer.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomawslabseksnodeviewerPackage = {
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
  description: 'Package from pantry: github.com/awslabs/eks-node-viewer' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/awslabs/eks-node-viewer' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/awslabs/eks-node-viewer -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/awslabs/eks-node-viewer' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/awslabs/eks-node-viewer/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomawslabseksnodeviewerPackage = typeof githubcomawslabseksnodeviewerPackage
