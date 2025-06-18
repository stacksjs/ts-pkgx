/**
 * **periphery** - Package from pantry: github.com/peripheryapp/periphery
 *
 * @domain `github.com/peripheryapp/periphery`
 *
 * @install `launchpad install github.com/peripheryapp/periphery`
 * @dependencies `curl.se`, `gnome.org/libxml2`, `gnu.org/sed`, ... (+1 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomperipheryappperiphery
 * console.log(pkg.name)        // "periphery"
 * console.log(pkg.description) // "Package from pantry: github.com/peripheryapp/pe..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/peripheryapp/periphery.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomperipheryappperipheryPackage = {
  /**
   * The display name of this package.
   */
  name: 'periphery' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/peripheryapp/periphery' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/peripheryapp/periphery' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install github.com/peripheryapp/periphery' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'curl.se',
    'gnome.org/libxml2',
    'gnu.org/sed',
    'crates.io/semverator',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/peripheryapp/periphery/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomperipheryappperipheryPackage = typeof githubcomperipheryappperipheryPackage
