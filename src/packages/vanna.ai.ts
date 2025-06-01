/**
 * **+vanna.ai -- $SHELL -i** - 🤖 Chat with your SQL database 📊. Accurate Text-to-SQL Generation via LLMs using RAG 🔄.
 *
 * @domain `vanna.ai`
 * @version `0.7.9` (42 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/vanna-ai.md
 *
 * @install `sh <(curl https://pkgx.sh) +vanna.ai -- $SHELL -i`
 * @aliases `+vanna.ai -- $SHELL -i`, `Vanna`
 * @dependencies `python.org~3.12`, `linuxopenmp.llvm.org@17`, `openmp.llvm.org@17`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.vannaaiSHELLi
 * // Or access via domain
 * const samePkg = pantry.vannaai
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "Vanna"
 * console.log(pkg.description) // "🤖 Chat with your SQL database 📊. Accurate Tex..."
 * console.log(pkg.versions[0]) // "0.7.9" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/vanna-ai.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const vannaaiSHELLiPackage = {
  /**
   * The display name of this package.
   */
  name: 'Vanna' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'vanna.ai' as const,
  /**
   * Brief description of what this package does.
   */
  description: '🤖 Chat with your SQL database 📊. Accurate Text-to-SQL Generation via LLMs using RAG 🔄.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/vanna.ai/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +vanna.ai -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org~3.12',
    'linuxopenmp.llvm.org@17',
    'openmp.llvm.org@17',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.7.9',
    '0.7.8',
    '0.7.7',
    '0.7.6',
    '0.7.5',
    '0.7.4',
    '0.7.3',
    '0.7.2',
    '0.7.1',
    '0.7.0',
    '0.6.6',
    '0.6.5',
    '0.6.4',
    '0.6.3',
    '0.6.2',
    '0.6.1',
    '0.6.0',
    '0.5.5',
    '0.5.4',
    '0.5.3',
    '0.5.2',
    '0.5.1',
    '0.5.0',
    '0.4.3',
    '0.4.2',
    '0.4.1',
    '0.4.0',
    '0.3.4',
    '0.3.3',
    '0.3.2',
    '0.3.1',
    '0.3.0',
    '0.2.1',
    '0.2.0',
    '0.1.1',
    '0.0.38',
    '0.0.37',
    '0.0.36',
    '0.0.35',
    '0.0.34',
    '0.0.33',
    '0.0.32',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    '+vanna.ai -- $SHELL -i',
    'Vanna',
  ] as const,
  fullPath: 'vanna.ai' as const,
}

export type VannaaiSHELLiPackage = typeof vannaaiSHELLiPackage
