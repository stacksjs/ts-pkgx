/**
 * **re2** - Package from pantry: github.com/google/re2
 *
 * @domain `github.com/google/re2`
 *
 * @install `launchpad install github.com/google/re2`
 * @dependencies `abseil.io^20250127`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomgooglere2
 * console.log(pkg.name)        // "re2"
 * console.log(pkg.description) // "Package from pantry: github.com/google/re2"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/google/re2.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomgooglere2Package = {
  /**
   * The display name of this package.
   */
  name: 're2' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/google/re2' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/google/re2' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/google/re2' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/google/re2 -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/google/re2' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'abseil.io^20250127',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/google/re2/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type Githubcomgooglere2Package = typeof githubcomgooglere2Package
