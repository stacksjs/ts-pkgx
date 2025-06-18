/**
 * **yasm.tortall.net** - Package from pantry: yasm.tortall.net
 *
 * @domain `yasm.tortall.net`
 *
 * @install `launchpad install yasm.tortall.net`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.yasmtortallnet
 * console.log(pkg.name)        // "yasm.tortall.net"
 * console.log(pkg.description) // "Package from pantry: yasm.tortall.net"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/yasm-tortall-net.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const yasmtortallnetPackage = {
  /**
   * The display name of this package.
   */
  name: 'yasm.tortall.net' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'yasm.tortall.net' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: yasm.tortall.net' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install yasm.tortall.net' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/yasm.tortall.net/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type YasmtortallnetPackage = typeof yasmtortallnetPackage
