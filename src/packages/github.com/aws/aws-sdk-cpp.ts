/**
 * **aws-sdk-cpp** - Package from pantry: github.com/aws/aws-sdk-cpp
 *
 * @domain `github.com/aws/aws-sdk-cpp`
 *
 * @install `launchpad install github.com/aws/aws-sdk-cpp`
 * @dependencies `curl.se`, `zlib.net@1`, `openssl.org@1.1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomawsawssdkcpp
 * console.log(pkg.name)        // "aws-sdk-cpp"
 * console.log(pkg.description) // "Package from pantry: github.com/aws/aws-sdk-cpp"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/aws/aws-sdk-cpp.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomawsawssdkcppPackage = {
  /**
   * The display name of this package.
   */
  name: 'aws-sdk-cpp' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/aws/aws-sdk-cpp' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/aws/aws-sdk-cpp' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/aws/aws-sdk-cpp' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/aws/aws-sdk-cpp -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/aws/aws-sdk-cpp' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'curl.se',
    'zlib.net@1',
    'openssl.org@1.1',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/aws/aws-sdk-cpp/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomawsawssdkcppPackage = typeof githubcomawsawssdkcppPackage
