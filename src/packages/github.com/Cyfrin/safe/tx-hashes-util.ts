/**
 * **github.com/Cyfrin/safe-tx-hashes-util** - pkgx package
 *
 * @domain `github.com/Cyfrin/safe/tx-hashes-util`
 *
 * @install `pkgx github.com/Cyfrin/safe-tx-hashes-util`
 * @aliases `github.com/Cyfrin/safe-tx-hashes-util`, `Cyfrin/safe-tx-hashes-util`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.githubcomCyfrinsafetxhashesutil
 * // Or access via domain
 * const samePkg = pantry.githubcomcyfrinsafetxhashesutil
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "Cyfrin"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/Cyfrin/safe/tx-hashes-util.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomCyfrinsafetxhashesutilPackage = {
  /**
   * The display name of this package.
   */
  name: 'Cyfrin' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/Cyfrin/safe/tx-hashes-util' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/Cyfrin/safe-tx-hashes-util' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'github.com/Cyfrin/safe-tx-hashes-util',
    'Cyfrin/safe-tx-hashes-util',
  ] as const,
  fullPath: 'github.com/Cyfrin/safe-tx-hashes-util' as const,
}

export type GithubcomCyfrinsafetxhashesutilPackage = typeof githubcomCyfrinsafetxhashesutilPackage
