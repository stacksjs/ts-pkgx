/**
 * **sam** - Package from pantry: aws.amazon.com/sam
 *
 * @domain `aws.amazon.com/sam`
 *
 * @install `launchpad install aws.amazon.com/sam`
 * @dependencies `pkgx.sh^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.awsamazoncomsam
 * console.log(pkg.name)        // "sam"
 * console.log(pkg.description) // "Package from pantry: aws.amazon.com/sam"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/aws-amazon-com/sam.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const awsamazoncomsamPackage = {
  /**
   * The display name of this package.
   */
  name: 'sam' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'aws.amazon.com/sam' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: aws.amazon.com/sam' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install aws.amazon.com/sam' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +aws.amazon.com/sam -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install aws.amazon.com/sam' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'pkgx.sh^1',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/aws.amazon.com/sam/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type AwsamazoncomsamPackage = typeof awsamazoncomsamPackage
