/**
 * **libcbor** - CBOR protocol implementation for C
 *
 * @domain `github.com/PJK/libcbor`
 * @version `0.12.0` (3 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +github.com/PJK/libcbor -- $SHELL -i`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcompjklibcbor
 * console.log(pkg.name)        // "libcbor"
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
  name: 'libcbor' as const,
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
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install +github.com/PJK/libcbor -- $SHELL -i' as const,
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
  aliases: [] as const,
}

export type GithubcompjklibcborPackage = typeof githubcompjklibcborPackage
