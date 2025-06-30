/**
 * **sparsecat** - Package from pantry: github.com/svenwiltink/sparsecat
 *
 * @domain `github.com/svenwiltink/sparsecat`
 *
 * @install `launchpad install github.com/svenwiltink/sparsecat`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomsvenwiltinksparsecat
 * console.log(pkg.name)        // "sparsecat"
 * console.log(pkg.description) // "Package from pantry: github.com/svenwiltink/spa..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/svenwiltink/sparsecat.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomsvenwiltinksparsecatPackage = {
  /**
   * The display name of this package.
   */
  name: 'sparsecat' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/svenwiltink/sparsecat' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/svenwiltink/sparsecat' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/svenwiltink/sparsecat' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/svenwiltink/sparsecat -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/svenwiltink/sparsecat' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/svenwiltink/sparsecat/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomsvenwiltinksparsecatPackage = typeof githubcomsvenwiltinksparsecatPackage
