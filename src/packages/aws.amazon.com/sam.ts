/**
 * **sam** - CLI tool to build, test, debug, and deploy Serverless applications using AWS SAM
 *
 * @domain `aws.amazon.com/sam`
 * @programs `sam`
 * @version `1.142.0` (32 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install sam`
 * @name `sam`
 * @dependencies `pkgx.sh^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.sam
 * // Or access via domain
 * const samePkg = pantry.awsamazoncomsam
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "sam"
 * console.log(pkg.description) // "CLI tool to build, test, debug, and deploy Serv..."
 * console.log(pkg.programs)    // ["sam"]
 * console.log(pkg.versions[0]) // "1.142.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/aws-amazon-com/sam.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const samPackage = {
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
  description: 'CLI tool to build, test, debug, and deploy Serverless applications using AWS SAM' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/aws.amazon.com/sam/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install sam' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'sam',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'pkgx.sh^1',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.142.0',
    '1.141.0',
    '1.140.0',
    '1.139.0',
    '1.138.0',
    '1.137.1',
    '1.137.0',
    '1.136.0',
    '1.135.0',
    '1.134.0',
    '1.133.0',
    '1.132.0',
    '1.131.0',
    '1.130.0',
    '1.129.0',
    '1.128.0',
    '1.127.0',
    '1.126.0',
    '1.125.0',
    '1.124.0',
    '1.123.0',
    '1.122.0',
    '1.121.0',
    '1.120.0',
    '1.119.0',
    '1.118.0',
    '1.117.0',
    '1.116.0',
    '1.115.0',
    '1.114.0',
    '1.113.0',
    '1.112.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) sam -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install sam' as const,
}

export type SamPackage = typeof samPackage
