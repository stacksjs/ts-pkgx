/**
 * **cstool** - Capstone disassembly/disassembler framework for ARM, ARM64 (ARMv8), Alpha, BPF, Ethereum VM, HPPA, LoongArch, M68K, M680X, Mips, MOS65XX, PPC, RISC-V(rv32G/rv64G), SH, Sparc, SystemZ, TMS320C64X, TriCore, Webassembly, XCore and X86.
 *
 * @domain `capstone-engine.org`
 * @programs `cstool`
 * @version `5.0.6` (7 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/capstone-engine-org.md
 *
 * @install `sh <(curl https://pkgx.sh) cstool`
 * @aliases `cstool`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.cstool
 * // Or access via domain
 * const samePkg = pantry.capstoneengineorg
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "cstool"
 * console.log(pkg.description) // "Capstone disassembly/disassembler framework for..."
 * console.log(pkg.programs)    // ["cstool"]
 * console.log(pkg.versions[0]) // "5.0.6" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/capstone-engine-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cstoolPackage = {
  /**
   * The display name of this package.
   */
  name: 'cstool' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'capstone-engine.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Capstone disassembly/disassembler framework for ARM, ARM64 (ARMv8), Alpha, BPF, Ethereum VM, HPPA, LoongArch, M68K, M680X, Mips, MOS65XX, PPC, RISC-V(rv32G/rv64G), SH, Sparc, SystemZ, TMS320C64X, TriCore, Webassembly, XCore and X86.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/capstone-engine.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) cstool' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'cstool',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '5.0.6',
    '5.0.5',
    '5.0.3',
    '5.0.2',
    '5.0.1',
    '5.0.0',
    '4.0.2',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'cstool',
  ] as const,
  fullPath: 'capstone-engine.org' as const,
}

export type CstoolPackage = typeof cstoolPackage
