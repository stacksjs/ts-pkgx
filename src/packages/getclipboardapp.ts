/**
 * **cb** - 😎🏖️🐬 Your new, 𝙧𝙞𝙙𝙤𝙣𝙠𝙪𝙡𝙞𝙘𝙞𝙤𝙪𝙨𝙡𝙮 smart clipboard manager
 *
 * @domain `getclipboard.app`
 * @programs `cb`
 * @version `0.9.1` (3 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install cb`
 * @name `cb`
 * @dependencies `openssl.org^1.1`, `linux:alsa-project.org/alsa-lib@1`, `linux:x.org/x11@1`, ... (+2 more) (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.cb
 * // Or access via domain
 * const samePkg = pantry.getclipboardapp
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "cb"
 * console.log(pkg.description) // "😎🏖️🐬 Your new, 𝙧𝙞𝙙𝙤𝙣𝙠𝙪𝙡𝙞𝙘𝙞𝙤𝙪𝙨�..."
 * console.log(pkg.programs)    // ["cb"]
 * console.log(pkg.versions[0]) // "0.9.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/getclipboard-app.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cbPackage = {
  /**
   * The display name of this package.
   */
  name: 'cb' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'getclipboard.app' as const,
  /**
   * Brief description of what this package does.
   */
  description: '😎🏖️🐬 Your new, 𝙧𝙞𝙙𝙤𝙣𝙠𝙪𝙡𝙞𝙘𝙞𝙤𝙪𝙨𝙡𝙮 smart clipboard manager' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/getclipboard.app/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install cb' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'cb',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'openssl.org^1.1',
    'linux:alsa-project.org/alsa-lib@1',
    'linux:x.org/x11@1',
    'linux:wayland.freedesktop.org@1',
    'linux:gnu.org/gcc/libstdcxx@14',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.9.1',
    '0.9.0.1',
    '0.10.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) cb -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install cb' as const,
}

export type CbPackage = typeof cbPackage
