/**
 * **nss** - Libraries for security-enabled client and server applications
 *
 * @domain `mozilla.org/nss`
 * @programs `addbuiltin`, `certutil`, `crmftest`, `ecperf`, `listsuites`, ... (+56 more)
 * @version `3.92.0` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +mozilla.org/nss -- $SHELL -i`
 * @dependencies `mozilla.org/nspr`, `sqlite.org`, `zlib.net`, ... (+4 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.mozillaorgnss
 * console.log(pkg.name)        // "nss"
 * console.log(pkg.description) // "Libraries for security-enabled client and serve..."
 * console.log(pkg.programs)    // ["addbuiltin", "certutil", ...]
 * console.log(pkg.versions[0]) // "3.92.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/mozilla-org/nss.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const mozillaorgnssPackage = {
  /**
   * The display name of this package.
   */
  name: 'nss' as const,
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
  installCommand: 'launchpad install +mozilla.org/nss -- $SHELL -i' as const,
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
    'gnu.org/gcc',
    'gnu.org/make',
    'llvm.org',
    'freedesktop.org/pkg-config',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '3.92.0',
  ] as const,
  aliases: [] as const,
}

export type MozillaorgnssPackage = typeof mozillaorgnssPackage
