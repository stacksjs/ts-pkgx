/**
 * **anholt/libepoxy** - Epoxy is a library for handling OpenGL function pointer management for you
 *
 * @domain `github.com/anholt/libepoxy`
 * @version `1.5.10` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) +github.com/anholt/libepoxy -- $SHELL -i`
 * @aliases `anholt/libepoxy`
 * @dependencies `linuxx.org/x11mesa3d.org`, `x.org/x11`, `mesa3d.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.anholtlibepoxy
 * // Or access via domain
 * const samePkg = pantry.githubcomanholtlibepoxy
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "github.com/anholt/libepoxy"
 * console.log(pkg.description) // "Epoxy is a library for handling OpenGL function..."
 * console.log(pkg.versions[0]) // "1.5.10" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/anholt/libepoxy.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const anholtlibepoxyPackage = {
  /**
   * The display name of this package.
   */
  name: 'github.com/anholt/libepoxy' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/anholt/libepoxy' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Epoxy is a library for handling OpenGL function pointer management for you' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/anholt/libepoxy/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +github.com/anholt/libepoxy -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'linuxx.org/x11mesa3d.org',
    'x.org/x11',
    'mesa3d.org',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.5.10',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'anholt/libepoxy',
  ] as const,
  fullPath: 'github.com/anholt/libepoxy' as const,
}

export type AnholtlibepoxyPackage = typeof anholtlibepoxyPackage
