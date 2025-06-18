/**
 * **safe-tx-hashes-util** - Package from pantry: github.com/Cyfrin/safe-tx-hashes-util
 *
 * @domain `github.com/Cyfrin/safe-tx-hashes-util`
 *
 * @install `launchpad install github.com/Cyfrin/safe-tx-hashes-util`
 * @dependencies `gnu.org/bash>=4`, `gnu.org/gcc/libstdcxx^14 # solc wants GLIBCXX_3.4.26`, `gnu.org/sed`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomcyfrinsafetxhashesutil
 * console.log(pkg.name)        // "safe-tx-hashes-util"
 * console.log(pkg.description) // "Package from pantry: github.com/Cyfrin/safe-tx-..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/Cyfrin/safe-tx-hashes-util.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomcyfrinsafetxhashesutilPackage = {
  /**
   * The display name of this package.
   */
  name: 'safe-tx-hashes-util' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/Cyfrin/safe-tx-hashes-util' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/Cyfrin/safe-tx-hashes-util' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install github.com/Cyfrin/safe-tx-hashes-util' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnu.org/bash>=4',
    'gnu.org/gcc/libstdcxx^14 # solc wants GLIBCXX_3.4.26',
    'gnu.org/sed',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/Cyfrin/safe-tx-hashes-util/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomcyfrinsafetxhashesutilPackage = typeof githubcomcyfrinsafetxhashesutilPackage
