/**
 * **openresty.org** - High Performance Web Platform Based on Nginx and LuaJIT
 *
 * @domain `openresty.org`
 * @programs `nginx-xml2pod`, `opm`, `resty`, `restydoc`, `restydoc-index`
 * @version `1.25.3.2` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) +openresty.org -- $SHELL -i`
 * @dependencies `pcre.org@8`, `openssl.org^1.1`, `zlib.net^1.2`, ... (+1 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.openrestyorg
 * console.log(pkg.name)        // "openresty.org"
 * console.log(pkg.description) // "High Performance Web Platform Based on Nginx an..."
 * console.log(pkg.programs)    // ["nginx-xml2pod", "opm", ...]
 * console.log(pkg.versions[0]) // "1.25.3.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/openresty-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const openrestyorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'openresty.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'openresty.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'High Performance Web Platform Based on Nginx and LuaJIT' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/openresty.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +openresty.org -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'nginx-xml2pod',
    'opm',
    'resty',
    'restydoc',
    'restydoc-index',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'pcre.org@8',
    'openssl.org^1.1',
    'zlib.net^1.2',
    'perl.org',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.25.3.2',
  ] as const,
  aliases: [] as const,
  fullPath: 'openresty.org' as const,
}

export type OpenrestyorgPackage = typeof openrestyorgPackage
