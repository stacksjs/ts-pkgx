/**
 * **libvterm** - C99 library which implements a VT220 or xterm terminal emulator
 *
 * @domain `leonerd.org.uk/libvterm`
 * @programs `unterm`, `vterm-ctrl`, `vterm-dump`
 * @version `0.3.3` (3 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/leonerd-org-uk/libvterm.md
 *
 * @install `sh <(curl https://pkgx.sh) +leonerd.org.uk/libvterm -- $SHELL -i`
 * @aliases `libvterm`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.libvterm
 * // Or access via domain
 * const samePkg = pantry.leonerdorguklibvterm
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "leonerd.org.uk/libvterm"
 * console.log(pkg.description) // "C99 library which implements a VT220 or xterm t..."
 * console.log(pkg.programs)    // ["unterm", "vterm-ctrl", ...]
 * console.log(pkg.versions[0]) // "0.3.3" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/leonerd-org-uk/libvterm.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const libvtermPackage = {
  /**
   * The display name of this package.
   */
  name: 'leonerd.org.uk/libvterm' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'leonerd.org.uk/libvterm' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'C99 library which implements a VT220 or xterm terminal emulator' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/leonerd.org.uk/libvterm/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +leonerd.org.uk/libvterm -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'unterm',
    'vterm-ctrl',
    'vterm-dump',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.3.3',
    '0.3.2',
    '0.3.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'libvterm',
  ] as const,
  fullPath: 'leonerd.org.uk/libvterm' as const,
}

export type LibvtermPackage = typeof libvtermPackage
