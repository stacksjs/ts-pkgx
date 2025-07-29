/**
 * **tre** - Package from pantry: github.com/dduan/tre
 *
 * @domain `github.com/dduan/tre`
 *
 * @install `launchpad install github.com/dduan/tre`
 * @dependencies `zlib.net^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomdduantre
 * console.log(pkg.name)        // "tre"
 * console.log(pkg.description) // "Package from pantry: github.com/dduan/tre"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/dduan/tre.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomdduantrePackage = {
  /**
   * The display name of this package.
   */
  name: 'tre' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/dduan/tre' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/dduan/tre' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/dduan/tre' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/dduan/tre -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/dduan/tre' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'zlib.net^1',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/dduan/tre/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomdduantrePackage = typeof githubcomdduantrePackage
