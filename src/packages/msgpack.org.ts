/**
 * **+msgpack.org -- $SHELL -i** - MessagePack implementation for C and C++ / msgpack.org[C/C++]
 *
 * @domain `msgpack.org`
 * @version `6.0.2` (3 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/msgpack-org.md
 *
 * @install `sh <(curl https://pkgx.sh) +msgpack.org -- $SHELL -i`
 * @aliases `+msgpack.org -- $SHELL -i`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.msgpackorgSHELLi
 * // Or access via domain
 * const samePkg = pantry.msgpackorg
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "msgpack.org"
 * console.log(pkg.description) // "MessagePack implementation for C and C++ / msgp..."
 * console.log(pkg.versions[0]) // "6.0.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/msgpack-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const msgpackorgSHELLiPackage = {
  /**
   * The display name of this package.
   */
  name: 'msgpack.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'msgpack.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'MessagePack implementation for C and C++ / msgpack.org[C/C++]' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/msgpack.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +msgpack.org -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '6.0.2',
    '6.0.1',
    '6.0.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    '+msgpack.org -- $SHELL -i',
  ] as const,
  fullPath: 'msgpack.org' as const,
}

export type MsgpackorgSHELLiPackage = typeof msgpackorgSHELLiPackage
