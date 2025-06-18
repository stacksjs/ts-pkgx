/**
 * **github.com/awslabs/eks-node-viewer** - pkgx package
 *
 * @domain `github.com/awslabs/eks/node-viewer`
 *
 * @install `pkgx github.com/awslabs/eks-node-viewer`
 * @aliases `github.com/awslabs/eks-node-viewer`, `awslabs/eks-node-viewer`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.githubcomawslabseksnodeviewer
 * // Or access via domain
 * const samePkg = pantry.githubcomawslabseksnodeviewer
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "awslabs"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/awslabs/eks/node-viewer.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomawslabseksnodeviewerPackage = {
  /**
   * The display name of this package.
   */
  name: 'awslabs' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/awslabs/eks/node-viewer' as const,
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
  installCommand: 'pkgx github.com/awslabs/eks-node-viewer' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'github.com/awslabs/eks-node-viewer',
    'awslabs/eks-node-viewer',
  ] as const,
  fullPath: 'github.com/awslabs/eks-node-viewer' as const,
}

export type GithubcomawslabseksnodeviewerPackage = typeof githubcomawslabseksnodeviewerPackage
