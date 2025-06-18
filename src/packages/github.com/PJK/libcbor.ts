/**
 * **github.com/pjk/libcbor** - CBOR protocol implementation for C
 *
 * @domain `github.com/PJK/libcbor`
 * @version `0.12.0` (3 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) +github.com/PJK/libcbor -- $SHELL -i`
 * @aliases `github.com/pjk/libcbor`, `PJK/libcbor`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.githubcompjklibcbor
 * // Or access via domain
 * const samePkg = pantry.githubcompjklibcbor
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "github.com/PJK/libcbor"
 * console.log(pkg.description) // "CBOR protocol implementation for C"
 * console.log(pkg.versions[0]) // "0.12.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/PJK/libcbor.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcompjklibcborPackage = {
  /**
   * The display name of this package.
   */
  name: 'github.com/PJK/libcbor' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/PJK/libcbor' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'CBOR protocol implementation for C' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/PJK/libcbor/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +github.com/PJK/libcbor -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.12.0',
    '0.11.0',
    '0.10.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'github.com/pjk/libcbor',
    'PJK/libcbor',
  ] as const,
  fullPath: 'github.com/PJK/libcbor' as const,
}

export type GithubcompjklibcborPackage = typeof githubcompjklibcborPackage
