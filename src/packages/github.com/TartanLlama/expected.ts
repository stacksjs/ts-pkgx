/**
 * **expected** - Package from pantry: github.com/TartanLlama/expected
 *
 * @domain `github.com/TartanLlama/expected`
 *
 * @install `launchpad install github.com/TartanLlama/expected`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomtartanllamaexpected
 * console.log(pkg.name)        // "expected"
 * console.log(pkg.description) // "Package from pantry: github.com/TartanLlama/exp..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/TartanLlama/expected.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomtartanllamaexpectedPackage = {
  /**
   * The display name of this package.
   */
  name: 'expected' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/TartanLlama/expected' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/TartanLlama/expected' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/TartanLlama/expected' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/TartanLlama/expected -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/TartanLlama/expected' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/TartanLlama/expected/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomtartanllamaexpectedPackage = typeof githubcomtartanllamaexpectedPackage
