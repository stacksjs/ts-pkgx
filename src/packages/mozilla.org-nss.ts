/**
 * **nss** - Libraries for security-enabled client and server applications
 *
 * @domain `mozilla.org/nss`
 * @programs `addbuiltin`, `certutil`, `crmftest`, `ecperf`, `listsuites`, ... (+56 more)
 * @version `3.92.0` (1 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/mozilla-org/nss.md
 *
 * @install `sh <(curl https://pkgx.sh) +mozilla.org/nss -- $SHELL -i`
 * @aliases `nss`
 * @dependencies `mozilla.org/nspr`, `sqlite.org`, `zlib.net`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.nss
 * // Or access via domain
 * const samePkg = pantry.mozillaorgnss
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "mozilla.org/nss"
 * console.log(pkg.description) // "Libraries for security-enabled client and serve..."
 * console.log(pkg.programs)    // ["addbuiltin", "certutil", ...]
 * console.log(pkg.versions[0]) // "3.92.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/mozilla-org/nss.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const nssPackage = {
  /**
   * The display name of this package.
   */
  name: 'mozilla.org/nss' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'mozilla.org/nss' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Libraries for security-enabled client and server applications' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/mozilla.org/nss/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +mozilla.org/nss -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'addbuiltin',
    'certutil',
    'crmftest',
    'ecperf',
    'listsuites',
    'multinit',
    'ocspresp',
    'p7verify',
    'pk12util',
    'remtest',
    'secmodtest',
    'ssltap',
    'vfychain',
    'atob',
    'chktest',
    'dbtest',
    'encodeinttest',
    'nonspr10',
    'oidcalc',
    'pk11ectest',
    'pk1sign',
    'rsaperf',
    'selfserv',
    'strsclnt',
    'vfyserv',
    'baddbdir',
    'cmsutil',
    'derdump',
    'fbectest',
    'makepqg',
    'nss-config',
    'p7content',
    'pk11gcmtest',
    'pkix-errcodes',
    'rsapoptst',
    'shlibsign',
    'symkeyutil',
    'bltest',
    'conflict',
    'dertimetest',
    'fipstest',
    'mangle',
    'nss-policy-check',
    'p7env',
    'pk11importtest',
    'pp',
    'sdbthreadtst',
    'signtool',
    'tstclnt',
    'btoa',
    'crlutil',
    'digest',
    'httpserv',
    'modutil',
    'ocspclnt',
    'p7sign',
    'pk11mode',
    'pwdecrypt',
    'sdrtest',
    'signver',
    'validation',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'mozilla.org/nspr',
    'sqlite.org',
    'zlib.net',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '3.92.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'nss',
  ] as const,
  fullPath: 'mozilla.org/nss' as const,
}

export type NssPackage = typeof nssPackage
