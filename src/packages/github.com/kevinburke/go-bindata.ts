/**
 * **go-bindata** - Package from pantry: github.com/kevinburke/go-bindata
 *
 * @domain `github.com/kevinburke/go-bindata`
 *
 * @install `launchpad install github.com/kevinburke/go-bindata`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomkevinburkegobindata
 * console.log(pkg.name)        // "go-bindata"
 * console.log(pkg.description) // "Package from pantry: github.com/kevinburke/go-b..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/kevinburke/go-bindata.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomkevinburkegobindataPackage = {
  /**
   * The display name of this package.
   */
  name: 'go-bindata' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/kevinburke/go-bindata' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/kevinburke/go-bindata' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/kevinburke/go-bindata' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/kevinburke/go-bindata -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/kevinburke/go-bindata' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/kevinburke/go-bindata/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomkevinburkegobindataPackage = typeof githubcomkevinburkegobindataPackage
